<template>
<div>
  <div class="banner row c-center">
    <span class="title">Othnell</span>
  </div>
  <div class="main row m-center">
    <nav :class="['section-nav', { open: navOpen }]" ref="sectionNav">
      <button class="section-nav-close-bttn" @click="navOpen = false">
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
          :class="['toolview-open-bttn', { 'toolview-open': toolviewOpen }]"
          @click="toolviewOpen = true"
        >
          Character Sheet
        </button>
      </div>
      <slot />
    </div>
    <div :class="['toolview', { 'toolview-open': toolviewOpen }]" ref="toolview">
      <button
        class="toolview-bttn toolview-close-bttn"
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
</template>

<script>
import CharacterSheet from '~/components/CharacterSheet.vue'
import NavTree from '~/components/NavTree.vue'

export default {
  components: {
    CharacterSheet: CharacterSheet,
    NavTree: NavTree,
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
@require '../assets/vars.styl'

.banner
  position sticky
  top 0
  height banner-height
  background-color hsl(0, 100%, 12%)
  font-size 1.2em
  z-index 1000
.title
  padding 4px 15px

section-nav-base-width = 350px
.section-nav
  flex 0 1 400px
  position fixed
  top banner-height
  left 0
  width 100vw
  height 'calc(100vh - %s)' % banner-height
  color foreground-nav
  background-color background-nav-mobile
  overflow-x hidden
  overflow-y auto
  transform translateX(-100vw)
  z-index 1000
.section-nav.open
  transform translateX(0)
.section-nav-open-bttn
  transition opacity 0.2s
  flex 1 1 auto
  padding 0.5ex 1ch
  border-right 1px solid accent-pri
  border-bottom 2px solid accent-pri
  border-radius 0
.section-nav-open-bttn.nav-open
  opacity 0.4
.section-nav-close-bttn
  position absolute
  top 0
  right 0
  padding 0.5ex 1ch
  border-left 2px solid accent-pri
  border-bottom 2px solid accent-pri
  border-radius 0 0 0 20px

.reader
  flex 1 1 100%
  min-height 'calc(100vh - %s)' % banner-height
  background-color background-dark
.panel-buttons
  position sticky
  top banner-height
  z-index 50
  font-size 1.2em

.toolview
  display flex
  flex-direction column
  position fixed
  top banner-height
  left 0
  width 100vw
  height 'calc(100vh - %s)' % banner-height
  overflow-x hidden
  overflow-y auto
  background-color background
  scrollbar-width thin
  transform translateX(100vw)
  z-index 999
.toolview.toolview-open
  transform translateX(0vw)
.toolview-open-bttn
  flex 1 1 auto
  border-left 1px solid accent-pri
  border-bottom 2px solid accent-pri
.toolview-open-bttn.toolview-open
  opacity 0.4
.toolview-close-bttn
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
.toolview-content
  padding 15px 15px 80px 15px

@media screen and (max-width: portrait-tablet-width - 1)
  .section-nav
  .toolview
    transition transform 0.5s
@media screen and (min-width: portrait-tablet-width)
  .section-nav
    width section-nav-base-width
    background-color background-nav
    transform translateX(-(section-nav-base-width))
  .section-nav-open-bttn
    flex 0 0 auto
    border-right 2px solid accent-pri
    border-radius 0 0 20px 0
  .toolview
    flex 0 0 400px
    position sticky
    width auto
    transform translateX(0)
  .toolview-open-bttn
    display none
  .toolview-close-bttn
    display none
@media screen and (min-width: wide-tablet-width)
  .reader
    flex 1 2 700px
  .toolview
    flex 0 0.5 600px
@media screen and (min-width: fullsize-width)
  .section-nav
    flex 0 1 section-nav-base-width
    position sticky
    top banner-height
    width auto
    transform translateX(0)
  .section-nav-open-bttn
    display none
  .section-nav-close-bttn
    display none
  .reader
    flex 0 2 700px
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
