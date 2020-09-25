---
title: Core Gameplay
layout: ~/layouts/Default.vue
---

import term from "~/components/Term.vue"

# {{ $frontmatter.title }}

The actual gameplay elements that players will engage with. That is, when the
player or DM wants their character to perform some non-trivial action in-game,
the DM will choose the appropriate challenge type from the ones below and the
involved players will do as written there.

### Game Materials

To play Othnell, you'll want two packs of playing cards and at least one set of
polyhedral dice (a four, six, eight, twelve, and twenty-sided die plus two
ten-sided), but preferably one set per player.

This site also provides a digital character sheet which players will likely want
to track their progress and combat stats.

### Reading Dice Roll Shorthand

Some mechanics involve rolling a number of dice of varying number of sides. To
alleviate the verbosity of having to write out "roll three eight-sided dice" or
such all over the rules, most RPGs and players have accepted a standard
shorthand pattern.

> **NdR** where "N" is the number of dice and "R" is the _rank_ or number of
> sides on each.

So if the rules or the DM say "roll 2d8" that means "roll two eight-sided dice."
If the rules say "increase die rank by one" then that 2d8 becomes 2d10, since a
ten-sided die is the next larger die.

### Brief on Attributes

While described in more detail in the [Attributes](/characters/attributes) page
of the [Characters](/characters) section, for this section you will at least
need to be aware of the basics.

Every character has five defining characteristics called "Attributes" which are
each represented by a number from -1 to 3. These numbers have an influence on
results of the mechanics described below.

The five attributes are: <term target="attr-brawn">Brawn</term>,
<term target="attr-poise">Poise</term>,
<term target="attr-memory">Memory</term>, <term target="attr-wit">Wit</term>,
and <term target="attr-charisma">Charisma</term>.

## Player Actions

For all trivial and mundane actions the player character performs (opening an
unlocked door, drinking water, etc.) the player simply tells the DM what they
are doing, then the DM continues the narrative based on what you did.

However, when the desired action is non-trivial or otherwise has significant
risk (dodging and arrow, jumping a ravine), the DM will require the player to
engage in one of the following mechanics based on the nature of the action. If
the player "succeeds" then their character performs the action in the game
world. If the player "fails", then so does their character.

## Clash Rolls

When two or more characters perform opposing actions, like attacking each other
with melee weapons or using psychic powers to break someone's mind, both parties
simultaneously roll a die. The side with a higher roll wins by the difference.
The size of die each party uses is based on the situational starting conditions
and then is increased (or lowered) by one "rank" based on their Brawn.

Single Die Roll Ranks - This is the default type of roll

- d2 > d4 > d6 > d8 > d10 > d12 > d12 + d2 > d12 + d4...

Two Die Roll Ranks - Used when specified by other rules

- 2d2 > d4 + d2 > 2d4 > d6 + d4 > 2d6 > d8 + d6...

> **Example:** A barbarian with a great axe attacks a old wizard with a dagger.
> The greataxe gives the barbarian a base die of d10 and the wizard has a d6
> with their dagger. The barbarian has a +3 Brawn so the d10 goes up three sizes
> to d12 + d4. The wizard has a -1 Brawn, and so the d6 is downgraded to a d4.
> They roll, Barbarian gets an 8 total, Wizard gets a 1. The Wizard loses and is
> damaged by 7.

## Skill Checks

When a character performs a non-trivial but unopposed action, it invokes a skill
check. Players by default have a hand of three playing cards they can see. When
they say they wish to make an action the DM sees fit to challenge, the DM will
set a value based on an objective difficulty and the player must play a card of
equal or greater value.

The lowest possible DC is 3, as anything lower would be automatic with a
standard set of playing cards. The highest is an Ace.

If the player has 1 or more Poise, they may choose to discard one card from
their hand to draw up to their Poise in additional cards, but they must play the
last one drawn. At negative Poise, the player's hand size is reduced to two.

After the check is complete, the player should draw back to their default hand
size if below, or discard down to their hand size if above.

