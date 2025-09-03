---
title: "Predição de Gênero de Filmes Baseada em Cartazes"
subtitle: "Análise de classificação de gêneros cinematográficos usando redes neurais convolucionais e transfer learning"
date: "2024-03-21"
author: "Kaue Delazzeri"
tags: ["Machine Learning", "Computer Vision", "CNN", "Transfer Learning", "Deep Learning"]
coverImage: "VGG_accuracy.png"
---

# Predição de Gênero de Filmes Baseada em Cartazes  
*Análise de classificação de gêneros cinematográficos usando redes neurais convolucionais e transfer learning*  

---

## Resumo

> *Este artigo apresenta um método de classificação de gêneros cinematográficos utilizando apenas os cartazes dos filmes como entrada. A abordagem combina técnicas de processamento de imagem com redes neurais convolucionais (CNN) e transfer learning para extrair características visuais relevantes e realizar a classificação multiclasse. O modelo foi treinado em um dataset de mais de 45 mil cartazes de filmes, alcançando acurácia superior a 85% na classificação dos principais gêneros. A análise das camadas convolucionais revela padrões visuais específicos associados a cada gênero, oferecendo insights sobre a linguagem visual do cinema.*  

---

## 1. Visão de Negócio

A classificação automática de gêneros cinematográficos tem aplicações importantes em streaming, recomendação de conteúdo e análise de mercado. Ao utilizar apenas os cartazes — recursos já disponíveis e padronizados — o método reduz custos de implementação e oferece insights valiosos sobre a comunicação visual do cinema.

---

## 2. Dados e Pré-processamento

O dataset foi construído a partir de múltiplas fontes:

> "Utilizamos a API do TMDB para coletar cartazes e metadados, combinando com informações do IMDb para validação cruzada dos gêneros." ([GitHub][1])

A distribuição dos filmes por ano pode ser vista abaixo:

![Distribuição de filmes por ano](/images/articles/movie-genre-prediction/movies_by_year.png)

### Estrutura do Dataset

A distribuição inicial dos gêneros no dataset é mostrada abaixo:

![Distribuição inicial de filmes por gênero](/images/articles/movie-genre-prediction/total_movies_per_genre.png)

Após o pré-processamento e balanceamento, a distribuição final ficou assim:

![Distribuição final de filmes por gênero](/images/articles/movie-genre-prediction/final_movies_per_genre.png)

| **Característica**          | **Valor**                           |
|-----------------------------|-------------------------------------|
| Total de filmes             | 45.000+                             |
| Gêneros principais          | 8                                   |
| Resolução dos cartazes      | 500×750 px                          |
| Período                     | 1950-2024                           |
| Distribuição de gêneros     | Balanceada                          |

### Pré-processamento

1. **Normalização de Imagens**
   * Redimensionamento para 224×224 px
   * Normalização de pixels (0-1)
   * Data augmentation (rotação, flip, zoom)

2. **Tratamento de Gêneros**
   * One-hot encoding
   * Agregação de subgêneros
   * Balanceamento via oversampling

---

## 3. Metodologia

Foram testadas duas arquiteturas principais:

1. **Rede Customizada**  
   A arquitetura da rede neural customizada é mostrada abaixo:

   ![Arquitetura da rede neural customizada](/images/articles/movie-genre-prediction/rede_custom.png)

   * Camadas convolucionais: 3 blocos (Conv2D + MaxPooling)
   * Camadas densas: 1024 → 512 → 8
   * Dropout: 0.5
   * Batch normalization

2. **Transfer Learning (VGG16)**  
   * Base: VGG16 pré-treinada (ImageNet)
   * Fine-tuning nas últimas camadas
   * Camadas densas adaptadas para classificação

### Treinamento  
   * Otimizador: Adam (lr=1e-4)
   * Loss: Categorical Cross-Entropy
   * Batch size: 32
   * Early stopping (patience=5)

### Validação  
   * Split: 70/15/15 (train/val/test)
   * K-fold cross-validation (k=5)
   * Métricas: acurácia, F1, matriz de confusão

---

## 4. Competências Aplicadas

* **Computer Vision**: CNN, transfer learning, data augmentation
* **Deep Learning**: PyTorch, otimização de hiperparâmetros
* **Engenharia de Dados**: ETL, API integration, dataset curation
* **MLOps**: Versionamento de modelos, experimentação
* **Análise de Dados**: Visualização, interpretabilidade

---

## 5. Resultados

### Rede Customizada

A curva de aprendizado da rede customizada mostra a evolução da acurácia:

![Curva de aprendizado da rede customizada](/images/articles/movie-genre-prediction/custom_accuracy.png)

A matriz de confusão da rede customizada:

![Matriz de confusão da rede customizada](/images/articles/movie-genre-prediction/custom_arc_confusion_matrix.png)

### VGG16 (Transfer Learning)

A curva de aprendizado da VGG16:

![Curva de aprendizado da VGG16](/images/articles/movie-genre-prediction/VGG_accuracy.png)

A matriz de confusão da VGG16:

![Matriz de confusão da VGG16](/images/articles/movie-genre-prediction/vgg_conf_matrix.png)

* **Performance**: 85% acurácia global, F1 ≥ 0.82 por gênero
* **Tempo de Inferência**: < 100ms por imagem
* **Interpretabilidade**: Visualização de camadas convolucionais
* **Aplicabilidade**: API REST para classificação em tempo real

---

## 6. Impacto e Próximos Passos

* **Aplicações**: 
  * Recomendação de conteúdo
  * Análise de tendências visuais
  * Otimização de cartazes
* **Roadmap**:
  * Expansão para subgêneros
  * Análise de elementos visuais
  * Deploy em edge devices

---

## 7. Conclusão

O projeto demonstra a viabilidade de classificar gêneros cinematográficos a partir de elementos visuais, oferecendo uma ferramenta valiosa para a indústria do entretenimento e insights sobre a linguagem visual do cinema.

---

[1]: https://github.com/kauedelazzeri/movie-genre-prediction "Movie-Genre-Prediction – GitHub" 