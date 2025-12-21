<div align="right">

**Language**: English | [Português](README.pt-BR.md)

</div>

<div align="center">

# 🚀 Pokédex Frontend

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pokédex" width="200" height="200">

*A modern and responsive frontend application for Pokédex management with cutting-edge technologies*

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

[🌟 Features](#-features) •
[⚡ Quick Start](#-quick-start) •
[🏗️ Architecture](#️-architecture) •
[📚 Components](#-components) •
[🤝 Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🏗️ Architecture](#️-architecture)
- [📚 Components](#-components)
- [🧪 Visual Testing](#-visual-testing)
- [🎨 UI/UX](#-uiux)
- [📦 Scripts](#-scripts)
- [🌐 Internationalization](#-internationalization)
- [🔧 Environment Variables](#-environment-variables)
- [🚀 Deployment](#-deployment)
- [📱 Progressive Web App](#-progressive-web-app)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

### 🎯 Core Features
- **🔐 Authentication & Authorization**: Complete user management with Better-Auth integration
- **👤 User Profile**: Profile management and customization
- **⭐ Favorites System**: Mark and manage favorite Pokémon with persistent storage
- **👥 Team Management**: Create, edit, and organize Pokémon teams
- **🔍 Advanced Search**: Search Pokémon with filters and advanced options
- **📊 Interactive Dashboard**: View statistics, history, and personalized content
- **🌍 Multi-language Support**: i18n with English and Portuguese

### 🚀 Technical Features
- **⚡ Server-Side Rendering**: Next.js App Router with SSR and SSG
- **📱 Progressive Web App**: PWA with offline support and service worker
- **🎨 Modern UI**: Beautiful design system with Radix UI and Tailwind CSS
- **🌙 Dark/Light Theme**: Theme switching with system preference detection
- **📊 State Management**: Zustand for efficient state management
- **🔄 Data Fetching**: TanStack Query with GraphQL integration
- **📱 Responsive Design**: Mobile-first approach with responsive layouts
- **♿ Accessibility**: WCAG compliant with keyboard navigation support
- **📖 Component Documentation**: Storybook for component development and documentation

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### UI & Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme switching

### State & Data Management
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State management
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching
- **[GraphQL Request](https://github.com/jasonkuhrt/graphql-request)** - GraphQL client
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation

### Development Tools
- **[Storybook](https://storybook.js.org/)** - Component development and documentation
- **[ESLint](https://eslint.org/)** - Code linting with custom rules
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Plop](https://plopjs.com/)** - Code generation templates

### Build & Deployment
- **[Serwist](https://serwist.pages.dev/)** - Service worker and PWA features
- **[GraphQL Code Generator](https://the-guild.dev/graphql/codegen)** - Type-safe GraphQL operations
- **[Next-Intl](https://next-intl-docs.vercel.app/)** - Internationalization

### Quality & Monitoring
- **[Chromatic](https://www.chromatic.com/)** - Visual testing and design review
- **[Semantic Release](https://semantic-release.gitbook.io/)** - Automated versioning
- **[Knip](https://knip.dev/)** - Dead code detection

## ⚡ Quick Start

### Prerequisites

- **Node.js** >= 22.20.0
- **pnpm** >= 10.20.0
- **Backend API** - Make sure the Pokédex backend is running

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/GabrielGuedess/pokedex-frontend.git
cd pokedex-frontend
```

### 2️⃣ Install Dependencies

```bash
pnpm install
```

### 3️⃣ Environment Setup

```bash
# Copy the environment file
cp .env.example .env

# Edit the environment variables
nano .env
```

### 4️⃣ Generate GraphQL Types

```bash
pnpm codegen
```

### 5️⃣ Start Development Server

```bash
pnpm dev
```

### 6️⃣ Access the Application

- **🚀 Application**: http://localhost:3000
- **📖 Storybook**: http://localhost:6006 (run `pnpm storybook`)

## 📁 Project Structure

```
📦 pokedex-frontend/
├── 📁 .storybook/              # Storybook configuration
├── 📁 cypress/                 # E2E tests
│   ├── 📁 e2e/                 # Test specifications
│   ├── 📁 fixtures/            # Test data
│   └── 📁 support/             # Test utilities
├── 📁 generators/              # Code generators (Plop)
│   ├── 📄 plopfile.mjs         # Generator configuration
│   └── 📁 templates/           # Component templates
├── 📁 public/                  # Static assets
│   ├── 📁 images/              # Image assets
│   └── 📁 svg/                 # SVG icons and flags
├── 📁 src/                     # Source code
│   ├── 📄 env.ts               # Environment configuration
│   ├── 📄 middleware.ts        # Next.js middleware
│   ├── 📁 app/                 # App Router pages
│   │   ├── 📄 layout.tsx       # Root layout
│   │   ├── 📄 providers.tsx    # Global providers
│   │   └── 📁 [locale]/        # Internationalized routes
│   ├── 📁 components/          # React components
│   │   ├── 📁 atoms/           # Basic UI components
│   │   ├── 📁 molecules/       # Composite components
│   │   └── 📁 organisms/       # Complex components
│   ├── 📁 constants/           # Application constants
│   ├── 📁 contexts/            # React contexts
│   ├── 📁 functions/           # Utility functions
│   ├── 📁 graphql/             # GraphQL operations
│   │   ├── 📁 client/          # GraphQL client setup
│   │   ├── 📁 generated/       # Generated types
│   │   ├── 📁 mutations/       # GraphQL mutations
│   │   └── 📁 queries/         # GraphQL queries
│   ├── 📁 hooks/               # Custom React hooks
│   ├── 📁 i18n/                # Internationalization
│   ├── 📁 lib/                 # Third-party integrations
│   ├── 📁 providers/           # React providers
│   ├── 📁 stores/              # Zustand stores
│   ├── 📁 stories/             # Storybook stories
│   ├── 📁 styles/              # Global styles and themes
│   ├── 📁 templates/           # Page templates
│   ├── 📁 translations/        # Translation files
│   ├── 📁 types/               # TypeScript type definitions
│   └── 📁 utils/               # Utility functions
├── 📄 next.config.ts           # Next.js configuration
├── 📄 tailwind.config.ts       # Tailwind CSS configuration
├── 📄 codegen.ts               # GraphQL Code Generator config
├── 📄 cypress.config.ts        # Cypress configuration
├── 📄 jest.config.ts           # Jest configuration
└── 📄 package.json             # Dependencies & scripts
```

## 🏗️ Architecture

This project follows the **Atomic Design** methodology and **Clean Architecture** principles:

```
┌─────────────────────────────────────────────────────┐
│                    Presentation Layer               │
│  ┌─────────────────┐ ┌───────────────────────────┐  │
│  │     Pages       │ │       Templates           │  │
│  │  (App Router)   │ │   (Layout Components)     │  │
│  └─────────────────┘ └───────────────────────────┘  │
└─────────────────────────────────────────────────────┘
           │                           │
           ▼                           ▼
┌─────────────────────────────────────────────────────┐
│                 Component Layer                     │
│  ┌─────────────────┐  ┌─────────────────────────┐   │
│  │    Organisms    │  │       Molecules         │   │
│  │    Components   │  │       Components        │   │
│  └─────────────────┘  └─────────────────────────┘   │
│                          │                          │
│                          ▼                          │
│                  ┌───────────────┐                  │
│                  │     Atoms     │                  │
│                  │ Basic UI Comp │                  │
│                  └───────────────┘                  │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│                  Business Layer                     │
│  ┌─────────────────┐ ┌───────────────────────────┐  │
│  │     Stores      │ │          Hooks            │  │
│  │ State Management│ │    Business Logic         │  │
│  └─────────────────┘ └───────────────────────────┘  │
└─────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────┐
│                     Data Layer                      │
│  ┌─────────────────┐ ┌───────────────────────────┐  │
│  │   GraphQL       │ │       Utilities           │  │
│  │ Queries/Mutations│ │   Mappers & Helpers      │  │
│  └─────────────────┘ └───────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Architecture Benefits:
- **🧩 Atomic Design**: Scalable component hierarchy
- **🔄 Reusability**: Components can be easily reused and composed
- **🧪 Testability**: Each layer can be tested independently
- **🔧 Maintainability**: Clear separation of concerns
- **📖 Documentation**: Storybook integration for component documentation

## 📚 Components

### Atomic Design System

#### 🔸 Atoms (Basic UI Components)
- **Button**: Various button variants with loading states
- **Avatar**: User profile pictures with fallbacks
- **Badge**: Status indicators and labels
- **Input**: Form inputs with validation
- **Card**: Content containers

#### 🔹 Molecules (Composite Components)
- **SearchBox**: Search input with filters
- **Navigation**: Navigation menus and breadcrumbs
- **FormField**: Form inputs with labels and validation
- **PokemonCard**: Pokemon display card with actions

#### 🔷 Organisms (Complex Components)
- **Header**: Application header with navigation
- **Sidebar**: Collapsible navigation sidebar
- **PokemonGrid**: Grid of Pokemon cards with pagination
- **TeamBuilder**: Team creation and management interface

### Component Development

```bash
# Generate new components using Plop
pnpm generate:atom ComponentName
pnpm generate:mole ComponentName
pnpm generate:orgs ComponentName

# Start Storybook for component development
pnpm storybook
```

## 🧪 Visual Testing

#### 📱 Visual Testing (Chromatic)
```bash
# Visual regression testing
pnpm chromatic
```

## 🎨 UI/UX

### Design System
- **🎨 Theme**: Consistent color palette and typography
- **🌙 Dark/Light Mode**: System preference detection and manual toggle
- **📱 Responsive**: Mobile-first design approach
- **♿ Accessibility**: WCAG 2.1 AA compliance
- **🎯 Interactive**: Smooth animations and transitions
- **🎮 Keyboard Navigation**: Full keyboard accessibility

### Styling Architecture
- **Tailwind CSS**: Utility-first approach
- **CSS Variables**: Theme customization
- **Component Variants**: Type-safe styling with `class-variance-authority`
- **Animation**: Custom animations with Framer Motion

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint issues |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm codegen` | Generate GraphQL types |
| `pnpm storybook` | Start Storybook server |
| `pnpm build-storybook` | Build Storybook for production |
| `pnpm generate` | Generate new components with Plop |
| `pnpm deadcode` | Detect unused code |

## 🌐 Internationalization

The application supports multiple languages with Next-Intl:

- **🇺🇸 English** (default)
- **🇧🇷 Portuguese**

### Features:
- **🔄 Server-side translations**: SEO-friendly internationalization
- **🌍 Locale routing**: `/en/` and `/pt/` routes
- **📱 Locale detection**: Browser preference detection
- **🎯 Type-safe translations**: TypeScript integration

### Adding New Languages

1. **Add locale files** in `src/translations/locales/{language-code}/`
2. **Update routing configuration** in `src/i18n/routing.ts`
3. **Generate types** with `pnpm build`

### Usage in Components

```tsx
import { useTranslations } from 'next-intl';

const Component = () => {
  const t = useTranslations('component');

  return <h1>{t('title')}</h1>;
};
```

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```bash
# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:3000"

# Optional: Analytics and monitoring
NEXT_PUBLIC_GA_ID=""
NEXT_PUBLIC_SENTRY_DSN=""

# Optional: Chromatic (for visual testing)
CHROMATIC_PROJECT_TOKEN=""
```

### Environment Types
- **NEXT_PUBLIC_\***: Client-side variables (exposed to browser)
- **Server-only**: Server-side only variables (secure)

## 🚀 Deployment

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Deployment Platforms

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Build command
pnpm build

# Publish directory
.next
```

#### Docker
```bash
# Build Docker image
docker build -t pokedex-frontend .

# Run container
docker run -p 3000:3000 pokedex-frontend
```

## 📱 Progressive Web App

The application is a fully functional PWA with:

### Features:
- **📱 Installable**: Add to home screen on mobile devices
- **⚡ Offline Support**: Service worker with caching strategies
- **🔄 Background Sync**: Sync data when connection is restored
- **📢 Push Notifications**: (Future feature)
- **🖥️ Desktop Support**: Works on desktop browsers

### PWA Configuration:
- **Service Worker**: Generated with Serwist
- **Manifest**: Configured in `src/app/manifest.ts`
- **Icons**: Optimized icons for different platforms
- **Caching**: Strategic caching for optimal performance

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **📝 Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **🚀 Push** to the branch: `git push origin feature/amazing-feature`
5. **🔄 Submit** a Pull Request

### Development Guidelines

- ✅ Follow the existing code style (ESLint + Prettier)
- 🧪 Add tests for new features
- 📚 Update Storybook stories for new components
- 🔍 Ensure all tests pass (`pnpm test` + `pnpm cy:run`)
- 📋 Follow conventional commit messages
- 🎯 Keep components atomic and reusable
- ♿ Ensure accessibility compliance

### Code Generation

Use Plop for consistent code generation:

```bash
# Generate new atom component
pnpm generate:atom NewComponent

# Generate new molecule component
pnpm generate:mole NewComponent

# Generate new organism component
pnpm generate:orgs NewComponent
```

## 📄 License

This project is licensed under the **UNLICENSED** License.

---

<div align="center">

**Made with ❤️ by [Gabriel Guedes](https://github.com/GabrielGuedess)**

⭐ **Star this project if you find it helpful!**

</div>
