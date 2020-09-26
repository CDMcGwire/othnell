<template>
  <div class="col-mobile-row char-attr">
    <div class="char-attr-label row m-center c-center">{{ name }}</div>
    <div id="char-brawn" class="char-attr-value row m-center c-center">
      {{ value }}
    </div>
    <div class="row char-attr-bttn-row">
      <button ref="down" class="char-attr-bttn row m-center c-center">
        ᐊ
      </button>
      <button ref="up" class="char-attr-bttn row m-center c-center">
        ᐅ
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    initial: Number,
    onUpdate: Function,
    isValid: Function,
  },
  data: {
    value: Number,
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
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'

.char-attr
  justify-content center
  flex 0 0 90px
  height 110px
  border-radius 15px
  background-color background-dark
  overflow hidden
  @media screen and (max-width: content-width)
    flex 0 0 4ex
    border-radius 0

@media screen and (max-width: content-width)
  .char-attr + .char-attr
    margin-top 5px

.char-attr-label
  flex 1 0 2ex
  margin-top 1ex
  @media screen and (max-width: content-width)
    flex 1 0 8ch
    margin-top 0
    padding 0 1ch
    justify-content start
    font-size 1.2em

.char-attr-value
  flex 1 0 2ex
  text-align center
  font-size 2.5em
  @media screen and (max-width: content-width)
    flex 1 1 100%
    justify-content right
    padding 0 1.5ch
    font-size 1.8em

.char-attr-bttn-row
  flex 1 0 100%
  @media screen and (max-width: content-width)
    flex 1 0 10ch

.char-attr-bttn
  flex 1 1 50%
</style>
