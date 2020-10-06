<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
@require '../assets/vars.styl'

.layout
  padding banner-height 2ch 120px 2.5ch

.layout > p, .layout > ul, .layout > blockquote
  padding-right 20%
  @media screen and (max-width: wide-tablet-width)
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

// TODO: Fix this. Not rendering correct on website. Need to fix the side tags.
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
</style>
