<template>
  <div class="col container">
    <div class="row">
      <div class="frame">
        <button id="portrait-upload">
          <img
            id="char-portrait"
            src="https://i.pinimg.com/originals/c6/fc/2c/c6fc2c165498a2f39b420b1e75aa2017.png"
            alt="Character Portrait"
          />
        </button>
      </div>
      <div class="col m-end c-start">
        <div id="char-name">
          <input type="text" placeholder="Character Name" />
        </div>
        <div id="char-title">
          the <input type="text" placeholder="Character Title" />
        </div>
      </div>
    </div>
    <div class="spacer-sheet" />
    <div class="row-mobile-col m-spaced">
      <div class="col-mobile-row m-spaced char-attribute">
        <div>Brawn</div>
        <number-input class="row" v-model="brawn" :min="-1" :max="3" />
      </div>
      <div class="col-mobile-row m-spaced char-attribute">
        <div>Poise</div>
        <number-input class="row" v-model="poise" :min="-1" :max="3" />
      </div>
      <div class="col-mobile-row m-spaced char-attribute">
        <div>Memory</div>
        <number-input class="row" v-model="memory" :min="-1" :max="3" />
      </div>
      <div class="col-mobile-row m-spaced char-attribute">
        <div>Wit</div>
        <number-input class="row" v-model="wit" :min="-1" :max="3" />
      </div>
      <div class="col-mobile-row m-spaced char-attribute">
        <div>Charisma</div>
        <number-input class="row" v-model="charisma" :min="-1" :max="3" />
      </div>
    </div>
    <div class="spacer-sheet" />
    <div class="row trackers m-spaced">
      <div class="dmg-grid">
        <div>Damage</div>
        <div class="row m-center c-center">
          <number-input
            class="row minor-stat"
            v-model="damage"
            :min="0"
          />
        </div>
        <div />
        <div class="dmg-over-thresh" />
        <div>Threshold</div>
        <div class="txt-center">8</div>
        <div class="thresh-over-wounds">
          <button>Resolve</button>
        </div>
        <div>Wounds</div>
        <div class="txt-center">0</div>
      </div>
      <div class="col defense">
        <div class="row">
          <div>Armor</div>
          <number-input
            class="row m-center minor-stat"
            v-model="armor"
            :min="-99"
            :max="99"
            textOnly
          />
        </div>
      </div>
      <div class="col other-trackers">
        <div class="row">
          <div>Cognition</div>
          <number-input
            class="row m-center minor-stat"
            v-model="cognition"
            :min="0"
            :max="cognitionMax"
          />
        </div>
        <button>Sleep</button>
        <div class="row">
          <select name="Food Die" id="food-die">
            <option value="-4">-d4</option>
            <option value="2">d2</option>
            <option value="4" selected>d4</option>
            <option value="6">d6</option>
            <option value="8">d8</option>
            <option value="10">d10</option>
            <option value="12">d12</option>
          </select>
          <button class="grow">Eat</button>
        </div>
      </div>
    </div>
    <div class="spacer-sheet" />
    <div class="col">
      <h1>Injuries</h1>
      <div class="col">
        <div class="row">
          <div class="injury-label">Burning</div>
          <div class="injury-type">DoT</div>
          <div class="injury-effect">d2 Damage per turn</div>
        </div>
        <div class="row">
          <div class="injury-label">Broken Arm</div>
          <div class="injury-type">Arm Injury</div>
          <div class="injury-effect">Clash roll -1 die rank</div>
        </div>
        <div class="row">
          <div class="injury-label">Hobbled</div>
          <div class="injury-type">Leg Injury</div>
          <div class="injury-effect">Half movement speed</div>
        </div>
      </div>
    </div>
    <div class="spacer-sheet" />
    <div class="col">
      <h1>Traits</h1>
      <div class="col">
        <div class="col">
          <h2 class="trait-name">Inspiring</h2>
          <div class="trait-desc">
            fdlafdsaf fdsafd safdsa fdsafdsafdsafds afdsa fdsa fds afsd afsd f
            dsafdsafdsafdsa fdasfd safdsa fdsafdsafdsafdsaf
          </div>
        </div>
        <div class="col">
          <h2 class="trait-name">Clever</h2>
          <div class="trait-desc">
            fdlafdsaf fdsafd safdsa fdsafdsafdsafds afdsa fdsa fds afsd afsd f
            dsafdsafdsafdsa fdasfd safdsa fdsafdsafdsafdsaf
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumberInput from '~/components/NumberInput.vue'

export default {
  components: {
    NumberInput: NumberInput,
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
      cognition: 32,
      cognitionMax: 32,
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'

.container
  padding-bottom 80px

.spacer-sheet
  flex 0 0 2px
  margin 14px 0
  background-color hsla(0, 0%, 0%, 0.4)

.frame
  width 100px
  height 100px
  background center / contain no-repeat url('https://previews.123rf.com/images/markusgann/markusgann0904/markusgann090400005/4595771-an-illustration-of-a-square-wooden-frame.jpg')

  button
    width 80px
    height 80px
    margin 10px
    border none
    background-color black

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

#char-name
  margin-left 10px
  font-size 2em
  input
    color accent-light
    background-color transparent

#char-title
  margin-left 10px
  padding-bottom 15px
  input
    width 40ch
    color accent-light
    background-color transparent

.trackers
  font-size 1.5em
  @media screen and (max-width: content-width)
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 20px
    font-size 1.2em
    > div
      background-color background-dark

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

.dmg-bttn
  display flex
  flex-direction row
  justify-content center
  align-items center
  width 1.6ch
  height 100%

.number-entry
  width 2.4ch
  text-align center
  border none
  font-size 1em

.other-trackers
  justify-content space-between

#armor-entry
  margin 0 1ch

.injury-label
  flex 1 1 30%

.injury-type
  flex 1 1 20%

.injury-effect
  flex 1 1 50%

.trait-name
  margin-top 1ex

.trait-desc
  margin-top 0.5ex
</style>

<style lang="stylus">
.char-attribute
  font-size 1.6em
  input
    width 2ch

.minor-stat
  input
    width 3ch
</style>
