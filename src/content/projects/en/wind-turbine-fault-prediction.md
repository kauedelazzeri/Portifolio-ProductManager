---
title: "Wind Turbine Fault Prediction with SVM, PCA and LDA"
subtitle: "Technical-business analysis of an AI pipeline for the wind sector"
date: "2024-03-20"
author: "Kaue Delazzeri"
tags: ["Machine Learning", "SVM", "PCA", "LDA", "Wind Energy", "Predictive Maintenance"]
coverImage: "simulacao_aerogerador.png"
---

# Wind Turbine Fault Prediction with SVM, PCA and LDA  
*Technical-business analysis of an AI pipeline for the wind sector*  

---

## Abstract

> *This article proposes a method based on generator electrical signals to detect defects caused by mass imbalance or blade pitch faults. The approach combines Support Vector Machines, Principal Component Analysis, and Linear Discriminant Analysis for early detection, which is essential to reduce downtime and avoid unnecessary maintenance. A framework composed of TurbSim, FAST, and MATLAB/Simulink simulated electrical signals from a 1.5 MW turbine under different wind scenarios and blade imbalances. In identifying failure conditions, 97.61% accuracy was achieved using only generator signals. The method was compared with eight classifiers and showed superior performance.*  

---

## 1. Business Perspective

Unplanned wind turbine downtime can reach **237 h/year**, directly affecting revenue and increasing maintenance costs. By analyzing only generator current signatures — a **non-invasive** and low-CAPEX strategy — the method achieves **97.6%** accuracy in early detection, enabling predictive maintenance and increasing capacity factor.

---

## 2. Data Generation and Simulation

As real SCADA data were unavailable, a synthetic dataset was created:

> "TurbSim generated turbulent wind fields, FAST simulated the **GE 1.5s** turbine, and a MATLAB/Simulink PMSG model recorded three-phase currents for SVM training." ([GitHub][1])

The figure below illustrates the data generation process:

![Synthetic data generation process](/images/articles/wind-turbine/geracao_de_dadosb.png)

| **Parameter**           | **Value**                           |
|-------------------------|-------------------------------------|
| Rated power            | 1.5 MW                              |
| Generator              | Permanent-magnet synchronous (PMSG) |
| Hub height             | 84 m                                |
| Rotor diameter         | 70 m                                |
| Configuration          | 3-blade, upwind                     |
| Rated speed            | 20 RPM                              |
| Rated torque           | 736.79 kN·m                         |

### Operating Conditions – Database Scope

| **Feature**                | **Range**                                       |
|----------------------------|-------------------------------------------------|
| Mean wind speed            | 15.0 – 24.0 m/s                                 |
| Turbulence intensity       | 5% – 30%                                        |
| Imbalance conditions       | Balanced; mass −3%, +2%, +5%; aerodynamic 2°, 3°, 4° |
| Simulations per pair (wind × TI) | 12                                          |
| Simulation time            | 120 s (last 60 s stored)                        |
| Sampling frequency         | 2 kHz                                           |
| Operating region           | 3                                               |

The final dataset comprises **7 classes** × **5 wind speeds** × **5 turbulence levels** × **12 runs** → **2,100 recordings**, each with 60 s × 2 kHz × 3 phases = **360k samples**.

---

## 3. Methodology

The fault detection pipeline follows the flow below:

![Fault detection methodology flow](/images/articles/wind-turbine/fluxo.jpg)

1. **Pre-processing**  
   * z-score normalization → **PCA** (99.99% variance) → **LDA** (6 dimensions).  
2. **Model**  
   * **SVM** with RBF kernel, tuned via grid search (10-fold CV, 168 combinations).  
3. **Benchmarks**  
   * k-NN, QDA, Decision Trees, Random Forest, AdaBoost, ANN, linear SVM.  
4. **Metrics**  
   * Accuracy, Precision, Recall, F1, confusion matrix.

The PCA/LDA visualization below shows class separability:

![PCA/LDA class visualization](/images/articles/wind-turbine/PCAeLDA2.jpeg)

---

## 4. Applied Skills

Throughout the end-to-end study — from data generation to model validation — the following capabilities were exercised:

* **Dimensionality reduction & statistics**: PCA, LDA, variance analysis.  
* **Advanced machine learning**: SVM and margin theory.  
* **Data engineering & MLOps**: Python-Simulink-FAST automation, grid search, cross-validation.  
* **High-performance computing**: Parallel PCA on matrices > 120k × 2k.  
* **Wind turbine domain knowledge**: Physical modeling, pitch and rotor faults.

---

## 5. Results

The confusion matrix below shows model performance:

![Model confusion matrix](/images/articles/wind-turbine/cunfiusion_matrix.png)

* **Global accuracy:** **97.6%**; class-wise F1 ≥ 0.92.  
* **Efficiency:** PCA + LDA reduce the dataset by **98%**, cutting hyperparameter search to ≈ 2 min.

---

## 6. Impact & Next Steps

* **Stakeholders:** operators (↓ OPEX), investors (↑ capacity factor), OEMs (new SaaS revenue).  
* **Roadmap:** extend fault types (gearbox, yaw), add explainability (SHAP), deploy on ARM edge devices in the nacelle.

---

## 7. Conclusion

The project demonstrates, in a tangible way, how modern AI techniques can increase the reliability of renewable assets, combining physical simulation, machine learning, and robust software engineering.

---

[1]: https://github.com/kauedelazzeri/Wind-Turbine-Fault-Prediction "Wind-Turbine-Fault-Prediction – GitHub"
