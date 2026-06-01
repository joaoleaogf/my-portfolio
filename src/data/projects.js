export const projects = [
    {
        id: 10,
        title: 'Dashboard Interativo BI',
        image: '/images/projects/bi-dashboard.jpg',
        imageAlt: 'Dashboard com gráficos de Business Intelligence',
        description: 'Desenvolvimento de dashboards de Business Intelligence (BI) com Elasticsearch e Highcharts para visualização avançada e em tempo real de grandes volumes de dados operacionais.',
        highlights: [
            'Consultas otimizadas no Elasticsearch para milhões de registros',
            'Gráficos dinâmicos e responsivos com Highcharts',
            'Filtros interativos e relatórios exportáveis'
        ],
        technologies: ['Elasticsearch', 'Highcharts', 'JavaScript', 'Node.js'],
        demoUrl: '#',
        featured: true
    },
    {
        id: 9,
        title: 'Rastreador de Tempo',
        image: '/images/projects/rastreador-tempo.jpg',
        imageAlt: 'Dashboard com gráficos de produtividade',
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
        image: '/images/projects/etl-geosaude.jpg',
        imageAlt: 'Mapa com dados geoespaciais de saúde',
        description: 'Pipeline em Python para limpar, geocodificar e publicar dados de saúde de Itajubá no PostGIS.',
        highlights: [
            'Geocodificação com fallback entre APIs',
            'Padronização de endereços antes do load',
            'Camadas prontas para abrir no QGIS'
        ],
        technologies: ['Python', 'PostGIS', 'QGIS', 'ETL', 'Geocoding'],
        githubUrl: 'https://github.com/joaoleaogf/etl-geosaude-itajuba',
        featured: true
    },
    {
        id: 2,
        title: 'FIPE ETL',
        image: '/images/projects/fipe-etl.jpg',
        imageAlt: 'Carros em concessionária',
        description: 'Coleta e transformação da Tabela FIPE em Node.js, com jobs agendados e reprocessamento quando a fonte muda.',
        highlights: [
            'Módulos separados por etapa do pipeline',
            'Carga incremental para não refazer tudo',
            'Docker Compose para subir local'
        ],
        technologies: ['Node.js', 'Docker', 'ETL', 'API'],
        githubUrl: 'https://github.com/joaoleaogf/fipe-etl',
        featured: true
    },
    {
        id: 3,
        title: 'Análise Descritiva – Febre Amarela',
        image: '/images/projects/febre-amarela.jpg',
        imageAlt: 'Análise de dados em notebook',
        description: 'Estudo epidemiológico em Python/QGIS: estatísticas descritivas e mapas dos casos de febre amarela.',
        highlights: [
            'Tabelas e gráficos das séries temporais',
            'Mapas de concentração por região',
            'Scripts reproduzíveis para atualizar os dados'
        ],
        technologies: ['Python', 'QGIS', 'Análise Espacial', 'Estatística'],
        githubUrl: 'https://github.com/joaoleaogf/analise-descritiva-febre-amarela',
        featured: true
    },
    {
        id: 4,
        title: 'Otimização de Rotas – Recadastramento',
        image: '/images/projects/otimizacao-rotas.jpg',
        imageAlt: 'Entrega urbana e logística de rotas',
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
        image: '/images/projects/relatorios-adhoc.jpg',
        imageAlt: 'Tela de relatórios e métricas',
        description: 'Frontend para montar relatórios sob demanda, com filtros e exportação sem depender de BI externo.',
        highlights: [
            'Componentes reutilizáveis por tipo de relatório',
            'Layout responsivo',
            'Exportação em mais de um formato'
        ],
        technologies: ['JavaScript', 'HTML', 'CSS', 'Frontend'],
        githubUrl: 'https://github.com/joaoleaogf/relatorios-ad-hoc',
        featured: false
    },
    {
        id: 6,
        title: 'Sistema de Coleta Seletiva',
        image: '/images/projects/coleta-seletiva.jpg',
        imageAlt: 'Gestão urbana e sustentabilidade',
        description: 'API em Node.js e painel Vue para cadastrar rotas, pontos e status da coleta seletiva na cidade.',
        highlights: [
            'CRUD de rotas e pontos de coleta',
            'API REST documentada',
            'Painel Vue para operação'
        ],
        technologies: ['Vue.js', 'Node.js', 'API', 'Frontend'],
        githubUrl: 'https://github.com/joaoleaogf/Coleta-seletiva',
        featured: false
    },
    {
        id: 7,
        title: 'Node.js Streams',
        image: '/images/projects/node-streams.jpg',
        imageAlt: 'Código em editor de desenvolvimento',
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
        image: '/images/projects/mvc-postgres.jpg',
        imageAlt: 'Servidor e banco de dados',
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
