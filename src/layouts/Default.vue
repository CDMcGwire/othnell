<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
@import '../assets/colors.styl'

p, li
  line-height 1.5
  z-index 10
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
  margin-top -80px
  padding-top 80px
h2
  margin-bottom .5ex
h3
  margin-bottom .5ex
  color accent-dark
h2 + h3
  margin-top calc(1ex - 80px)
p + h1, p + h2, p + h3, ul + h2, ul + h3
  margin-top calc(2ex - 80px)
h1, h2, h3, h4, h5, h6
  a
    transition all 0.2s
    float left
    margin-left -2ex
    color inherit
    opacity 0%
    :hover
      color accent-pri
  a:hover
    opacity 100%
h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover
  a
    opacity 100%
a
  transition all 0.2s
  color accent-link
a:hover
  color accent-link-dark
blockquote
  margin-left 1.5ch
  max-width 60ch
  font-style italic
  border-left 5px solid accent-light
  z-index 10
  p
    margin 0
    padding 0 0 0.5ex 1.5ch
</style>

<static-query>

</static-query>
