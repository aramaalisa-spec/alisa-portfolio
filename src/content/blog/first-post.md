---
title: Financing Calculator (FC)
description: Find the right banking partner
pubDate: 2026-04-11T15:24:00.000+02:00
heroImage: /uploads/Financing Calculator hero5.webp
author: rodrigo
updatedDate: 2026-01-15
---

# **Financing Calculator: Matching borrowers with banks on a granular level**

## Context

#### The Financing Calculator (FC) is a tool we built for the main membership-based investment platform for ultra-high-net-worth individuals (UHNWIs). It is geared towards wealthy members looking for financing for large-scale projects. 

## Discovery

### **Competitor analysis and market gap**

There are similar tools online (think HypoFriend, BAUFI 24) that are either unsuitable for large sums (€5M and up) or tied to a specific bank and do not offer an overview of multiple possible financing partners. This is the market gap we aimed for. 

I mapped existing tools on a Miro board, identifying gaps relevant to UHNWIs, and presented it to the entire team for review and feedback. We aligned early on and could go “back to the drawing board” at any time. 

#### ![](/uploads/Screenshot%202026-04-17%20at%2020.16.36.webp)

## 

## Requirements Gathering

### Stakeholder interviews

The project had 3 internal stakeholders:

* **The CEO** with a family office background and the _big picture_ in mind. He shared his experience and understanding of how UHNWIs think about their financing needs. 
* **The business developers**, who built and maintained relationships with banks. They know how the banks view lending, how they evaluate prospective investments, and what they require to say _yes_.
* **The transaction managers,** who are the primary point of contact with members.

#### A successful product should reconcile three perspectives — have a working UI that serves the needs of members looking for a financing partner, generate useful leads that are attractive to banks and bring revenue, and provide learning for further improvement and development.

## **System Design**

### The calculator is divided into four chapters: 

#### 1. **Debtor’s information** mainly regarding the legal entity (for example, foundation, trust, coop, LLC, and other acronyms) and where it is registered;

#### 2. Information about the object or the project development for which the money is borrowed;

#### 3. **Loan amount and conditions** such as down payment, collateral, repayment, and so on.

#### 4. The matches displayed once the risk is assessed and the matching is run.

#### Once I had an overall idea, I approached our development team to discuss the internal architecture and how the new feature would be integrated into the existing CRM setup. 

Because the calculator is only available for members already registered on the platform, we had a head start. But we couldn’t simply add the debtor details to their existing CRM records, as it would bloat them significantly. Moreover, one person could borrow money using a variety of legal entities, so the new data had to be stored separately and linked to the original profiles. To capture everything the matching logic would eventually rely on, the banks required an entire new CRM module. It should be easy for business developers and transaction managers to add, delete and maintain these records.

Once the entire system was clear, we assessed the difficulty of every step, I wrote the user stories, and planned the sprints so that the work on the internal architecture could begin while I was designing and iterating on the UI. 

![](/uploads/ffc%20ui%20corrected%20green.png)

## **UI design**

On the third step, users set their down payment amount. A down payment below 20% would result in unfavourable rates, so rather than processing the input and coming up with poor matches, we warned the prospective borrowers and offered to advise them personally on a more advantageous solution. 

<iframe src="/widgets/property-calculator.html" width="750" height="460" frameborder="0" scrolling="no" style="max-width:100%"></iframe>
<PropertyCalculator />

We shared an early prototype with our contacts at the banks. The calculator only works if banks are engaged and matches lead to introductions that lead to commissions. Some of the feedback was anticipated and had to be gently pushed back on. Predictably, every bank wanted to be featured prominently with better positioning and more acclaim. However, the calculator's value to users depended entirely on it being neutral. 

How to make our partners feel special and appreciated without playing favourites? My coworkers’ efforts should not be taken for granted.

Other feedback was useful and frankly surprising. For example, when capturing the address of the eventual investment, we assumed that asking for the city and federal state would be enough to assess the compatibility. In reality, coverage can differ, without exaggeration, for two buildings standing across the street from each other. We had to ask for the entire address (or addresses) down to the postal code. It was a small field, easy to miss, and it could have silently broken the matching for a subset of users without anyone immediately knowing why.

The results page showed at most 4 banks, ordered by match percentage. Any match below 75% was considered a no-go — either the request was too generic, or something made it unattractive to banks. In both cases, the user saw a custom page inviting them to reach out directly. 

#### _One must acknowledge the limitations of an automated tool._

####  

## **The how-tos, the what ifs, and the what nows**

For analytics, I used two layers: Hotjar for behavioural data on the frontend, and the CRM for everything else. As an extra precaution right after launch, I arranged for the transaction managers to receive summaries of every request. Crucially, they had to know whether someone requested a callback or simply closed the window, as these required different follow-up. 

However, the most important alert I set up was for no-match results. Whenever the calculator returned nothing above the threshold, the relevant team members were notified immediately, myself included. A no-match could signal one of two things: a **UI issue**, or a **business issue** indicating that we may not be covering our members' needs. 

This revealed something important early on: a significant percentage of members were looking for financing in the 5 to 10 million range. Five million was the lower limit of what we and our partners considered high-volume financing. The business model had been built around the assumption of fewer, larger deals generating significant commissions and the hypothesis didn't hold up. 

It left us two options: 

1. persevere under the assumption that we simply hadn't reached the intended target yet, or 
2. expand the tool downward, renegotiating terms with existing banks and focus on onboarding new ones. 

At that point, my input as a designer was minimal. It would be a business decision.

## Summary, output, actionables:

**Competitor Analysis**: mapped existing tools on a Miro board, identifying gaps relevant to UHNWIs. I presented it to the entire team for review and feedback. We aligned early on and could go “back to the drawing board” at any time. 

**Stakeholder Interviews**: interviewed the CEO, business developers, and transaction managers. Documented findings and used them to design the product. They were referenced in the user stories and CRM requirements. 

**CRM Architecture & Dev Collaboration**: worked with developers to define the three-module data structure. Took detailed notes that became the basis for user stories. 

**The UI**: designed it in Figma, iterated based on bank feedback, and ensured efficient handoff. 

**Planning:** maintained the backlog, handled changes and planned the sprints following a scrum structure.

**Analytics & Internal Tooling**: defined analytics requirements with the dev team (Hotjar + CRM triggers), drafted internal notification copy for transaction managers.
