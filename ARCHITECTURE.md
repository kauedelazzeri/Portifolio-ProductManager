# Arquitetura do Projeto - Portfolio

## 📁 Estrutura Organizada

O projeto foi reorganizado seguindo as melhores práticas de desenvolvimento React/Next.js:

### 🎯 Diretórios Principais

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   ├── projects/          # Seção de projetos
│   └── globals.css        # Estilos globais
│
├── components/            # Componentes organizados por função
│   ├── layout/           # Componentes de layout
│   │   └── Header.tsx    # Cabeçalho navegação
│   ├── features/         # Componentes de funcionalidades
│   │   ├── projects-grid.tsx
│   │   └── skill-card.tsx
│   ├── common/           # Componentes reutilizáveis
│   │   ├── theme-provider.tsx
│   │   ├── theme-switch.tsx
│   │   └── language-switch.tsx
│   ├── ui/               # Componentes de UI básicos
│   └── index.ts          # Arquivo de exportação central
│
├── lib/                  # Utilitários e helpers
│   ├── types.ts          # Definições de tipos TypeScript
│   ├── projects.ts       # Funções para gerenciar projetos
│   ├── articles.ts       # Funções para gerenciar artigos
│   ├── utils.ts          # Utilitários gerais
│   └── index.ts          # Exportações centralizadas
│
├── data/                 # Dados estruturados
│   └── projects.json     # Banco de dados dos projetos
│
├── content/              # Conteúdo em Markdown
│   └── articles/         # Artigos por idioma
│       ├── en/
│       └── pt/
│
├── constants/            # Constantes da aplicação
│   └── site.ts           # Configurações do site
│
├── config/               # Configurações
│   ├── metadata.ts       # Metadados SEO
│   └── favicons.ts       # Configuração de ícones
│
└── locales/              # Traduções
    ├── en.json
    └── pt.json
```

## 🏗️ Padrões Implementados

### 1. **Separação Clara de Responsabilidades**
- `components/layout/`: Componentes estruturais
- `components/features/`: Componentes de funcionalidades específicas  
- `components/common/`: Componentes reutilizáveis em todo o app
- `components/ui/`: Componentes básicos de interface

### 2. **Gerenciamento de Dados Tipado**
- Tipos TypeScript centralizados em `lib/types.ts`
- Funções específicas para cada domínio (`projects.ts`, `articles.ts`)
- Validação de tipos em tempo de compilação

### 3. **Configuração Centralizada**
- Constantes do site em `constants/site.ts`
- Metadados SEO organizados
- Configurações de build otimizadas

### 4. **Estrutura de Importação Limpa**
```typescript
// ✅ Bem organizado
import { Project, Article } from '@/lib/types';
import { ProjectsGrid, Header } from '@/components';
import { SITE_CONFIG } from '@/constants/site';

// ❌ Evitado
import { Project } from '../../../lib/types';
import ProjectsGrid from '../../../components/projects-grid';
```

## 🔄 Como Expandir

### Adicionar Novos Projetos
1. Edite `src/data/projects.json`
2. Adicione imagens em `public/images/projects/`
3. O sistema carregará automaticamente

### Adicionar Novos Artigos
1. Crie arquivo `.md` em `src/content/articles/[lang]/`
2. Use frontmatter para metadados
3. Adicione imagens em `public/images/articles/`

### Adicionar Novos Componentes
1. Determine a categoria: `layout`, `features`, `common`, ou `ui`
2. Crie o componente na pasta apropriada
3. Exporte em `components/index.ts`

## 🚀 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linting
```

## 📦 Tecnologias

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **TypeScript**: Tipagem completa
- **Content**: MDX para artigos
- **Deployment**: Vercel
- **Analytics**: PostHog

## 🎯 Benefícios da Reorganização

1. **Manutenibilidade**: Código organizado e fácil de encontrar
2. **Escalabilidade**: Estrutura preparada para crescimento
3. **Developer Experience**: Importações limpas e autocomplete
4. **Performance**: Build otimizado e code splitting
5. **SEO**: Metadados bem estruturados
6. **Acessibilidade**: Componentes semânticos
