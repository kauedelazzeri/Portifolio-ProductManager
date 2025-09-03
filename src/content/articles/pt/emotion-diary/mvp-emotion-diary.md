---

title: "MVP Saúde Mental: do zero ao primeiro usuário (eu)"
date: 2025-09-02
slug: mvp-saude-mental
summary: "Como construí um MVP super simples para alfabetização emocional, medi a usabilidade com PostHog e iniciei a fase de feedbacks para evoluir o produto."
tags: \["produto", "mvp", "saúde mental", "posthog", "ux", "diário emocional"]
canonical: [https://saude-mental-e1ln.vercel.app/](https://saude-mental-e1ln.vercel.app/)
-----------------------------------------------------------------------------------------

> **TL;DR** — Eu precisava registrar, de forma rápida e discreta, **contexto → pensamento → comportamento → emoção principal**. Em vez de planilha (ruim no celular), fiz um **MVP web** ultra simples, publiquei na **Vercel**, instrumentei com **PostHog** e agora vou rodar um ciclo de **feedback + melhorias incrementais**.

## Por que esse projeto?

Fazendo terapia, percebi que eu respondia **vontades** no lugar de **sentimentos**. A terapeuta sugeriu que eu praticasse uma **alfabetização emocional**: toda vez que algo acontece, anotar **contexto**, **pensamento**, **comportamento** e **emoção**. Na prática, abrir uma planilha no celular, em público, era **lento** e **constrangedor**. Eu precisava de uma forma **discreta, rápida e focada**.

## Problema real que eu quis resolver

* Registrar episódios no momento em que ocorrem, **em poucos toques**.
* Manter o foco na **emoção principal**, sem listas infinitas.
* **Texto livre** para contexto/pensamento/comportamento (marcação rica demais vira fricção e perde o sentido com o tempo).
* Funcionar bem no **celular** e ser **privado** o suficiente para não sentir vergonha de registrar.

## O MVP (o que entrou de propósito e o que ficou de fora)

**Entrou:**

* Fluxo mínimo: **data/hora** (default para agora) → **contexto** → **pensamento** → **comportamento** → **emoção principal**.
* Interface enxuta, orientação a **toques rápidos**.
* Deploy estático simples na **Vercel**.
* **PostHog** para eventos/product analytics (ex.: início/conclusão de registro, abandono, tempo no formulário).

**Ficou de fora (por enquanto):**

* Cadastro/login, social, gamificação.
* Catálogo de emoções extenso, tags complexas, anexos.
* Visualizações avançadas e relatórios (virão depois).

> **Princípio:** resolver **meu** problema primeiro. Fazer o mais simples que gera valor **agora**, sem discussões técnicas desnecessárias.

## Decisões de UX

* **Poucos cliques**: o registro completo leva **segundos**.
* **Texto livre** em três campos (contexto, pensamento, comportamento) para capturar nuances.
* **Uma emoção principal** por registro (clareza > completude).
* **Mobile-first**: tudo funciona bem no celular, sem barulhos visuais.
* **Discrição**: aparência limpa, sem elementos que denunciem o conteúdo sensível.

## Stack e instrumentação

* Web app simples (frontend moderno) + API mínima quando necessário.
* Deploy na **Vercel**.
* **PostHog**: métricas de uso e funis para entender fricções.

> Eu não quis “perder” tempo com arquitetura pesada. O objetivo era **lançar rápido**, usar, medir e só então sofisticar.

## O que já aprendi usando o MVP

* O atrito principal era **iniciar** o registro; com o MVP, isso ficou bem mais **fluido**.
* **Texto livre** ajuda a identificar padrões que listas não capturam.
* Uma única emoção principal por evento **força clareza** na hora de nomear o que senti.

## Próximos passos

1. **Visualização & histórico**:

   * Linha do tempo dos registros.
   * Filtros por contexto e emoção.
   * Destaques de padrões (ex.: “raiva” recorrente em certos contextos/pensamentos).
2. **Qualidade de vida do registro**:

   * Atalhos de hora/data.
   * Sugestões de emoção com base no texto (quando fizer sentido).
3. **Privacidade e controle**:

   * Exportar dados (CSV/JSON) e apagar registros.
   * Modo “tela discreta”.
4. **Feedbacks de usuários** (ver seção abaixo).

## Visão futura (opcional)

Se o produto evoluir para uso em dupla **Paciente ↔ Profissional**, penso em:

* **Perfis** (Paciente/Profissional) e verificação de credenciais para profissionais.
* **Agendamento** e gestão básica de consultas/feedback.
* **Consentimento & privacidade** como pilares (dados do paciente são do paciente).

> Observação: isso é **visão** e **não** faz parte do MVP atual. Prioridade segue sendo resolver o uso individual.

## Métricas (via PostHog)

* **Ativação**: % de usuários que completam o **primeiro registro**.
* **Tempo para registrar**: início → conclusão.
* **Abandono no formulário**: onde as pessoas param.
* **Retenção**: retorno para novos registros em 1/7/30 dias.

Essas métricas direcionam o roadmap curto: reduzir atrito onde houver queda e reforçar o que facilita o registro.

## Como você pode ajudar

Se você também está buscando **alfabetização emocional**, me conte:

* O fluxo de registro faz sentido? O que travou?
* Sentiu falta de algum campo ou opção?
* Como gostaria de ver seu **histórico** e **insights**?

👉 **Use o MVP aqui:** [https://saude-mental-e1ln.vercel.app/](https://saude-mental-e1ln.vercel.app/)

Pode me mandar feedback por **DM**, **comentário** ou abrir um issue/sugestão no repositório (quando eu publicar o código).

## Prints (colocar depois)

* [ ] Tela de registro (mobile)
* [ ] Fluxo completo em 10s (GIF)
* [ ] Exemplo de evento no PostHog

## Conclusão

Construir este MVP foi, acima de tudo, um exercício de **foco**: resolver **um** problema real com **o mínimo** necessário, medir com **PostHog** e aprender rápido. Agora começa a parte mais importante: **ouvir pessoas**, iterar e transformar esse projeto em algo útil para mais gente.
