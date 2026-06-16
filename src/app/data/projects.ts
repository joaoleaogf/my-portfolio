export interface Project {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 11,
    title: 'Radar de Arboviroses',
    image: '/images/projects/radar-arboviroses.svg',
    imageAlt: 'Mapa do Sul de Minas com municípios coloridos por nível de alerta de dengue',
    description: 'Pipeline orquestrado em n8n que monitora dengue e chikungunya no Sul de Minas: coleta semanal do InfoDengue, mapa de alerta, notificações no Telegram e um agente de IA que responde sobre os dados.',
    highlights: [
      'ETL semanal idempotente no n8n (upsert por semana epidemiológica)',
      'Mapa coroplético em Leaflet + série histórica em Highcharts',
      'Alertas no Telegram e agente de IA (Gemini) consultando o PostGIS',
      'Tudo em Docker Compose: n8n + PostGIS'
    ],
    technologies: ['n8n', 'PostGIS', 'Angular', 'Leaflet', 'Highcharts', 'AI Agent', 'Docker', 'ETL'],
    demoUrl: 'https://radar.joaoleao.fun',
    githubUrl: 'https://github.com/joaoleaogf/radar-arboviroses',
    featured: true
  },
  {
    id: 10,
    title: 'Dashboard Interativo BI',
    image: '/images/projects/bi-dashboard.svg',
    imageAlt: 'Ilustração de painel de BI com barras, linha e donut',
    description: 'Desenvolvimento de dashboards de Business Intelligence (BI) com Elasticsearch e Highcharts para visualização avançada e em tempo real de grandes volumes de dados operacionais.',
    highlights: [
      'Consultas otimizadas no Elasticsearch para milhões de registros',
      'Gráficos dinâmicos e responsivos com Highcharts',
      'Filtros interativos e relatórios exportáveis'
    ],
    technologies: ['Elasticsearch', 'Highcharts', 'JavaScript', 'Node.js'],
    featured: true
  },
  {
    id: 9,
    title: 'Rastreador de Tempo',
    image: '/images/projects/rastreador-tempo.svg',
    imageAlt: 'Ilustração de relógio e linha do tempo de registros de horas',
    description: 'App para registrar horas por projeto, com cronômetro, histórico e gráficos. Backend no Supabase.',
    highlights: [
      'Cronômetro com dados salvos entre sessões',
      'Dashboard com Chart.js',
      'Interface dark com Tailwind',
      'Vários usuários e projetos'
    ],
    technologies: ['JavaScript', 'Supabase', 'TailwindCSS', 'Chart.js'],
    demoUrl: 'https://rastreador-tempo.vercel.app',
    featured: true
  },
  {
    id: 1,
    title: 'ETL GeoSaúde Itajubá',
    image: '/images/projects/etl-geosaude.svg',
    imageAlt: 'Distribuição espacial de atendimentos com rota geocodificada sobre setores censitários',
    description: 'Pipeline em TypeScript para limpar, geocodificar e publicar dados de saúde de Itajubá no PostGIS.',
    highlights: [
      'Geocodificação com fallback entre APIs',
      'Padronização de endereços antes do load',
      'Camadas prontas para abrir no QGIS'
    ],
    technologies: ['TypeScript', 'PostGIS', 'QGIS', 'ETL', 'Geocoding'],
    githubUrl: 'https://github.com/joaoleaogf/etl-geosaude-itajuba',
    featured: true
  },
  {
    id: 2,
    title: 'FIPE ETL',
    image: '/images/projects/fipe-etl.svg',
    imageAlt: 'Ilustração de pipeline ETL Extract-Transform-Load até um banco de dados',
    description: 'Coleta e transformação da Tabela FIPE em Node.js + TypeScript, com execução em Docker e reprocessamento quando a fonte muda.',
    highlights: [
      'Módulos separados por etapa do pipeline',
      'Carga incremental para não refazer tudo',
      'Docker Compose para subir local'
    ],
    technologies: ['TypeScript', 'Node.js', 'Docker', 'ETL'],
    githubUrl: 'https://github.com/joaoleaogf/fipe-etl',
    featured: true
  },
  {
    id: 3,
    title: 'Análise Descritiva – Febre Amarela',
    image: '/images/projects/febre-amarela.svg',
    imageAlt: 'Mapa de casos com hotspots e histograma de febre amarela',
    description: 'Dashboard em Angular para análise descritiva de casos e vacinação de febre amarela: gráficos por região, faixa etária e mapa de calor.',
    highlights: [
      'Gráficos descritivos com Highcharts',
      'Mapa de calor geográfico dos casos',
      'Recortes por região e faixa etária'
    ],
    technologies: ['Angular', 'TypeScript', 'Highcharts', 'Data Viz'],
    githubUrl: 'https://github.com/joaoleaogf/analise-descritiva-febre-amarela',
    featured: true
  },
  {
    id: 4,
    title: 'Otimização de Rotas – Recadastramento',
    image: '/images/projects/otimizacao-rotas.svg',
    imageAlt: 'Grafo de ruas com caminho euleriano otimizado destacado',
    description: 'Roteirização de equipes de campo com grafos para reduzir deslocamento no recadastramento imobiliário.',
    highlights: [
      'Modelagem do território como grafo',
      'Menos km percorridos por equipe',
      'Saída visual das rotas sugeridas'
    ],
    technologies: ['Python', 'Grafos', 'Algoritmos', 'Otimização'],
    githubUrl: 'https://github.com/joaoleaogf/otimizacao-rotas-recadastramento-imobiliario',
    featured: true
  },
  {
    id: 5,
    title: 'Relatórios Ad-Hoc',
    image: '/images/projects/relatorios-adhoc.svg',
    imageAlt: 'Construtor de relatórios com filtros e tabela dinâmica',
    description: 'Frontend Angular + PrimeNG para montar relatórios sob demanda, com filtros, agrupamentos e tabela dinâmica.',
    highlights: [
      'Builder de consulta com campos e filtros',
      'Tabela de resultados dinâmica',
      'Visualizações com Chart.js'
    ],
    technologies: ['Angular', 'TypeScript', 'PrimeNG', 'Chart.js'],
    githubUrl: 'https://github.com/joaoleaogf/relatorios-ad-hoc',
    featured: false
  },
  {
    id: 6,
    title: 'Sistema de Coleta Seletiva',
    image: '/images/projects/coleta-seletiva.svg',
    imageAlt: 'Mapa com pontos de coleta conectados por rota',
    description: 'Backend Node.js/Express/MongoDB e frontend Nuxt (Vue) para cadastrar pontos e gerenciar a coleta seletiva na cidade.',
    highlights: [
      'CRUD de pontos de coleta',
      'API REST com Express + Mongoose',
      'Painel em Nuxt (Vue) para operação'
    ],
    technologies: ['Nuxt.js', 'Vue.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/joaoleaogf/Coleta-seletiva',
    featured: false
  },
  {
    id: 7,
    title: 'Node.js Streams',
    image: '/images/projects/node-streams.svg',
    imageAlt: 'Chunks de dados fluindo por pipelines de stream com buffers',
    description: 'Repositório de exemplos de Readable, Writable e Transform para processar arquivos grandes sem estourar RAM.',
    highlights: [
      'Leitura em chunks de arquivos pesados',
      'Casos de uso comentados no código',
      'Comparação de uso de memória'
    ],
    technologies: ['Node.js', 'Streams', 'Performance'],
    githubUrl: 'https://github.com/joaoleaogf/NodeJs-Streams',
    featured: false
  },
  {
    id: 8,
    title: 'MVC – Psycopg2 vs SQLAlchemy',
    image: '/images/projects/mvc-postgres.svg',
    imageAlt: 'Dois bancos comparando SQL puro e ORM em camadas MVC',
    description: 'Mesma API em Python implementada com psycopg2 puro e com SQLAlchemy, para comparar verbosidade e manutenção.',
    highlights: [
      'Dois drivers, mesma regra de negócio',
      'Camadas MVC explícitas',
      'Notas no README sobre trade-offs'
    ],
    technologies: ['Python', 'PostgreSQL', 'ORM', 'MVC'],
    githubUrl: 'https://github.com/joaoleaogf/MVC-psycopg2-vs-SqlAlchemy',
    featured: false
  }
];
