(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{W7WF:function(e,t,a){"use strict";a.r(t);var n=a("KHd+"),i=a("rNfg"),r=a("6ipC"),o=a("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var h={term:i.a,VueRemarkRoot:r.a},l=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(h).forEach((function(e){"object"===s(h[e])&&"function"==typeof h[e].render||"function"==typeof h[e]&&"function"==typeof h[e].options.render?t[e]=h[e]:a[e]=function(){return h[e]}}))},d=o.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",p={excerpt:null,title:"Core Gameplay"};var u=function(e){e.options[c]&&(e.options[c]=p),o.a.util.defineReactive(e.options,c,p),e.options.computed=d.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},v=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"-frontmattertitle-"}},[a("a",{attrs:{href:"#-frontmattertitle-","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v(e._s(e.$frontmatter.title))]),a("p",[e._v("The actual gameplay elements that players will engage with. That is, when the\nplayer or DM wants their character to perform some non-trivial action in-game,\nthe DM will choose the appropriate challenge type from the ones below and the\ninvolved players will do as written there.")]),a("h3",{attrs:{id:"game-materials"}},[a("a",{attrs:{href:"#game-materials","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Game Materials")]),a("p",[e._v("To play Othnell, you'll want two packs of playing cards and at least one set of\npolyhedral dice (a four, six, eight, twelve, and twenty-sided die plus two\nten-sided), but preferably one set per player.")]),a("p",[e._v("This site also provides a digital character sheet which players will likely want\nto track their progress and combat stats.")]),a("h3",{attrs:{id:"reading-dice-roll-shorthand"}},[a("a",{attrs:{href:"#reading-dice-roll-shorthand","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Reading Dice Roll Shorthand")]),a("p",[e._v('Some mechanics involve rolling a number of dice of varying number of sides. To\nalleviate the verbosity of having to write out "roll three eight-sided dice" or\nsuch all over the rules, most RPGs and players have accepted a standard\nshorthand pattern.')]),a("blockquote",[a("p",[a("strong",[e._v("NdR")]),e._v(' where "N" is the number of dice and "R" is the '),a("em",[e._v("rank")]),e._v(" or number of\nsides on each.")])]),a("p",[e._v('So if the rules or the DM say "roll 2d8" that means "roll two eight-sided dice."\nIf the rules say "increase die rank by one" then that 2d8 becomes 2d10, since a\nten-sided die is the next larger die.')]),a("h3",{attrs:{id:"brief-on-attributes"}},[a("a",{attrs:{href:"#brief-on-attributes","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Brief on Attributes")]),a("p",[e._v("While described in more detail in the "),a("a",{attrs:{href:"/characters/attributes"}},[e._v("Attributes")]),e._v(" page\nof the "),a("a",{attrs:{href:"/characters"}},[e._v("Characters")]),e._v(" section, for this section you will at least\nneed to be aware of the basics.")]),a("p",[e._v('Every character has five defining characteristics called "Attributes" which are\neach represented by a number from -1 to 3. These numbers have an influence on\nresults of the mechanics described below.')]),a("p",[e._v("The five attributes are: "),a("term",{attrs:{target:"attr-brawn"}},[e._v("Brawn")]),e._v(",\n"),a("term",{attrs:{target:"attr-poise"}},[e._v("Poise")]),e._v(",\n"),a("term",{attrs:{target:"attr-memory"}},[e._v("Memory")]),e._v(", "),a("term",{attrs:{target:"attr-wit"}},[e._v("Wit")]),e._v(",\nand "),a("term",{attrs:{target:"attr-charisma"}},[e._v("Charisma")]),e._v(".")],1),a("h2",{attrs:{id:"player-actions"}},[a("a",{attrs:{href:"#player-actions","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Player Actions")]),a("p",[e._v("For all trivial and mundane actions the player character performs (opening an\nunlocked door, drinking water, etc.) the player simply tells the DM what they\nare doing, then the DM continues the narrative based on what you did.")]),a("p",[e._v('However, when the desired action is non-trivial or otherwise has significant\nrisk (dodging and arrow, jumping a ravine), the DM will require the player to\nengage in one of the following mechanics based on the nature of the action. If\nthe player "succeeds" then their character performs the action in the game\nworld. If the player "fails", then so does their character.')]),a("h2",{attrs:{id:"clash-rolls"}},[a("a",{attrs:{href:"#clash-rolls","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Clash Rolls")]),a("p",[e._v('When two or more characters perform opposing actions, like attacking each other\nwith melee weapons or using psychic powers to break someone\'s mind, both parties\nsimultaneously roll a die. The side with a higher roll wins by the difference.\nThe size of die each party uses is based on the situational starting conditions\nand then is increased (or lowered) by one "rank" based on their Brawn.')]),a("p",[e._v("Single Die Roll Ranks - This is the default type of roll")]),a("ul",[a("li",[e._v("d2 > d4 > d6 > d8 > d10 > d12 > d12 + d2 > d12 + d4...")])]),a("p",[e._v("Two Die Roll Ranks - Used when specified by other rules")]),a("ul",[a("li",[e._v("2d2 > d4 + d2 > 2d4 > d6 + d4 > 2d6 > d8 + d6...")])]),a("blockquote",[a("p",[a("strong",[e._v("Example:")]),e._v(" A barbarian with a great axe attacks a old wizard with a dagger.\nThe greataxe gives the barbarian a base die of d10 and the wizard has a d6\nwith their dagger. The barbarian has a +3 Brawn so the d10 goes up three sizes\nto d12 + d4. The wizard has a -1 Brawn, and so the d6 is downgraded to a d4.\nThey roll, Barbarian gets an 8 total, Wizard gets a 1. The Wizard loses and is\ndamaged by 7.")])]),a("h2",{attrs:{id:"skill-checks"}},[a("a",{attrs:{href:"#skill-checks","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Skill Checks")]),a("p",[e._v("When a character performs a non-trivial but unopposed action, it invokes a skill\ncheck. Players by default have a hand of three playing cards they can see. When\nthey say they wish to make an action the DM sees fit to challenge, the DM will\nset a value based on an objective difficulty and the player must play a card of\nequal or greater value.")]),a("p",[e._v("The lowest possible DC is 3, as anything lower would be automatic with a\nstandard set of playing cards. The highest is an Ace.")]),a("p",[e._v("If the player has 1 or more Poise, they may choose to discard one card from\ntheir hand to draw up to their Poise in additional cards, but they must play the\nlast one drawn. At negative Poise, the player's hand size is reduced to two.")]),a("p",[e._v("After the check is complete, the player should draw back to their default hand\nsize if below, or discard down to their hand size if above.")]),a("blockquote",[a("p",[a("strong",[e._v("Example:")]),e._v(" The semi-dashing rogue in the party with a poise of 2 wants to\nopen a locked door. If it was a cheap lock on a shed, the DM may determine the\ndifficulty of the action is relatively low and so they say DC is 4. The player\nof the Rogue has three cards in their hand: a 2, a 4, and a Queen. Since they\ndon't want to waste the Queen and they don't want to fail, the player throws\ndown their 4 and successfully opens the lock. They then draw a new card to\nreplace the old and get a 7.")]),a("p",[e._v('Later the Rogue is in a secured palace and is trying to unlock a safe. The DM\ndetermined (hopefully ahead of time) that the safe is a "King" challenge. The\nplayer now has a 2, 7, and Queen in their hand, so they won\'t succeed off the\ncards in their hand. So the player discards their 2 and uses their additional\nPoise draws and hopes for the best. Unfortunately they pull a 3 and a Jack, so\nthey still fail.')])]),a("h2",{attrs:{id:"memory-pull"}},[a("a",{attrs:{href:"#memory-pull","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Memory Pull")]),a("p",[e._v("When a character wishes to see if their character has some bit of trivia\nknowledge about the game world (say, acquired in their fictional past) or when\nthe DM is about to reveal important information for the current narrative, the\nDM will have the player make a Memory Pull. The DM will pull a card (separate\ndeck from the skill checks) and keep the value hidden. The player will then pull\n1 card plus an additional one for each point of Memory. If any card matches the\nDM's in suit or rank the DM must give correct and forthright information (they\ndo not have to reveal more than what was asked). The DM will not reveal their\ncard.")]),a("blockquote",[a("p",[e._v("Probability at: +0 ≈ 31%, +1 ≈ 53%, +2 ≈ 69%, +3 ≈ 79%")])]),a("p",[e._v("At negative values of Memory, the player must draw additional cards equal to the\nnumber of negative points, but EVERY card must match suit or rank with the DM's\ncard.")]),a("h2",{attrs:{id:"cognitive-load"}},[a("a",{attrs:{href:"#cognitive-load","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Cognitive Load")]),a("p",[e._v("A resource each player has representing their capacity for strenuous mental\nactivity. A character's maximum pool size is 4 by default and doubled once for\neach point of Wit. A negative Wit halves the pool size once for each negative\nWit point (negative pool sizes are valid).")]),a("p",[e._v("The Cognitive Load Resource (name pending) can be used like a currency to \"buy\nsecrets\" from the DM. That is, reveal information that would otherwise be hidden\nto the character, by means of their reasoning ability. Many common tasks will\nhave set values. For instance, if an enemy moves out of sight, the player may\nspend one point to get a 10' radius indicating where the enemy may be, or they\nmay expend 2-3 tokens and get the exact location. It can also be used in\ninvestigative tasks, such as guessing the motivation of an NPC. In that case,\nthe player must spend a number of tokens they think is equal to or greater than\n2 + (2 x Target's Wit). If they don't put enough tokens, the DM will lie\notherwise the DM must reveal the truth, but the DM does not need to announce the\ntarget value.")]),a("h2",{attrs:{id:"charisma"}},[a("a",{attrs:{href:"#charisma","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Charisma")]),a("p",[e._v("Charisma lets a character compel or change the thinking of another by forcing\nthe target to make a check on one of the other four attributes, depending on the\ntype of influence being exerted.")]),a("p",[e._v("Charisma mechanics are")]),a("ul",[a("li",[a("strong",[e._v("Charm)")]),e._v(" Make a Skill Check with a DC of 5 + (2 x Target's Poise). You may\nadd your Charisma bonus to the card you play.")]),a("li",[a("strong",[e._v("Intimidate)")]),e._v(" Actor and Target start a Clash roll with a dice based on their\nCharisma + Brawn: -2=d2-1/-1=d2/0=d4/1=d6/etc.")]),a("li",[a("strong",[e._v("Lie)")]),e._v(" Make a Memory Pull. You may discard and redraw a number of cards up\nto your Charisma.")]),a("li",[a("strong",[e._v("Persuade)")]),e._v(" Make a Cognition wager where the cost is based on the target's\nWit and the nature of the action you are attempting to compel them to. Your\nstarting wager is equal to your Charisma bonus.")])]),a("h2",{attrs:{id:"acting-with-advantage"}},[a("a",{attrs:{href:"#acting-with-advantage","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"},[e._v("🠶")])]),e._v("Acting with Advantage")]),a("p",[e._v("Sometimes the specific situation of an action will stack in the player's favor\nor disfavor. Since it would be cumbersome (if not impossible) to figure out and\ndetermine the precise effect of every little environment condition, this game\nopts to take a simple approach of more binary Advantage/Disadvantage mechanic.")]),a("p",[e._v("If the DM thinks the context of your action would make it significantly easier\nthan normal, then they'll give the acting player "),a("strong",[e._v("Advantage (Adv)")]),e._v(". If the DM\nthinks the situation makes performing the action significantly harder, they'll\ngive the player "),a("strong",[e._v("Disadvantage (Dis)")]),e._v(".")]),a("p",[e._v("Advantage and Disadvantage then effect the action based on its mechanic in the\nfollowing ways:")]),a("ul",[a("li",[a("strong",[e._v("Clash Rolls)")]),e._v(" A player with advantage increases their die rank by two. A\nplayer with disadvantage decreases their die rank by two.")]),a("li",[a("strong",[e._v("Skill Checks)")]),e._v(" A player with advantage adds an additional card to their\nhand before playing or drawing. A character with disadvantage removes one card\nfrom their hand.")]),a("li",[a("strong",[e._v("Memory Pulls)")]),e._v(" A player with advantage may elect to redraw each of their\ncards once, discarding the original. A character with disadvantage must match\nrank.")]),a("li",[a("strong",[e._v("Cognitive Load)")]),e._v(" Advantage halves the cost of the requested information.\nDisadvantage doubles the cost.")])])])}),[],!1,null,null,null);"function"==typeof l&&l(v),"function"==typeof u&&u(v);t.default=v.exports}}]);