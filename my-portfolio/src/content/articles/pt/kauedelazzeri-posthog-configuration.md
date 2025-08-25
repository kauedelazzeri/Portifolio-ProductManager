---
title: "Instrumentação do PostHog no kauedelazzeri.com"
subtitle: "Guia prático de integração e criação de métricas orientadas a contato"
date: "2025-06-19"
author: "Kaue Delazzeri"
tags: ["PostHog", "Analytics", "Product Analytics", "Web Analytics"]
coverImage: "2025-06-19-00-09-26.png"
---

# Instrumentação do PostHog no kauedelazzeri.com
*Guia prático de integração e criação de métricas orientadas a contato*

Os passos a seguir mostram como integrei o site ao PostHog, explorei os eventos capturados e construí dashboards para medir quem chega à área de contato.

![Dashboard inicial com usuários ativos semanais](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-03-29.png)
O dashboard do PostHog apresenta visão geral de usuários ativos, distribuição geográfica e métricas básicas de retenção, confirmando o recebimento dos eventos.

![Explorando eventos recentes](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-09.png)
Na aba Atividades → Explorar visualizo cada evento enviado pelo site; é o primeiro passo para validar a instrumentação.

![Lista de eventos capturados](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-18.png)
A sequência de eventos inclui capturas automáticas como `pageview` e ações personalizadas disparadas pelo site.

![Filtrando pelo evento `page_loaded`](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-28.png)
Aplicando um filtro para `page_loaded` isolo carregamentos de página para análise focal.

![Resultado após filtro](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-46.png)
O filtro retorna apenas os carregamentos de página, permitindo verificar rapidamente quantas páginas foram abertas no período.

![Contagem de páginas carregadas na última hora](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-59.png)
O PostHog indica que cinco páginas foram carregadas na última hora, validando o snippet de rastreamento.

![Catálogo de eventos automáticos](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-05-29.png)
Em Data Management os eventos capturados automaticamente aparecem listados, facilitando promovê-los a Ações.

![Inspecionando a ação `page_loaded`](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-05-37.png)
Abrindo a ação é possível ver a regra de correspondência que agrega eventos brutos em uma ação semântica.

![Criando uma ação personalizada](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-05-51.png)
Ações permitem agrupar eventos que representam a mesma intenção do usuário, simplificando análises em funis e dashboards.

![Acessando Product Analytics](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-06-02.png)
A seção Analytics concentra os insights que podem ser adicionados aos dashboards.

![Iniciando um novo insight de Tendência](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-06-17.png)
É criado um insight do tipo Tendência para monitorar visualizações de página ao longo do tempo.

![Selecionando o evento `pageview`](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-06-29.png)
A análise é configurada para contar ocorrências do evento `pageview`.

![Filtrando pelo caminho da página](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-06-57.png)
Adiciona-se um filtro para a página de contato, isolando visitas que chegam à seção desejada.

![Resultado da tendência](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-07-03.png)
O gráfico mostra oito acessos registrados em 16 de junho de 2025, confirmando picos de tráfego.

![Retornando ao explorador de eventos](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-07-27.png)
Voltando ao Explore é possível inspecionar cada evento por trás dos agregados.

![Abrindo um evento de clique](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-07-45.png)
O evento que representa o clique no seletor de idioma é expandido para ver metadados detalhados.

![Metadados de navegador e idioma](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-07-54.png)
O payload do evento inclui navegador, locale e timestamp – essenciais para entender o contexto do usuário.

![Detalhes de localização e dispositivo](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-00.png)
Cidade, fuso horário e resolução de tela ajudam a validar de onde e como o site é acessado.

![Informações de sessão](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-15.png)
A propriedade de sessão vincula o evento à página de “projetos”, possibilitando segmentação por seção.

![Filtrando eventos por sessão](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-23.png)
Aplicando um filtro de sessão no funil, apenas interações dentro da área de projetos são consideradas.

![Excluindo usuários internos](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-36.png)
O tráfego interno é removido ao excluir endereços de localhost do conjunto de dados.

![Filtrando por IDs de dispositivo](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-42.png)
Identificadores de dispositivos conhecidos são adicionados à lista de ignorados para evitar métricas enviesadas.

![Removendo tráfego de preview](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-47.png)
Requisições vindas de ambientes de preview da Vercel também são filtradas para manter os dados limpos.

![Construindo o funil de contato](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-09-03.png)
É montado um funil para acompanhar usuários do acesso inicial até a abertura da seção de contato.

![Resultados do funil](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-09-09.png)
Neste ponto duas pessoas acessaram o site, mas nenhuma chegou à página de contato, indicando oportunidade de melhoria.

![Distribuição geográfica](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-09-19.png)
O insight de retenção exibe visitas por país, mostrando maioria do tráfego no Brasil e alguns acessos nos Estados Unidos.

![Dashboard final](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-09-26.png)
O dashboard customizado consolida usuários ativos por mês e o funil que monitora cliques em LinkedIn ou e-mail, focando na métrica de sucesso: contatos.
