export const specialties = [
    {
        id: 'backend',
        title: 'Backend & APIs',
        icon: 'server',
        description: 'Desenvolvimento de APIs RESTful, microserviços e servidores para aplicações mobile e web'
    },
    {
        id: 'etl',
        title: 'ETL & Pipelines',
        icon: 'zap',
        description: 'Criação de pipelines robustos para processamento e transformação de grandes volumes de dados'
    },
    {
        id: 'bi',
        title: 'BI & Dashboards',
        icon: 'bar-chart',
        description: 'Construção de dashboards interativos com Elasticsearch, Highcharts e visualizações avançadas'
    },
    {
        id: 'geo',
        title: 'Geoprocessamento',
        icon: 'map',
        description: 'Análise espacial, geocodificação e visualização de dados geográficos com PostGIS e QGIS'
    }
];

export const skillsCategories = [
    {
        id: 1,
        title: 'Backend & APIs',
        icon: 'server',
        skills: [
            { name: 'Node.js', level: 90 },
            { name: 'APIs RESTful', level: 88 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'Elasticsearch', level: 88 },
            { name: 'MongoDB', level: 80 },
            { name: 'Microserviços', level: 80 }
        ]
    },
    {
        id: 2,
        title: 'ETL & Pipelines',
        icon: 'zap',
        skills: [
            { name: 'Node.js', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'Docker', level: 80 },
            { name: 'Data Processing', level: 90 }
        ]
    },
    {
        id: 3,
        title: 'BI & Visualização',
        icon: 'bar-chart',
        skills: [
            { name: 'Highcharts', level: 88 },
            { name: 'Elasticsearch Queries', level: 85 },
            { name: 'Dashboards Interativos', level: 85 },
            { name: 'Chart.js', level: 80 }
        ]
    },
    {
        id: 4,
        title: 'Web Maps & Geo',
        icon: 'map',
        skills: [
            { name: 'Leaflet', level: 88 },
            { name: 'Google Maps API', level: 85 },
            { name: 'OpenStreetMap', level: 85 },
            { name: 'PostGIS', level: 85 },
            { name: 'Índices Espaciais', level: 82 },
            { name: 'Roteamento & Grafos', level: 80 }
        ]
    },
    {
        id: 5,
        title: 'Frontend',
        icon: 'grid',
        skills: [
            { name: 'React', level: 85 },
            { name: 'Angular', level: 82 },
            { name: 'JavaScript', level: 90 },
            { name: 'HTML5/CSS', level: 88 },
            { name: 'Vue.js', level: 78 }
        ]
    },
    {
        id: 6,
        title: 'Ferramentas & Outros',
        icon: 'layers',
        skills: [
            { name: 'Git', level: 88 },
            { name: 'Docker', level: 80 },
            { name: 'Nginx', level: 75 },
            { name: 'QGIS', level: 85 },
            { name: 'Algoritmos & Grafos', level: 85 }
        ]
    }
];

export const experience = [
    {
        id: 1,
        company: 'DDMX',
        role: 'Desenvolvedor de Software',
        period: 'Out 2023 - Presente',
        duration: '1 ano 8 meses',
        type: 'Tempo Integral',
        location: 'Itajubá, Minas Gerais, Brasil · Presencial',
        description: 'Desenvolvimento de software full-stack com foco em soluções de dados e backend.',
        highlights: [
            'Desenvolvimento de servidores REST para backend de aplicativos mobile, com integração de sistemas e ferramentas internas da empresa.',
            'Manutenção e otimização de telas de BI interativas, consumindo dados de ETLs baseados em Elasticsearch e utilizando Highcharts para visualizações gráficas avançadas.',
            'Aprimoramento técnico em JavaScript, Highcharts e Elasticsearch, garantindo apresentações dinâmicas de dados sem comprometer a carga dos servidores.',
            'Desenvolvimento de novos ETLs, analisando problemas dos clientes e estruturando soluções baseadas nos dados coletados pela empresa.',
            'Participação no treinamento de novos estagiários, repassando conhecimentos sobre as ferramentas e metodologias utilizadas.',
            'Atuação na migração de sistemas e testes da nova plataforma da empresa.'
        ],
        skills: ['Elasticsearch', 'JavaScript', 'Node.js', 'Highcharts', 'REST APIs', 'ETL'],
        current: true
    },
    {
        id: 2,
        company: 'DDMX',
        role: 'Estagiário de Desenvolvimento',
        period: 'Out 2021 - Out 2023',
        duration: '2 anos',
        type: 'Estágio',
        location: 'Itajubá, Minas Gerais, Brasil · Remoto',
        description: 'Primeiro contato profissional com desenvolvimento de software em ambiente corporativo.',
        highlights: [
            'Primeiro contato profissional com Elasticsearch e MongoDB, com foco na elaboração de queries otimizadas para extração de dados em tempo real, possibilitando análises mais eficientes.',
            'Desenvolvimento da primeira API REST com processamento assíncrono, garantindo escalabilidade e desempenho para um projeto de previsão de ocorrências de quedas de energia.',
            'Implantação bem-sucedida do projeto, que evoluiu para um produto comercializado para clientes da empresa.',
            'Desenvolvimento de interfaces front-end com AngularJS para dashboards e painéis de controle internos.',
            'Efetivação para Desenvolvedor de Software, reconhecendo o impacto do trabalho desenvolvido durante o estágio.'
        ],
        skills: ['Elasticsearch', 'MongoDB', 'AngularJS', 'API REST', 'JavaScript'],
        current: false
    }
];

export const education = [
    {
        id: 1,
        institution: 'Universidade Federal de Itajubá',
        degree: 'Graduação Sanduíche',
        period: 'Mar 2021 - Mar 2026',
        description: 'Desenvolvimento web, Algoritmos e mais',
        icon: 'book'
    }
];
