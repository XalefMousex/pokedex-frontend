<div align="right">

**Idioma**: [English](README.md) | Português

</div>

<div align="center">

# 🚀 Pokédex Frontend

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pokédex" width="200" height="200">

*Uma aplicação frontend moderna e responsiva para gerenciamento da Pokédex com tecnologias de ponta*

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

[🌟 Funcionalidades](#-funcionalidades) •
[⚡ Início Rápido](#-início-rápido) •
[🏗️ Arquitetura](#️-arquitetura) •
[📚 Componentes](#-componentes) •
[🤝 Contribuindo](#-contribuindo)

</div>

---


<img width="2536" height="1317" alt="image" src="https://github.com/user-attachments/assets/d47bfbe4-37c2-4742-808d-145e24612641" />


---

## 📋 Sumário

- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Stack Tecnológica](#️-stack-tecnológica)
- [⚡ Início Rápido](#-início-rápido)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🏗️ Arquitetura](#️-arquitetura)
- [📚 Componentes](#-componentes)
- [🧪 Testes Visuais](#-testes-visuais)
- [🎨 UI/UX](#-uiux)
- [📦 Scripts](#-scripts)
- [🌐 Internacionalização](#-internacionalização)
- [🔧 Variáveis de Ambiente](#-variáveis-de-ambiente)
- [🚀 Deploy](#-deploy)
- [📱 Progressive Web App](#-progressive-web-app)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

## ✨ Funcionalidades

### 🎯 Funcionalidades Principais
- **🔐 Autenticação e Autorização**: Gerenciamento completo de usuários com integração Better-Auth
- **👤 Perfil do Usuário**: Gerenciamento e personalização de perfil
- **⭐ Sistema de Favoritos**: Marcar e gerenciar Pokémon favoritos com armazenamento persistente
- **👥 Gerenciamento de Times**: Criar, editar e organizar times de Pokémon
- **🔍 Busca Avançada**: Buscar Pokémon com filtros e opções avançadas
- **📊 Dashboard Interativo**: Visualizar estatísticas, histórico e conteúdo personalizado
- **🌍 Suporte Multi-idioma**: i18n com Inglês e Português

### 🚀 Funcionalidades Técnicas
- **⚡ Renderização Server-Side**: Next.js App Router com SSR e SSG
- **📱 Progressive Web App**: PWA com suporte offline e service worker
- **🎨 UI Moderna**: Sistema de design belo com Radix UI e Tailwind CSS
- **🌙 Tema Escuro/Claro**: Alternância de tema com detecção de preferência do sistema
- **📊 Gerenciamento de Estado**: Zustand para gerenciamento eficiente de estado
- **🔄 Busca de Dados**: TanStack Query com integração GraphQL
- **📱 Design Responsivo**: Abordagem mobile-first com layouts responsivos
- **♿ Acessibilidade**: Compatível com WCAG com suporte à navegação por teclado
- **📖 Documentação de Componentes**: Storybook para desenvolvimento e documentação de componentes

## 🛠️ Stack Tecnológica

### Framework Frontend
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://reactjs.org/)** - Biblioteca UI com recursos mais recentes
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript type-safe

### UI e Estilização
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos UI acessíveis e sem estilo
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animação
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones bonita
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Alternância de tema

### Estado e Gerenciamento de Dados
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gerenciamento de estado
- **[TanStack Query](https://tanstack.com/query)** - Busca e cache de dados
- **[GraphQL Request](https://github.com/jasonkuhrt/graphql-request)** - Cliente GraphQL
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schema

### Ferramentas de Desenvolvimento
- **[Storybook](https://storybook.js.org/)** - Desenvolvimento e documentação de componentes
- **[ESLint](https://eslint.org/)** - Linting de código com regras customizadas
- **[Prettier](https://prettier.io/)** - Formatação de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Plop](https://plopjs.com/)** - Templates de geração de código

### Build e Deploy
- **[Serwist](https://serwist.pages.dev/)** - Service worker e recursos PWA
- **[GraphQL Code Generator](https://the-guild.dev/graphql/codegen)** - Operações GraphQL type-safe
- **[Next-Intl](https://next-intl-docs.vercel.app/)** - Internacionalização

### Qualidade e Monitoramento
- **[Chromatic](https://www.chromatic.com/)** - Testes visuais e revisão de design
- **[Semantic Release](https://semantic-release.gitbook.io/)** - Versionamento automatizado
- **[Knip](https://knip.dev/)** - Detecção de código morto

## ⚡ Início Rápido

### Pré-requisitos

- **Node.js** >= 22.20.0
- **pnpm** >= 10.20.0
- **API Backend** - Certifique-se que o backend da Pokédex esteja rodando

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/GabrielGuedess/pokedex-frontend.git
cd pokedex-frontend
```

### 2️⃣ Instalar Dependências

```bash
pnpm install
```

### 3️⃣ Configuração do Ambiente

```bash
# Copie o arquivo de ambiente
cp .env.example .env

# Edite as variáveis de ambiente
nano .env
```

### 4️⃣ Gerar Tipos GraphQL

```bash
pnpm codegen
```

### 5️⃣ Iniciar Servidor de Desenvolvimento

```bash
pnpm dev
```

### 6️⃣ Acessar a Aplicação

- **🚀 Aplicação**: http://localhost:3000
- **📖 Storybook**: http://localhost:6006 (execute `pnpm storybook`)

## 📁 Estrutura do Projeto

```
📦 pokedex-frontend/
├── 📁 .storybook/              # Configuração do Storybook
├── 📁 cypress/                 # Testes E2E
│   ├── 📁 e2e/                 # Especificações de teste
│   ├── 📁 fixtures/            # Dados de teste
│   └── 📁 support/             # Utilitários de teste
├── 📁 generators/              # Geradores de código (Plop)
│   ├── 📄 plopfile.mjs         # Configuração do gerador
│   └── 📁 templates/           # Templates de componentes
├── 📁 public/                  # Assets estáticos
│   ├── 📁 images/              # Assets de imagem
│   └── 📁 svg/                 # Ícones SVG e bandeiras
├── 📁 src/                     # Código fonte
│   ├── 📄 env.ts               # Configuração de ambiente
│   ├── 📄 middleware.ts        # Middleware do Next.js
│   ├── 📁 app/                 # Páginas do App Router
│   │   ├── 📄 layout.tsx       # Layout raiz
│   │   ├── 📄 providers.tsx    # Providers globais
│   │   └── 📁 [locale]/        # Rotas internacionalizadas
│   ├── 📁 components/          # Componentes React
│   │   ├── 📁 atoms/           # Componentes UI básicos
│   │   ├── 📁 molecules/       # Componentes compostos
│   │   └── 📁 organisms/       # Componentes complexos
│   ├── 📁 constants/           # Constantes da aplicação
│   ├── 📁 contexts/            # Contextos React
│   ├── 📁 functions/           # Funções utilitárias
│   ├── 📁 graphql/             # Operações GraphQL
│   │   ├── 📁 client/          # Configuração do cliente GraphQL
│   │   ├── 📁 generated/       # Tipos gerados
│   │   ├── 📁 mutations/       # Mutações GraphQL
│   │   └── 📁 queries/         # Queries GraphQL
│   ├── 📁 hooks/               # Hooks React customizados
│   ├── 📁 i18n/                # Internacionalização
│   ├── 📁 lib/                 # Integrações de terceiros
│   ├── 📁 providers/           # Providers React
│   ├── 📁 stores/              # Stores Zustand
│   ├── 📁 stories/             # Stories do Storybook
│   ├── 📁 styles/              # Estilos globais e temas
│   ├── 📁 templates/           # Templates de página
│   ├── 📁 translations/        # Arquivos de tradução
│   ├── 📁 types/               # Definições de tipos TypeScript
│   └── 📁 utils/               # Funções utilitárias
├── 📄 next.config.ts           # Configuração do Next.js
├── 📄 tailwind.config.ts       # Configuração do Tailwind CSS
├── 📄 codegen.ts               # Config do GraphQL Code Generator
├── 📄 cypress.config.ts        # Configuração do Cypress
├── 📄 jest.config.ts           # Configuração do Jest
└── 📄 package.json             # Dependências e scripts
```

## 🏗️ Arquitetura

Este projeto segue a metodologia **Atomic Design** e princípios de **Clean Architecture**:

```
┌─────────────────────────────────────────────────────┐
│                  Camada de Apresentação             │
│  ┌─────────────────┐ ┌───────────────────────────┐  │
│  │     Páginas     │ │       Templates           │  │
│  │  (App Router)   │ │   (Componentes Layout)    │  │
│  └─────────────────┘ └───────────────────────────┘  │
└─────────────────────────────────────────────────────┘
           │                           │
           ▼                           ▼
┌─────────────────────────────────────────────────────┐
│                Camada de Componentes                │
│  ┌─────────────────┐  ┌─────────────────────────┐   │
│  │   Organismos    │  │       Moléculas         │   │
│  │  Componentes    │  │      Componentes        │   │
│  └─────────────────┘  └─────────────────────────┘   │
│                          │                          │
│                          ▼                          │
│                  ┌───────────────┐                  │
│                  │     Átomos    │                  │
│                  │ Comp. UI Básicos│                │
│                  └───────────────┘                  │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│                 Camada de Negócio                   │
│  ┌─────────────────┐ ┌───────────────────────────┐  │
│  │     Stores      │ │          Hooks            │  │
│  │ Gerenc. Estado  │ │    Lógica de Negócio      │  │
│  └─────────────────┘ └───────────────────────────┘  │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│                   Camada de Dados                   │
│  ┌─────────────────┐ ┌───────────────────────────┐  │
│  │   GraphQL       │ │       Utilitários         │  │
│  │ Queries/Mutations│ │   Mappers & Helpers      │  │
│  └─────────────────┘ └───────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Benefícios da Arquitetura:
- **🧩 Design Atômico**: Hierarquia de componentes escalável
- **🔄 Reutilização**: Componentes podem ser facilmente reutilizados e compostos
- **🧪 Testabilidade**: Cada camada pode ser testada independentemente
- **🔧 Manutenibilidade**: Separação clara de responsabilidades
- **📖 Documentação**: Integração com Storybook para documentação de componentes

## 📚 Componentes

### Sistema de Design Atômico

#### 🔸 Átomos (Componentes UI Básicos)
- **Button**: Várias variações de botão com estados de carregamento
- **Avatar**: Fotos de perfil do usuário com fallbacks
- **Badge**: Indicadores de status e rótulos
- **Input**: Inputs de formulário com validação
- **Card**: Containers de conteúdo

#### 🔹 Moléculas (Componentes Compostos)
- **SearchBox**: Input de busca com filtros
- **Navigation**: Menus de navegação e breadcrumbs
- **FormField**: Inputs de formulário com rótulos e validação
- **PokemonCard**: Card de exibição de Pokémon com ações

#### 🔷 Organismos (Componentes Complexos)
- **Header**: Cabeçalho da aplicação com navegação
- **Sidebar**: Barra lateral de navegação recolhível
- **PokemonGrid**: Grade de cards de Pokémon com paginação
- **TeamBuilder**: Interface de criação e gerenciamento de times

### Desenvolvimento de Componentes

```bash
# Gerar novos componentes usando Plop
pnpm generate:atom NomeDoComponente
pnpm generate:mole NomeDoComponente
pnpm generate:orgs NomeDoComponente

# Iniciar Storybook para desenvolvimento de componentes
pnpm storybook
```

## 🧪 Testes Visuais

#### 📱 Testes Visuais (Chromatic)
```bash
# Testes de regressão visual
pnpm chromatic
```

## 🎨 UI/UX

### Sistema de Design
- **🎨 Tema**: Paleta de cores e tipografia consistente
- **🌙 Modo Escuro/Claro**: Detecção de preferência do sistema e alternância manual
- **📱 Responsivo**: Abordagem mobile-first com layouts responsivos
- **♿ Acessibilidade**: Conformidade WCAG 2.1 AA
- **🎯 Interativo**: Animações e transições suaves
- **🎮 Navegação por Teclado**: Acessibilidade completa via teclado

### Arquitetura de Estilização
- **Tailwind CSS**: Abordagem utility-first
- **Variáveis CSS**: Personalização de tema
- **Variantes de Componente**: Estilização type-safe com `class-variance-authority`
- **Animação**: Animações customizadas com Framer Motion

## 📦 Scripts

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Iniciar servidor de desenvolvimento |
| `pnpm build` | Build para produção |
| `pnpm start` | Iniciar servidor de produção |
| `pnpm lint` | Executar ESLint |
| `pnpm lint:fix` | Corrigir problemas do ESLint |
| `pnpm typecheck` | Verificação de tipos TypeScript |
| `pnpm codegen` | Gerar tipos GraphQL |
| `pnpm storybook` | Iniciar servidor Storybook |
| `pnpm build-storybook` | Build do Storybook para produção |
| `pnpm generate` | Gerar novos componentes com Plop |
| `pnpm deadcode` | Detectar código não utilizado |

## 🌐 Internacionalização

A aplicação suporta múltiplos idiomas com Next-Intl:

- **🇺🇸 Inglês** (padrão)
- **🇧🇷 Português**

### Funcionalidades:
- **🔄 Traduções server-side**: Internacionalização amigável ao SEO
- **🌍 Roteamento de locale**: Rotas `/en/` e `/pt/`
- **📱 Detecção de locale**: Detecção de preferência do navegador
- **🎯 Traduções type-safe**: Integração com TypeScript

### Adicionando Novos Idiomas

1. **Adicionar arquivos de locale** em `src/translations/locales/{codigo-idioma}/`
2. **Atualizar configuração de roteamento** em `src/i18n/routing.ts`
3. **Gerar tipos** com `pnpm build`

### Uso em Componentes

```tsx
import { useTranslations } from 'next-intl';

const Component = () => {
  const t = useTranslations('component');

  return <h1>{t('title')}</h1>;
};
```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` com as seguintes variáveis:

```bash
# Configuração da API
NEXT_PUBLIC_API_URL="http://localhost:3000"

# Opcional: Analytics e monitoramento
NEXT_PUBLIC_GA_ID=""
NEXT_PUBLIC_SENTRY_DSN=""

# Opcional: Chromatic (para testes visuais)
CHROMATIC_PROJECT_TOKEN=""
```

### Tipos de Ambiente
- **NEXT_PUBLIC_\***: Variáveis client-side (expostas ao navegador)
- **Server-only**: Variáveis apenas server-side (seguras)

## 🚀 Deploy

### Build de Produção

```bash
# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

### Plataformas de Deploy

#### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Comando de build
pnpm build

# Diretório de publicação
.next
```

#### Docker
```bash
# Build da imagem Docker
docker build -t pokedex-frontend .

# Executar container
docker run -p 3000:3000 pokedex-frontend
```

## 📱 Progressive Web App

A aplicação é uma PWA totalmente funcional com:

### Funcionalidades:
- **📱 Instalável**: Adicionar à tela inicial em dispositivos móveis
- **⚡ Suporte Offline**: Service worker com estratégias de cache
- **🔄 Sincronização em Background**: Sincronizar dados quando a conexão for restaurada
- **📢 Notificações Push**: (Funcionalidade futura)
- **🖥️ Suporte Desktop**: Funciona em navegadores desktop

### Configuração PWA:
- **Service Worker**: Gerado com Serwist
- **Manifest**: Configurado em `src/app/manifest.ts`
- **Ícones**: Ícones otimizados para diferentes plataformas
- **Cache**: Cache estratégico para performance otimizada

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estes passos:

1. **🍴 Fork** o repositório
2. **🌿 Criar** uma branch de feature: `git checkout -b feature/funcionalidade-incrivel`
3. **📝 Commit** suas mudanças: `git commit -m 'feat: adiciona funcionalidade incrível'`
4. **🚀 Push** para a branch: `git push origin feature/funcionalidade-incrivel`
5. **🔄 Submeter** um Pull Request

### Diretrizes de Desenvolvimento

- ✅ Seguir o estilo de código existente (ESLint + Prettier)
- 🧪 Adicionar testes para novas funcionalidades
- 📚 Atualizar stories do Storybook para novos componentes
- 🔍 Garantir que todos os testes passem (`pnpm test` + `pnpm cy:run`)
- 📋 Seguir mensagens de commit convencionais
- 🎯 Manter componentes atômicos e reutilizáveis
- ♿ Garantir conformidade com acessibilidade

### Geração de Código

Use Plop para geração consistente de código:

```bash
# Gerar novo componente atom
pnpm generate:atom NovoComponente

# Gerar novo componente molecule
pnpm generate:mole NovoComponente

# Gerar novo componente organism
pnpm generate:orgs NovoComponente
```

## 📄 Licença

Este projeto está licenciado sob a licença **UNLICENSED**.

---

<div align="center">

**Feito com ❤️ por [Gabriel Guedes](https://github.com/GabrielGuedess)**

⭐ **Dê uma estrela neste projeto se ele foi útil!**

</div>
