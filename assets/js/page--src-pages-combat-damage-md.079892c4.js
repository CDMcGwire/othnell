(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{twvD:function(e,t,a){"use strict";a.r(t);var n=a("KHd+"),r=a("6ipC"),o=a("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},l=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===i(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:a[e]=function(){return s[e]}}))},c=o.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",d={excerpt:null,title:"Damage"};var u=function(e){e.options[h]&&(e.options[h]=d),o.a.util.defineReactive(e.options,h,d),e.options.computed=c.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},f=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"-frontmattertitle-"}},[a("a",{attrs:{href:"#-frontmattertitle-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v(e._s(e.$frontmatter.title))]),a("p",[e._v("Damage is tracked as a number counting up from zero. If a character is hit,\ntheir total damage increases by the amount they are hit for.")]),a("h2",{attrs:{id:"threshold"}},[a("a",{attrs:{href:"#threshold","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Threshold")]),a("p",[e._v('Every character has a certain amount of damage they can endure before they\nreceive any significant ill effects. This amount is the character\'s "Threshold"\nand is equal to 4 + (2 x Brawn) + Poise.')]),a("p",[e._v("So, a character with 2 Brawn and 1 Poise has a damage Threshold of 9.")]),a("h2",{attrs:{id:"wounds"}},[a("a",{attrs:{href:"#wounds","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Wounds")]),a("p",[e._v('Wounds represent damage that has become significant enough to hinder the\ncharacter. Like breaking a limb, bleeding profusely, or something lethal like a\nblade through the heart. A wound is acquired everytime a characters damage\nreaches their threshold value ("reach" meaning, Damage greater than or equal to\nThreshold).')]),a("p",[e._v("So, if a character has a Threshold of 7 and they take 4 damage, no effect occurs\nimmediately. If that character takes another 3 damage to get them to 7, they\nimmediately suffer a wound.")]),a("p",[e._v("If the character's Damage total is equal or greater than twice their Threshold,\nthey additionally suffer a critical wound. If damage reaches triple Threshold,\nthe character dies immediately.")]),a("p",[e._v("If a character's damage is greater than or equal to their Threshold and they are\nalive at the start of their their next turn, their Damage total is reset to 0.")]),a("blockquote",[a("p",[e._v("Example: John's Threshold is 10 and he takes his first 6 damage. No wounds. On\na following round he takes another 4, bringing his Damage total to 10. Since\nthat is at or above his Threshold, he suffers a Wound. Next, it's John's turn\nand his Damage resets to 0, the number of wounds he's acquired. Eventually\nJohn is attacked again for 11. He takes another wound. Then, before John's\nturn, he's attacked twice more. The first hit does 9, bringing John to 20,\ndouble his Threshold. He suffers a critical wound. The last hit does 10,\nbringing him to 30, triple his Threshold. Unlucky John dies.")])]),a("h3",{attrs:{id:"wound-effects"}},[a("a",{attrs:{href:"#wound-effects","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Wound Effects")]),a("p",[e._v("When a wound is suffered it is immediately counted in their wound total, a d20\nis rolled. If the value is less than or equal to their wound total, they die.\nOtherwise, one of the following occurs based on the roll value:")]),a("ul",[a("li",[e._v("7 to 20) Normal Wound. No additional effect.")]),a("li",[e._v("1 to 6) Minor Crippling Wound. Roll for a minor crippling effect.")])]),a("p",[e._v("Critical Wounds count as 2 to the character's wound count and use the following\neffect table instead:")]),a("ul",[a("li",[e._v("13 to 20) Normal Wound. No additional effect.")]),a("li",[e._v("1 to 12) Severe Crippling Wound. Roll for a severe crippling effect.")])]),a("h3",{attrs:{id:"crippling-effects"}},[a("a",{attrs:{href:"#crippling-effects","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Crippling Effects")]),a("p",[e._v('Cripple effects are assigned based on the effect, with it being you and the DM\'s\njob to describe the concrete details of the damage. For instance, your character\nmay get a "Damage Over Time" effect and if you were hit by a sword the DM would\nsay '),a("em",[e._v("“They gashed your neck, and now you're bleeding out.”")])]),a("p",[e._v("If, however, the attack was a fireball the following description would be more\naccurate, "),a("em",[e._v("“In the aftermath of the explosion your clothes catch fire and skin\nbegins to melt.”")]),e._v(" The effect would be the same, but the flavor is adjusted to\nmake sense for the scenario.")]),a("blockquote",[a("p",[a("em",[e._v("Figure out roll weightings")])])]),a("p",[a("strong",[e._v("Minor Effects")])]),a("ul",[a("li",[a("strong",[e._v("Minor Damage Over Time)")]),e._v(" Take 1 damage at the end of your turn in combat,\nstacking.")]),a("li",[a("strong",[e._v("Slowed)")]),e._v(" Can only walk or run at half speed.")]),a("li",[a("strong",[e._v("Weakend)")]),e._v(" -1 Brawn, stacking.")]),a("li",[a("strong",[e._v("Staggered)")]),e._v(" -1 Poise, stacking.")]),a("li",[a("strong",[e._v("Fogged Memory)")]),e._v(" -1 Memory, stacking.")]),a("li",[a("strong",[e._v("Dulled Senses)")]),e._v(" -1 Wit, stacking.")])]),a("p",[a("strong",[e._v("Severe Effects")])]),a("ul",[a("li",[a("strong",[e._v("Severe Damage Over Time)")]),e._v(" Take d3 damage at the start of every turn in\ncombat or every minute out of combat, stacking.")]),a("li",[a("strong",[e._v("Immobile)")]),e._v(" Can't use your legs to move.")]),a("li",[a("strong",[e._v("Drained)")]),e._v(" Brawn set to -1.")]),a("li",[a("strong",[e._v("Unstable)")]),e._v(" Poise set to -1.")]),a("li",[a("strong",[e._v("Amnesia)")]),e._v(" Memory set to -1.")]),a("li",[a("strong",[e._v("Dazed)")]),e._v(" Wit set to -1.")])]),a("h2",{attrs:{id:"healing"}},[a("a",{attrs:{href:"#healing","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Healing")]),a("h3",{attrs:{id:"first-aid"}},[a("a",{attrs:{href:"#first-aid","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("First Aid")]),a("p",[e._v("If in combat, the only conventional (non-magic) option for healing is First Aid.\nApplying first aid allows minor crippling effects to be removed in combat.")]),a("p",[e._v("To apply First Aid, the performing character must choose a target and make a\nskill check with a difficulty of 6. If the character is targeting themself, the\ncheck is made with disadvantage.")]),a("h3",{attrs:{id:"rest-and-proper-aid"}},[a("a",{attrs:{href:"#rest-and-proper-aid","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Rest and Proper Aid")]),a("p",[e._v("Outside of combat, there are two conventional methods for healing. Rest and\nproper aid by a doctor.")]),a("p",[e._v('If your character can sleep and eat as needed and maintains a low level of\nactivity, they are considered "resting." While resting, they lose wounds at a\nrate of -1 wound every 8 hours. Or effectively -3 wounds per full day of rest.\nIf your character has any minor crippling effects, they lose them at the same\nrate.')]),a("p",[e._v("Combat, of course, interrupts rest as does sleep deprivation (more than 24 hours\nwithout sleep). But other stressful activities include, but are not limited to,\na rushed march, an acrobatic performance, or the like. It'd be cumbersome and\nimpossible to list all activities, so the only other hard rule is: if it\nrequires a Clash Roll or a Skill Check of 7 or more, it interrupts rest.\nAnything else is up to the DM to determine.")]),a("p",[e._v("If attended by an actual doctor or a party member with an appropriate domain,\nthe rate of natural healing is doubled. Additionally, the doctor or medic may\nmake one difficulty 7 check per day to remove a severe crippling effect.")]),a("h2",{attrs:{id:"armor"}},[a("a",{attrs:{href:"#armor","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Armor")]),a("p",[e._v("A character's gear can reduce incoming damage by a flat amount known simply as\ntheir Armor Value. When dealing damage to a character in combat, the amount\ndealt by an individual attack is reduced by the target's Armor Value. Armor\ncannot reduce damage below 0.")]),a("p",[e._v("If the target can't properly defend against a directed attack, armor is ignored.\nFor instance, stabbing a sleeping target. Of course, in these cases, the\nhelpless rule already applies.")]),a("p",[e._v("If the attack is indirect, such as damage from an explosion, the target's armor\nvalue "),a("em",[e._v("is")]),e._v(" applied, even if the target can't actively defend against it.")]),a("h3",{attrs:{id:"anti-armor"}},[a("a",{attrs:{href:"#anti-armor","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Anti Armor")]),a("p",[e._v("Some weapons and attacks ignore or reduce armor. This is denoted on the weapon\ndescription as either "),a("strong",[e._v("Negate Armor")]),e._v(" or "),a("strong",[e._v("Halve Armor")]),e._v(", which do exactly as\nthey say.")]),a("h3",{attrs:{id:"magical-armor"}},[a("a",{attrs:{href:"#magical-armor","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Magical Armor?")]),a("p",[e._v('Some Supernatural spells can protect characters. This is not considered "Armor"\nfor the sake of damage calculations. These spells bypass natural laws, after\nall. The source of the magical protection will explain its own effect.')]),a("h2",{attrs:{id:"damage-scaling"}},[a("a",{attrs:{href:"#damage-scaling","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Damage Scaling")]),a("p",[e._v('It should be noted that, unlike many RPGs, health and damage does not scale up\ninnately as the game progresses. A longsword is as effective for a late game\ncharacter as it is for a beginner. In some cases, adventurers may find outright\n"better" equipment to replace their mundane weaponry and armor. When that\nhappens, that character will gain a very significant advantage over anyone who\ndoes not find an equally impressive deterrent.')]),a("p",[e._v("But even the greatest adventurer, stripped naked and without a weapon, is\nvulnerable to an angry, pitchfork wielding peasant.")])])}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof u&&u(f);t.default=f.exports}}]);