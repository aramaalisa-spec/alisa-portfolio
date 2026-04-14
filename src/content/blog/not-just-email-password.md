---
title: Not just Email & Password
description: The inherent complexity of an application-based onboarding
pubDate: 2026-04-12T10:59:00
heroImage: /uploads/not just email.png
---

# Not Just  _Email & Password:_

## The inherent complexity of an application-based onboarding

#### Skyland Family is a membership-based investment platform for family offices and wealthy individuals.

#### While industry best practice is to reduce friction at signup, any complex registration form that requires applicant evaluation comes with trade-offs. For a community founded on trust and integrity, carefully considering every prospective member is paramount.

### **My role:**

1. **Discover**, collect, and centralise the crucial data points for every member application scenario: Private Individuals or Family Offices, Foundations and Verified Partners (such as developers, banking partners, real estate agents)
2. **Identify patterns** for a lean information architecture and efficient execution;
3. **Analyse, prototype, test**, and iterate on user flows;
4. **Hand off** the final designs to the development team; 
5. Maintain the **backlog**, plan the **sprints**.

#### It looked simple enough at first, a predictable pattern:

![](/uploads/classic%20signup%20flow%202.png)

### Why this approach failed:

Precisely because the pattern was so predictable, creating a username and a password triggered the "my account has been created, _I am in_" perception, which was false.

I witnessed users try to log in repeatedly, thinking that being stuck on a screen that instructed them to continue the application process was a bug. They expected to immediately access the investment platform, regardless of the copy on the screen. 

It was, of course, not a bug but the core dysfunction of the overall signup flow. 

### Key distinction:

![](/uploads/Password%20last%202.png)

Moving the logical last step of a classig signup pattern 

### 

Signup flowchart for a Wealth Owner / Family Officer:

![](/uploads/Signup%20Flowchart%20narrow3.png)

### Internal stakeholders and their needs:

- **Member Manager** — needs comprehensive information to verify identity and track down missing information;
- **Philanthropy Coordinator** — needs specific details about complex legal structures (foundations, trusts).
- **Business Developers** — need to evaluate partner applicants (project developers, investors, wealth managers) against commercial criteria.
- **Top Management** — needs a robust overview to exercise the right of veto.

### The main challenges of the project:

- Several types of memberships entail complex flows for one feature;
- Different stakeholders have different needs;
- Backend complexity.

### 

### Language as a design decision

#### Many legal terms in Germany and across the DACH region lack accurate English equivalents. A linguistic patchwork within a single form seemed to be terrible UX. 

![](/uploads/Apply%20as%20foundation%20language%20warning.png)

#### Research, however, proved my intuition wrong: even English-speaking members were familiar with and even preferred precise German legal terms over ambiguous approximations.

Registering as a philanthropic organisation had by far the most complex flow, because it required the applicant to provide accurate legal details regarding:

- the foundation, its track record and credibility;
- the founder or grantor;
- the person applying.

###  Here is how I reduced friction:

### ![](/uploads/Mitigate%20hurdles%20foundations.png)

## **Surprises and learnings:**

- **Stakeholder vs UX best practices.** Member managers have legitimate reasons to request more information, as additional data points mean fewer gaps and less back-and-forth. But every form field is a cost the user bears, before they can even get anything in return. 
- **A complex “source of truth”.** Some information appeared in the CRM twice, because what prospective members wrote about themselves was not always accurate or constructive. It matters where the information came from: direct disclosure, a self-assessment, or a subsequent correction.
- **The Norman Door problem.** Usability testing is both humbling and perplexing. Watching someone navigate a form that seemed “simple” and “clear” to us was very insightful. One should not rely on tooltips or copy to clarify an unconventional pattern. 

##
