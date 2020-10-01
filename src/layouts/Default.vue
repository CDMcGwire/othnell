<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
@require '../assets/colors.styl'

.layout
  padding 40px 2ch 120px 2.5ch

.layout > p, .layout > ul, .layout > blockquote
  padding-right 20%
  @media screen and (max-width: desktop-min-width)
    padding-right 10%

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
    transition background-color 0.2s
    display flex
    flex-direction row
    align-items center
    position absolute
    left -30px
    height 1.5em
    color accent-link
    font-size 1.6rem
    opacity 0%
  a:first-child:hover
    color accent-link-dark
    opacity 100%
  a:not(:first-child)
    color unset
  a:not(:first-child):hover, a:not(:first-child):focus
    color accent-dark
  a:not(:first-child)::after
    content "❱"
    margin-left 0.5ch
    color accent-link
  a:not(:first-child):hover::after, a:not(:first-child):focus::after
    color accent-link-dark
h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover
  a
    opacity 100%

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
</style>

