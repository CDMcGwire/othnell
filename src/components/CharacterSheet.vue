<template>
  <div class="col container">
    <div class="row-mobile-col">
      <div class="frame">
        <button id="portrait-upload">
          <img
            id="char-portrait"
            src="https://i.pinimg.com/originals/c6/fc/2c/c6fc2c165498a2f39b420b1e75aa2017.png"
            alt="Character Portrait"
          />
        </button>
      </div>
      <div class="col title-row">
        <div id="char-name">
          <input type="text" placeholder="Character Name" />
        </div>
        <div id="char-title" class="row-mobile-col">
          <div class="title-prefix">the</div>
          <input type="text" placeholder="Character Title" />
        </div>
      </div>
    </div>
    <div class="spacer-sheet" />
    <div class="row-mobile-col m-spaced">
      <div class="col-mobile-row m-spaced char-attribute">
        <div class="attribute-label">Brawn</div>
        <number-input
          class="char-attr-grid"
          v-model="brawn"
          :min="-1"
          :max="3"
        />
      </div>
      <div class="col-mobile-row m-spaced char-attribute">
        <div class="attribute-label">Poise</div>
        <number-input
          class="char-attr-grid"
          v-model="poise"
          :min="-1"
          :max="3"
        />
      </div>
      <div class="col-mobile-row m-spaced char-attribute">
        <div class="attribute-label">Memory</div>
        <number-input
          class="char-attr-grid"
          v-model="memory"
          :min="-1"
          :max="3"
        />
      </div>
      <div class="col-mobile-row m-spaced char-attribute">
        <div class="attribute-label">Wit</div>
        <number-input class="char-attr-grid" v-model="wit" :min="-1" :max="3" />
      </div>
      <div class="col-mobile-row m-spaced char-attribute">
        <div class="attribute-label">Charisma</div>
        <number-input
          class="char-attr-grid"
          v-model="charisma"
          :min="-1"
          :max="3"
        />
      </div>
    </div>
    <div class="spacer-sheet" />
    <div class="trackers">
      <div class="dmg-grid">
        <div>Damage</div>
        <div class="row m-center c-center">
          <number-input class="row minor-stat" v-model="damage" :min="0" />
        </div>
        <div />
        <div class="dmg-over-thresh" />
        <div>Threshold</div>
        <div class="txt-center">8</div>
        <div class="thresh-over-wounds">
          <button class="basic-input">Resolve</button>
        </div>
        <div>Wounds</div>
        <div class="txt-center">0</div>
      </div>
      <div class="col defense other-trackers">
        <div class="row m-spaced">
          <div>Armor</div>
          <number-input
            class="row m-center minor-stat basic-input"
            v-model="armor"
            :min="-99"
            :max="99"
            textOnly
          />
        </div>
        <div class="row m-spaced">
          <div>Speed</div>
          <number-input
            class="row m-center minor-stat basic-input"
            v-model="speed"
            :min="-99"
            :max="99"
            textOnly
          />
        </div>
      </div>
      <div class="col other-trackers">
        <div class="row m-spaced">
          <div>Cognition</div>
          <number-input
            class="row m-center minor-stat"
            v-model="cognition"
            :min="0"
            :max="cognitionMax"
          />
        </div>
        <button class="basic-input">Sleep</button>
        <div class="row">
          <bs id="meal-type" class="food-type-select" :options="foodTypes" />
          <button id="eat-button" class="grow basic-input-right">Eat</button>
        </div>
      </div>
    </div>
    <div class="spacer-sheet" />
    <div class="col">
      <div class="row m-spaced c-center">
        <h1 class="row c-center">Injuries</h1>
        <div class="row injury-controls">
          <bs class="injury-type-select" :options="injuryTypes" />
          <button class="injury-add-bttn basic-input-right">+</button>
        </div>
      </div>
      <div class="col injury-list">
        <div class="row injury-list-entry" v-if="injuries.minorDot > 0">
          <div class="injury-type">Minor DoT</div>
          <div class="injury-label">Burn</div>
          <button class="injury-remove" @click="injuries.minorDot--">-</button>
        </div>
      </div>
    </div>
    <div class="spacer-sheet" />
    <div class="col reference-list">
      <h1 class="reference-list-section-title">
        <g-link to="/characters/skills" @click="close">Proficiencies</g-link>
      </h1>
      <div class="empty-reference-list" v-if="proficiencies.length < 1">
        None... Go to the Proficiencies page of the rules to add some.
      </div>
      <reference-list
        class="col"
        :entries="proficiencies"
        @remove="removeProficiency"
      />
    </div>
    <div class="spacer-sheet" />
    <div class="col reference-list">
      <h1 class="reference-list-section-title">
        <g-link to="/characters/traits" @click="close">Traits</g-link>
      </h1>
      <h2 class="reference-list-section-title">
        <g-link to="/characters/traits/mundane" @click="close">Mundane</g-link>
      </h2>
      <div class="empty-reference-list" v-if="mundaneTraits.length < 1">
        None... Go to the Mundane Traits page of the rules to add some.
      </div>
      <reference-list
        class="col"
        :entries="mundaneTraits"
        @remove="removeMundaneTrait"
      />
      <h2 class="reference-list-section-title">
        <g-link to="/characters/traits/heroic" @click="close">Heroic</g-link>
      </h2>
      <div class="empty-reference-list" v-if="heroicTraits.length < 1">
        None... Go to the Heroic Traits page of the rules to add some.
      </div>
      <reference-list
        class="col"
        :entries="heroicTraits"
        @remove="removeHeroicTrait"
      />
    </div>
  </div>
