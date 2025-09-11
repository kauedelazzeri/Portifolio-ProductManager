# Portfolio - Kaue Delazzeri

Portfolio multilíngue com Next.js 13+ mostrando projetos e artigos técnicos.

## 🚀 Desenvolvimento

```bash
npm install
npm run dev  # http://localhost:3000
npm run build
```

## 📁 Estrutura

```
src/
├── app/              # Páginas (App Router)
├── components/       # Componentes organizados por função
├── content/          # Artigos e projetos (MDX)
├── data/             # JSON com metadados dos projetos
├── lib/              # Funções utilitárias
├── locales/          # Traduções da interface
└── config/           # Configurações
```

## 📝 Como Adicionar Projeto

### 1. Metadados
Edite `src/data/projects.json`:
```json
{
  "slug": "meu-projeto",
  "title": "Título do Projeto", 
  "summary": "Resumo breve",
  "role": "Seu papel",
  "duration": "Período",
  "stack": ["Tech1", "Tech2"],
  "image": "/images/projects/meu-projeto/icon.png",
  "featured": true
}
```

### 2. Conteúdo
Crie arquivo: `src/content/projects/en/meu-projeto.md`
```markdown
---
title: "Título do Projeto"
subtitle: "Subtítulo"
date: "2024"
author: "Seu Nome"
tags: ["tag1", "tag2"]
locale: "en"
translations:
  pt:
    title: "Título em Português"
    subtitle: "Subtítulo em Português"
---

# Conteúdo do projeto em Markdown
```

### 3. Imagens
Coloque em: `public/images/projects/meu-projeto/`
- `icon.png` (obrigatório, 300x300px)
- Outras imagens do projeto

## 📄 Como Adicionar Artigo

### 1. Arquivo de Conteúdo
Crie: `src/content/articles/en/meu-artigo.md`
```markdown
---
title: "Título do Artigo"
subtitle: "Subtítulo" 
date: "2024-01-01"
author: "Seu Nome"
tags: ["tech", "tutorial"]
locale: "en"
translations:
  pt:
    title: "Título em Português"
    subtitle: "Subtítulo em Português"
---

# Conteúdo em Markdown
```

### 2. Imagens
Coloque em: `public/images/articles/meu-artigo/`

## 🌍 Sistema Multilíngue

### Interface
- `src/locales/en.json` - Textos da interface em inglês
- `src/locales/pt.json` - Textos da interface em português
- Uso: `const { t } = useTranslation(); t('header.home')`

### Conteúdo
**Opção 1: Só metadados traduzidos** (recomendado)
- Arquivo: `src/content/*/en/arquivo.md`  
- Traduções no frontmatter

**Opção 2: Conteúdo completo traduzido**
- Inglês: `src/content/*/en/arquivo.md`
- Português: `src/content/*/pt/arquivo.md`

## 🎨 Organização de Imagens

```
public/images/
├── projects/
│   └── projeto-slug/
│       ├── icon.png          # Thumbnail (obrigatório)
│       └── outras-imagens.*  # Imagens do projeto
├── articles/
│   └── artigo-slug/
│       └── imagens.*         # Imagens do artigo
└── profile-photo.jpg         # Foto de perfil
```

## ⚙️ Configuração

- Site: `src/constants/site.ts`
- SEO: `src/config/metadata.ts`
- Temas: `tailwind.config.js`

## � Deploy

Configurado para Vercel com domínio `kauedelazzeri.com`.

## 📦 Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS  
- **Content**: MDX
- **i18n**: Sistema customizado
- **Theme**: next-themes
- **Deploy**: Vercel
