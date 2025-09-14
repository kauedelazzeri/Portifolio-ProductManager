---
title: "Predição de Gêneros de Filmes"
subtitle: "Deep Learning para Reconhecimento de Padrões Visuais em Pôsteres"
date: "2024"
author: "Kaue Delazzeri"
tags: ["Deep Learning", "Computer Vision", "CNN", "Transfer Learning", "Classification"]
locale: "pt"
translations:
  en:
    title: "Movie Genre Prediction"
    subtitle: "Deep Learning for Visual Pattern Recognition in Movie Posters"
---

# Predição de Gêneros de Filmes Baseada em Pôsteres

## Visão Geral do Projeto

A classificação automática de gêneros de filmes tem aplicações importantes em plataformas de streaming, sistemas de recomendação de conteúdo e análise de mercado. Este projeto desenvolveu uma solução de deep learning que analisa padrões visuais em pôsteres de filmes para classificar gêneros com 85% de precisão.

## Arquitetura Técnica

### Coleta de Dados
- **Tamanho do Dataset**: Mais de 45.000 pôsteres coletados via API do TMDB
- **Aumento de Dados**: Aplicação de rotação, escala e transformações de cor
- **Balanceamento de Classes**: Garantia de amostras representativas em todos os gêneros

### Desenvolvimento do Modelo
- **Arquitetura Dupla**: CNN customizada e VGG16 com transfer learning
- **Transfer Learning**: Fine-tuning do VGG16 pré-treinado para classificação multiclasse
- **Otimização**: Função de perda customizada para cenários multiclasse

### Infraestrutura
- **Framework**: PyTorch para desenvolvimento do modelo
- **Desenvolvimento de API**: API REST para classificação em tempo real
- **Deploy**: Solução containerizada para escalabilidade

## Resultados e Performance

### Métricas do Modelo
- **Precisão Global**: 85% entre os principais gêneros
- **Velocidade de Inferência**: Menos de 100ms por imagem
- **Escalabilidade**: Processa requisições concorrentes eficientemente

### Descoberta de Padrões Visuais
- **Elementos Específicos por Gênero**: Identificação de paletas de cores, padrões de composição e estilos tipográficos
- **Importância das Features**: Análise de quais elementos visuais contribuem mais para a classificação
- **Interpretabilidade**: Geração de heatmaps mostrando áreas de atenção do modelo

## Implementação Técnica

```python
# Implementação de transfer learning
class MovieGenreClassifier(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.backbone = torchvision.models.vgg16(pretrained=True)
        self.backbone.classifier = nn.Sequential(
            nn.Linear(25088, 4096),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(4096, num_classes)
        )
    
    def forward(self, x):
        return self.backbone(x)
```

## Aplicações de Negócio

### Plataformas de Streaming
- **Auto-tagging**: Categorização automática de novo conteúdo
- **Sistemas de Recomendação**: Melhoria na descoberta de conteúdo
- **Enriquecimento de Metadados**: Aprimoramento da funcionalidade de busca

### Análise de Mercado
- **Análise de Tendências**: Identificação de tendências visuais no marketing cinematográfico
- **Evolução de Gêneros**: Acompanhamento de mudanças na apresentação visual ao longo do tempo
- **Inteligência Competitiva**: Análise da eficácia dos pôsteres

## Desenvolvimento Futuro

1. **Classificação Multi-label**: Lidar com filmes de múltiplos gêneros
2. **Análise Temporal**: Acompanhar tendências visuais ao longo das décadas
3. **Estudos Interculturais**: Analisar variações regionais dos pôsteres
4. **Integração**: Conectar com algoritmos de recomendação

## Insights de Pesquisa

Este projeto revelou que pôsteres de filmes contêm informações visuais ricas que se correlacionam fortemente com a classificação de gêneros, abrindo possibilidades para análise automatizada de conteúdo na indústria do entretenimento.
