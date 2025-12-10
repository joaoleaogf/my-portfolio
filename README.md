# Portfolio João Leão

Portfólio pessoal desenvolvido com React e Vite, apresentando projetos, habilidades e experiência profissional em ETL, Geoprocessamento e Backend.

## 🚀 Tecnologias Utilizadas

- **React** 18.3.1 - Biblioteca JavaScript para construção de interfaces
- **Vite** 6.0.5 - Build tool rápido e moderno
- **React Icons** 5.0.1 - Biblioteca de ícones
- **CSS3** - Estilização com variáveis CSS e animações

## ✨ Características

- 🎨 **Design Dark Mode Premium** - Interface moderna com gradientes vibrantes
- 💎 **Glassmorphism** - Efeitos de vidro fosco nos cards
- ⚡ **Animações Suaves** - Transições e micro-animações
- 📱 **Totalmente Responsivo** - Adaptado para desktop, tablet e mobile
- 🎯 **SEO Otimizado** - Meta tags e estrutura semântica
- 🔥 **Performance** - Carregamento rápido com Vite

## 🛠️ Como Executar Localmente

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em: http://localhost:5173

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Para visualizar a build de produção:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
portifolio/
├── public/              # Arquivos públicos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/           # Dados do portfólio
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/         # Estilos globais
│   │   └── global.css
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Ponto de entrada
├── index.html          # HTML base
├── package.json        # Dependências
└── vite.config.js      # Configuração Vite
```

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS em `src/styles/global.css`:

```css
:root {
  --color-accent-blue: #1f6feb;
  --color-accent-purple: #8b5cf6;
  --color-accent-cyan: #58a6ff;
  /* ... outras cores */
}
```

### Adicionar Projetos

Edite o arquivo `src/data/projects.js` e adicione novos projetos ao array.

### Atualizar Habilidades

Edite o arquivo `src/data/skills.js` para modificar categorias e tecnologias.

### Informações de Contato

Atualize os links nos componentes:
- `src/components/Hero.jsx` - Email no Hero
- `src/components/Contact.jsx` - Informações de contato

## 🚀 Deploy

### Vercel

1. Faça push do código para o GitHub
2. Conecte seu repositório na [Vercel](https://vercel.com)
3. Deploy automático!

### Netlify

1. Faça build do projeto: `npm run build`
2. Faça upload da pasta `dist` no [Netlify](https://netlify.com)

### GitHub Pages

1. Instale: `npm install --save-dev gh-pages`
2. Adicione ao `package.json`:
```json
"homepage": "https://seu-usuario.github.io/portifolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Execute: `npm run deploy`

## 📝 Licença

Este projeto foi desenvolvido para uso pessoal de João Leão.

## 👤 Autor

**João Leão**
- GitHub: [@joaoleaogf](https://github.com/joaoleaogf)
- LinkedIn: [João Leão](https://www.linkedin.com/in/joão-leão-630a94170/)
- Localização: Itajubá, MG - Brasil

---

Desenvolvido com ❤️ e React
