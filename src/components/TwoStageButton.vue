<template>
  <div>
    <button
      :class="['two-stage-bttn two-stage-prime', { hidden: primed }]"
      @click="primed = true"
    >
      <slot />
    </button>
    <button
      :class="['two-stage-bttn two-stage-abort', { hidden: !primed }]"
      @click="primed = false"
    >
      {{ abortText }}
    </button>
    <button
      :class="['two-stage-bttn two-stage-confirm', { hidden: !primed }]"
      @click="confirm"
    >
      {{ confirmText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    abortText: {
      type: String,
      default: 'X',
    },
    confirmText: {
      type: String,
      default: '✓',
    },
  },
  data() {
    return {
      primed: false,
    }
  },
  methods: {
    confirm() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="stylus" scoped>
div
  display flex
  flex-direction row
.hidden
  display none
</style>
