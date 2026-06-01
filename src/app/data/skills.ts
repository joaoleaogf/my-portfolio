export interface Specialty {
  id: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  /** Início no formato ISO (AAAA-MM-DD). A duração é calculada a partir daqui. */
  startDate: string;
  /** Fim no formato ISO. Ausente = cargo atual (calcula até hoje). */
  endDate?: string;
  type: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
  current: boolean;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export const specialties: Specialty[] = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Desenvolvimento de APIs RESTful, microserviços e servidores para aplicações mobile e web'
  },
  {
    id: 'etl',
    title: 'ETL & Pipelines',
    description: 'Criação de pipelines robustos para processamento e transformação de grandes volumes de dados'
  },
  {
    id: 'bi',
    title: 'BI & Dashboards',
    description: 'Construção de dashboards interativos com Elasticsearch, Highcharts e visualizações avançadas'
  },
  {
    id: 'geo',
    title: 'Geoprocessamento',
    description: 'Análise espacial, geocodificação e visualização de dados geográficos com PostGIS e QGIS'
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Backend & APIs',
    skills: ['Node.js', 'APIs RESTful', 'PostgreSQL', 'Elasticsearch', 'MongoDB', 'Microserviços']
  },
  {
    id: 2,
    title: 'ETL & Pipelines',
    skills: ['Node.js', 'Python', 'Docker', 'Data Processing']
  },
  {
    id: 3,
    title: 'BI & Visualização',
    skills: ['Highcharts', 'Elasticsearch Queries', 'Dashboards Interativos', 'Chart.js']
  },
  {
    id: 4,
    title: 'Web Maps & Geo',
    skills: ['Leaflet', 'Google Maps API', 'OpenStreetMap', 'PostGIS', 'Índices Espaciais', 'Roteamento & Grafos']
  },
  {
    id: 5,
    title: 'Frontend',
    skills: ['React', 'Angular', 'JavaScript', 'HTML5/CSS', 'Vue.js']
  },
  {
    id: 6,
    title: 'Ferramentas & Outros',
    skills: ['Git', 'Docker', 'Nginx', 'QGIS', 'Algoritmos & Grafos']
  }
];

/**
 * Duração legível entre o início e o fim (ou hoje, se cargo atual).
 * Ex.: "2 anos 8 meses", "2 anos", "8 meses", "1 mês".
 */
export function formatDuration(exp: Experience, now: Date = new Date()): string {
  const start = new Date(exp.startDate);
  const end = exp.endDate ? new Date(exp.endDate) : now;

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  months = Math.max(0, months);

  const years = Math.floor(months / 12);
  const rest = months % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'ano' : 'anos'}`);
  if (rest > 0) parts.push(`${rest} ${rest === 1 ? 'mês' : 'meses'}`);
  return parts.length ? parts.join(' ') : 'menos de um mês';
}

export const experience: Experience[] = [
  {
    id: 1,
    company: 'DDMX',
    role: 'Desenvolvedor de Software',
    period: 'Out 2023 - Presente',
    startDate: '2023-10-01',
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
    startDate: '2021-10-01',
    endDate: '2023-10-01',
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

export const education: Education[] = [
  {
    id: 1,
    institution: 'Universidade Federal de Itajubá',
    degree: 'Graduação Sanduíche',
    period: 'Mar 2021 - Mar 2026',
    description: 'Desenvolvimento web, Algoritmos e mais'
  }
];
