<template>
  <div>
    <div class="banner row c-center">
      <span class="title">Othnell</span>
    </div>
    <div class="main row m-center">
      <nav :class="['section-nav', { open: navOpen }]" >
        <button class="nav-close-bttn" @click="navOpen = false">
          Close
        </button>
        <nav-tree :routes="routes" />
      </nav>
      <div class="reader">
        <div class="row panel-buttons">
          <button
            :class="['section-nav-open-bttn', { 'nav-open': navOpen }]"
            @click="navOpen = true"
          >
            Section Select
          </button>
          <button
            :class="['toolview-open-bttn', {'toolview-open': toolviewOpen}]"
            @click="toolviewOpen = true"
          >
            Character Sheet
          </button>
        </div>
        <slot />
      </div>
      <div
        :class="[
          'row',
          'm-start',
          'toolview-wrapper',
          { 'toolview-open': toolviewOpen },
        ]"
      >
        <div class="toolview">
          <button
            class="toolview-bttn toolview-bttn-close"
            @click="toolviewOpen = false"
          >
            Close
          </button>
          <character-sheet
            class="toolview-content"
            @close="toolviewOpen = false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js'
import CharacterSheet from '~/components/CharacterSheet.vue'

export default {
  components: {
    CharacterSheet: CharacterSheet,
  },
  data() {
    return {
      toolviewOpen: false,
      navOpen: false,
      routes: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Core Rules',
          path: '/core',
        },
        {
          name: 'Player Characters',
          path: '/characters',
          children: [
            {
              name: 'Attributes',
              path: '/attributes',
            },
            {
              name: 'Races',
              path: '/races',
            },
            {
              name: 'Proficiencies',
              path: '/proficiencies',
            },
            {
              name: 'Traits',
              path: '/traits',
              children: [
                {
                  name: 'Attribute',
                  path: '/attribute',
                },
                {
                  name: 'Mundane',
                  path: '/mundane',
                },
                {
                  name: 'Exceptional',
                  path: '/exceptional',
                },
              ],
            },
          ],
        },
        {
          name: 'Combat',
          path: '/combat',
          children: [
            {
              name: 'Damage',
              path: '/damage',
            },
          ],
        },
        {
          name: 'Magic',
          path: '/magic',
          children: [
            {
              name: 'Animare',
              path: '/animare',
            },
            {
              name: 'Energeia',
              path: '/energeia',
            },
            {
              name: 'Essense Weaving',
              path: '/essence-weaving',
            },
            {
              name: 'Hemoturgy',
              path: '/hemoturgy',
            },
            {
              name: 'THE RULE OF LAW',
              path: '/rule-of-law',
            },
            {
              name: 'Soul Binding',
              path: '/soul-binding',
            },
            {
              name: 'Thaumaturgy',
              path: '/thaumaturgy',
            },
            {
              name: 'Veneration',
              path: '/veneration',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
@require '../assets/colors.styl'

.banner
  position sticky
  top 0
  height 40px
  background-color hsl(0, 100%, 12%)
  font-size 1.2em
  z-index 1000

.title
  padding 4px 15px

.section-nav
  flex 0 1 400px
  position sticky
  top 40px
  height calc(100vh - 40px)
  color foreground-nav
  background-color background-nav
  overflow-y scroll
  overflow-x hidden
  z-index 1000
  @media screen and (max-width: fullsize-min-width)
    transition transform 0.5s
    position fixed
    top 40px
    left 0
    width min(calc(80vw), 300px)
    transform translateX(min(calc(-80vw), -300px))
    background-color background-nav-mobile
  @media screen and (max-width: tablet-min-width)
    width 100vw
    transform translateX(-100vw)
    background-color background-nav-mobile
.nav-close-bttn
  display none
  position absolute
  top 0
  right 0
  padding 0.5ex 1ch
  border-left 2px solid accent-pri
  border-bottom 2px solid accent-pri
  border-radius 0 0 0 20px
  @media screen and (max-width: fullsize-min-width)
    display block

@media screen and (max-width: fullsize-min-width)
  .section-nav.open
    transform translateX(0)

.reader
  position relative
  flex 0 1 700px
  min-height calc(100vh - 80px)
  background-color background-dark
  @media screen and (max-width: desktop-min-width)
    flex 1 1 100%
.panel-buttons
  position sticky
  top 40px
  z-index 50
  font-size 1.2em
.section-nav-open-bttn
  display none
  transition opacity 0.2s
  padding 0.5ex 1ch
  border-right 2px solid accent-pri
  border-bottom 2px solid accent-pri
  border-radius 0 0 20px 0
  @media screen and (max-width: fullsize-min-width)
    display block
  @media screen and (max-width: tablet-min-width)
    flex 1 1 auto
    border-radius 0
    border-right 1px solid accent-pri
.section-nav-open-bttn.nav-open
  opacity 0.4
.toolview-open-bttn
  display none
  flex 1 1 auto
  border-left 1px solid accent-pri
  border-bottom 2px solid accent-pri
  @media screen and (max-width: tablet-min-width)
    display block
.toolview-open-bttn.toolview-open
  opacity 0.4

.toolview-wrapper
  flex 0 1 600px
  z-index 100
  @media screen and (max-width: tablet-min-width)
    transition transform 0.5s
    flex unset
    position fixed
    top 40px
    left 0
    width 100vw
    transform translateX(100vw)
.toolview-wrapper.toolview-open
  @media screen and (max-width: tablet-min-width)
    transform translateX(0vw)
.toolview-bttn-close
  display none
  position fixed
  top 0
  left 0
  padding 0.5ex 1ch
  border-right 2px solid accent-pri
  border-bottom 2px solid accent-pri
  border-radius 0 0 20px 0
  font-size 1.2em
  text-align left
  z-index 100
  @media screen and (max-width: tablet-min-width)
    display block
.toolview
  display flex
  flex 0 1 600px
  flex-direction column
  position sticky
  top 40px
  height calc(100vh - 40px)
  overflow-x hidden
  overflow-y auto
  background-color background
  scrollbar-width thin
  @media screen and (max-width: desktop-min-width)
    flex unset
    width 100%
.toolview-content
  padding 15px 15px 80px 15px
</style>

<style lang="stylus">
.section-nav
  font-size 1.2em
  .nav-tree-link
    padding 0.5ex
    width 100%
</style>

<static-query>
query {
  metadata {
    siteName
  }
  pages: allPage(filter: {path: {nin: ["/404"]}}) {
    path
  }
}
</static-query>
