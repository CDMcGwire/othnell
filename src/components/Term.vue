<template>
  <span class="term">
    <button class="open" v-on:click="open()" :disabled="isOpen">
      <slot />
    </button>
    <div class="center" v-if="isOpen">
      <div class="popup">
        <div class="header">
          <button class="close" v-on:click="close()">X</button>
        </div>
        <div class="content">
          lorem ipsum ot dolore taco velveeta Trump sonatra in C
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  props: ["target"],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    open: function() {
      this.isOpen = true;
    },
    close: function() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.term
  position relative

.center
  position absolute
  top 3ex
  left 0
  right 0
  width 0
  margin auto

.popup
  display flex
  flex-direction column
  margin auto
  width 40ch
  color white
  background-color green
  transform translateX(-50%)

.header
  display flex
  flex-direction row-reverse
  background-color hsl(0, 0%, 10%)

.content
  padding .4ch

.close
  flex 0 0 1.5ch
  height 1.5ex
  line-height 1.5ex

button
  box-sizing content-box
  transition all 0.2s
  margin 0
  font-weight bold

.open
  padding 3px 6px
  border 2px solid blue
  border-radius 3px
  background-color transparent

.open:hover
  color white
  background-color blue

.open:active
  background-color cyan
  border-color cyan

.open:disabled
  color grey
  background-color cyan
  border-color cyan

.close
  padding .8ex 1ch
  border none
  color white
  background-color transparent

.close:hover
  background-color red

.close:active
  background-color dark-red
  border-color dark-red
</style>
