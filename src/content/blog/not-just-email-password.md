---
title: Not just Email & Password
description: The inherent complexity of an application-based onboarding
pubDate: 2026-04-12T10:59:00
heroImage: /uploads/not just email.png
---

# Not Just _Email & Password_

## The inherent complexity of an application-based onboarding

#### Skyland Family is a membership-based investment platform for family offices and wealthy individuals.

While industry best practice is to reduce friction at signup, any complex registration form that requires reviewing every applicant comes with trade-offs. For a community founded on trust and integrity, carefully reviewing every prospective member is paramount.

### The main challenges of the project:

- Several types of memberships entail complex flows for one feature;
- Different stakeholders have different needs;
- Backend complexity.

### Internal stakeholders and their needs:

- **Member Manager** — needs comprehensive information to verify identity and track down missing information;
- **Philanthropy Coordinator** — needs specific details about complex legal structures (foundations, trusts).
- **Business Developers** — need to evaluate partner applicants (project developers, investors, wealth managers) against commercial criteria.
- **Top Management** — needs a robust overview to exercise the right of veto.

### **My role:**


1. **Discover**, collect, and centralise the crucial data points for every member application scenario: 
- Private Individuals or Family Offices 
- Foundations 
- Verified Partners (such as developers, banking partners, real estate agents)
2. **Identify patterns** for a lean information architecture and efficient execution;
3. **Analyse, prototype, test**, and iterate on user flows;
4. **Hand off** the final designs to the development team; 
5. Maintain the **backlog**, plan the **sprints**.

Signup flowchart for a Wealth Owner / Family Officer:

![](/uploads/Signup%20Flowchart%20narrow3.png)

**Challenges and learnings (will be paired with examples and visuals):**

- **Tension between stakeholder expectations and UX best practices**. Member managers have legitimate reasons to request more information, as additional data points mean fewer gaps and less back-and-forth. But every form field is a cost the user bears, before they can even get anything in return. 
- **The Norman Door problem.** Usability testing is both humbling and perplexing. UI elements that unintentionally lead to bad outcomes were not immediately apparent, so watching someone navigate a form that seemed “simple” and “clear” to us was very important. One should not rely on tooltips or copy to justify an unconventional pattern. 
- **Language as a design decision.** The complex legal framework in Germany and across the DACH region showed that many terms lack accurate English equivalents. Presenting a linguistic patchwork within a single form looked like a terrible idea. Research, however, proved my intuition wrong: even English-speaking members were familiar with and even preferred precise German legal terms over ambiguous approximations.
- **The concept of a “source of truth” is more complex than I expected**. Unusually, the same data points had to be recorded in a CRM twice, because what prospective members wrote about themselves was not always accurate or constructive. At the same time, it was important to document the source of every data point so that it was immediately clear where the information came from: direct disclosure, a self-assessment, or a subsequent correction.
