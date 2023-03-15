## TO DO:

If the person has a balance of 0, they can't change the limit. However a balance of 0 can be understood as:
 - The person never made a deposit (_Yes, implement this 👈_);
 - The person spent all their balance;

So it is necessary to keep track of **how many transactions the accont have done.**

> It is interesting to keep track if the person runs out of money frequently. If true, the limit alteration (_for more_) should be suspended.