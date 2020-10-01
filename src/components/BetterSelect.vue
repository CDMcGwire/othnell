<template>
  <div
    class="container"
    @keyup.space="handleFocus"
    @keyup.up="handleUpArrow"
    @keyup.down="handleDownArrow"
    @keyup.enter="handleEnter"
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
      <div
        v-html="arrow"
        :class="[
          'bs-arrow',
          { 'bs-arrow-closed': !open },
          { 'bs-arrow-open': open },
        ]"
      />
    </div>
    <div :class="['bs-dropdown', { 'bs-dropdown-open': open }]">
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
    }
  },
  methods: {
    handleFocus(event) {
      this.beganClick = false
      this.open = true
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
    },
    handleUpArrow() {
      this.setTarget(this.target - 1)
      if (!this.open) this.select()
    },
    handleDownArrow() {
      this.setTarget(this.target + 1)
      if (!this.open) this.select()
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
    if (this.target > -1) this.current = optElms[this.target].label
  },
}
</script>

<style lang="stylus" scoped>
.container
  position relative
.bs-selectbox
  display flex
  flex-direction row
  justify-content space-between
  color white
  background-color hsla(0, 0, 0, 0.4)
  cursor pointer
  overflow hidden
.bs-current
  user-select none
.bs-arrow
  transition transform 0.2s
  user-select none
.bs-arrow-open
  transform rotate(0turn)
.bs-arrow-open
  transform rotate(0.5turn)
.bs-dropdown
  display none
  position absolute
  top 100%
  min-width 100%
  color white
  background-color hsl(0, 0, 15%)
.bs-dropdown.bs-dropdown-open
  display block
.bs-option
  user-select none
  cursor pointer
.bs-option.target
  background-color hsl(0, 0, 25%)
.bs-option-group
  background-color hsl(0, 0, 10%)
  user-select none
.bs-option-sub
  padding-left 2ch
</style>
