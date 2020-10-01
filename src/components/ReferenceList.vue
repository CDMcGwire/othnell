<template>
  <div>
    <div class="col reference-entry" v-for="entry in entries" :key="entry.name">
      <div class="row m-spaced">
        <h3 class="reference-entry-name">{{ entry.name }}</h3>
        <div class="row reference-entry-controls">
          <two-stage-button @click="$emit('remove', entry)">
            Remove
          </two-stage-button>
        </div>
      </div>
      <div class="reference-entry-desc"><span v-html="entry.desc" /></div>
    </div>
  </div>
</template>

<script>
import TwoStageButton from '~/components/TwoStageButton.vue'

export default {
  components: {
    TwoStageButton: TwoStageButton,
  },
  props: {
    entries: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="stylus">
.reference-entry-name
  display flex
  flex-direction row
  align-items flex-end
  height 100%
.reference-entry-controls
  border-radius 10px
  overflow hidden
  height 1.5em
  margin-bottom .2ex
  .two-stage-bttn
    padding .2ex 1ch
</style>
