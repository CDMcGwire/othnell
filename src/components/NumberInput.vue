<template>
  <div>
    <button
      :class="[
        { 'number-input-hide': textOnly },
        'number-input-bttn',
        'number-input-down',
      ]"
      ref="down"
    >
      <svg class="number-input-icon" viewBox="0 0 100 100">
        <polygon points="90,0 10,50 90,100" />
      </svg>
    </button>
    <input
      class="number-input-field"
      type="text"
      :value="current"
      @change="handleChange"
      ref="field"
      pattern="[+-]?[+-]?\d+"
    />
    <button
      :class="[
        { 'number-input-hide': textOnly },
        'number-input-bttn',
        'number-input-up',
      ]"
      ref="up"
    >
      <svg class="number-input-icon" viewBox="0 0 100 100">
        <polygon points="10,0 10,100 90,50" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'initial',
    event: 'change',
  },
  props: {
    initial: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: -999999999999,
    },
    max: {
      type: Number,
      default: 999999999999,
    },
    step: {
      type: Number,
      default: 1,
    },
    float: {
      type: Boolean,
      default: false,
    },
    textOnly: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      current: 0,
    }
  },
  methods: {
    validate: function(value) {
      const newVal = this.float ? value : Math.round(value)
      this.$refs.up.disabled = newVal >= this.max
      this.$refs.down.disabled = newVal <= this.min
      return Math.max(Math.min(newVal, this.max), this.min)
    },
    calcTarget: function(value, additivity) {
      return additivity > 0
        ? this.current + value
        : additivity < 0
        ? this.current - value
        : value
    },
    handleChange: function(event) {
      var input = event.target.value
      const additivity = input.startsWith('++')
        ? 1
        : input.startsWith('--')
        ? -1
        : 0
      const newVal = parseInt(additivity === 0 ? input : input.slice(2))
      if (isNaN(newVal)) {
        this.$refs.field.value = this.current
        return
      }
      const finalVal = this.validate(this.calcTarget(newVal, additivity))
      this.current = finalVal
      this.$emit('input', finalVal)
    },
  },
  mounted() {
    this.current = this.validate(this.initial)
    this.$refs.up.onclick = () => {
      this.current = this.validate(this.current + this.step)
    }
    this.$refs.down.onclick = () => {
      this.current = this.validate(this.current - this.step)
    }
  },
}
</script>

<style lang="stylus">
.number-input-field
  text-align center

.number-input-bttn
  display flex
  flex-direction row
  justify-content center
  align-items center
  min-width 15px
  min-height 15px
  padding .3ch

.number-input-down
  border-radius 9999px 0 0 9999px

.number-input-up
  border-radius 0 9999px 9999px 0

.number-input-icon
  fill white
  width 1.4ch

.number-input-hide
  display none
</style>
