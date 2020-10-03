<template>
  <div class="col reference-entry">
    <div class="row m-spaced">
      <h3 class="reference-entry-name" @click="$emit('close')">
        <g-link :to="baseRulesUrl + '#' + entry">{{ displayName }}</g-link>
      </h3>
      <div class="row reference-entry-controls">
        <two-stage-button @click="$emit('remove', entry)">
          Remove
        </two-stage-button>
      </div>
    </div>
    <div class="reference-entry-desc"><span v-html="desc" /></div>
  </div>
</template>

<script>
import TwoStageButton from '~/components/TwoStageButton.vue'

export default {
  components: {
    TwoStageButton: TwoStageButton,
  },
  props: {
    entry: {
      type: String,
      default: '',
    },
    baseRulesUrl: {
      type: String,
      default: '',
    },
    baseRefUrl: {
      type: String,
      default: '',
    },
  },
  data: function() {
    return {
      desc: '',
    }
  },
  computed: {
    displayName: function() {
      const regex = /([ -]*)([a-zA-Z])([a-zA-Z]*)/g
      const mapper = x => {
        const prefix = x[1].replace(/-{1}?/, ' ').replace(/ -/, '-')
        return `${prefix}${x[2].toUpperCase()}${x[3].toLowerCase()}`
      }
      return [...this.entry.matchAll(regex)].map(mapper).join('')
    },
  },
  created: function() {
    const descUrl = `${this.baseRefUrl}/${this.entry}.html`
    fetch(descUrl)
      .then(response =>
        response.ok ? response.text() : 'Description unavailable',
      )
      .then(text => (this.desc = text))
      .catch(error => console.error(error))
  },
}
</script>

<style lang="stylus">
@require '../assets/colors.styl'

.reference-entry-name
  display flex
  flex-direction row
  align-items flex-end
  height 100%
  a
    color accent-sec
  a:hover, a:focus
    color accent-sec-dark
  a::after
    content "❱"
    margin-left 0.5ch
    color accent-link
    font-size 0.8em
  a:hover::after, a:focus::after
    color accent-link-dark
.reference-entry-controls
  border-radius 10px
  overflow hidden
  height 1.5em
  margin-bottom .2ex
  .two-stage-bttn
    padding .2ex 1ch
.reference-entry-desc
  max-width 100%
  overflow-x hidden
</style>
