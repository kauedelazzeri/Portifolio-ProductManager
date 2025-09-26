---
title: "Predição de Gêneros de Filmes Baseada em Pôsteres"
subtitle: "Análise de classificação de gêneros cinematográficos usando redes neurais convolucionais e transfer learning"
date: "2024-03-21"
author: "Kaue Delazzeri"
tags: ["Machine Learning", "Computer Vision", "CNN", "Transfer Learning", "Deep Learning"]
coverImage: "VGG_accuracy.png"
---

# Predição de Gêneros de Filmes Baseada em Pôsteres  
*Análise de classificação de gêneros cinematográficos usando redes neurais convolucionais e transfer learning*  

---

## Resumo

> *Este artigo apresenta um método para classificação de gêneros cinematográficos usando apenas pôsteres de filmes como entrada. A abordagem combina técnicas de processamento de imagens com redes neurais convolucionais (CNN) e transfer learning para extrair características visuais relevantes e realizar classificação multiclasse. O modelo foi treinado em um dataset de mais de 45.000 pôsteres de filmes, alcançando mais de 85% de precisão na classificação dos principais gêneros. A análise das camadas convolucionais revela padrões visuais específicos associados a cada gênero, fornecendo insights sobre a linguagem visual do cinema.*  

---

## 1. Visão de Negócio

A classificação automática de gêneros cinematográficos tem aplicações importantes em streaming, recomendação de conteúdo e análise de mercado. Ao usar apenas pôsteres — recursos já disponíveis e padronizados — o método reduz custos de implementação e fornece insights valiosos sobre a comunicação visual do cinema.

---

## 2. Dados e Pré-processamento

O dataset foi construído a partir de múltiplas fontes:

> "Utilizamos a API do TMDB para coletar pôsteres e metadados, combinando com informações do IMDb para validação cruzada dos gêneros." ([GitHub][1])

A distribuição de filmes por ano pode ser vista abaixo:

![Distribuição de filmes por ano](/images/articles/movie-genre-prediction/movies_by_year.png)

A distribuição inicial de gêneros mostrava desbalanceamento significativo:

![Distribuição inicial de gêneros](/images/articles/movie-genre-prediction/total_movies_per_genre.png)

Após pré-processamento e balanceamento, alcançamos uma distribuição mais uniforme:

![Distribuição final de gêneros](/images/articles/movie-genre-prediction/final_movies_per_genre.png)

---

## 3. Metodologia

Testamos duas arquiteturas diferentes:

### 3.1 Rede Neural Customizada

Uma arquitetura CNN customizada foi projetada especificamente para esta tarefa:

![Arquitetura da rede neural customizada](/images/articles/movie-genre-prediction/rede_custom.png)

A curva de aprendizado mostra boa convergência:

![Curva de aprendizado da rede customizada](/images/articles/movie-genre-prediction/custom_accuracy.png)

A matriz de confusão revela a performance do modelo:

![Matriz de confusão da rede customizada](/images/articles/movie-genre-prediction/custom_arc_confusion_matrix.png)

### 3.2 VGG16 com Transfer Learning

Também implementamos um modelo baseado em VGG16 com transfer learning:

![Matriz de confusão do VGG16](/images/articles/movie-genre-prediction/vgg_conf_matrix.png)

---

## 4. Competências Aplicadas

- **Computer Vision**: Processamento de imagens e extração de características
- **Deep Learning**: Design e treinamento de arquiteturas CNN
- **Transfer Learning**: Fine-tuning de modelos pré-treinados
- **Engenharia de Dados**: Construção e pré-processamento do dataset
- **MLOps**: Deploy de modelos e desenvolvimento de API

---

## 5. Resultados

- **Precisão**: 85% na classificação dos principais gêneros
- **Tempo de Inferência**: Menos de 100ms por imagem
- **Padrões Visuais**: Identificação de elementos visuais específicos por gênero
- **API**: Endpoint REST para classificação em tempo real

---

## 6. Impacto e Próximos Passos

O modelo pode ser integrado em plataformas de streaming e sistemas de gestão de conteúdo para:
- Automatizar a marcação de gêneros
- Melhorar recomendações de conteúdo
- Analisar tendências visuais no cinema
- Suportar decisões de marketing

Trabalhos futuros incluem:
- Expansão para subgêneros
- Incorporação de análise temporal
- Desenvolvimento de interface web
- Adição de recursos de explicabilidade

---

## 7. Conclusão

O método proposto demonstra que pôsteres de filmes contêm informação visual suficiente para classificação de gêneros. A combinação de abordagens CNN customizadas e transfer learning fornece uma solução robusta que pode ser facilmente integrada em sistemas existentes. A análise de padrões visuais também oferece insights valiosos para a indústria cinematográfica.

---

[1]: https://github.com/kauedelazzeri/movie-genre-prediction
