# GamerZone 🎮

<img src="./public/logo/logo-gamer-zone.png" alt="Logo GamerZone" width="100px" />
<img src="./public/logo/texto-gamer-zone.png" alt="Logo GamerZone" width="180px" />

> Projeto de uma interface web moderna e responsiva para uma plataforma de descoberta de jogos, permitindo aos usuários pesquisar, filtrar e ordenar um vasto catálogo de games.

**Acesse a aplicação em produção:** [**GamerZone**](https://gamerzone-five.vercel.app/ )
---

## 🚀 Sobre o Projeto

O GamerZone foi desenvolvido como um projeto de portfólio para demonstrar habilidades em desenvolvimento frontend utilizando tecnologias modernas e as melhores práticas do ecossistema React. A aplicação consome a API **RAWG Video Games Database** para buscar e exibir informações detalhadas sobre jogos.

O foco principal deste projeto é a **gestão de estado complexa** (filtros, ordenação e paginação) e a **construção de uma interface de usuário acessível e performática** com o uso de **TypeScript** para garantir a robustez do código.

### ✨ Funcionalidades Principais

*   **Listagem de Jogos:** Visualização de jogos em formato de cards.
*   **Busca Dinâmica:** Pesquisa de jogos por nome em tempo real.
*   **Filtro por Gênero:** Seleção de um ou mais gêneros para refinar a busca.
*   **Ordenação:** Opções de ordenação por relevância, data de lançamento, nome e mais.
*   **Design Responsivo:** Experiência de uso otimizada para diferentes tamanhos de tela.
*   **Modo Claro e Escuro (Dark Mode):** Alternância de tema para maior conforto visual.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando ferramentas modernas do ecossistema JavaScript, React e Next.js:

### **Framework e Linguagem**
- **[Next.js](https://nextjs.org/)** — Framework React full-stack com App Router.
- **[React](https://react.dev/)** — Biblioteca principal da interface.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior robustez.

### **UI e Estilização**
- **[Tailwind CSS](https://tailwindcss.com/)** — Utilitário de estilização altamente customizável.
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Resolve conflitos de classes do Tailwind.
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** — Animações prontas para Tailwind.
- **[lucide-react](https://lucide.dev/)** — Ícones leves e modernos.
- **[react-icons](https://react-icons.github.io/react-icons/)** — Pacote de ícones adicionais.
- **[aceternity-ui](https://ui.aceternity.com/)** — Componentes premium estilizados com Tailwind.
- **[framer-motion](https://www.framer.com/motion/)** — Animações avançadas para React.

### **Carrosséis e UI avançada**
- **[Swiper](https://swiperjs.com/)** — Slider moderno e responsivo.
- **[Primereact](https://primereact.org/)** — Componentes completos e profissionais.

### **Firebase**
- **[Firebase](https://firebase.google.com/)** — Autenticação, Firestore e serviços na nuvem.

### **Utilidades**
- **[js-cookie](https://github.com/js-cookie/js-cookie)** — Manipulação simplificada de cookies.
- **[react-use](https://github.com/streamich/react-use)** — Coleção de hooks úteis.
- **[@dnd-kit](https://dndkit.com/)** — Drag & Drop moderno e acessível.

### **Ferramentas de Desenvolvimento**
- **ESLint** + **eslint-config-next**
- **PostCSS**
- **TypeScript** (como dev dependency)

### **Integrações e Funcionalidades**

*   **RAWG API** — Integração com a API de jogos para dados em tempo real.
*   **Custom Hooks** — Uso de hooks personalizados (`useGames`, `useGenres`) para encapsular a lógica de requisição e estado.
*   **Tratamento de Erros e Loading** — Implementação de estados de carregamento e erro para melhor UX.

---

## ⚙️ Scripts

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o ambiente de desenvolvimento local. |
| `npm run build` | Gera a build de produção. |
| `npm start` | Inicia o servidor de produção (após o build). |

---

## 🧩 Configurações de Desenvolvimento

### **Pré-requisitos**

*   [Node.js](https://nodejs.org/en/ ) (versão 18.x ou superior)
*   [npm](https://www.npmjs.com/ ) ou [Yarn](https://yarnpkg.com/ )
*   Uma chave de API da [RAWG](https://rawg.io/apidocs )

### **Instalação**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/dimiendrixmmiranda/gamerzone.git
    cd gamerzone
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configure as variáveis de ambiente:**
    *   Crie um arquivo chamado `.env` na raiz do projeto.
    *   Adicione sua chave da API RAWG a este arquivo. O Vite exige o prefixo `VITE_` para variáveis de ambiente acessíveis no frontend:

    ```
    VITE_API_KEY=SUA_CHAVE_DA_API_AQUI
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

5.  O projeto será iniciado em `http://localhost:5173` (ou a porta indicada no seu terminal ).

---

## 🧱 Estrutura do Projeto

A estrutura do projeto segue uma organização modular, focada na separação de responsabilidades:

/src  
│  
├── app/ # Rotas e páginas do Next.js (App Router)  
│  
├── components/ # Componentes reutilizáveis de UI (Header, Card, Tabela, etc.)  
│  
├── constants/ # Dados estáticos e listas mockadas (times, jogadores, configs...)  
│  
├── interfaces/ # Tipos e interfaces TypeScript (Jogador, Time, Configs...)  
│  
└── lib/ # Lógicas auxiliares e integrações (Firebase, hooks, contextos, utils)  
│  
├── context/ # Contextos globais (AuthContext, ConfigContext...)  
├── firebase/ # Inicialização do Firebase + serviços  
├── hooks/ # Hooks customizados (useListaTimesDaRodada, useContadorSemanal...)  
└── utils/ # Funções utilitárias diversas (formatters, helpers)  

---

## 🔥 Recursos Implementados

*   **Componentização Avançada:** Uso de componentes funcionais e hooks para criar uma UI modular e de fácil manutenção.
*   **Tipagem Estrita:** Definição de interfaces com TypeScript para todos os objetos de dados (Jogos, Gêneros, Plataformas).
*   **Gerenciamento de Estado com Zustand:** Utilização de um *store* global para gerenciar o estado dos filtros e da ordenação, desacoplando a lógica da UI.
*   **Design System (Chakra UI):** Uso de um sistema de design pronto para garantir acessibilidade e consistência visual.

---

## 📦 Dependências Principais

| Categoria | Pacote | Descrição |
|----------|--------|-----------|
| **Framework** | `next`, `react`, `react-dom` | Base da aplicação utilizando Next.js 15 e React 19. |
| **Estado, Motion e Hooks** | `framer-motion`, `motion`, `react-use` | Animações, controles de movimento e hooks utilitários. |
| **UI / Estilização** | `tailwindcss`, `tailwindcss-animate`, `tailwind-merge` | Estilização com Tailwind, animações e merge inteligente de classes. |
|  | `lucide-react`, `react-icons` | Conjuntos de ícones para UI. |
|  | `aceternity-ui` | Componentes estilizados adicionais. |
| **Drag & Drop** | `@dnd-kit/core`, `@dnd-kit/modifiers`, `@dnd-kit/sortable` | Sistema de Drag & Drop moderno e flexível. |
| **Firebase** | `firebase` | Autenticação, Firestore e serviços do Firebase. |
| **Utilidades** | `clsx`, `class-variance-authority` | Manipulação e variação de classes CSS. |
| **JS Cookie**  | `js-cookie` | Controle de cookies pelo cliente. |
| **Swiper** | `swiper` | Carrosséis e sliders avançados. |

---

## 🛠️ Dependências de Desenvolvimento

| Categoria | Pacote | Descrição |
|----------|--------|-----------|
| **TypeScript** | `typescript`, `@types/react`, `@types/react-dom`, `@types/node` | Suporte completo para tipagem. |
| **Linting** | `eslint`, `eslint-config-next`, `@eslint/eslintrc` | Padronização e análise estática do código. |
| **Build / CSS** | `postcss` | Processamento de CSS para Tailwind. |
| **Types** | `@types/js-cookie`, `@types/leaflet` | Tipagem adicional para libs externas. |

---

## ☁️ Deploy na Vercel

O projeto pode ser facilmente publicado na **Vercel**, aproveitando a integração nativa com **Vite/React**.

### **Passos para Deploy**

1.  Crie uma conta na [Vercel](https://vercel.com/ ) e conecte seu repositório Git.
2.  Configure a **branch principal** (ex: `main` ou `master`) para deploy automático.
3.  Configure a variável de ambiente **`VITE_API_KEY`** com sua chave da API RAWG.
4.  Clique em **Deploy**. A Vercel fará o build automático e disponibilizará a URL pública.

---

## 📜 Licença

Este projeto está sob a licença MIT.

---

## 💬 Contato

**Dimi Endrix M. Miranda**

*   GitHub: [@dimiendrixmmiranda](https://github.com/dimiendrixmmiranda )
*   LinkedIn: [Dimi Endrix](https://www.linkedin.com/in/dimi-endrix-m-miranda-038332203/ )
*   Email: [seu.email@exemplo.com](mailto:seu.email@exemplo.com)