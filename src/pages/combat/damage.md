---
title: Damage
layout: ~/layouts/Default.vue
---

# {{ $frontmatter.title }}

Damage is tracked as a number counting up from zero. If a character is hit,
their total damage increases by the amount they are hit for.

## Threshold

Every character has a certain amount of damage they can endure before they
receive any significant ill effects. This amount is the character's "Threshold"
and is equal to 4 + (2 x Brawn) + Poise.

So, a character with 2 Brawn and 1 Poise has a damage Threshold of 9.

## Wounds

Wounds represent damage that has become significant enough to hinder the
character. Like breaking a limb, bleeding profusely, or something lethal like a
blade through the heart. A wound is acquired everytime a characters damage
reaches their threshold value ("reach" meaning, Damage greater than or equal to
Threshold).

So, if a character has a Threshold of 7 and they take 4 damage, no effect occurs
immediately. If that character takes another 3 damage to get them to 7, they
immediately suffer a wound.

If the character's Damage total is equal or greater than twice their Threshold,
they additionally suffer a critical wound. If damage reaches triple Threshold,
the character dies immediately.

If a character's damage is greater than or equal to their Threshold and they are
alive at the start of their their next turn, their Damage total is reset to 0.

> Example: John's Threshold is 10 and he takes his first 6 damage. No wounds. On
> a following round he takes another 4, bringing his Damage total to 10. Since
> that is at or above his Threshold, he suffers a Wound. Next, it's John's turn
> and his Damage resets to 0, the number of wounds he's acquired. Eventually
> John is attacked again for 11. He takes another wound. Then, before John's
> turn, he's attacked twice more. The first hit does 9, bringing John to 20,
> double his Threshold. He suffers a critical wound. The last hit does 10,
> bringing him to 30, triple his Threshold. Unlucky John dies.

### Wound Effects

When a wound is suffered it is immediately counted in their wound total, a d20
is rolled. If the value is less than or equal to their wound total, they die.
Otherwise, one of the following occurs based on the roll value:

- 7 to 20) Normal Wound. No additional effect.
- 1 to 6) Minor Crippling Wound. Roll for a minor crippling effect.

Critical Wounds count as 2 to the character's wound count and use the following
effect table instead:

- 13 to 20) Normal Wound. No additional effect.
- 1 to 12) Severe Crippling Wound. Roll for a severe crippling effect.

### Crippling Effects

Cripple effects are assigned based on the effect, with it being you and the DM's
job to describe the concrete details of the damage. For instance, your character
may get a "Damage Over Time" effect and if you were hit by a sword the DM would
say _“They gashed your neck, and now you're bleeding out.”_

If, however, the attack was a fireball the following description would be more
accurate, _“In the aftermath of the explosion your clothes catch fire and skin
begins to melt.”_ The effect would be the same, but the flavor is adjusted to
make sense for the scenario.

> _Figure out roll weightings_

**Minor Effects**

- **Minor Damage Over Time)** Take 1 damage at the end of your turn in
  combat, stacking.
- **Slowed)** Can only walk or run at half speed.
- **Weakend)** -1 Brawn, stacking.
- **Staggered)** -1 Poise, stacking.
- **Fogged Memory)** -1 Memory, stacking.
- **Dulled Senses)** -1 Wit, stacking.

**Severe Effects**

- **Severe Damage Over Time)** Take d3 damage at the start of every turn in
  combat or every minute out of combat, stacking.
- **Immobile)** Can't use your legs to move.
- **Drained)** Brawn set to -1.
- **Unstable)** Poise set to -1.
- **Amnesia)** Memory set to -1.
- **Dazed)** Wit set to -1.

## Healing

### First Aid

If in combat, the only conventional (non-magic) option for healing is First Aid.
Applying first aid allows minor crippling effects to be removed in combat.

To apply First Aid, the performing character must choose a target and make a
skill check with a difficulty of 6. If the character is targeting themself, the
check is made with disadvantage.

### Rest and Proper Aid

Outside of combat, there are two conventional methods for healing. Rest and
proper aid by a doctor.

If your character can sleep and eat as needed and maintains a low level of
activity, they are condidered "resting." While resting, they lose wounds at a
rate of -1 wound every 12 hours. Or effectively -2 wounds per full day of rest.
If your character has any minor crippling effects, they lose them at the same
rate.

Combat, of course, interrupts rest. But other stressful activities include, but
are not limited to, a rushed march, an acrobatic performance, or the like. It'd
be cumbersome and impossible to list all activities, so the only other hard rule
is: if it requires a Clash Roll or a Skill Check of 7 or more, it interrupts
rest. Anything else is up to the DM to determine.

If attended by an actual doctor or a party member with an appropriate domain,
the rate of natural healing is doubled. Additionally, the doctor or medic may
make one difficulty 7 check per day to remove a severe crippling effect.

## Armor

A character's gear can reduce incoming damage by a flat amount known simply as
their Armor Value. When dealing damage to a character in combat, the amount
dealt by an individual attack is reduced by the target's Armor Value. Armor
cannot reduce damage below 0.

If the target can't properly defend against a directed attack, armor is ignored.
For instance, stabbing a sleeping target. Of course, in these cases, the
helpless rule already applies.

If the attack is indirect, such as damage from an explosion, the target's armor
value _is_ applied, even if the target can't actively defend against it.

### Anti Armor

Some weapons and attacks ignore or reduce armor. This is denoted on the weapon
description as either **Negate Armor** or **Halve Armor**, which do exactly as
they say.

### Magical Armor?

Some Supernatural spells can protect characters. This is not considered "Armor"
for the sake of damage calculations. These spells bypass natural laws, after
all. The source of the magical protection will explain its own effect.

## Damage Scaling

It should be noted that, unlike many RPGs, health and damage does not scale up
innately as the game progresses. A longsword is as effective for a late game
character as it is for a beginner. In some cases, adventurers may find outright
"better" equipment to replace their mundane weaponry and armor. When that
happens, that character will gain a very significant advantage over anyone who
does not find an equally impressive deterrent.

But even the greatest adventurer, stripped naked and without a weapon, is
vulnerable to an angry, pitchfork wielding peasant.
