<style lang="stylus" global>
  @require './assets/vars.styl'

  *
    box-sizing border-box

  html, body
    min-height 100%
    margin 0
    padding 0
    font 14pt "David Libre", serif
    color foreground
    background-color background

  select, input, .v-select, .select-input
    transition background-color 0.2s
    color field-fg
    background-color field-bg
  select:hover, select:focus, input:hover, input:focus
    background-color field-focus
  option
    font-size 0.8em
    background-color button-bg
  optgroup::before
    background-color buggon-bg-dark

  button
    transition background-color 0.2s, opacity 0.2s
    color button-fg
    background-color button-bg
    cursor pointer
  button:hover, button:focus
    background-color button-hover
  button:active
    opacity 0.8
  button:disabled
    opacity 0.4

  button, input, select
    font 1em "David Libre", serif
    border none
  .basic-input
    border-radius 15px
    overflow hidden
  .basic-input.left
    border-radius 15px 0 0 15px
    overflow hidden
  .basic-input.right
    border-radius 0 15px 15px 0
    overflow hidden
  .basic-input + .basic-input
    border-left 1px solid button-bg-dark

  h1, h2, h3, h4, h5, h6, p, ul, li, a, button, input, select, option
    margin 0
    padding 0
    box-sizing border-box

  a
    text-decoration none

  li
    list-style none

  .block
    display block

  .row
    display flex
    flex-direction row
  .row-mobile-col
    display flex
    flex-direction row
    @media screen and (max-width: wide-tablet-width)
      flex-direction column
  .col
    display flex
    flex-direction column
  .col-mobile-row
    display flex
    flex-direction column
    @media screen and (max-width: wide-tablet-width)
      flex-direction row

  .grow
    flex 1 0 auto
  .fit
    flex 0 0 auto
  .m-spaced
    justify-content space-between
  .m-space-around
    justify-content space-around
  .m-center
    justify-content center
  .m-end
    justify-content flex-end
  .c-start
    align-items flex-start
  .c-center
    align-items center
  .c-end
    align-items flex-end
  
  .fw-tiny
    flex 0 0 3ch
  .fw-short
    flex 0 0 6ch
  .fw-medium
    flex 0 0 12ch
  .fw-long
    flex 0 0 24ch

  .txt-left
    text-align left
  .txt-center
    text-align center
  .txt-right
    text-align right
  .txt-suffix
    margin-left 1ch
  .txt-prefix
    margin-right 1ch

  .tippy-box
    font-size unset
    z-index 50

  .tippy-content
    padding unset

  .tippy-box[data-theme~='term']
    padding 0.8ch
    border-radius 0
    color tooltip-fg
    background-color tooltip-bg
    font-size 0.9em
    line-height 1.2
    filter drop-shadow(0 2px 10px black)
    .tippy-arrow
      color tooltip-bg
    blockquote
      margin 0
      padding 0 0 0 1ch
      border-left 2px solid tooltip-fg
      font-style italic
    .tippy-content
      > *
        margin-top 1ex
      > *:first-child
        margin-top 0

  .bs-dropdown.flipped
    padding-top 50px
</style>