</template>

<script>
import NumberInput from '~/components/NumberInput.vue'
import ReferenceList from '~/components/ReferenceList.vue'

export default {
  components: {
    NumberInput: NumberInput,
    ReferenceList: ReferenceList,
  },
  data() {
    return {
      brawn: 0,
      poise: 0,
      memory: 0,
      wit: 0,
      charisma: 0,
      damage: 1,
      armor: 2,
      speed: 5,
      cognition: 32,
      cognitionMax: 32,
      foodTypes: [
        {
          label: 'Questionable',
          value: '-4,2',
        },
        {
          label: 'Snack',
          value: '2',
        },
        {
          label: 'Decent Meal',
          value: '4',
        },
        {
          label: 'Good Meal',
          value: '8',
        },
        {
          label: 'Hearty Meal',
          value: '12',
        },
      ],
      injuries: {
        minorDot: 1,
      },
      injuryTypes: [
        {
          label: 'Minor Injuries',
          options: [
            {
              label: 'Minor DoT',
              value: 'minorDot',
            },
            {
              label: 'Slowed',
              value: 'slowed',
            },
            {
              label: 'Weakened',
              value: 'weakened',
            },
            {
              label: 'Staggered',
              value: 'staggered',
            },
            {
              label: 'Distracted',
              value: 'distracted',
            },
            {
              label: 'Dulled Senses',
              value: 'dulled',
            },
          ],
        },
        {
          label: 'Severe Injuries',
          options: [
            {
              label: 'Severe DoT',
              value: 'severeDot',
            },
            {
              label: 'Immobile',
              value: 'immobile',
            },
            {
              label: 'Drained',
              value: 'drained',
            },
            {
              label: 'Unstable',
              value: 'unstable',
            },
            {
              label: 'Amnesia',
              value: 'amnesia',
            },
            {
              label: 'Dazed',
              value: 'Dazed',
            },
          ],
        },
      ],
      proficiencies: [
        {
          name: 'Thaumaturgy',
          desc:
            'Allows the use of Thaumaturgy magic and can make skill checks on related tasks without penalty.',
        },
      ],
      mundaneTraits: [
        {
          name: 'Inspiring',
          desc: 'Your Charisma actions get additional team based effects.',
        },
      ],
      heroicTraits: [
        {
          name: 'Iron Stomach',
          desc:
            "You don't care about <em>what</em> the food is. All that matters is if there's enough to fill you up.",
        },
      ],
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    removeInjury(target) {
      this.injuries = this.injuries.filter(
        entry => entry.label !== target.label,
      )
    },
    removeProficiency(target) {
      this.proficiencies = this.proficiencies.filter(
        entry => entry.name !== target.name,
      )
    },
    removeMundaneTrait(target) {
      this.mundaneTraits = this.mundaneTraits.filter(
        entry => entry.name !== target.name,
      )
    },
    removeHeroicTrait(target) {
      this.heroicTraits = this.heroicTraits.filter(
        entry => entry.name !== target.name,
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '../assets/colors.styl'

.spacer-sheet
  flex 0 0 2px
  margin 14px 0
  background-color hsla(0, 0%, 0%, 0.4)

.frame
  width 100px
  height 100px
  background center / contain no-repeat url('https://previews.123rf.com/images/markusgann/markusgann0904/markusgann090400005/4595771-an-illustration-of-a-square-wooden-frame.jpg')
  @media screen and (max-width: desktop-min-width)
    align-self center
    width 180px
    height 180px
  button
    width 80px
    height 80px
    margin 10px
    border none
    background-color black
    @media screen and (max-width: desktop-min-width)
      margin 25px
      width 130px
      height 130px
    img
      width 100%
      height 100%
      cursor pointer
      object-fit cover
      object-position center
  button:hover, button:focus
    img
      filter brightness(0.5)
  button:active
    img
      filter brightness(1.5)

.title-row
  justify-content end
  align-items center
  @media screen and (max-width: desktop-min-width)
    justify-content flex-start
    align-items center
    max-width 100%
    overflow hidden

#char-name
  margin-left 10px
  font-size 2em
  overflow hidden
  @media screen and (max-width: desktop-min-width)
    margin-top 1ex
    margin-left 0
    width 100%
    font-size 1.7em
  input
    color accent-light
    background-color transparent
    @media screen and (max-width: desktop-min-width)
      width 100%
      text-align center

#char-title
  margin-left 10px
  padding-bottom 15px
  @media screen and (max-width: desktop-min-width)
    align-items center
    margin-left 0
    padding-bottom 0
    width 100%
  .title-prefix
    margin-right 0.5ch
    @media screen and (max-width: desktop-min-width)
      margin-top 0.4ex
  input
    width 40ch
    color accent-light
    background-color transparent
    @media screen and (max-width: desktop-min-width)
      margin-top 0.4ex
      width 100%
      text-align center
      font-size 1.2em

.trackers
  display grid
  grid-template-columns 1fr 1fr
  grid-gap 5px
  font-size 1.5em
  @media screen and (max-width: desktop-min-width)
    grid-template-columns 1fr
  > div
    padding 5px
    background-color background-dark
    border-radius 10px
.other-trackers
  display grid
  grid-template-columns 1fr
  grid-auto-rows min-content
  grid-gap 5px

.dmg-grid
  display grid
  grid-template-columns auto auto
  grid-template-rows auto 1px auto 2ex auto
  grid-gap 5px 1ch

.dmg-over-thresh
  grid-column 2
  width 100%
  height 100%
  background-color foreground

.thresh-over-wounds
  grid-column 1 / span 2
  width 100%
  button
    display block
    height 100%
    width 100%
    font-size 0.8em

.number-entry
  width 2.4ch
  text-align center
  border none
  font-size 1em

#armor-entry
  margin 0 1ch
#meal-type
  flex 1 1 auto
  font-size 0.8em
#eat-button
  flex 0 0 5ch

.injury-add-bttn
  display flex
  flex 0 0 2.5ch
  justify-content center
  align-items center
  text-align center
  font-size 1.5em
  font-weight 700
.injury-list
  display grid
  grid-template-columns 1fr 1fr
  grid-auto-rows min-content
  grid-gap 5px
  @media screen and (max-width: desktop-min-width)
    grid-template-columns 1fr
.injury-list-entry
  display grid
  grid-template-columns 1fr 1fr 3ch
  grid-gap 10px
  background-color background-dark
  border-radius 5px
  font-size 0.9em
  overflow hidden
  > *:nth-child(1)
    color accent-light
.injury-label, .injury-type
  padding 4px

.reference-list
  > h1 + h2
    margin-top .4ex
  > div + .reference-list-section-title
    margin-top 2ex
.reference-list-section-title
  display flex
  flex-direction row
  align-items center
  a
    color unset
  a:hover, a:focus
    color accent-dark
  a::after
    content "❱"
    margin-left 0.5ch
    color accent-link
  a:hover::after, a:focus::after
    color accent-link-dark
.empty-reference-list
  color foreground-faint
  font-style italic
</style>

<style lang="stylus">
@require '../assets/colors.styl'

.char-attr-grid
  display grid
  grid-template-columns 1fr 1fr
  grid-template-rows 2fr 1fr
  grid-template-areas "input input" "down up"
  @media screen and (max-width: desktop-min-width)
    grid-template-columns 1fr 1.2fr 1fr
    grid-template-rows 1fr
    grid-template-areas "down input up"
  .number-input-field
    grid-area input
  .number-input-down
    grid-area down
  .number-input-up
    grid-area up

.char-attribute
  max-width 9ch
  background-color field-bg
  border-radius 20px
  font-size 1.2em
  text-align center
  overflow hidden
  @media screen and (max-width: desktop-min-width)
    max-width unset
    border-radius 25px
    font-size 1.4em
  .attribute-label
    padding .4ex 0 0 0
    @media screen and (max-width: desktop-min-width)
      padding 1ex 1ch
  .number-input-field
    min-width 2ch
    width 100%
    font-size 1.8em
    order 0
    @media screen and (max-width: desktop-min-width)
      width 3ch
      font-size 1.4em
  .number-input-bttn
    order 1
    border-radius 0
  @media screen and (max-width: desktop-min-width)
    .number-input-down
      border-radius 25px 0 0 25px
    .number-input-up
      border-radius 0 25px 25px 0

@media screen and (max-width: desktop-min-width)
  .char-attribute + .char-attribute
    margin-top 5px

.minor-stat
  input
    width 3ch

.bs-selectbox
  padding 0.6ex 0.5ch 0.6ex 1ch
.bs-option, .bs-option-group
  padding 4px
.food-type-select
  transition border-radius 0.2s
  border-radius 15px 0 0 15px
.food-type-select.open
  border-radius 15px 0 0 0
.food-type-select.open.flipped
  border-radius 0 0 0 15px
.injury-type-select
  width 20ch
  transition border-radius 0.2s
  border-radius 15px 0 0 15px
.injury-type-select.open
  border-radius 15px 0 0 0
.injury-type-select.open.flipped
  border-radius 0 0 0 15px

.reference-list
  .reference-entry-name
    margin-top 1ex
    color accent-light
  .reference-entry-desc
    margin-top .5ex
</style>
