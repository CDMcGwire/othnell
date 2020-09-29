<template>
  <div>
    <div class="banner row c-center">
      <span class="title">Othnell</span>
    </div>
    <div class="main row m-center">
      <div class="row reader-wrapper m-end">
        <div class="reader">
          <nav class="row rule-nav">
            <div class="row section-select-container">
              <button
                id="section-select"
                href="#"
                class="txt-left"
                aria-haspopup="true"
                ref="navbutton"
              >
                Select Section
              </button>
              <div class="col" ref="navtree">
                <ClientOnly>
                  <vue-tree-navigation :items="routes" :defaultOpenLevel="0" />
                </ClientOnly>
              </div>
            </div>
            <input
              id="section-search"
              type="text"
              placeholder="Search... (not yet implemented)"
            />
          </nav>
          <slot />
        </div>
      </div>
      <div
        :class="[
          'row',
          'm-start',
          'toolview-wrapper',
          { 'toolview-open': toolviewOpen },
        ]"
      >
        <button
          class="toolview-bttn toolview-bttn-open"
          @click="toolviewOpen = true"
        >
          Character Sheet
        </button>
        <div class="toolview">
          <button
            class="toolview-bttn toolview-bttn-close"
            @click="toolviewOpen = false"
          >
            Close
          </button>
          <character-sheet class="toolview-content" />
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
      routes: [
        {
          name: 'Home',
          path: '/home',
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
              name: 'Traits',
              path: '/traits',
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
  mounted() {
    tippy(this.$refs.navbutton, {
      content: this.$refs.navtree,
      arrow: false,
      allowHTML: true,
      interactive: true,
      maxWidth: 600,
      offset: 0,
      placement: 'bottom-start',
      theme: 'section-nav',
      popperOptions: {
        padding: 0,
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              mainAxis: false,
            },
          },
        ],
      },
    })
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'

.banner
  position sticky
  top 0
  height 40px
  background-color hsl(0, 100%, 12%)
  font-size 1.2em
  z-index 1000

.title
  padding 4px 15px

.reader-wrapper
  flex 1 1 800px
  @media screen and (max-width: desktop-min-width)
    flex 1 1 100%

.reader
  position relative
  flex 0 1 800px
  min-width 300px
  background-color background-dark
  @media screen and (max-width: desktop-min-width)
    flex 1 1 100%

  nav
    position sticky
    top 40px
    height 40px
    font-size 1.1em
    z-index 100
    @media screen and (max-width: desktop-min-width)
      font-size 0.9em

  .section-select-container
    flex 0 1 18ch

  #section-select
    flex 1 1 auto
    height 100%
    padding 0 2ch
    color button-fg
    background-color button-bg
    @media screen and (max-width: desktop-min-width)
      padding 0 1.5ch
  #section-select[aria-expanded="true"]
    background-color accent-dark

  #section-search
    flex 1 1 12ch
    padding-left 1ch
    padding-right 1ch

.toolview-wrapper
  flex 1 1 600px
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
.toolview-bttn-open
  display none
  position fixed
  top 45px
  left -35px
  width 35px
  height 16ch
  border-top 2px solid accent-pri
  border-left 2px solid accent-pri
  border-bottom 2px solid accent-pri
  border-radius 10px 0 0 10px
  writing-mode vertical-rl
  @media screen and (max-width: tablet-min-width)
    display block
.toolview-bttn-close
  display none
  position fixed
  top 0
  left 0
  width 7ch
  height 48px
  padding 0.3ex 15px
  border-right 2px solid accent-pri
  border-bottom 2px solid accent-pri
  border-radius 0 0 20px 0
  font-size 1.2em
  text-align left
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
  @media screen and (max-width: desktop-min-width)
    flex unset
    width 100%
.toolview-content
    padding 15px
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
