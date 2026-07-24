export interface Nota {
  slug: string;
  title: string;
  /** ISO (YYYY-MM-DD) — usado na ordenação e no <time>. */
  date: string;
  /** Chamada da listagem e description das meta tags. */
  summary: string;
  tags: string[];
  /** Minutos de leitura, arredondado. */
  readingTime: number;
  repoUrl?: string;
  /** Corpo do post em HTML. */
  body: string;
}

const traducaoWebnovel = `
<p class="nota-lead">
  Eu leio webnovel asiática traduzida por máquina há anos e me acostumei com o texto
  meio torto. Até que, na altura do capítulo 700 de uma obra que eu acompanhava, o
  mesmo personagem apareceu com três grafias diferentes em dois capítulos seguidos e
  eu perdi a paciência. A solução não foi escrever um prompt melhor: foi tratar o
  problema como ETL.
</p>

<h2>O defeito não é a tradução, é a falta de memória</h2>

<p>
  Quase toda webnovel chega ao inglês por tradução automática sem revisão. O resultado
  é legível, mas cansa: nome próprio que oscila entre duas ou três grafias, frase que
  termina no meio, pronome que troca de gênero dentro da mesma cena, marca d'água do
  site enfiada no meio do parágrafo.
</p>

<p>
  A saída óbvia é colar o capítulo num chat e pedir para traduzir. Funciona por dez
  minutos e desmonta no capítulo seguinte, porque o modelo não faz ideia de como
  traduziu aquele termo da última vez. Você conserta <em>Porto Cinzento</em> num
  capítulo e ele volta como <em>Baía Cinza</em> no outro. Multiplique por 176 capítulos
  e a inconsistência fica pior que a do texto original.
</p>

<p>
  O que resolve não é um modelo melhor, é <strong>estado</strong>. Duas coisas que
  moram fora do modelo e entram em toda chamada:
</p>

<ul>
  <li>
    um <strong>glossário versionado</strong>, que define o nome de cada personagem,
    lugar e patente, e é injetado inteiro no prompt;
  </li>
  <li>
    um <strong>resumo do capítulo anterior</strong>, gerado pela própria tradução da
    vez anterior e passado adiante, para o modelo saber quem está em cena e o que
    acabou de acontecer.
  </li>
</ul>

<p>
  Com essas duas peças no lugar, o resto é um pipeline comum: baixar, limpar, traduzir,
  empacotar. Cinco scripts, cada um com uma responsabilidade, todos retomáveis.
</p>

<h2>As cinco etapas</h2>

<pre class="nota-diagram"><code>site da fonte
     │  01_baixar        HTML → raw/NNNN.json      (delay, retry, retomável)
     ▼
   raw/
     │  02_normalizar    limpeza determinística    → anomalias.md
     ▼
  clean/ ──────────────┐
     │                 │  03_glossario  nomes frequentes → glossario.yaml
     │                 ▼                                   (você edita à mão)
     │            glossario.yaml
     │                 │
     │  04_traduzir ◀──┘  modelo + glossário + resumo anterior
     │                    QA por capítulo → revisar.md
     ▼
traduzido/
     │  05_epub          um EPUB por volume, com sumário
     ▼
   epub/</code></pre>

<p>
  A etapa que mais rendeu foi a segunda, e ela não usa modelo nenhum. Entidade HTML,
  aspas curvas, espaço não-quebrável, marca d'água da fonte, parágrafo repetido, título
  que vazou para dentro do corpo — tudo isso é regex e <code>unicodedata</code>. Cada
  defeito consertado ali é um defeito que o tradutor não tem chance de amplificar. Ela
  ainda cospe um relatório de anomalias (capítulo curto demais, sem título, vazio) que
  eu leio antes de gastar cota com o lote inteiro.
</p>

<h2>O glossário é a fonte de verdade</h2>

<p>
  A terceira etapa levanta os candidatos com uma heurística deliberadamente boba:
  palavra capitalizada no meio da frase, repetida acima de um limiar. Isso pega
  personagem, cidade, patente e organização sem precisar de NER, de modelo, de nada.
  O script escreve um YAML e <strong>nunca sobrescreve o que já estava lá</strong>:
</p>

<pre><code>nomes:
  Aldric: Aldric
  Grey Harbor: Porto Cinzento
  Greyharbor: Porto Cinzento      # a fonte escreve junto às vezes

termos:
  Mage Tower: Torre dos Magos
  Silver rank: rank Prata

estilo:
  - "Tratamento entre personagens: use 'você', nunca 'tu'."
  - "Diálogo com travessão, no padrão brasileiro."</code></pre>

<p>
  Quem decide a tradução de cada termo sou eu, não o modelo. E isso muda o fluxo de
  trabalho de um jeito que eu não esperava: quando a tradução sai errada, o conserto
  quase nunca é mexer no prompt. É uma linha no YAML, apagar os capítulos afetados e
  rodar de novo. O prompt ficou estável desde o segundo dia.
</p>

<h2>QA que não precisa de modelo</h2>

<p>
  Deixar um lote de 176 capítulos rodando sem verificação é como rodar ETL sem
  constraint. Depois de cada resposta eu rodo quatro checagens baratas, todas
  determinísticas:
</p>

<ul>
  <li><strong>razão de tamanho</strong> entre original e tradução fora de 0,75–1,45 — denuncia truncamento ou capítulo resumido;</li>
  <li><strong>contagem de parágrafos</strong> variando mais de 30% — denuncia bloco omitido ou parágrafos grudados;</li>
  <li><strong>palavras funcionais do idioma de origem</strong> acima de um limiar no texto final — denuncia trecho que simplesmente não foi traduzido;</li>
  <li><strong>aderência ao glossário</strong>: se o termo aparece no original e a tradução definida não aparece na saída, reprova.</li>
</ul>

<p>
  Reprovou, repete no modelo maior. Reprovou de novo, o capítulo continua salvo, mas
  entra numa lista de revisão. Nenhuma dessas checagens é sofisticada — e é exatamente
  por isso que elas rodam em todos os capítulos sem custo nenhum.
</p>

<h2>Antes de tudo isso eu tentei rodar local</h2>

<p>
  Minha primeira ideia foi não depender de API nenhuma: subir um modelo na própria
  máquina. Fiz a conta antes de instalar qualquer coisa, e ela não fecha. A máquina é
  um i5-8250U de 2017, quatro núcleos, 15W, com 11,8 GB de RAM e gráfico Intel
  integrado — sem CUDA, sem placa dedicada.
</p>

<p>
  O que manda na velocidade de geração em CPU é largura de banda de memória, não clock.
  Nessa faixa, algo entre 15 e 25 GB/s reais. Um modelo de 8B quantizado ocupa uns 5 GB,
  o que dá um teto de 3 a 4 tokens por segundo. Um capítulo de duas mil palavras vira
  perto de quatro mil tokens de saída: <strong>vinte minutos por capítulo</strong>, umas
  sessenta horas de CPU a 100% para o lote — num processador de 15W que vai
  throttlar muito antes disso.
</p>

<p>
  E o pior nem é o tempo. Os modelos abertos que fazem prosa literária bem de verdade
  pedem de 20 a 70 GB. O que cabe nessa máquina traduz <em>pior</em> que a tradução
  automática que eu estava tentando consertar. Ficaria sessenta horas produzindo o mesmo
  defeito com outro sotaque. Modelo local é ótimo quando você tem GPU e um motivo
  (privacidade, volume, offline); aqui não tinha nenhum dos dois.
</p>

<p>
  No fim, cada capítulo é uma chamada de API e o lote inteiro cabe na cota gratuita
  diária. O script respeita o limite de requisições por minuto e, quando a cota do dia
  acaba, encerra avisando de qual capítulo retomar.
</p>

<h2>O que eu não vou publicar</h2>

<p>
  Uma coisa que ficou clara enquanto eu montava isso: a tradução que sai daqui é obra
  derivada, e obra derivada continua pertencendo a quem detém os direitos do original.
  Gerar um EPUB para ler no meu leitor é uma coisa. Hospedar os capítulos num site é
  outra bem diferente, e não é uma briga que eu quero comprar.
</p>

<p>
  Então o que eu publico é a ferramenta, não o texto. Ela é genérica: trocar de fonte é
  trocar seletor num YAML, não escrever código. Você aponta para a obra que você já
  acompanha, usa a sua própria chave de API e o resultado fica na sua máquina. Que é,
  no fim, o que resolve o problema de quem está na mesma situação.
</p>

<p>
  O código está no GitHub, com o passo a passo no README. Se você lê webnovel e cansou
  de nome trocado, vai direto para a parte do glossário — é ali que mora quase toda a
  diferença.
</p>
`;

export const notas: Nota[] = [
  {
    slug: 'traducao-de-webnovel-com-glossario',
    title: 'Consertando tradução automática de webnovel com glossário e ETL',
    date: '2026-07-24',
    summary:
      'Nome de personagem que muda de grafia a cada capítulo não se resolve com prompt melhor, e sim com estado: um glossário versionado, o resumo do capítulo anterior e um QA determinístico. Também conto por que desisti de rodar o modelo local.',
    tags: ['Python', 'Gemini', 'ETL', 'Scraping', 'EPUB'],
    readingTime: 7,
    repoUrl: 'https://github.com/joaoleaogf/webnovel-ptbr',
    body: traducaoWebnovel,
  },
];

export const notasOrdenadas = (): Nota[] =>
  [...notas].sort((a, b) => b.date.localeCompare(a.date));

export const notaPorSlug = (slug: string): Nota | undefined =>
  notas.find((n) => n.slug === slug);

export const formatarData = (iso: string): string => {
  const [ano, mes, dia] = iso.split('-').map(Number);
  const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
  ];
  return `${dia} de ${meses[mes - 1]} de ${ano}`;
};
