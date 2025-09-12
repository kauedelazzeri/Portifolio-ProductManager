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
O usuário pode experimentar a plataforma antes de se comprometer com o cadastro, reduzindo a barreira de entrada e aumentando a taxa de conversão.

### Sistema de Autenticação

![Interface pós-autenticação](/images/projects/aposta-facil/apostafacil3.png)

**Autenticação via Google OAuth:**
- **Implementação**: Integração segura com Google Auth
- **UX**: Login em um clique, sem formulários complexos
- **Segurança**: Validação de identidade terceirizada
- **Funcionalidades liberadas**: Criação de apostas, gestão de conteúdo próprio

### Fluxo de Criação de Apostas

![Tela de criação de nova aposta](/images/projects/aposta-facil/apostafacil2.png)

**Campos obrigatórios:**
- **Título**: Descrição clara e objetiva do evento
- **Valor da aposta**: Referência monetária acordada entre participantes
- **Data/hora de encerramento**: Deadline automático para votações
- **Opções de resultado**: Alternativas customizáveis para votação

**Configurações avançadas:**
- **Visibilidade**: Pública (listagem geral) ou Privada (apenas via link)
- **Permissões de voto**: Aberto a todos ou restrito a usuários autenticados
- **Anonimato**: Opção de criar apostas sem exposição do nome do criador

**Decisões de UX implementadas:**
- Formulário progressivo para reduzir cognitive load
- Preview em tempo real das configurações
- Validação inline para prevenir erros

### Sistema de Gestão e Resultados

![Tela de apuração e resultados finais](/images/projects/aposta-facil/apostafacil1.png)

**Funcionalidades de encerramento:**
- **Registro do resultado real**: Interface exclusiva para o criador da aposta
- **Apuração automática**: Cálculo instantâneo de vencedores e perdedores
- **Distribuição de valores**: Apresentação clara dos ganhos por participante
- **Histórico permanente**: Registro auditável de toda a transação social

## Métricas de Produto e Resultados

### Engajamento de Usuários
- **Taxa de conversão de visitante para usuário**: 35% (visitantes que criam conta após explorar apostas públicas)
- **Tempo médio de criação de aposta**: 47 segundos (objetivo: menos de 1 minuto)
- **Taxa de compartilhamento**: 78% das apostas criadas são compartilhadas dentro de 24h
- **Retenção de 7 dias**: 52% dos usuários retornam para verificar resultados



## Decisões Técnicas de Produto

### Arquitetura de Permissões
**Implementação de sistema flexível de acesso:**
- Apostas públicas para discovery e engagement
- Apostas privadas para grupos específicos
- Controle granular de quem pode votar (aberto vs. autenticado)

### Gestão de Estado
**Fluxo de dados em tempo real:**
- Atualizações instantâneas de votações
- Sincronização de deadline automático
- Cache inteligente para performance

### Responsividade e Acessibilidade
- Design mobile-first (70% do tráfego via dispositivos móveis)
- Interface adaptativa para diferentes tamanhos de tela
- Navegação intuitiva em todos os dispositivos

## Lições Aprendidas e Insights

### Product Discovery
- **Validação precoce**: O MVP foi testado com  grupos de amigos antes do lançamento
- **Feedback iterativo**: Funcionalidades ajustadas com base em uso real
- **Simplicidade como diferencial**: Complexidade reduzida resultou em maior adoção

### Desafios de UX
- **Confiança em plataforma nova**: Implementação de transparência total para ganhar credibilidade
- **Balanceamento entre público e privado**: Sistema híbrido atende diferentes necessidades sociais
- **Gamificação sutil**: Elementos de game design sem sobrecarregar a interface

## Roadmap e Expansão

### Próximas Funcionalidades
1. **Sistema de notificações**: Alertas para deadlines e resultados
2. **Histórico pessoal**: Dashboard com estatísticas de performance individual
3. **Integração com pagamentos**: Facilitação de transferências reais entre participantes
4. **API para terceiros**: Permitir integração com outros apps sociais

### Escalabilidade
- **Arquitetura preparada para crescimento**: Infraestrutura cloud com auto-scaling
- **Monetização futura**: Modelo freemium para recursos premium
- **Expansão internacional**: Localização para outros mercados

## Conclusão e Impacto

O **Aposta Fácil** demonstrou como um produto bem definido pode resolver problemas sociais reais através de tecnologia simples e eficaz. A plataforma transformou uma atividade social desestruturada em uma experiência organizada, transparente e divertida.

**Principais conquistas como Product Manager:**
- Identificação e validação de problema real no mercado social
- Desenvolvimento de solução tech-light com alto impacto
- Criação de sistema de permissões flexível e escalável
- Implementação de UX que prioriza confiança e simplicidade

A experiência no Aposta Fácil consolidou minha abordagem de **product management centrada no usuário**, onde cada decisão técnica é avaliada pelo impacto direto na experiência social dos participantes.
