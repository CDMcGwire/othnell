---
title: Core Gameplay
layout: ~/layouts/Default.vue
---

# {{ $frontmatter.title }}

The actual gameplay elements that players will engage with. That is, when the
player or DM wants their character to perform some non-trivial action in-game,
the DM will choose the appropriate challenge type from the ones below and the
involved players will do as written there.

## Clash Rolls

When two or more characters perform opposing actions, like attacking each other
with melee weapons or using psychic powers to break someone's mind, both parties
simultaneously roll a die. The side with a higher roll wins by the difference.
The size of die each party uses is based on the situational starting conditions
and then is increased (or lowered) by one "rank" based on their Brawn.

> Reading dice roll shorthand:
>
> NdR - N = number of dice of that rank; d for dice; R = rank of the dice to
> roll
>
> So 2d8 means "roll two 8-sided dice" while d12 means "roll one 12-sided die"

Single Die Roll Ranks - This is the default type of roll

- d2 > d4 > d6 > d8 > d10 > d12 > d12 + d2 > d12 + d4...

Two Die Roll Ranks - Used when specified by other rules

- 2d2 > d4 + d2 > 2d4 > d6 + d4 > 2d6 > d8 + d6...

> **Example:** A barbarian with a great axe attacks a old wizard with a dagger.
> The greataxe gives the barbarian a base die of d8 and the wizard has a d4 with
> their dagger. The barbarian has a +3 Brawn so the d8 goes up three sizes to
> d12 + d2. The wizard has a -1 Brawn, and so the d4 is downgraded to a d2. They
> roll, Barbarian gets an 8 total, Wizard gets a 1. The Wizard loses and is
> damaged by 7.

## Skill Checks

When a character performs a non-trivial but unopposed action, it invokes a skill
check. Players by default have a hand of three playing cards they can see. When
they say they wish to make an action the DM sees fit to challenge, the DM will
set a value based on an objective difficulty and the player must play a card of
equal or greater value.

If the player has 1 or more Poise, they may choose to draw up to their Poise in
additional cards, but they must play the last one drawn. At negative Poise
values, they player instead is compelled to draw additional cards up to their
negative value and choose the lowest between those and what's in their hand.

(Will probably need to tweak the odds on this one)

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

At negative values of Memory, the player must draw additional cards equal to the
number of negative points, but EVERY card must match suit or rank.

## Cognitive Load

A resource each player has representing their capacity for strenuous mental
activity. A character's maximum pool size is 4 by default and doubled once for
each point of Wit. A negative Wit subtracts from the pool size by double the
number of negative Wit points (negative pool sizes are valid).

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

- **Charm)** The target must a Poise check with a DC based on the acting
  character's Charisma: -1=3/0=5/1=7/2=10/3=King (or something like that).
- **Intimidate)** Actor and Target start a Clash roll with a dice based on their
  Charisma + Brawn: -2=d2-1/-1=d2/0=d4/1=d6/etc.
- **Deceive)** Target must make a memory check against a card the Actor draws.
  Actor may draw an additional card for each point of Charisma. If one of those
  cards has no matches in the target's pulls, the attempt succeeds.
- **Persuade)** Target must spend CL points as if checking the actor's
  motivation but value is scaled by Actor's Charisma: 2 + (2 x Actor Charisma)

## Advantage

For cases where the exact situation warrants modifiers beyond base stats. Pretty
much lifted off 5e but applies differently to each 'Core' mechanic.

- **Clash Rolls)** Character with advantage goes up one die, other character
  goes down one. Vice versa for disadvantage. Adv/Dis applies once to all
  parties or not at all.
- **Skill Checks)** A character with advantage adds an additional card to their
  hand before playing or drawing. A character with disadvantage removes one card
  from their hand.
- **Memory Pulls)** Character with advantage may elect to redraw each of their
  cards once, discarding the original. A character with disadvantage must match
  rank.
- **Cognitive Load)** Advantage doubles the value of the character's
  points/tokens. Disadvantage halves them.
- **Charisma)** If actor has advantage, target has disadvantage and vice versa.
