# Arquitetura do Projeto Elegance Moda

## Visão Geral

Este documento descreve a arquitetura e estrutura de módulos do projeto Elegance Moda, uma loja online de vestuário e acessórios. O projeto segue uma arquitetura front-end moderna, utilizando Next.js para o frontend.

## Estrutura de Diretórios

```
elegance-moda/
├── docs/                    # Documentação do projeto
├── frontend/                # Aplicação Next.js
│   ├── public/              # Arquivos estáticos (imagens, fontes, etc.)
│   ├── src/                 # Código fonte do frontend
│   │   ├── app/             # Páginas da aplicação (Next.js App Router)
│   │   │   ├── page.tsx     # Página Home
│   │   │   ├── sobre/       # Página Sobre
│   │   │   ├── produtos/    # Página Produtos
│   │   │   ├── promocoes/   # Página Promoções
│   │   │   └── contato/     # Página Contato
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── ui/          # Componentes de UI básicos
│   │   │   ├── layout/      # Componentes de layout (Header, Footer)
│   │   │   ├── carousel/    # Componente de carrossel
│   │   │   └── forms/       # Componentes de formulários
│   │   ├── hooks/           # Custom hooks
│   │   └── styles/          # Estilos globais e variáveis
│   ├── tailwind.config.js   # Configuração do Tailwind CSS
│   └── package.json         # Dependências do frontend
└── README.md                # Documentação principal do projeto
```

## Arquitetura Frontend (Next.js)

### Páginas

1. **Home (/)**: 
   - Carrossel principal com 4 sliders
   - Seções de destaque de produtos
   - Chamadas para ação

2. **Sobre (/sobre)**:
   - História da loja e seus sócios
   - Imagem atual da empresa
   - Valores e missão

3. **Produtos (/produtos)**:
   - Listagem de produtos com fotos, descrições e preços
   - Filtros por categoria
   - Botão flutuante de WhatsApp

4. **Promoções (/promocoes)**:
   - Carrossel com 4 sliders de produtos em promoção
   - Preços promocionais em destaque
   - Preços originais hachurados
   - Botão flutuante de WhatsApp

5. **Contato (/contato)**:
   - Texto introdutório
   - Formulário de contato com validação
   - Informações adicionais de contato

### Componentes Principais

1. **Header**:
   - Logo centralizado
   - Menu de navegação
   - Campo de busca
   - Ícones de redes sociais
   - Login/Cadastro
   - Carrinho de compras

2. **Footer**:
   - Endereço, CEP, telefone e email
   - Links para redes sociais
   - Links para páginas principais
   - Informações legais

3. **Carrossel**:
   - Componente reutilizável para diferentes páginas
   - Controles de navegação
   - Suporte a diferentes tipos de conteúdo

4. **Botão WhatsApp**:
   - Componente flutuante fixo
   - Link direto para contato via WhatsApp

5. **Card de Produto**:
   - Imagem do produto
   - Título e descrição
   - Preço (normal ou promocional)
   - Botão de ação

## Estilo e Design

Baseado na imagem de referência, o design seguirá estas características:

- Paleta de cores: tons suaves de rosa/salmão, branco, preto
- Tipografia elegante e moderna
- Layout clean e minimalista
- Destaque para imagens de produtos
- Elementos visuais femininos e sofisticados
- Design responsivo para todas as telas

## Tecnologias Adicionais

1. **Tailwind CSS**: Para estilização rápida e consistente
2. **React Icons**: Para ícones de redes sociais e interface
3. **React Hook Form**: Para gerenciamento de formulários
4. **Zod**: Para validação de dados
5. **SWR**: Para gerenciamento de estado e cache de dados
6. **Framer Motion**: Para animações suaves
7. **React Slick**: Para implementação de carrosséis
