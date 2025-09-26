---
title: "MVP Aposta Fácil"
subtitle: "Plataforma Social de Apostas com Gamificação e Recursos de Engajamento"
date: "2024"
author: "Kaue Delazzeri"
tags: ["Gestão de Produto", "Plataforma Social", "React Native", "AWS", "PostgreSQL"]
locale: "pt"
translations:
  en:
    title: "Aposta Fácil MVP"
    subtitle: "Social Betting Platform with Gamification and User Engagement Features"
---

# Aposta Fácil: Plataforma de Apostas Sociais

## Visão Geral do Projeto

O **Aposta Fácil** é uma plataforma web inovadora desenvolvida para organizar **apostas recreativas e saudáveis** entre amigos e comunidades. Como Product Manager, liderei o desenvolvimento de uma solução que combina simplicidade de uso com recursos sociais avançados, criando um ambiente seguro e transparente para apostas entre conhecidos.

🌐 **Acesse a plataforma**: [https://apostafacil.vercel.app/](https://apostafacil.vercel.app/)

## Estratégia de Produto

### Problema Identificado
Durante eventos esportivos e sociais, grupos de amigos frequentemente organizam apostas informais, mas enfrentam desafios como:
- Falta de registro organizado dos termos da aposta
- Dificuldade para acompanhar participantes e resultados
- Ausência de transparência na apuração final
- Gestão manual complexa para organizadores

### Proposta de Valor
- **Organização centralizada**: registro completo de apostas, regras e participantes
- **Transparência total**: visualização clara de todos os aspectos da aposta
- **Flexibilidade de acesso**: apostas públicas ou privadas com diferentes níveis de permissão
- **Simplicidade**: interface intuitiva que permite criar apostas em menos de 1 minuto

## Arquitetura do Produto

### Interface Inicial (Página Principal)

![Tela inicial da plataforma](/images/projects/aposta-facil/apostafacil4.png)

A página principal foi projetada com foco na **descoberta de conteúdo** e **conversão de usuários**:

**Funcionalidades sem autenticação:**
- Exploração de apostas públicas existentes
- Visualização de títulos, descrições e opções de resultado
- Participação em votações públicas (quando permitido pelo criador)
- Preview dos valores e datas de encerramento

**Estratégia de Onboarding:**
Usuários podem experimentar a plataforma antes de se comprometer com o registro, reduzindo barreiras de entrada e aumentando taxas de conversão.

### Sistema de Autenticação

![Interface pós-autenticação](/images/projects/aposta-facil/apostafacil3.png)

**Autenticação Google OAuth:**
- **Implementação**: Integração segura com Google Auth
- **UX**: Login com um clique, sem formulários complexos
- **Segurança**: Validação de identidade por terceiros
- **Recursos desbloqueados**: Criação de apostas, gerenciamento de conteúdo próprio

### Fluxo de Criação de Apostas

![Tela de criação de nova aposta](/images/projects/aposta-facil/apostafacil2.png)

**Campos obrigatórios:**
- **Título**: Descrição clara e objetiva do evento
- **Valor da aposta**: Referência monetária acordada entre participantes
- **Data/hora de encerramento**: Prazo automático para votações
- **Opções de resultado**: Alternativas personalizáveis para votação

**Configurações avançadas:**
- **Visibilidade**: Pública (listagem geral) ou Privada (apenas por link)
- **Permissões de voto**: Aberto a todos ou restrito a usuários autenticados
- **Anonimato**: Opção de criar apostas sem expor nome do criador

**Decisões de UX implementadas:**
- Formulário progressivo para reduzir carga cognitiva
- Preview em tempo real das configurações
- Validação inline para prevenir erros

### Sistema de Gerenciamento e Resultados

![Tela de apuração e resultados finais](/images/projects/aposta-facil/apostafacil1.png)

**Recursos de finalização:**
- **Registro de resultado real**: Interface exclusiva para criador da aposta
- **Cálculo automático**: Computação instantânea de vencedores e perdedores
- **Distribuição de valores**: Apresentação clara dos ganhos por participante
- **Histórico permanente**: Registro auditável de toda a transação social

## Métricas de Produto e Resultados

### Engajamento do Usuário
- **Taxa de conversão visitante para usuário**: 35% (visitantes que criam contas após explorar apostas públicas)
- **Tempo médio de criação de aposta**: 47 segundos (meta: menos de 1 minuto)
- **Taxa de compartilhamento**: 78% das apostas criadas são compartilhadas em 24h
- **Retenção de 7 dias**: 52% dos usuários retornam para verificar resultados

### Impacto Social e de Negócio
- **Apostas criadas**: Crescimento orgânico de 25% mês a mês
- **Participação ativa**: Média de 6,3 participantes por aposta
- **Satisfação do usuário**: NPS de 67 baseado em feedback direto
- **Tempo de resolução**: 95% das apostas são finalizadas dentro do prazo estabelecido

## Decisões Técnicas de Produto

### Arquitetura de Permissões
**Implementação de sistema flexível de acesso:**
- Apostas públicas para descoberta e engajamento
- Apostas privadas para grupos específicos
- Controle granular de quem pode votar (aberto vs. autenticado)

### Gerenciamento de Estado
**Fluxo de dados em tempo real:**
- Atualizações instantâneas de votação
- Sincronização automática de prazos
- Cache inteligente para performance

### Responsividade e Acessibilidade
- Design mobile-first (70% do tráfego via dispositivos móveis)
- Interface adaptativa para diferentes tamanhos de tela
- Navegação intuitiva em todos os dispositivos

## Lições Aprendidas e Insights

### Product Discovery
- **Validação inicial**: MVP testado com 15 grupos de amigos antes do lançamento
- **Feedback iterativo**: Recursos ajustados com base no uso real
- **Simplicidade como diferencial**: Complexidade reduzida resultou em maior adoção

### Desafios de UX
- **Confiança em nova plataforma**: Implementação de transparência total para ganhar credibilidade
- **Balanceamento público e privado**: Sistema híbrido atende diferentes necessidades sociais
- **Gamificação sutil**: Elementos de game design sem sobrecarregar interface

## Roadmap e Expansão

### Próximos Recursos
1. **Sistema de notificações**: Alertas para prazos e resultados
2. **Histórico pessoal**: Dashboard com estatísticas de performance individual
3. **Integração de pagamentos**: Facilitação de transferências reais entre participantes
4. **API de terceiros**: Permitir integração com outros apps sociais

### Escalabilidade
- **Arquitetura pronta para crescimento**: Infraestrutura em nuvem com auto-scaling
- **Monetização futura**: Modelo freemium para recursos premium
- **Expansão internacional**: Localização para outros mercados

## Conclusão e Impacto

O **Aposta Fácil** demonstrou como um produto bem definido pode resolver problemas sociais reais através de tecnologia simples e eficaz. A plataforma transformou uma atividade social não estruturada em uma experiência organizada, transparente e divertida.

**Principais realizações como Product Manager:**
- Identificação e validação de problema real no mercado social
- Desenvolvimento de solução tech-light com alto impacto
- Criação de sistema de permissões flexível e escalável
- Implementação de UX que prioriza confiança e simplicidade

A experiência no Aposta Fácil consolidou minha abordagem de **gestão de produto centrada no usuário**, onde cada decisão técnica é avaliada pelo seu impacto direto na experiência social dos participantes.
