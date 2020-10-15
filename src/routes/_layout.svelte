<script lang="ts">
  import { stores } from '@sapper/app'
  import GlobalStyles from '../GlobalStyles.svelte'
  import NavTree from '../components/NavTree.svelte'
  import CharacterSheet from '../components/CharacterSheet.svelte'

  const { page } = stores()

  let navOpen = false
  let toolOpen = false

  const routes = [
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
  ]
</script>

<style lang="stylus">
  @require '../assets/vars.styl'

  :global(#sapper)
    display flex
    flex-direction row
  .rules-nav
    display flex
    flex-direction column
    position fixed
    top 0
    right 100%
    width 100vw
    height 100vh
    padding 20px 0 40px 0
    background-color background-nav-mobile
    border-right 5px solid accent-pri
    font-size 1.2em
    overflow-x hidden
    overflow-y auto
    transform translate3d(0, 0, 0)
    transition transform 0.5s
    z-index 100
  .rules-nav.open
    transform translate3d(100vw, 0, 0)
  .reader-panel
    display flex
    flex-direction row
    width 100vw
    min-height 100vh
    background-color background
  .panel-controls
    display flex
    flex-direction row
    position sticky
    top 0
    z-index 20
  .panel-control-bttn
    flex 1 1 100%
    display flex
    flex-direction row
    justify-content center
    align-items center
    padding 10px
    font-size 1.1rem
  .rules-nav-open-bttn
    margin-left 5px
    border-bottom 2px solid accent-pri
    border-right 1px solid accent-pri
    border-left 2px solid accent-pri
    border-radius 0 0 0 30px
  .tool-open-bttn
    margin-right 5px
    border-bottom 2px solid accent-pri
    border-right 2px solid accent-pri
    border-left 1px solid accent-pri
    border-radius 0 0 30px 0
  .rules-nav-close-bttn
    position fixed
    top 0
    right 0
    width 15ch
    padding 10px
    border-bottom 2px solid accent-pri
    border-left 2px solid accent-pri
    border-radius 0 0 0 30px
    font-size 1.1rem
    z-index 50
  .tool-close-bttn
    position fixed
    top 0
    left 0
    width 15ch
    padding 10px
    border-bottom 2px solid accent-pri
    border-right 2px solid accent-pri
    border-radius 0 0 30px 0
    font-size 1.1rem
    z-index 50
  .tool
    display flex
    flex-direction column
    position fixed
    top 0
    left 100%
    width 100vw
    height 100vh
    padding 60px 15px
    background-color background
    border-left 5px solid accent-pri
    overflow-x hidden
    overflow-y auto
    transform translate3d(0, 0, 0)
    transition transform 0.5s
    z-index 99
  .tool.open
    transform translate3d(-100vw, 0, 0)
  @media screen and (min-width: tablet-width)
    .reader-panel
      position relative
    .rules-nav
      position absolute
      right 100%
      width 100%
    .rules-nav.open
      transform translate3d(100%, 0, 0)
    .rules-nav-open-bttn
      flex 0 0 13ch
      margin-left 0
      border-left none
      border-right 2px solid accent-pri
      border-radius 0 0 30px 0
    .tool
      position sticky
      left 90%
      padding-top 25px
    .tool.open
      transform translate3d(0,0,0)
    .tool-open-bttn
      display none
    .tool-close-bttn
      display none
  @media screen and (min-width: partial-width)
    .tool
      flex 0 0 625px
  @media screen and (min-width: fullsize-width)
    .rules-nav
      flex 0 0 250px
      position sticky
      right unset
      left unset
      font-size 0.9em
    .rules-nav.open
      transform translate3d(0, 0, 0)
    .rules-nav-open-bttn
      display none
    .rules-nav-close-bttn
      display none
    .reader-panel
      flex 0 1 900px
    .tool
      flex 0 0 625px

  :global
    .select-option
      padding 5px 10px
    .select-option.grouped
      padding-left calc(10px + 2ch)
    .select-group
      padding 5px 10px
      font-size 0.8em
    .rules-nav
      .nav-tree-label-text
        padding 1ex 1ch
      .nav-tree-label:hover, .nav-tree-label:focus-within
        background-color accent-link-dark
      .nav-tree-arrow
        border-radius 9999px
        &:hover
          background-color accent-link
    .reader
      padding 20px 20px 160px 20px
      p, li
        line-height 1.5
      p, ul
        margin-bottom 2ex
      ul
        margin-left 1.5ch
      li
        padding-left 1ch
        border-left 3px solid accent-light
        li
          border-color accent-pri
        li:nth-of-type(2n)
          border-color accent-light
      li:nth-of-type(2n)
        border-color accent-pri
        li
          border-color accent-light
        li:nth-of-type(2n)
          border-color accent-pri
      li + li
        margin-top 1.6ex
      li > ul, li > p
        margin 0
      li > ul
        margin-top .8ex
      h1, h2, h3, h4, h5, h6
        scroll-margin 90px 0 0 0
      h2
        margin-bottom .5ex
      h3
        margin-bottom .5ex
        color foreground-minor
      h2 + h3
        margin-top 1ex
      p + h1, p + h2, p + h3, ul + h2, ul + h3, blockquote + h1, blockquote + h2, blockquote + h3
        margin-top 3ex

      h1, h2, h3, h4, h5, h6
        display flex
        flex-direction row
        align-items center
        position relative
        a:first-child
          transition opacity 0.2s
          display flex
          flex-direction column
          align-items center
          position absolute
          left -30px
          height 100%
          color accent-link
          opacity 0%
          .icon
            font-size 1.6rem
            height 100%
        a:first-child:hover
          color accent-link-dark
          opacity 100%
        &:hover
          a:first-child
            opacity 100%
        a:not(:first-child)
          color inherit
        a:not(:first-child):hover
          color accent-link
        a:not(:first-child):focus
          color accent-link
        a:not(:first-child)::after
          content "❱"
          margin-left 0.5ch
          color accent-link
        a:not(:first-child):hover::after
          color accent-link-dark
        a:not(:first-child):focus::after
          color accent-link-dark

      a
        transition background-color 0.2s
        color accent-link
      a:hover
        color accent-link-dark
      blockquote
        margin-left 0
        font-style italic
        border-left 5px solid accent-light
        p
          margin 0
          padding 0 0 0.5ex 1.5ch
        p + p
          margin-top 1ex

      strong
        color foreground-strong
    .hidden
      display none !important
    
    @media screen and (min-width: tablet-width)
      .tool
        .char-sheet
          padding-bottom 160px
</style>

<GlobalStyles />

<main class="reader-panel">
  <nav class="rules-nav" class:open={navOpen}>
    <button class="rules-nav-close-bttn" on:click={() => navOpen = false}>Close</button>
    <NavTree routes={routes} activePath={$page.path} />
  </nav>
  <div class="col">
    <div class="panel-controls">
      <button class="panel-control-bttn rules-nav-open-bttn" on:click={() => navOpen = true}>Page Select</button>
      <button class="panel-control-bttn tool-open-bttn" on:click={() => toolOpen = true}>Character Sheet</button>
    </div>
    <div class="reader">
      <slot></slot>
    </div>
  </div>
</main>
<div class="tool" class:open={toolOpen}>
  <button class="tool-close-bttn" on:click={() => toolOpen = false}>Close</button>
  <CharacterSheet />
</div>
