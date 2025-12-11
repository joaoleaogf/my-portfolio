// Artigos do Blog baseados nos projetos do portfólio
const STATIC_ARTICLES = [
    {
        id: 11,
        title: "Sistema Solar Interativo: A Física por Trás da Seção Skills",
        description: "Uma análise técnica da seção 'Habilidades & Tecnologias', que transforma uma lista de skills em um ecossistema interativo com física simulada, órbitas 3D e efeitos visuais modernos.",
        published_at: "2024-12-11T16:00:00.000Z",
        reading_time_minutes: 8,
        tag_list: ["React", "Animações", "Física", "CSS", "Frontend"],
        url: "#",
        cover_image: "/images/skills-solar-system.png",
        content: `
            <p>A seção <strong>"Habilidades & Tecnologias"</strong> deste portfólio não é uma lista comum. É um <strong>sistema solar interativo</strong> onde cada categoria é um "planeta" e as tecnologias orbitam como satélites, tudo animado com física simulada em tempo real.</p>

            <h3>O Conceito</h3>
            <p>A inspiração veio de um sistema planetário:</p>
            <ul>
                <li><strong>Categorias</strong> (Backend, Frontend, etc.) são planetas que flutuam pelo espaço</li>
                <li><strong>Tecnologias</strong> (React, Node.js, etc.) são satélites que orbitam os planetas</li>
                <li><strong>Mouse do usuário</strong> é uma força repulsiva, como um campo gravitacional</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop" alt="Sistema Solar" />
            <p class="caption">A inspiração: sistemas planetários em movimento constante.</p>

            <h3>O Motor de Física</h3>
            <p>O coração da seção é um <strong>engine de física customizado</strong> rodando a 60fps via <code>requestAnimationFrame</code>. Cada frame calcula múltiplas forças:</p>
            <ul>
                <li><strong>Repulsão entre categorias:</strong> Evita sobreposição (força: 12000)</li>
                <li><strong>Atração ao centro:</strong> Mantém tudo visível (força: 0.0002)</li>
                <li><strong>Repulsão do mouse:</strong> Interatividade (força: 20000, raio: 200px)</li>
                <li><strong>Movimento orgânico:</strong> Ondas senoidais para parecer "vivo"</li>
                <li><strong>Impulsos aleatórios:</strong> Imprevisibilidade natural</li>
            </ul>

            <h3>Órbita 3D Simulada</h3>
            <p>As tecnologias orbitam em <strong>elipses 3D simuladas</strong>, onde a posição Z determina:</p>
            <ul>
                <li><strong>Escala:</strong> Maior quando na frente (1.0) menor quando atrás (0.7)</li>
                <li><strong>Opacidade:</strong> Mais visível na frente, mais transparente atrás</li>
                <li><strong>Z-Index:</strong> Elementos "na frente" ficam sobre o círculo central</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" alt="Órbitas" />
            <p class="caption">Órbitas elípticas criam ilusão de profundidade 3D.</p>

            <h3>Design Visual: Glassmorphism</h3>
            <p>Os badges das tecnologias usam o efeito <strong>Glassmorphism</strong>:</p>
            <ul>
                <li>Fundo semi-transparente com blur</li>
                <li>Bordas sutis com destaque roxo</li>
                <li>Sombras para profundidade</li>
                <li>Hover com aumento de escala e mudança de cor</li>
            </ul>

            <h3>As 5 Categorias</h3>
            <p>O sistema organiza as habilidades em:</p>
            <ol>
                <li><strong>ETL & Pipelines:</strong> Node.js, Python, Docker</li>
                <li><strong>Geoprocessamento:</strong> PostGIS, QGIS, Geocoding</li>
                <li><strong>Backend:</strong> APIs RESTful, PostgreSQL, Microserviços</li>
                <li><strong>Frontend:</strong> React, Angular, Vue.js, NextJS</li>
                <li><strong>Ferramentas:</strong> Git, Algoritmos, Análise de Dados</li>
            </ol>

            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop" alt="Tecnologias" />
            <p class="caption">Cada categoria agrupa tecnologias relacionadas.</p>

            <h3>Interatividade</h3>
            <p>A seção responde a interações:</p>
            <ul>
                <li><strong>Mouse:</strong> Categorias se afastam do cursor</li>
                <li><strong>Touch:</strong> Funciona em dispositivos móveis</li>
                <li><strong>Hover:</strong> Badges aumentam e mudam de cor</li>
            </ul>

            <h3>Tecnologias Utilizadas</h3>
            <p>A implementação usa:</p>
            <ul>
                <li><strong>React:</strong> Hooks (useState, useEffect, useRef, useMemo)</li>
                <li><strong>react-icons:</strong> Ícones das tecnologias</li>
                <li><strong>requestAnimationFrame:</strong> Loop de animação suave</li>
                <li><strong>CSS com variáveis:</strong> Theming consistente</li>
            </ul>

            <h3>Conclusão</h3>
            <p>Esta seção é mais que uma lista de habilidades — é uma <strong>demonstração prática</strong> de conhecimentos em React, CSS avançado, matemática aplicada e design de interfaces modernas. A própria implementação prova as habilidades que lista!</p>
        `
    },
    {
        id: 1,
        title: "O Início da Jornada: Construindo meu Portfólio",
        description: "Bem-vindo ao meu novo espaço na web! Neste primeiro artigo, compartilho um pouco sobre as tecnologias que escolhi para construir este portfólio: React, Vite, Framer Motion e muito mais.",
        published_at: "2024-12-01T10:00:00.000Z",
        reading_time_minutes: 5,
        tag_list: ["Portfolio", "React", "Web Development"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>Construir um portfólio não é apenas sobre exibir projetos; é sobre expressar quem você é como desenvolvedor. Para este projeto, decidi utilizar uma stack moderna e performática que reflete meu foco em qualidade e experiência do usuário.</p>
            
            <h3>A Stack Tecnológica</h3>
            <p>A base do projeto é <strong>React</strong> rodando sobre o <strong>Vite</strong>. Escolhi essa combinação pela velocidade de desenvolvimento (HMR instantâneo) e build otimizado.</p>
            
            <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop" alt="Code Logic" />
            <p class="caption">React + Vite: A combinação perfeita para performance.</p>

            <h3>Design e Animações</h3>
            <p>Para o design, busquei algo limpo e "dark mode", com cores neon sutis (cyan) para destacar elementos interativos. As animações de scroll foram implementadas com <strong>Framer Motion</strong>, permitindo que cada seção apareça suavemente conforme o usuário navega.</p>

            <h3>Geoprocessamento e ETL</h3>
            <p>Como especialista em dados espaciais, o desafio foi trazer essa identidade para o frontend. Em breve, trarei postagens detalhadas sobre como construir mapas interativos com React Leaflet e processar dados geográficos no backend.</p>

            <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop" alt="Mapas e Dados" />
            <p class="caption">Visualização de dados espaciais será um foco importante aqui.</p>

            <h3>Próximos Passos</h3>
            <p>Planejo expandir este blog com tutoriais práticos sobre:</p>
            <ul>
                <li>Integração de PostGIS com Node.js</li>
                <li>Pipelines de ETL com Python</li>
                <li>Visualização de dados complexos na web</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "ETL GeoSaúde Itajubá: Construindo um Pipeline de Dados Espaciais para Saúde Pública",
        description: "Uma análise profunda de como desenvolvi um sistema ETL robusto para geocodificação de dados de saúde, integrando Python, PostGIS e QGIS para análise espacial epidemiológica.",
        published_at: "2024-11-25T14:00:00.000Z",
        reading_time_minutes: 12,
        tag_list: ["ETL", "Python", "PostGIS", "Geocoding", "Saúde Pública"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>A análise espacial de dados de saúde é fundamental para entender padrões epidemiológicos e auxiliar na tomada de decisões em saúde pública. Neste artigo, compartilho como desenvolvi o <strong>ETL GeoSaúde Itajubá</strong>, um pipeline completo para processar e geocodificar dados de atendimentos de saúde.</p>

            <h3>O Desafio</h3>
            <p>Os dados de saúde muitas vezes chegam com endereços incompletos, mal formatados ou com erros de digitação. O grande desafio foi criar um sistema que conseguisse:</p>
            <ul>
                <li>Normalizar endereços automaticamente</li>
                <li>Geocodificar com múltiplas estratégias de fallback</li>
                <li>Manter a integridade dos dados originais</li>
                <li>Gerar outputs compatíveis com QGIS para análise visual</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Data Pipeline" />
            <p class="caption">O fluxo de dados passa por múltiplas etapas de transformação.</p>

            <h3>Arquitetura do Pipeline</h3>
            <p>O sistema foi construído em Python com foco em modularidade. Cada etapa do ETL é independente e pode ser executada separadamente:</p>
            <ul>
                <li><strong>Extract:</strong> Leitura de dados de múltiplas fontes (CSV, Excel, bancos de dados)</li>
                <li><strong>Transform:</strong> Normalização de endereços, validação de campos, enriquecimento</li>
                <li><strong>Load:</strong> Persistência em PostgreSQL/PostGIS com geometrias válidas</li>
            </ul>

            <h3>Estratégias de Geocodificação</h3>
            <p>Implementei um sistema de geocodificação em cascata que tenta múltiplas abordagens:</p>
            <ol>
                <li>Busca exata por endereço completo</li>
                <li>Busca por logradouro + bairro</li>
                <li>Busca por CEP com interpolação</li>
                <li>Fallback para centroide do bairro</li>
            </ol>

            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" alt="Mapeamento" />
            <p class="caption">Visualização dos pontos geocodificados no QGIS.</p>

            <h3>Resultados e Aprendizados</h3>
            <p>O sistema conseguiu uma taxa de sucesso de geocodificação acima de 85% nos dados processados. As principais lições aprendidas foram:</p>
            <ul>
                <li>A importância de logs detalhados para debug</li>
                <li>Validação de dados em cada etapa do pipeline</li>
                <li>Documentação clara de cada transformação aplicada</li>
            </ul>

            <h3>Tecnologias Utilizadas</h3>
            <p><strong>Python</strong> para o core do pipeline, <strong>PostGIS</strong> para armazenamento espacial, <strong>QGIS</strong> para visualização e validação, e diversas APIs de geocodificação como backup.</p>
        `
    },
    {
        id: 3,
        title: "FIPE ETL: Processamento Escalável de Dados Automotivos com Docker",
        description: "Como construí um sistema modular e dockerizado para processar dados da Tabela FIPE, com foco em arquitetura escalável e processamento incremental.",
        published_at: "2024-11-18T09:00:00.000Z",
        reading_time_minutes: 10,
        tag_list: ["ETL", "Node.js", "Docker", "API", "Arquitetura"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>A Tabela FIPE é uma referência essencial para o mercado automotivo brasileiro. Neste projeto, desenvolvi um sistema ETL completo para extrair, processar e disponibilizar esses dados de forma eficiente e escalável.</p>

            <h3>Por que Docker?</h3>
            <p>A containerização com Docker foi fundamental para garantir:</p>
            <ul>
                <li>Ambiente consistente entre desenvolvimento e produção</li>
                <li>Deploy simplificado em qualquer infraestrutura</li>
                <li>Isolamento de dependências</li>
                <li>Escalabilidade horizontal quando necessário</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1000&auto=format&fit=crop" alt="Docker Containers" />
            <p class="caption">Arquitetura containerizada para máxima portabilidade.</p>

            <h3>Arquitetura Modular</h3>
            <p>O sistema foi dividido em módulos independentes:</p>
            <ul>
                <li><strong>Scraper:</strong> Responsável pela extração de dados da API FIPE</li>
                <li><strong>Processor:</strong> Transformação e normalização dos dados</li>
                <li><strong>Storage:</strong> Persistência com versionamento temporal</li>
                <li><strong>API:</strong> Interface REST para consulta dos dados processados</li>
            </ul>

            <h3>Processamento Incremental</h3>
            <p>Um dos principais desafios foi lidar com atualizações mensais da tabela. Implementei um sistema de processamento incremental que:</p>
            <ol>
                <li>Detecta automaticamente novos dados</li>
                <li>Processa apenas o delta de mudanças</li>
                <li>Mantém histórico completo para análises temporais</li>
            </ol>

            <h3>Lições Aprendidas</h3>
            <p>Este projeto me ensinou muito sobre design de sistemas distribuídos, rate limiting em APIs externas, e a importância de uma boa estratégia de retry para operações de rede.</p>

            <img src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1000&auto=format&fit=crop" alt="Data Flow" />
            <p class="caption">Fluxo de dados otimizado para performance.</p>
        `
    },
    {
        id: 4,
        title: "Análise Espacial da Febre Amarela: Epidemiologia com Python e QGIS",
        description: "Uma jornada pelo mundo da epidemiologia espacial, explorando padrões geográficos de casos de febre amarela usando técnicas de análise estatística e visualização.",
        published_at: "2024-11-10T11:00:00.000Z",
        reading_time_minutes: 15,
        tag_list: ["Python", "QGIS", "Epidemiologia", "Análise Espacial", "Estatística"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>A febre amarela é uma doença viral que apresenta padrões espaciais interessantes, relacionados a fatores ambientais e epidemiológicos. Neste projeto, realizei uma análise descritiva completa dos dados de ocorrência da doença.</p>

            <h3>Objetivos da Análise</h3>
            <p>O projeto teve como principais objetivos:</p>
            <ul>
                <li>Identificar clusters espaciais de casos</li>
                <li>Correlacionar ocorrências com variáveis ambientais</li>
                <li>Produzir visualizações para apoio à decisão em saúde pública</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=1000&auto=format&fit=crop" alt="Análise Epidemiológica" />
            <p class="caption">Visualização de padrões espaciais de ocorrência.</p>

            <h3>Metodologia</h3>
            <p>Utilizei uma combinação de técnicas estatísticas e de geoprocessamento:</p>
            <ol>
                <li><strong>Análise Exploratória:</strong> Estatísticas descritivas, distribuições temporais e espaciais</li>
                <li><strong>Autocorrelação Espacial:</strong> Índice de Moran para identificar clusters</li>
                <li><strong>Mapas de Calor:</strong> Visualização de densidade de casos</li>
                <li><strong>Análise Temporal:</strong> Sazonalidade e tendências de longo prazo</li>
            </ol>

            <h3>Ferramentas Utilizadas</h3>
            <p>O workflow combinou <strong>Python</strong> (pandas, geopandas, scipy) para processamento e análise estatística, com <strong>QGIS</strong> para visualização geográfica avançada e produção de mapas temáticos.</p>

            <h3>Resultados Principais</h3>
            <p>A análise revelou padrões importantes:</p>
            <ul>
                <li>Concentração de casos em áreas de transição urbano-rural</li>
                <li>Sazonalidade marcante nos meses de verão</li>
                <li>Clusters estatisticamente significativos em regiões específicas</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" alt="Análise de Dados" />
            <p class="caption">Processo de análise e geração de insights.</p>

            <h3>Contribuição para a Saúde Pública</h3>
            <p>Os resultados deste estudo podem auxiliar gestores de saúde na alocação de recursos para campanhas de vacinação e vigilância epidemiológica nas áreas de maior risco.</p>
        `
    },
    {
        id: 5,
        title: "Otimização de Rotas com Teoria dos Grafos: Recadastramento Imobiliário",
        description: "Como apliquei algoritmos de grafos para otimizar rotas de campo no recadastramento imobiliário, minimizando deslocamentos e aumentando a eficiência operacional.",
        published_at: "2024-11-01T08:00:00.000Z",
        reading_time_minutes: 14,
        tag_list: ["Python", "Grafos", "Algoritmos", "Otimização", "GIS"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>O recadastramento imobiliário é uma atividade que demanda visitas a milhares de imóveis. A ordem dessas visitas pode fazer uma diferença enorme no tempo e custo total da operação. Neste projeto, apliquei teoria dos grafos para otimizar essas rotas.</p>

            <h3>O Problema do Caixeiro Viajante</h3>
            <p>Essencialmente, estávamos lidando com uma variação do famoso Problema do Caixeiro Viajante (TSP). Dado um conjunto de imóveis a visitar, qual a ordem que minimiza o percurso total?</p>

            <img src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1000&auto=format&fit=crop" alt="Rotas Otimizadas" />
            <p class="caption">Visualização de rotas antes e depois da otimização.</p>

            <h3>Abordagem Técnica</h3>
            <p>Como o TSP é NP-difícil, utilizei uma combinação de heurísticas:</p>
            <ul>
                <li><strong>Nearest Neighbor:</strong> Solução inicial gulosa</li>
                <li><strong>2-opt:</strong> Melhoria local por troca de arestas</li>
                <li><strong>Clustering:</strong> Divisão em sub-rotas por região</li>
            </ul>

            <h3>Implementação em Python</h3>
            <p>O sistema foi construído usando NetworkX para manipulação de grafos e integração com dados geográficos via GeoPandas. O algoritmo processa as coordenadas dos imóveis e gera rotas otimizadas.</p>

            <h3>Resultados Alcançados</h3>
            <p>A otimização resultou em:</p>
            <ul>
                <li><strong>Redução de 35%</strong> na distância total percorrida</li>
                <li><strong>Economia significativa</strong> em tempo e combustível</li>
                <li><strong>Melhor distribuição</strong> de carga de trabalho entre equipes</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1489976908522-aabacf277f49?q=80&w=1000&auto=format&fit=crop" alt="Mapas de Rotas" />
            <p class="caption">Rotas otimizadas exportadas para GPS dos agentes.</p>

            <h3>Visualização e Deploy</h3>
            <p>As rotas otimizadas foram exportadas em formato compatível com QGIS e dispositivos GPS, permitindo que os agentes de campo seguissem o percurso otimizado diretamente em seus dispositivos móveis.</p>
        `
    },
    {
        id: 6,
        title: "Rastreador de Tempo: Construindo uma App Moderna com Supabase e Glassmorphism",
        description: "O processo criativo e técnico por trás do meu aplicativo de rastreamento de tempo, com foco em design moderno, UX intuitiva e backend escalável.",
        published_at: "2024-10-25T16:00:00.000Z",
        reading_time_minutes: 11,
        tag_list: ["JavaScript", "Supabase", "TailwindCSS", "Chart.js", "UI/UX"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>Gerenciar tempo é essencial para produtividade. Desenvolvi o <strong>Rastreador de Tempo</strong> como uma solução moderna e elegante para acompanhar como investimos nosso tempo em diferentes projetos.</p>

            <h3>Design Glassmorphism</h3>
            <p>Optei pelo estilo <strong>Glassmorphism</strong> por seu visual premium e moderno. Os elementos translúcidos com blur criam uma sensação de profundidade e sofisticação.</p>

            <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1000&auto=format&fit=crop" alt="Design Moderno" />
            <p class="caption">Interface com efeitos de vidro e gradientes sutis.</p>

            <h3>Funcionalidades Principais</h3>
            <ul>
                <li><strong>Cronômetro Integrado:</strong> Timer com persistência de estado</li>
                <li><strong>Dashboard Analítico:</strong> Gráficos interativos com Chart.js</li>
                <li><strong>Dark Mode:</strong> Tema escuro nativo</li>
                <li><strong>Multi-projeto:</strong> Organização por projetos e categorias</li>
            </ul>

            <h3>Backend com Supabase</h3>
            <p>Escolhi o <strong>Supabase</strong> como backend por sua simplicidade e poder. Oferece autenticação, banco de dados PostgreSQL e real-time out of the box.</p>

            <h3>Lições de UX</h3>
            <p>O maior aprendizado foi focar na experiência do usuário:</p>
            <ul>
                <li>Feedback visual imediato para cada ação</li>
                <li>Persistência automática para não perder dados</li>
                <li>Design responsivo para uso em qualquer dispositivo</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Dashboard Analytics" />
            <p class="caption">Dashboard com visualização de dados de tempo.</p>
        `
    },
    {
        id: 7,
        title: "Sistema de Coleta Seletiva: Full Stack com Vue.js e Node.js",
        description: "Desenvolvimento de uma plataforma completa para gestão de coleta seletiva urbana, desde o backend RESTful até a interface interativa.",
        published_at: "2024-10-15T10:00:00.000Z",
        reading_time_minutes: 13,
        tag_list: ["Vue.js", "Node.js", "API", "Full Stack", "Sustentabilidade"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>A coleta seletiva é fundamental para a sustentabilidade urbana. Este projeto nasceu da necessidade de uma ferramenta para gerenciar rotas, pontos de coleta e acompanhar a eficiência do processo.</p>

            <h3>Arquitetura Full Stack</h3>
            <p>O sistema foi desenvolvido com separação clara entre frontend e backend:</p>
            <ul>
                <li><strong>Frontend:</strong> Vue.js 3 com Composition API</li>
                <li><strong>Backend:</strong> Node.js com Express</li>
                <li><strong>Banco de Dados:</strong> PostgreSQL com extensão PostGIS</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1558618047-f4b511a881b5?q=80&w=1000&auto=format&fit=crop" alt="Reciclagem" />
            <p class="caption">Sistema pensado para impacto ambiental positivo.</p>

            <h3>API RESTful</h3>
            <p>A API foi projetada seguindo princípios REST e inclui:</p>
            <ul>
                <li>CRUD completo para pontos de coleta</li>
                <li>Gerenciamento de rotas e motoristas</li>
                <li>Endpoints de relatórios e estatísticas</li>
                <li>Autenticação JWT</li>
            </ul>

            <h3>Interface com Vue.js</h3>
            <p>A interface foi construída pensando em usabilidade para operadores de campo e gestores. Inclui mapa interativo, formulários intuitivos e dashboard de métricas.</p>

            <h3>Funcionalidades de Mapa</h3>
            <p>Integração com Leaflet para visualização de:</p>
            <ul>
                <li>Localização de pontos de coleta</li>
                <li>Rotas planejadas e executadas</li>
                <li>Áreas de cobertura</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=1000&auto=format&fit=crop" alt="Mapa Interativo" />
            <p class="caption">Visualização geográfica dos pontos de coleta.</p>
        `
    },
    {
        id: 8,
        title: "Dominando Node.js Streams: Processamento Eficiente de Grandes Volumes",
        description: "Um mergulho profundo em Streams do Node.js, explorando como processar arquivos gigantes sem estourar a memória.",
        published_at: "2024-10-05T14:00:00.000Z",
        reading_time_minutes: 16,
        tag_list: ["Node.js", "Streams", "Performance", "Backend", "Tutorial"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>Streams são um dos conceitos mais poderosos e mal compreendidos do Node.js. Neste artigo, exploro como usar streams para processar arquivos de vários gigabytes sem consumir proporcionalmente a memória RAM.</p>

            <h3>O Problema da Memória</h3>
            <p>Ao ler um arquivo de 5GB com <code>fs.readFile</code>, você precisa de 5GB de RAM disponível. Com streams, você processa o arquivo em chunks pequenos, mantendo o uso de memória constante.</p>

            <img src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=1000&auto=format&fit=crop" alt="Performance" />
            <p class="caption">Comparação de uso de memória: readFile vs Streams.</p>

            <h3>Tipos de Streams</h3>
            <p>O Node.js oferece quatro tipos fundamentais:</p>
            <ul>
                <li><strong>Readable:</strong> Fonte de dados (arquivos, HTTP requests)</li>
                <li><strong>Writable:</strong> Destino de dados (arquivos, HTTP responses)</li>
                <li><strong>Duplex:</strong> Leitura e escrita (sockets TCP)</li>
                <li><strong>Transform:</strong> Modificação de dados em trânsito (compressão, criptografia)</li>
            </ul>

            <h3>Pipe: A Mágica da Composição</h3>
            <p>O método <code>.pipe()</code> conecta streams de forma elegante e gerencia backpressure automaticamente:</p>
            <pre><code>readStream
    .pipe(transformStream)
    .pipe(writeStream);</code></pre>

            <h3>Exemplos Práticos</h3>
            <p>No repositório, demonstro casos de uso reais:</p>
            <ul>
                <li>Processamento de logs gigantes</li>
                <li>Parsing de CSV linha a linha</li>
                <li>Compressão e descompressão on-the-fly</li>
                <li>Streaming de respostas HTTP</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop" alt="Código" />
            <p class="caption">Streams permitem processar dados como um rio contínuo.</p>

            <h3>Backpressure</h3>
            <p>Um conceito crítico é o <strong>backpressure</strong>: quando o consumidor é mais lento que o produtor. O Node.js lida com isso pausando a leitura automaticamente quando o buffer está cheio.</p>
        `
    },
    {
        id: 9,
        title: "Psycopg2 vs SQLAlchemy: Comparativo Prático com Arquitetura MVC",
        description: "Uma análise comparativa entre usar SQL puro com Psycopg2 e o ORM SQLAlchemy, implementando ambos em uma arquitetura MVC em Python.",
        published_at: "2024-09-28T09:00:00.000Z",
        reading_time_minutes: 12,
        tag_list: ["Python", "PostgreSQL", "ORM", "MVC", "Arquitetura"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>Ao trabalhar com PostgreSQL em Python, surge uma questão fundamental: usar SQL puro ou um ORM? Neste projeto, implementei a mesma aplicação usando <strong>Psycopg2</strong> e <strong>SQLAlchemy</strong> para comparar os trade-offs.</p>

            <h3>O Contexto da Comparação</h3>
            <p>Criei uma aplicação simples seguindo o padrão MVC (Model-View-Controller) e implementei duas versões do Model: uma com Psycopg2 (SQL direto) e outra com SQLAlchemy (ORM).</p>

            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" alt="Código Python" />
            <p class="caption">Comparando abordagens de acesso a dados.</p>

            <h3>Psycopg2: Controle Total</h3>
            <p>Vantagens:</p>
            <ul>
                <li>Performance máxima (sem overhead de ORM)</li>
                <li>Controle total sobre as queries</li>
                <li>Curva de aprendizado menor se já conhece SQL</li>
            </ul>
            <p>Desvantagens:</p>
            <ul>
                <li>Mais código boilerplate</li>
                <li>Manipulação manual de transações</li>
                <li>Risco de SQL injection se não for cuidadoso</li>
            </ul>

            <h3>SQLAlchemy: Produtividade</h3>
            <p>Vantagens:</p>
            <ul>
                <li>Models como classes Python (mais pythonic)</li>
                <li>Migrations automáticas</li>
                <li>Query builder poderoso</li>
                <li>Proteção automática contra SQL injection</li>
            </ul>
            <p>Desvantagens:</p>
            <ul>
                <li>Overhead de performance em alguns casos</li>
                <li>Curva de aprendizado mais íngreme</li>
                <li>Queries complexas podem ser verbosas</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop" alt="Database" />
            <p class="caption">Diferentes ferramentas para diferentes necessidades.</p>

            <h3>Minha Conclusão</h3>
            <p>Para projetos pequenos ou que exijam queries SQL muito específicas, <strong>Psycopg2</strong> é uma excelente escolha. Para aplicações maiores com muitas entidades e relacionamentos, <strong>SQLAlchemy</strong> aumenta significativamente a produtividade.</p>
        `
    },
    {
        id: 10,
        title: "Relatórios Ad-Hoc: Sistema Modular de Visualização de Dados",
        description: "Criando uma arquitetura componentizada em JavaScript puro para geração dinâmica de relatórios customizados com múltiplos formatos de exportação.",
        published_at: "2024-09-20T11:00:00.000Z",
        reading_time_minutes: 9,
        tag_list: ["JavaScript", "HTML", "CSS", "Frontend", "Relatórios"],
        url: "#",
        cover_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
        content: `
            <p>Relatórios são essenciais em qualquer sistema corporativo, mas frequentemente são estáticos e inflexíveis. Este projeto nasceu da necessidade de um sistema que permitisse criar visualizações dinâmicas sem depender de desenvolvedores para cada novo relatório.</p>

            <h3>Arquitetura Componentizada</h3>
            <p>O sistema foi construído com JavaScript vanilla, utilizando uma arquitetura de componentes reutilizáveis:</p>
            <ul>
                <li><strong>DataSource:</strong> Conexão flexível com APIs e arquivos</li>
                <li><strong>Filters:</strong> Componentes de filtro dinâmicos</li>
                <li><strong>Charts:</strong> Visualizações gráficas</li>
                <li><strong>Tables:</strong> Tabelas interativas com ordenação</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Dashboard" />
            <p class="caption">Interface intuitiva para criação de relatórios.</p>

            <h3>Exportação Multi-formato</h3>
            <p>Os relatórios podem ser exportados em:</p>
            <ul>
                <li>PDF (com layout preservado)</li>
                <li>Excel (dados tabulares)</li>
                <li>CSV (máxima compatibilidade)</li>
                <li>PNG (gráficos como imagem)</li>
            </ul>

            <h3>Design Responsivo</h3>
            <p>A interface adapta-se a diferentes tamanhos de tela, permitindo visualização tanto em desktop quanto em tablets para uso em reuniões.</p>

            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Relatórios" />
            <p class="caption">Flexibilidade na criação de visualizações.</p>
        `
    }
];

export const getLatestArticles = async () => {
    // Simulate API delay for realism
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(STATIC_ARTICLES);
        }, 800);
    });
};
