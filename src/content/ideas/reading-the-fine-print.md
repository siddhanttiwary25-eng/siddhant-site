---
title: Why Jev might be the future of building trading signals
date: 2026-11-16
summary: The next edge in trading may come from reading the rules, not predicting the news.
references:
  - TypeSafe, Jev
  - My benchmark, Same bet? (siddhanttiwary.com/same-bet)
---

Most trading signals are built from numbers: prices, volumes, spreads. The words around a market get skimmed by a person or ignored. That’s a problem in prediction markets, where the rules are the product. Two markets can share a title and pay out on different events. Two with different titles can be the same bet.

When I tested TypeSafe’s Jev on 197 look-alike Polymarket and Kalshi pairs, it made zero false matches. Title matching, even with its best cutoff picked after seeing the answers, made 11. Jev cost about $46 per million pairs, so reading every rule on two venues is no longer a job for a person.

That changes what a signal can be. Instead of asking a model to predict anything, you ask it how markets relate: which ones are the same, which one implies another, which can’t both happen. Then you check the prices against that logic. If “wins the election” trades above “makes the runoff”, something is wrong, and you don’t need a forecast to say so.

The honest catch: these gaps may only show up in thin markets, where there’s little money to make. I’m running a week-long forward test on live Kalshi prices to find out. Even if this trade turns out small, the idea isn’t. Turning fine print into structured, checkable data is a source of signals most desks still handle by hand.
