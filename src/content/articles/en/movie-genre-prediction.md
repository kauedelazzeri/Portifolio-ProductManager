---
title: "Movie Genre Prediction Based on Posters"
subtitle: "Analysis of movie genre classification using convolutional neural networks and transfer learning"
date: "2024-03-21"
author: "Kaue Delazzeri"
tags: ["Machine Learning", "Computer Vision", "CNN", "Transfer Learning", "Deep Learning"]
coverImage: "VGG_accuracy.png"
---

# Movie Genre Prediction Based on Posters  
*Analysis of movie genre classification using convolutional neural networks and transfer learning*  

---

## Abstract

> *This article presents a method for classifying movie genres using only movie posters as input. The approach combines image processing techniques with convolutional neural networks (CNN) and transfer learning to extract relevant visual features and perform multiclass classification. The model was trained on a dataset of over 45,000 movie posters, achieving over 85% accuracy in classifying major genres. Analysis of the convolutional layers reveals specific visual patterns associated with each genre, providing insights into the visual language of cinema.*  

---

## 1. Business Vision

Automatic movie genre classification has important applications in streaming, content recommendation, and market analysis. By using only posters — already available and standardized resources — the method reduces implementation costs and provides valuable insights into cinema's visual communication.

---

## 2. Data and Preprocessing

The dataset was built from multiple sources:

> "We used the TMDB API to collect posters and metadata, combining with IMDb information for cross-validation of genres." ([GitHub][1])

The distribution of movies by year can be seen below:

![Distribution of movies by year](/images/articles/movie-genre-prediction/movies_by_year.png)

The initial distribution of genres showed significant imbalance:

![Initial distribution of genres](/images/articles/movie-genre-prediction/total_movies_per_genre.png)

After preprocessing and balancing, we achieved a more uniform distribution:

![Final distribution of genres](/images/articles/movie-genre-prediction/final_movies_per_genre.png)

---

## 3. Methodology

We tested two different architectures:

### 3.1 Custom Neural Network

A custom CNN architecture was designed specifically for this task:

![Custom neural network architecture](/images/articles/movie-genre-prediction/rede_custom.png)

The learning curve shows good convergence:

![Custom network learning curve](/images/articles/movie-genre-prediction/custom_accuracy.png)

The confusion matrix reveals the model's performance:

![Custom network confusion matrix](/images/articles/movie-genre-prediction/custom_arc_confusion_matrix.png)

### 3.2 VGG16 with Transfer Learning

We also implemented a VGG16-based model with transfer learning:

![VGG16 confusion matrix](/images/articles/movie-genre-prediction/vgg_conf_matrix.png)

---

## 4. Applied Competencies

- **Computer Vision**: Image processing and feature extraction
- **Deep Learning**: CNN architecture design and training
- **Transfer Learning**: Fine-tuning of pre-trained models
- **Data Engineering**: Dataset construction and preprocessing
- **MLOps**: Model deployment and API development

---

## 5. Results

- **Accuracy**: 85% in classifying major genres
- **Inference Time**: Less than 100ms per image
- **Visual Patterns**: Identification of genre-specific visual elements
- **API**: REST endpoint for real-time classification

---

## 6. Impact and Next Steps

The model can be integrated into streaming platforms and content management systems to:
- Automate genre tagging
- Improve content recommendations
- Analyze visual trends in cinema
- Support marketing decisions

Future work includes:
- Expanding to subgenres
- Incorporating temporal analysis
- Developing a web interface
- Adding explainability features

---

## 7. Conclusion

The proposed method demonstrates that movie posters contain sufficient visual information for genre classification. The combination of custom CNN and transfer learning approaches provides a robust solution that can be easily integrated into existing systems. The analysis of visual patterns also offers valuable insights for the film industry.

---

[1]: https://github.com/kauedelazzeri/movie-genre-prediction 