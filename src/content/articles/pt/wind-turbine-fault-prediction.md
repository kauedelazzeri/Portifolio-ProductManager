---
title: "Predição de Falhas em Aerogeradores com SVM, PCA e LDA"
subtitle: "Análise técnico-negocial de um pipeline de IA para o setor eólico"
date: "2024-03-20"
author: "Kaue Delazzeri"
tags: ["Machine Learning", "SVM", "PCA", "LDA", "Wind Energy", "Predictive Maintenance"]
coverImage: "simulacao_aerogerador.png"
---

# Predição de Falhas em Aerogeradores com SVM, PCA e LDA  
*Análise técnico-negocial de um pipeline de IA para o setor eólico*  

---

## Resumo

> *Este artigo propõe um método baseado nos sinais elétricos do gerador para detectar defeitos causados por desequilíbrio de massa ou falhas de pitch nas pás. A abordagem combina Máquinas de Vetores de Suporte, Análise de Componentes Principais e Análise Discriminante Linear para detecção precoce, fundamental para reduzir paradas e evitar manutenção desnecessária. Um framework composto por TurbSim, FAST e MATLAB/Simulink simulou sinais elétricos de uma turbina de 1,5 MW em diferentes cenários de vento e desequilíbrio nas pás. Na identificação das condições de falha, foi alcançada acurácia de 97,61 % usando apenas sinais do gerador. O método foi comparado com oito classificadores e apresentou desempenho superior.*  

---

## 1. Visão de Negócio

A indisponibilidade não programada de turbinas eólicas pode chegar a **237 h/ano**, afetando diretamente a receita e elevando custos de manutenção. Ao analisar somente as assinaturas de corrente do gerador — estratégia **não invasiva** e de baixo CAPEX — o método alcança **97,6 %** de acerto na detecção precoce, habilitando manutenção preditiva e aumentando o fator de capacidade.

---

## 2. Geração de Dados e Simulação

Como não havia dados SCADA reais disponíveis, foi criada uma base sintética:

> "O TurbSim gerou campos de vento turbulentos, o FAST simulou a turbina **GE 1.5 s** e um modelo PMSG em MATLAB/Simulink registrou as correntes trifásicas para treinamento do SVM." ([GitHub][1])

A figura abaixo ilustra o processo de geração de dados:

![Processo de geração de dados sintéticos](/images/articles/wind-turbine/geracao_de_dadosb.png)

| **Parâmetro**           | **Valor**                           |
|-------------------------|-------------------------------------|
| Potência nominal        | 1,5 MW                              |
| Gerador                 | Síncrono a ímã permanente (PMSG)    |
| Altura do cubo          | 84 m                                |
| Diâmetro do rotor       | 70 m                                |
| Configuração            | 3 pás, upwind                       |
| Velocidade nominal      | 20 RPM                              |
| Torque nominal          | 736,79 kN·m                         |

### Condições de Operação – Abrangência da Base

| **Característica**          | **Faixa**                                       |
|-----------------------------|-------------------------------------------------|
| Velocidade média do vento   | 15,0 – 24,0 m/s                                 |
| Intensidade de turbulência  | 5 % – 30 %                                      |
| Condições de desequilíbrio  | Balanceada; massa −3 %, +2 %, +5 %; aerodinâmico 2°, 3°, 4° |
| Simulações por par (vento × TI) | 12                                          |
| Tempo de simulação          | 120 s (armazenados os últimos 60 s)             |
| Frequência de amostragem    | 2 kHz                                           |
| Região de operação          | 3                                              |

O conjunto final possui **7 classes** × **5 velocidades de vento** × **5 intensidades de turbulência** × **12 execuções** → **2 100 registros**, cada um com 60 s × 2 kHz × 3 fases = **360 k amostras**.

---

## 3. Metodologia

O pipeline de detecção de falhas segue o fluxo abaixo:

![Fluxo da metodologia de detecção de falhas](/images/articles/wind-turbine/fluxo.jpg)

1. **Pré-processamento**  
   * Normalização *z-score* → **PCA** (99,99 % da variância) → **LDA** (6 dimensões).  
2. **Modelo**  
   * **SVM** com kernel RBF, ajustado via *grid search* (10-fold CV, 168 combinações).  
3. **Referências**  
   * k-NN, QDA, Árvores de Decisão, Random Forest, AdaBoost, RNA, SVM linear.  
4. **Métricas**  
   * Acurácia, Precisão, Revocação, F1, matriz de confusão.

A visualização PCA/LDA abaixo mostra a separabilidade das classes:

![Visualização PCA/LDA das classes](/images/articles/wind-turbine/PCAeLDA2.jpeg)

---

## 4. Competências Aplicadas

Durante todo o estudo — da geração de dados à validação do modelo — foram aplicadas as seguintes capacidades:

* **Redução de dimensionalidade & estatística**: PCA, LDA, análise de variância.  
* **Aprendizado de máquina avançado**: SVM e teoria da margem.  
* **Engenharia de dados & MLOps**: automação Python-Simulink-FAST, *grid search*, validação cruzada.  
* **Computação de alto desempenho**: PCA paralela em matrizes > 120 k × 2 k.  
* **Domínio eólico**: modelagem física, falhas de pitch e rotor.

---

## 5. Resultados

A matriz de confusão abaixo mostra a performance do modelo:

![Matriz de confusão do modelo](/images/articles/wind-turbine/cunfiusion_matrix.png)

* **Acurácia global:** **97,6 %**; F1 por classe ≥ 0,92.  
* **Eficiência:** PCA + LDA reduzem o conjunto em **98 %**, diminuindo a busca de hiperparâmetros para ≈ 2 min.

---

## 6. Impacto e Próximos Passos

* **Partes interessadas:** operadores (↓ OPEX), investidores (↑ fator de capacidade), OEMs (nova receita SaaS).  
* **Roadmap:** ampliar tipos de falha (caixa de engrenagens, yaw), adicionar explicabilidade (SHAP) e implantar o modelo em dispositivos ARM na nacele.

---

## 7. Conclusão

O projeto demonstra, de forma tangível, como técnicas modernas de IA podem aumentar a confiabilidade de ativos renováveis, unindo simulação física, aprendizado de máquina e engenharia de software robusta.

---

[1]: https://github.com/kauedelazzeri/Wind-Turbine-Fault-Prediction "Wind-Turbine-Fault-Prediction – GitHub"
