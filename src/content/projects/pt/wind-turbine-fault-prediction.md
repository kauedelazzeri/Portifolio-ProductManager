---
title: "Predição de Falhas em Turbinas Eólicas"
subtitle: "Pipeline de IA para Detecção Precoce usando SVM, PCA e LDA"
date: "2024"
author: "Kaue Delazzeri"
tags: ["Machine Learning", "SVM", "PCA", "Wind Energy", "Fault Detection"]
locale: "pt"
translations:
  en:
    title: "Wind Turbine Fault Prediction"
    subtitle: "AI Pipeline for Early Fault Detection using SVM, PCA and LDA"
---

# Predição de Falhas em Turbinas Eólicas com SVM, PCA e LDA

## Visão Geral do Projeto

O tempo de inatividade não planejado de turbinas eólicas pode chegar a 237 horas por ano, afetando diretamente a receita e aumentando os custos de manutenção. Este projeto desenvolveu um método não invasivo para detecção precoce de falhas usando apenas assinaturas de corrente do gerador, alcançando 97,6% de precisão.

## Abordagem Técnica

### Geração de Dados
- **Base de Dados Sintética**: Utilizou TurbSim para simulação de vento, FAST para modelagem da turbina GE 1.5s, e MATLAB/Simulink para simulação do gerador PMSG
- **Monitoramento Não Invasivo**: Apenas sinais elétricos do gerador foram utilizados, eliminando a necessidade de sensores adicionais

### Pipeline de Pré-processamento
- **Implementação PCA**: Alcançou retenção de 99,99% da variância enquanto reduzia a dimensionalidade
- **Integração LDA**: Redução adicional para 6 componentes para classificação ótima
- **Redução de Dados**: 98% de redução no tamanho do dataset mantendo o conteúdo informativo

### Modelo de Machine Learning
- **Algoritmo**: Support Vector Machine com kernel RBF
- **Otimização**: Grid-Search com validação cruzada de 10 folds
- **Benchmarking**: Comparado contra k-NN, QDA, Decision Trees, Random Forest, AdaBoost, ANN e SVM linear

## Resultados e Impacto

### Métricas de Performance
- **Precisão Global**: 97,6%
- **F1 Score**: ≥ 0,92 em todas as classes de falha
- **Velocidade de Processamento**: Busca de hiperparâmetros reduzida para ~2 minutos
- **Performance Comparativa**: Superior a todos os algoritmos de benchmark

### Valor de Negócio
- **Redução CAPEX**: Nenhum sensor adicional necessário
- **Otimização OPEX**: Detecção precoce reduz custos de manutenção
- **Proteção de Receita**: Minimiza tempo de inatividade não planejado
- **Escalabilidade**: Método aplicável a diferentes modelos de turbina

## Implementação Técnica

```python
# Exemplo do pipeline de pré-processamento
def preprocess_data(signals):
    # Aplicar PCA para redução de dimensionalidade
    pca = PCA(n_components=0.9999)
    pca_features = pca.fit_transform(signals)
    
    # Aplicar LDA para separação de classes
    lda = LDA(n_components=6)
    final_features = lda.fit_transform(pca_features, labels)
    
    return final_features
```

## Melhorias Futuras

1. **Implementação em Tempo Real**: Deploy do modelo para monitoramento contínuo
2. **Redes Multi-turbina**: Estender para predições em nível de parque eólico
3. **Tipos de Falha Adicionais**: Incluir detecção de falhas em caixa de engrenagens e pás
4. **Edge Computing**: Implementar processamento local para reduzir latência

## Impacto da Pesquisa

Este trabalho demonstra que a análise de assinaturas elétricas pode efetivamente substituir sistemas tradicionais de monitoramento baseados em vibração, fornecendo uma solução custo-efetiva para a indústria de energia eólica mantendo altos padrões de precisão.
