<template>
  <div
    :class="['bs-container', { open: open }, { flipped: flipped }]"
    @keydown.space.prevent=""
    @keyup.space.prevent="handleFocus"
    @keyup.up.prevent="handleUpArrow"
    @keydown.up.prevent=""
    @keyup.down.prevent="handleDownArrow"
    @keydown.down.prevent=""
    @keyup.enter.prevent="handleEnter"
    @keydown.enter.prevent=""
    @focusout="handleBlur"
    tabindex="0"
    role="listbox"
    ref="container"
  >
    <div
      class="bs-selectbox"
      @mousedown="handleMouseDown"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    >
      <div class="bs-current">{{ current }}</div>
      <div v-html="arrow" :class="['bs-arrow', { open: open }]" />
    </div>
    <div
      :class="['bs-dropdown', { open: open }, { flipped: flipped }]"
      @click.self="open = false"
      @scroll.stop.prevent=""
      ref="dropdown"
    >
      <div>
        <div v-for="option in flatOptions" :key="option.label">
          <div
            v-if="option.index !== undefined"
            @mousedown="setTarget(option.index)"
            @click="select(option)"
            :class="['bs-option', { 'bs-option-sub': option.grouped }]"
            role="option"
            ref="optionElms"
          >
            {{ option.label }}
          </div>
          <div v-else class="bs-option-group">{{ option.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: String,
      default: '▼',
    },
    initial: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      current: '',
      target: -1,
      open: false,
      cancelClick: false,
      flipped: false,
    }
  },
  methods: {
    handleFocus(event) {
      this.beganClick = false
      this.open = true
      this.size()
    },
    handleBlur(event) {
      if (event.currentTarget.contains(event.relatedTarget)) {
        return
      }
      this.open = false
    },
    handleMouseDown() {
      this.beganClick = true
    },
    handleMouseLeave() {
      this.beganClick = false
    },
    handleClick() {
      if (!this.beganClick) return
      this.open = !this.open
      if (this.open) this.size()
    },
    handleUpArrow() {
      this.setTarget(this.target - 1)
      if (!this.open) this.$refs.optionElms[this.target].click()
    },
    handleDownArrow() {
      this.setTarget(this.target + 1)
      if (!this.open) this.$refs.optionElms[this.target].click()
    },
    handleEnter() {
      this.$refs.optionElms[this.target].click()
    },
    optionId(option) {
      return option.label !== undefined
        ? option.label
        : option.value !== undefined
        ? option.value
        : option
    },
    select(option) {
      this.current = option.label
      this.open = false
      this.$emit('select', option)
      this.$refs.container.focus()
    },
    setTarget(index) {
      const optElms = this.$refs.optionElms
      if (optElms.length < 1) return
      if (this.target > -1) optElms[this.target].classList.remove('target')
      this.target = this.clampSelection(index)
      optElms[this.target].classList.add('target')
    },
    clampSelection(selection) {
      return Math.max(Math.min(selection, this.$refs.optionElms.length - 1), 0)
    },
    size() {
      const dropdown = this.$refs.dropdown
      const bounds = this.$refs.container.getBoundingClientRect()
      const distToBot = window.innerHeight - bounds.bottom
      this.flipped = false
      if (window.innerWidth < 760) {
        dropdown.style.removeProperty('top')
        dropdown.style.removeProperty('bottom')
        dropdown.style.removeProperty('max-height')
      } else if (distToBot > 200) {
        dropdown.style.top = '100%'
        dropdown.style.removeProperty('bottom')
        dropdown.style.maxHeight = `${distToBot}px`
      } else {
        dropdown.style.removeProperty('top')
        dropdown.style.bottom = '100%'
        dropdown.style.maxHeight = `${bounds.top}px`
        this.flipped = true
      }
    },
  },
  computed: {
    flatOptions() {
      const flattened = []
      var index = 0
      for (var opt of this.options) {
        if (opt.options === undefined) {
          flattened.push({
            label: opt.label,
            value: opt.value,
            index: index++,
            grouped: false,
          })
        } else {
          flattened.push({
            label: opt.label,
          })
          for (var sub of opt.options) {
            flattened.push({
              label: sub.label,
              value: sub.value,
              index: index++,
              grouped: true,
            })
          }
        }
      }
      return flattened
    },
  },
  mounted() {
    const optElms = this.$refs.optionElms
    if (optElms.length > 0) this.setTarget(this.initial)
    if (this.target > -1) optElms[this.target].click()
  },
}
</script>

<style lang="stylus">
.bs-container
  position relative
  display flex
  flex-direction column
  color white
  background-color hsla(0, 0, 0, 0.4)
.bs-selectbox
  display flex
  flex 1 1 auto
  flex-direction row
  justify-content space-between
  align-items center
  cursor pointer
  overflow hidden
  z-index 0
.bs-current
  user-select none
.bs-arrow
  transition transform 0.2s
  user-select none
  transform rotate(0turn)
.bs-arrow.open
  transform rotate(0.5turn)
.bs-dropdown
  display none
  flex-direction column
  position absolute
  min-width 100%
  color white
  padding-top 0
  padding-bottom 10px
  z-index 1
  > div
    background-color hsl(0, 0, 15%)
    overflow-y scroll
    scrollbar-width thin
  @media screen and (max-width: 759px)
    position fixed
    justify-content center
    align-items center
    top 0
    left 0
    width 100vw
    height 100vh
    background-color hsla(0, 0, 0, 0.6)
    z-index 9999
    > div
      width 80%
      max-height min(60%, 450px)
      background-color hsl(0, 0, 15%)
      overflow-y scroll
      scrollbar-width thin
.bs-dropdown.flipped
  padding-top 10px
  padding-bottom 0

.bs-dropdown.open
  display flex
.bs-option
  user-select none
  cursor pointer
  @media screen and (max-width: 759px)
    padding 1ex
.bs-option:hover
  background-color hsl(0, 0, 17.5%)
.bs-option.target
  background-color hsl(0, 0, 25%)
.bs-option-group
  color hsl(0, 0, 60%)
  background-color hsl(0, 0, 10%)
  user-select none
  font-size 0.8em
  @media screen and (max-width: 759px)
    padding 0.8ex
.bs-option-sub
  padding-left 2ch
</style>
