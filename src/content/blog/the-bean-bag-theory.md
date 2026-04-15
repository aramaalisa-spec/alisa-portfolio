---
title: The Bean Bag Theory PWA
description: Coffee tracking taken seriously
pubDate: 2026-04-13T23:36:00
heroImage: /uploads/books are on the way cover narrow.png
---

# The Bean Bag Theory: coffee tracking taken seriously

## They say you are not your user. Until you are, I say.

#### As a coffee drinker, I’ve been dreaming of an app where I can easily log the beans I try, record taste notes, grade, and document my coffee journey.

#### No KPIs, no monetisation.

#### I decided that this is a perfect use-case for vibe-coding.

![](/uploads/coffee%20photo2.png)

### **Goals:**

- build an app (native or PWA) I can use on my phone;
- test the [newly launched] Figma MCP-to-Claude Code connection. 
- explore computer vision and DB integration.

### Workflow:

**Step 1: Brainstorm with Claude**
Framing my app idea in terms of common UI patterns got me relatively close to something that resembled a product. But there definitely were issues.

**Step 2: Technical set-up**
Have Claude Code running in the terminal, connect the Figma MCP, import the frames.
Prompting your way out of a weak LLM-generated prototype is too resource-intensive. 

**Step 3: Landing on a design**
Experimenting is still better in Figma.
Besides, proper components, colours, tokens, and naming had to be set up.

**Step 4: Import back into Claude, connect the necessary APIs and get going!**

![](/uploads/bean%20bag.png)

<iframe src="/slurp.html" width="100%" height="160" frameborder="0" style="background: transparent;"></iframe>

![](/uploads/bean%20bag2.png)

## Results and thoughts

#### Two days later, I had a functional PWA that works as intended. As its sole user, I would 100% recommend it.

#### Vibe-coding feels empowering and delivers tangible, functional results. 

But...

### Why this is not real design:

1. I didn’t need to account for any edge cases, because I knew exactly how my app would be used.
2. Everything runs locally, so I didn’t have to keep track of vulnerabilities that would be unacceptable in real life.
3. To make it work, it was enough to have a very rudimentary UI component library and just a handful of tokens in Figma, with no proper documentation.
4. There was no discovery, no usability testing, and no KPIs.

__________________________________________

Thanks Claude, Figma, and Notion for working so well together.

![](/uploads/logos.png)
