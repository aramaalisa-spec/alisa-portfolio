---
title: Real Estate Transactions Dashboard 2.0
description: Real-life feedback leads to real estate sales
pubDate: 2026-05-12T13:41:00
heroImage: /uploads/Dashboard cover tiny.png
---

![](/uploads/top%20section%20%281%29.png)

# Real Estate Transactions Dashboard 2.0

## Real-life feedback leads to real estate sales

#### The transaction dashboard is a custom overview of all transactions, used every day by transaction managers and agents "in the field". The majority of the data comes from the main CRM; some comes from SendGrid (contact dates, automated email dates, and so on); and some information is self-reported and added by users.

#### My role:

- Gather feedback from agents who have been using the old version for over a year;
- Look for possible solutions for common issues;
- Test possible solutions with agents;
- Create the final UI;
- Hand off the final design;
- Write the user stories, plan the sprints, prioritize and maintain the backlog.

**Goals and KPIs:**

1. Reduce Draft-to-Live conversion time from **7 to 4 days**;
2. Reduce specific **UI friction** (inconvenient horizontal scroll , visual clutter)
3. update the overview to reflect the **business model pivot** – instead of matching members with specific deals we publish all the available transactions.

### Post Mortem

#### Version 1.0 did its job when it was created. After over a year of daily use, the stakeholders had some feedback. 

![](/uploads/Post%20Mortem%20V1%20(1).png)

Only by using the dashboard could we truly say what was useful, what was clutter, and what was missing.

## General Portfolio Overview

### Job-to-be-done:

#### Assess the health of the entire portfolio and ensure that the deals published online accurately reflect the state of affairs offline. 

To accomplish this goal, a transaction manager should be able to:

- Easily see which properties are still in _draft_ stage and what prevents them from being published;
- Publish new deals as soon as the checklist has been crossed out;
- Take action on expiring contracts, either extend or let lapse.

![](/uploads/Dashboards%20layouts%205.png)

Since the dashboard's users already developed a level of familiarity with the linear, table-like layout, I decided to build on it. There are several new elements I implemented:

## 1. 

Deals that are about to expire due to an exclusivity contract deadline are clearly shown. 
An agent can open the drawer with detailed conversion information and decide whether renegotiation makes sense.

![](/uploads/exclusivity%20runout%20row.png)

## 2. 

**Drafts** are clearly marked and display what's needed at a glance. This way, if the agent has the missing information, they can edit and publish the deal.
_Validation needed_ means that the draft checklist has been fulfilled, only the final "good-to-go" is needed. This is the _low-hanging-fruit_ that **affected our KPI most**. 

![](/uploads/Screenshot%202026-03-25%20at%2020.13.41.png)

#### Median Draft-to-Live timeline dropped from 7 to 5 days.

## Individual transaction review

### Goal statement:

#### Understand where buyer interest stands and make sure no warm lead goes cold.

To gain useful insights from the individual transaction view, a transa ction manager needs to:

- check the activity log for every lead;
- assess individual transactions based on the conversion funnel;
- identify where interest drops off;
- control the pipeline and maintain contact with interested parties.

![](/uploads/Individual%20transaction%20health%205.png)
