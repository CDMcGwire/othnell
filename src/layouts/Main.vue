<template>
  <div>
    <div class="banner row c-center">
      <span class="title">Othnell</span>
    </div>
    <div class="main row m-space-around">
      <div class="row reader-wrapper m-center">
        <div class="reader">
          <nav class="row rule-nav">
            <div id="section-select-dropdown" class="dropdown">
              <a href="#" aria-haspopup="true">Select Section v</a>
              <ul aria-label="submenu">
                <li><a href="#">Intro</a></li>
                <li><a href="#">Core Mechanics</a></li>
                <li><a href="#">Player Characters</a></li>
                <li><a href="#">Combat</a></li>
                <li><a href="#">Magic</a></li>
                <li><a href="#">Items</a></li>
              </ul>
            </div>
            <input id="section-search" type="text" placeholder="Search..." />
            <button id="section-search-bttn">?</button>
          </nav>
          <slot />
        </div>
      </div>
      <div class="row m-center toolview-wrapper">
        <div class="toolview">
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
              <div id="char-name">Character Name</div>
              <div id="char-title">the Character Title</div>
            </div>
          </div>
          <div class="spacer-sheet" />
          <div class="row m-spaced">
            <div class="col char-attr">
              <div class="char-attr-label">Brawn</div>
              <div id="char-brawn" class="char-attr-value">2</div>
              <div class="row">
                <button class="char-attr-bttn lower">&lt;</button>
                <button class="char-attr-bttn higher">&gt;</button>
              </div>
            </div>
            <div class="col char-attr">
              <div class="char-attr-label">Poise</div>
              <div id="char-brawn" class="char-attr-value">0</div>
              <div class="row">
                <button class="char-attr-bttn lower">&lt;</button>
                <button class="char-attr-bttn higher">&gt;</button>
              </div>
            </div>
            <div class="col char-attr">
              <div class="char-attr-label">Memory</div>
              <div id="char-brawn" class="char-attr-value">-1</div>
              <div class="row">
                <button class="char-attr-bttn lower">&lt;</button>
                <button class="char-attr-bttn higher">&gt;</button>
              </div>
            </div>
            <div class="col char-attr">
              <div class="char-attr-label">Wit</div>
              <div id="char-brawn" class="char-attr-value">3</div>
              <div class="row">
                <button class="char-attr-bttn lower">&lt;</button>
                <button class="char-attr-bttn higher">&gt;</button>
              </div>
            </div>
            <div class="col char-attr">
              <div class="char-attr-label">Charisma</div>
              <div id="char-brawn" class="char-attr-value">3</div>
              <div class="row">
                <button class="char-attr-bttn lower">&lt;</button>
                <button class="char-attr-bttn higher">&gt;</button>
              </div>
            </div>
          </div>
          <div class="spacer-sheet" />
          <div class="row trackers m-spaced">
            <div class="dmg-grid">
              <div>Damage</div>
              <div class="row m-center c-center">
                <button class="dmg-bttn">-</button>
                <input
                  id="dmg-display"
                  class="number-entry"
                  type="text"
                  value="0"
                />
                <button class="dmg-bttn">+</button>
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
                <input
                  id="armor-entry"
                  class="number-entry"
                  type="text"
                  value="2"
                />
              </div>
            </div>
            <div class="col other-trackers">
              <div class="row">
                <div>Cognition</div>
                <button class="dmg-bttn">-</button>
                <input
                  id="char-cognition"
                  class="number-entry"
                  type="text"
                  value="32"
                />
                <button class="dmg-bttn">+</button>
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
                  fdlafdsaf fdsafd safdsa fdsafdsafdsafds afdsa fdsa fds afsd
                  afsd f dsafdsafdsafdsa fdasfd safdsa fdsafdsafdsafdsaf
                </div>
              </div>
              <div class="col">
                <h2 class="trait-name">Clever</h2>
                <div class="trait-desc">
                  fdlafdsaf fdsafd safdsa fdsafdsafdsafds afdsa fdsa fds afsd
                  afsd f dsafdsafdsafdsa fdasfd safdsa fdsafdsafdsafdsaf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.banner
  position sticky
  top 0
  height 40px
  background-color hsl(0, 100%, 12%)
  font-size 1.2em
  z-index 1000

.title
  padding 4px

.reader-wrapper
  flex 1 1 800px

.reader
  flex 0 1 800px
  padding 1ex 5px 20ex 30px
  background-color hsla(0, 0%, 0%, 0.2)

  #section-select
    flex 0 0 auto
  
  #section-search
    flex 1 0 12ch

  #section-search-bttn
    flex 0 0 4ch

.toolview-wrapper
  flex 1 0 600px

.toolview
  display flex
  flex 0 0 600px
  flex-direction column
  position sticky
  top 30px
  height calc(100vh - 30px)
  padding 1ex 10px 2ex 5px
  overflow-x hidden
  overflow-y auto

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
      object-fit cover
      object-position center

#char-name
  margin-left 10px
  font-size 2em

#char-title
  margin-left 10px
  padding-bottom 15px

.char-attr
  justify-content center
  width 90px
  height 110px
  border-radius 15px
  background-color hsla(0, 0%, 0%, 0.2)

.char-attr-label
  text-align center

.char-attr-value
  text-align center
  font-size 2.5em

.char-attr-bttn
  flex 1 1 50%
  height 1ch
  background-color transparent
  border none

.trackers
  font-size 1.5em

.dmg-grid
  display grid
  grid-template-columns auto auto
  grid-template-rows auto 1px auto 2ex auto
  grid-gap 5px 1ch

.dmg-over-thresh
  grid-column 2
  width 100%
  height 100%
  background-color white

.thresh-over-wounds
  grid-column 1 / span 2
  width 100%
  background-color white

  button
    display block
    height 100%
    width 100%
    border none
    background-color grey
    font-size 0.8em

.dmg-bttn
  width 1.6ch
  height 1.6ch
  border none
  border-radius 9999px
  background-color transparent
  text-align center
  vertical-align text-top

.number-entry
  width 2.4ch
  text-align center
  border none
  font-size 1em
  color white
  background-color hsla(0, 0%, 0%, 0.2)

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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
