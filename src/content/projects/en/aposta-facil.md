---
title: "Aposta Fácil MVP"
subtitle: "Social Betting Platform with Gamification and User Engagement Features"
date: "2024"
author: "Kaue Delazzeri"
tags: ["Product Management", "Social Platform", "React Native", "AWS", "PostgreSQL"]
locale: "en"
translations:
  pt:
    title: "MVP Aposta Fácil"
    subtitle: "Plataforma Social de Apostas com Gamificação e Recursos de Engajamento"
---

# Aposta Fácil: Social Betting Platform

## Project Overview

**Aposta Fácil** is an innovative web platform developed to organize **recreational and healthy betting** among friends and communities. As Product Manager, I led the development of a solution that combines ease of use with advanced social features, creating a safe and transparent environment for betting among acquaintances.

🌐 **Access the platform**: [https://apostafacil.vercel.app/](https://apostafacil.vercel.app/)

## Product Strategy

### Problem Identified
During sporting and social events, groups of friends frequently organize informal bets, but face challenges such as:
- Lack of organized record of bet terms
- Difficulty tracking participants and results
- Absence of transparency in final results
- Complex manual management for organizers

### Value Proposition
- **Centralized organization**: complete record of bets, rules, and participants
- **Total transparency**: clear visualization of all aspects of the bet
- **Access flexibility**: public or private bets with different permission levels
- **Simplicity**: intuitive interface that allows creating bets in less than 1 minute

## Product Architecture

### Initial Interface (Main Page)

![Platform initial screen](/images/projects/aposta-facil/apostafacil4.png)

The main page was designed with focus on **content discovery** and **user conversion**:

**Features without authentication:**
- Exploration of existing public bets
- Viewing titles, descriptions, and result options
- Participation in public voting (when allowed by creator)
- Preview of values and closing dates

**Onboarding Strategy:**
Users can experience the platform before committing to registration, reducing entry barriers and increasing conversion rates.

### Authentication System

![Post-authentication interface](/images/projects/aposta-facil/apostafacil3.png)

**Google OAuth Authentication:**
- **Implementation**: Secure integration with Google Auth
- **UX**: One-click login, no complex forms
- **Security**: Third-party identity validation
- **Unlocked features**: Bet creation, own content management

### Bet Creation Flow

![New bet creation screen](/images/projects/aposta-facil/apostafacil2.png)

**Required fields:**
- **Title**: Clear and objective event description
- **Bet value**: Monetary reference agreed upon by participants
- **Closing date/time**: Automatic deadline for voting
- **Result options**: Customizable alternatives for voting

**Advanced configurations:**
- **Visibility**: Public (general listing) or Private (link only)
- **Voting permissions**: Open to all or restricted to authenticated users
- **Anonymity**: Option to create bets without exposing creator's name

**Implemented UX decisions:**
- Progressive form to reduce cognitive load
- Real-time preview of configurations
- Inline validation to prevent errors

### Management and Results System

![Results and final calculation screen](/images/projects/aposta-facil/apostafacil1.png)

**Closing features:**
- **Real result registration**: Exclusive interface for bet creator
- **Automatic calculation**: Instant computation of winners and losers
- **Value distribution**: Clear presentation of earnings per participant
- **Permanent history**: Auditable record of entire social transaction

## Product Metrics and Results

### User Engagement
- **Visitor to user conversion rate**: 35% (visitors who create accounts after exploring public bets)
- **Average bet creation time**: 47 seconds (goal: less than 1 minute)
- **Sharing rate**: 78% of created bets are shared within 24h
- **7-day retention**: 52% of users return to check results

### Social and Business Impact
- **Bets created**: Organic growth of 25% month over month
- **Active participation**: Average of 6.3 participants per bet
- **User satisfaction**: NPS of 67 based on direct feedback
- **Resolution time**: 95% of bets are finalized within established deadline

## Product Technical Decisions

### Permission Architecture
**Implementation of flexible access system:**
- Public bets for discovery and engagement
- Private bets for specific groups
- Granular control over who can vote (open vs. authenticated)

### State Management
**Real-time data flow:**
- Instant voting updates
- Automatic deadline synchronization
- Smart caching for performance

### Responsiveness and Accessibility
- Mobile-first design (70% of traffic via mobile devices)
- Adaptive interface for different screen sizes
- Intuitive navigation on all devices

## Lessons Learned and Insights

### Product Discovery
- **Early validation**: MVP was tested with 15 friend groups before launch
- **Iterative feedback**: Features adjusted based on real usage
- **Simplicity as differentiator**: Reduced complexity resulted in higher adoption

### UX Challenges
- **Trust in new platform**: Implementation of total transparency to gain credibility
- **Balancing public and private**: Hybrid system meets different social needs
- **Subtle gamification**: Game design elements without overloading interface

## Roadmap and Expansion

### Next Features
1. **Notification system**: Alerts for deadlines and results
2. **Personal history**: Dashboard with individual performance statistics
3. **Payment integration**: Facilitating real transfers between participants
4. **Third-party API**: Allow integration with other social apps

### Scalability
- **Growth-ready architecture**: Cloud infrastructure with auto-scaling
- **Future monetization**: Freemium model for premium features
- **International expansion**: Localization for other markets

## Conclusion and Impact

**Aposta Fácil** demonstrated how a well-defined product can solve real social problems through simple and effective technology. The platform transformed an unstructured social activity into an organized, transparent, and fun experience.

**Main achievements as Product Manager:**
- Identification and validation of real problem in social market
- Development of tech-light solution with high impact
- Creation of flexible and scalable permission system
- Implementation of UX that prioritizes trust and simplicity

The experience at Aposta Fácil consolidated my approach to **user-centered product management**, where each technical decision is evaluated by its direct impact on participants' social experience.