> **Example:** The semi-dashing rogue in the party with a poise of 2 wants to
> open a locked door. If it was a cheap lock on a shed, the DM may determine the
> difficulty of the action is relatively low and so they say DC is 4. The player
> of the Rogue has three cards in their hand: a 2, a 4, and a Queen. Since they
> don't want to waste the Queen and they don't want to fail, the player throws
> down their 4 and successfully opens the lock. They then draw a new card to
> replace the old and get a 7.
>
> Later the Rogue is in a secured palace and is trying to unlock a safe. The DM
> determined (hopefully ahead of time) that the safe is a "King" challenge. The
> player now has a 2, 7, and Queen in their hand, so they won't succeed off the
> cards in their hand. So the player discards their 2 and uses their additional
> Poise draws and hopes for the best. Unfortunately they pull a 3 and a Jack, so
> they still fail.

## Memory Pull

When a character wishes to see if their character has some bit of trivia
knowledge about the game world (say, acquired in their fictional past) or when
the DM is about to reveal important information for the current narrative, the
DM will have the player make a Memory Pull. The DM will pull a card (separate
deck from the skill checks) and keep the value hidden. The player will then pull
1 card plus an additional one for each point of Memory. If any card matches the
DM's in suit or rank the DM must give correct and forthright information (they
do not have to reveal more than what was asked). The DM will not reveal their
card.

> Probability at: +0 ≈ 31%, +1 ≈ 53%, +2 ≈ 69%, +3 ≈ 79%

At negative values of Memory, the player must draw additional cards equal to the
number of negative points, but EVERY card must match suit or rank with the DM's
card.

## Cognitive Load

A resource each player has representing their capacity for strenuous mental
activity. A character's maximum pool size is 4 by default and doubled once for
each point of Wit. A negative Wit halves the pool size once for each negative
Wit point (negative pool sizes are valid).

The Cognitive Load Resource (name pending) can be used like a currency to "buy
secrets" from the DM. That is, reveal information that would otherwise be hidden
to the character, by means of their reasoning ability. Many common tasks will
have set values. For instance, if an enemy moves out of sight, the player may
spend one point to get a 10' radius indicating where the enemy may be, or they
may expend 2-3 tokens and get the exact location. It can also be used in
investigative tasks, such as guessing the motivation of an NPC. In that case,
the player must spend a number of tokens they think is equal to or greater than
2 + (2 x Target's Wit). If they don't put enough tokens, the DM will lie
otherwise the DM must reveal the truth, but the DM does not need to announce the
target value.

## Charisma

Charisma lets a character compel or change the thinking of another by forcing
the target to make a check on one of the other four attributes, depending on the
type of influence being exerted.

Charisma mechanics are

- **Charm)** Make a Skill Check with a DC of 5 + (2 x Target's Poise). You may
  add your Charisma bonus to the card you play.
- **Intimidate)** Actor and Target start a Clash roll with a dice based on their
  Charisma + Brawn: -2=d2-1/-1=d2/0=d4/1=d6/etc.
- **Lie)** Make a Memory Pull. You may discard and redraw a number of cards up
  to your Charisma.
- **Persuade)** Make a Cognition wager where the cost is based on the target's
  Wit and the nature of the action you are attempting to compel them to. Your
  starting wager is equal to your Charisma bonus.

## Acting with Advantage

Sometimes the specific situation of an action will stack in the player's favor
or disfavor. Since it would be cumbersome (if not impossible) to figure out and
determine the precise effect of every little environment condition, this game
opts to take a simple approach of more binary Advantage/Disadvantage mechanic.

If the DM thinks the context of your action would make it significantly easier
than normal, then they'll give the acting player **Advantage (Adv)**. If the DM
thinks the situation makes performing the action significantly harder, they'll
give the player **Disadvantage (Dis)**.

Advantage and Disadvantage then effect the action based on its mechanic in the
following ways:

- **Clash Rolls)** A player with advantage increases their die rank by two. A
  player with disadvantage decreases their die rank by two.
- **Skill Checks)** A player with advantage adds an additional card to their
  hand before playing or drawing. A character with disadvantage removes one card
  from their hand.
- **Memory Pulls)** A player with advantage may elect to redraw each of their
  cards once, discarding the original. A character with disadvantage must match
  rank.
- **Cognitive Load)** Advantage halves the cost of the requested information.
  Disadvantage doubles the cost.
