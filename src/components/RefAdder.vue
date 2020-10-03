<template>
  <button class="adder" @click="click">+</button>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: '',
    },
    mutation: {
      type: String,
      default: '',
    },
  },
  methods: {
    click: function() {
      this.$store.commit(this.mutation, this.target)
      this.$store.dispatch('save')
    },
  },
}
</script>

<style lang="stylus" scoped>
.adder
  display flex
  justify-content center
  align-items center
  width 1em
  height 1em
  margin-left 1ch
  border-radius 9999px
  overflow hidden
</style>
