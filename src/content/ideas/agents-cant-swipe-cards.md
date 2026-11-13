---
title: Agents can’t swipe cards
date: 2026-10-08
summary: Fully autonomous, and never holding your money — you can’t have both yet.
references:
  - Google, Agent Payments Protocol (AP2)
  - Coinbase, x402
---

Everyone wants an AI agent that books the flight, pays the deposit and handles it all without asking. Everyone also wants the agent to never hold their money. Right now you can’t fully have both. Card payments were built for a person at a checkout: someone present, a card number, fraud checks that assume a human is clicking. An agent breaks each of those assumptions. So today the choice is awkward. Either the agent gets real payment details and the risk that comes with them, or a human approves every step, which defeats the point. Newer protocols try to split the difference. Google’s Agent Payments Protocol has the user sign a “mandate” saying what the agent may buy, and Coinbase’s x402 lets an agent pay inside a normal web request. The question I keep coming back to is about permission, not plumbing: how do you prove what a person actually agreed to, after the fact?
