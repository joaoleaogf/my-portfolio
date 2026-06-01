# Portfólio — João Leão

Site pessoal feito com React e Vite. Mostra projetos, formação, contato e um blog técnico.

## Stack

- React 18 + Vite 6
- React Router, Framer Motion, React Icons
- CSS com variáveis em `src/styles/global.css`

## Rodar local

```bash
npm install
npm run dev
```

Abre em [http://localhost:5173](http://localhost:5173).

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura (resumida)

```
src/
├── components/
│   ├── common/       # SEO, animações
│   ├── layout/       # Header, Footer
│   └── sections/     # Hero, About, Projects, Skills, Contact
├── data/
│   ├── projects.js   # cards de projetos (+ imagens em public/images/projects)
│   └── skills.js
├── pages/            # Home, Blog
└── styles/
```

## O que editar

| O quê | Onde |
|--------|------|
| Projetos (texto, links, imagem) | `src/data/projects.js` |
| Imagens dos cards | `public/images/projects/` |
| Cores e tokens | `src/styles/global.css` |
| Skills / experiência | `src/data/skills.js` |

O demo do **Rastreador de Tempo** aponta para `https://rastreador-tempo.vercel.app`. No deploy na Vercel, `vercel.json` também faz proxy de `/rastreador-tempo` para esse app.

## Deploy

Qualquer host estático que sirva a pasta `dist` funciona (Vercel, Netlify, etc.). Na Vercel, conectar o repositório costuma ser suficiente.

## Contato

- GitHub: [@joaoleaogf](https://github.com/joaoleaogf)
- LinkedIn: [João Leão](https://www.linkedin.com/in/joão-leão-630a94170/)

Itajubá, MG — Brasil
