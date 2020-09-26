<template>
  <div class="row m-center c-center">
    <button class="stat-down-bttn" ref="down">-</button>
    <input
      v-model.lazy="value"
      class="stat-input-field"
      type="text"
      ref="field"
      pattern="[+-]?\d+"
    />
    <button class="stat-up-bttn" ref="up">+</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    initial: Number,
    min: -9999999999,
    max: 9999999999,
    onUpdate: Function,
    isValid: Function,
  },
  data: {
    value: Number,
  },
  computed: {
    inputListeners: function() {
      var vm = this
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit('input', event.target.value)
        },
        change: function(event) {
          vm.$emit('change', event.target.value)
        },
      })
    },
  },
  mounted() {
    this.$refs.up.onclick = () => {
      const newVal = this.value++
      if (this.isValid(newVal)) {
        const oldVal = this.value
        this.value = newVal
        this.onUpdate(newVal, oldVal)
      }
    }
    this.$refs.down.onclick = () => {
      const newVal = this.value--
      if (this.isValid(newVal)) {
        const oldVal = this.value
        this.value = newVal
        this.onUpdate(newVal, oldVal)
      }
    }
    this.value = this.initial
    const entryField = this.$refs.entry
    entryField.oninput = rawVal => {
      if (rawVal.length < 1) {
        entryField.value = 0
        return
      }
      if (rawVal.charAt(0) === '+') {
        const newVal = Number.parseInt(rawVal.slice(1))
        if (Number.isNaN(newVal)) return
        this.value += newVal
      }
    }
  },
}
</script>
