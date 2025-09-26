---
title: "Detecção de Falhas em Turbinas Eólicas com SVM, PCA e LDA"
subtitle: "Análise técnico-comercial de um pipeline de IA para o setor eólico"
date: "2024-03-20"
author: "Kaue Delazzeri"
tags: ["Machine Learning", "SVM", "PCA", "LDA", "Energia Eólica", "Manutenção Preditiva"]
coverImage: "simulacao_aerogerador.png"
---

# Detecção de Falhas em Turbinas Eólicas com SVM, PCA e LDA  
*Análise técnico-comercial de um pipeline de IA para o setor eólico*  

---

## Resumo

> *Este artigo propõe um método baseado em sinais elétricos do gerador para detectar defeitos causados por desbalanceamento de massa ou falhas de pitch das pás. A abordagem combina Support Vector Machines, Análise de Componentes Principais e Análise Discriminante Linear para detecção precoce, o que é essencial para reduzir o tempo de inatividade e evitar manutenções desnecessárias. Um framework composto por TurbSim, FAST e MATLAB/Simulink simulou sinais elétricos de uma turbina de 1,5 MW sob diferentes cenários de vento e desbalanceamentos das pás. Na identificação de condições de falha, foi alcançada precisão de 97,61% usando apenas sinais do gerador. O método foi comparado com oito classificadores e mostrou desempenho superior.*  

---

## 1. Perspectiva de Negócio

O tempo de inatividade não planejado de turbinas eólicas pode chegar a **237 h/ano**, afetando diretamente a receita e aumentando os custos de manutenção. Ao analisar apenas assinaturas de corrente do gerador — uma estratégia **não invasiva** e de baixo CAPEX — o método atinge **97,6%** de precisão na detecção precoce, possibilitando manutenção preditiva e aumentando o fator de capacidade.

---

## 2. Geração de Dados e Simulação

Como dados reais de SCADA não estavam disponíveis, um dataset sintético foi criado:

> "TurbSim gerou campos de vento turbulentos, FAST simulou a turbina **GE 1.5s**, e um modelo PMSG MATLAB/Simulink registrou correntes trifásicas para treinamento do SVM." ([GitHub][1])

A figura abaixo ilustra o processo de geração de dados:

![Processo de geração de dados sintéticos](/images/articles/wind-turbine/geracao_de_dadosb.png)

| **Parâmetro**           | **Valor**                           |
|-------------------------|-------------------------------------|
| Potência nominal       | 1,5 MW                              |
| Gerador                | Síncrono de ímã permanente (PMSG)   |
| Altura do hub          | 84 m                                |
| Diâmetro do rotor      | 70 m                                |
| Configuração           | 3 pás, upwind                       |
| Velocidade nominal     | 20 RPM                              |
| Torque nominal         | 736,79 kN·m                         |

### Condições Operacionais – Escopo da Base de Dados

| **Característica**         | **Faixa**                                       |
|----------------------------|-------------------------------------------------|
| Velocidade média do vento  | 15,0 – 24,0 m/s                                |
| Intensidade de turbulência | 5% – 30%                                        |
| Condições de desbalanceamento | Balanceado; massa −3%, +2%, +5%; aerodinâmico 2°, 3°, 4° |
| Simulações por par (vento × TI) | 12                                          |
| Tempo de simulação         | 120 s (últimos 60 s armazenados)               |
| Frequência de amostragem   | 2 kHz                                           |
| Região operacional         | 3                                               |

O dataset final compreende **7 classes** × **5 velocidades de vento** × **5 níveis de turbulência** × **12 execuções** → **2.100 gravações**, cada uma com 60 s × 2 kHz × 3 fases = **360k amostras**.

---

## 3. Metodologia

O pipeline de detecção de falhas segue o fluxo abaixo:

![Fluxo da metodologia de detecção de falhas](/images/articles/wind-turbine/fluxo.jpg)

1. **Pré-processamento**  
   * Normalização z-score → **PCA** (99,99% variância) → **LDA** (6 dimensões).  
2. **Modelo**  
   * **SVM** com kernel RBF, ajustado via grid search (10-fold CV, 168 combinações).  
3. **Benchmarks**  
   * k-NN, QDA, Árvores de Decisão, Random Forest, AdaBoost, ANN, SVM linear.  
4. **Métricas**  
   * Acurácia, Precisão, Recall, F1, matriz de confusão.

A visualização PCA/LDA abaixo mostra a separabilidade das classes:

![Visualização PCA/LDA das classes](/images/articles/wind-turbine/PCAeLDA2.jpeg)

---

## 4. Competências Aplicadas

Ao longo do estudo end-to-end — da geração de dados à validação do modelo — as seguintes capacidades foram exercitadas:

* **Redução de dimensionalidade & estatística**: PCA, LDA, análise de variância.  
* **Machine learning avançado**: SVM e teoria de margem.  
* **Engenharia de dados & MLOps**: Automação Python-Simulink-FAST, grid search, validação cruzada.  
* **Computação de alto desempenho**: PCA paralelo em matrizes > 120k × 2k.  
* **Conhecimento de domínio eólico**: Modelagem física, falhas de pitch e rotor.

---

## 5. Resultados

A matriz de confusão abaixo mostra o desempenho do modelo:

![Matriz de confusão do modelo](/images/articles/wind-turbine/cunfiusion_matrix.png)

* **Acurácia global:** **97,6%**; F1 por classe ≥ 0,92.  
* **Eficiência:** PCA + LDA reduzem o dataset em **98%**, cortando a busca de hiperparâmetros para ≈ 2 min.

---

## 6. Impacto e Próximos Passos

* **Stakeholders:** operadores (↓ OPEX), investidores (↑ fator de capacidade), OEMs (nova receita SaaS).  
* **Roadmap:** estender tipos de falhas (caixa de câmbio, yaw), adicionar explicabilidade (SHAP), deploy em dispositivos ARM edge na nacele.

---

## 7. Conclusão

O projeto demonstra, de forma tangível, como técnicas modernas de IA podem aumentar a confiabilidade de ativos renováveis, combinando simulação física, machine learning e engenharia de software robusta.

---

[1]: https://github.com/kauedelazzeri/Wind-Turbine-Fault-Prediction "Wind-Turbine-Fault-Prediction – GitHub"
