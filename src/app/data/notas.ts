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
  /** Projeto no ar, quando existe. */
  demoUrl?: string;
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

const radarArboviroses = `
<p class="nota-lead">
  Os dados de dengue do InfoDengue são públicos, semanais e cobrem os 5.570 municípios
  do país. O que não existe é a parte chata: alguém buscando, guardando, cruzando com
  a malha territorial e avisando quando um município entra em alerta. Resolvi montar
  isso — e a decisão que mais mudou o projeto foi não escrever o pipeline como script.
</p>

<h2>Por que um orquestrador em vez de um cron com script</h2>

<p>
  A primeira versão mental era óbvia: um script Python, um cron, uma tabela. Funciona,
  e é o que eu já tinha feito outras vezes. O problema aparece depois: quando o ETL
  falha numa terça de madrugada, você quer ver <em>em que item</em> ele parou, quer
  reexecutar só aquele pedaço, e quer que a próxima pessoa a mexer entenda o fluxo sem
  ler quatrocentas linhas.
</p>

<p>
  Botei o n8n como protagonista. Ele agenda, coleta, trata, alerta, serve a API e
  conversa — cinco workflows versionados em JSON no repositório, que sobem junto com o
  banco num <code>docker compose up</code>. O dashboard em Angular e o bot do Telegram
  são só as pontas visíveis.
</p>

<pre class="nota-diagram"><code>IBGE (malhas)  ──▶ WF1 sync-municipios ─┐
                                        ▼
InfoDengue     ──▶ WF2 etl-infodengue ─▶ PostGIS ◀── WF4 api ──▶ dashboard
                                        │  ▲                     (Leaflet + Highcharts)
                   WF3 alertas ─────────┘  │
                     └─▶ Telegram / e-mail │
                   WF5 ai-agent ◀── tools ─┘
                     └─▶ Telegram (Gemini)</code></pre>

<h2>Idempotência é o que faz o ETL ser sossegado</h2>

<p>
  A tentação, num ETL semanal, é buscar só a semana nova. Eu faço o contrário: toda
  terça às 8h o WF2 varre <strong>a janela inteira desde 2024</strong>, para cada
  município e cada uma das duas doenças, e grava com upsert na chave
  <code>(geocode, doenca, semana_epidemiológica)</code>.
</p>

<p>
  Parece desperdício, e é de propósito. O InfoDengue revisa dados retroativamente — o
  número de casos estimados de três semanas atrás muda quando a notificação chega
  atrasada. Buscando só o incremento, o banco congela a primeira versão de cada semana
  e vai ficando errado devagar, do jeito mais difícil de perceber. Com janela fixa e
  upsert idempotente, toda execução também <em>corrige o passado</em>, e rodar duas
  vezes seguidas não faz diferença nenhuma. É o mesmo motivo pelo qual as migrations em
  <code>db/init</code> são todas <code>IF NOT EXISTS</code>.
</p>

<p>
  A contrapartida é volume: são 5.570 municípios vezes duas doenças de requisições
  contra uma API pública e gratuita, mantida por gente que não me deve nada. Então o nó
  HTTP roda em lotes de 5 com intervalo de 1 segundo — uns 5 req/s, com timeout de 30s.
  Cada execução abre e fecha um registro em <code>etl_run</code>, e no fim atualiza a
  view <code>situacao_atual</code>, que é o que o dashboard e os alertas consultam. O
  alerta em si tem deduplicação própria: município que já foi notificado naquele nível
  não vira mensagem de novo.
</p>

<h2>O agente de IA que não escreve SQL</h2>

<p>
  A parte que mais me perguntam é o bot do Telegram que responde "como está a dengue em
  Itajubá?" em linguagem natural. A implementação tem uma decisão deliberada: o modelo
  <strong>não escreve SQL</strong>.
</p>

<p>
  O agente tem exatamente quatro ferramentas, e cada uma é uma query fixa e
  parametrizada — buscar município por nome, situação atual de um município, ranking dos
  municípios em alerta e resumo nacional. O modelo escolhe qual chamar e com que
  parâmetro; a consulta em si já está escrita e revisada por mim.
</p>

<pre><code>buscar_municipio    → WHERE unaccent(lower(nome)) LIKE unaccent(lower('%' || $1 || '%'))
situacao_municipio  → WHERE geocode = $1
ranking_alertas     → WHERE doenca = $1 ORDER BY nivel DESC, casos_est DESC
resumo_regional     → agregados nacionais da semana mais recente</code></pre>

<p>
  Dar acesso livre ao banco para um modelo é a solução que aparece em todo tutorial e é
  a que eu não quero em produção: além do risco óbvio de injeção, você perde a
  previsibilidade de custo e de plano de execução. Com ferramentas parametrizadas, o
  pior caso é o agente escolher a ferramenta errada e dar uma resposta boba — não
  varrer a tabela inteira nem apagar nada. A memória é por chat, então o "e em Pouso
  Alegre?" logo depois continua funcionando.
</p>

<h2>Onde isso roda</h2>

<p>
  Tudo em free tier, o que impôs restrições saudáveis. São duas VMs da Oracle Cloud
  conversando pela rede privada da VCN: uma com nginx, a auth-api e o n8n atrás de
  HTTPS, outra só com o Postgres/PostGIS. O dashboard é estático, publicado pelo
  Cloudflare Pages.
</p>

<p>
  A auth-api é um Fastify pequeno em cima do <code>pg</code>, com contas de usuário,
  inscrição em municípios e disparo dos alertas por e-mail, coberto por testes no
  Vitest. O CI roda typecheck, testes, build e <code>npm audit</code> a cada push, e o
  deploy contínuo só acontece se essa etapa passar — depois valida o
  <code>/health</code> antes de considerar a coisa no ar.
</p>

<p>
  Um detalhe pequeno de que eu gostei: o <code>docker compose up</code>
  <strong>falha</strong> se os segredos de JWT e da chamada interna não estiverem no
  ambiente. Sem valor padrão, sem fallback bonitinho. Segredo com default previsível é
  segredo que vai para produção sem ninguém notar.
</p>

<h2>O que eu faria diferente</h2>

<p>
  As migrations manuais em banco existente são o ponto fraco: os scripts só rodam
  sozinhos em instalação nova, então em produção eu aplico na mão. É idempotente e
  documentado, mas é o tipo de coisa que funciona até o dia em que alguém esquece.
  Ferramenta de migration de verdade resolveria.
</p>

<p>
  Fora isso, a lição que levo é que quase nada aqui é sofisticado. Idempotência,
  throttle, deduplicação de alerta e ferramentas parametrizadas em vez de SQL livre são
  todas decisões chatas — e são exatamente elas que fazem o pipeline rodar sozinho
  desde então, sem eu precisar olhar.
</p>
`;

export const notas: Nota[] = [
  {
    slug: 'radar-de-arboviroses-com-n8n-e-postgis',
    title: 'Um radar de dengue para o Brasil inteiro, rodando em free tier',
    date: '2026-07-24',
    summary:
      'Pipeline semanal do InfoDengue para os 5.570 municípios com n8n e PostGIS: por que o ETL busca a janela inteira toda vez, como o alerta evita repetir e por que o agente de IA no Telegram não escreve SQL.',
    tags: ['n8n', 'PostGIS', 'ETL', 'Gemini', 'Angular'],
    readingTime: 8,
    repoUrl: 'https://github.com/joaoleaogf/radar-arboviroses',
    demoUrl: 'https://radar.joaoleao.fun',
    body: radarArboviroses,
  },
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
