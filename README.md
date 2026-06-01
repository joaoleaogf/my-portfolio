# Portfólio — João Leão

Site pessoal feito com Angular. Mostra projetos, formação e contato, com seção de mapa interativo.

## Stack

- Angular 21 (standalone components, signals, control flow `@if`/`@for`)
- Change detection zoneless
- Roteamento com Angular Router + prerender estático (SSG)
- Leaflet (mapa de contato)
- CSS com variáveis em `src/styles.css`

## Rodar local

```bash
npm install
npm start
```

Abre em [http://localhost:4200](http://localhost:4200).

Build de produção (gera HTML pré-renderizado):

```bash
npm run build
```

Saída estática em `dist/portfolio/browser`.

## Estrutura (resumida)

```
src/
├── app/
│   ├── core/          # SeoService (Title/Meta)
│   ├── shared/        # RevealDirective (IntersectionObserver)
│   ├── layout/        # header, footer
│   ├── sections/      # hero, about, projects, skills, contact (+ map)
│   ├── pages/         # home, not-found
│   └── data/          # projects.ts, skills.ts
├── styles.css         # tokens e estilos globais
└── index.html         # meta tags / fontes / favicon
```

## O que editar

| O quê | Onde |
|--------|------|
| Projetos (texto, links, imagem) | `src/app/data/projects.ts` |
| Imagens dos cards | `public/images/projects/` |
| Cores e tokens | `src/styles.css` |
| Skills / experiência / formação | `src/app/data/skills.ts` |
| SEO / título / descrição | `src/app/core/seo.service.ts` e `src/index.html` |

O demo do **Rastreador de Tempo** aponta para `https://rastreador-tempo.vercel.app`. No deploy na Vercel, `vercel.json` também faz proxy de `/rastreador-tempo` para esse app.

## Deploy

`vercel.json` já define `buildCommand`, `outputDirectory` (`dist/portfolio/browser`) e o fallback de rotas. Na Vercel, conectar o repositório costuma ser suficiente.

## Contato

- GitHub: [@joaoleaogf](https://github.com/joaoleaogf)
- LinkedIn: [João Leão](https://www.linkedin.com/in/joão-leão-630a94170/)

Itajubá, MG — Brasil
