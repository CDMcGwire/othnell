<template>
  <button class="term" ref="button">
    <slot />
    <div ref="spinner">
      <ClientOnly>
        <pixel-spinner :animation-duration="1500" :size="40" color="black" />
      </ClientOnly>
    </div>
  </button>
</template>

<script>
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

export default {
  components: {
    PixelSpinner: () =>
      import('epic-spinners')
        .then(m => m.PixelSpinner)
        .catch(r => console.error("Couldn't load epic-spinners: " + r)),
  },
  props: {
    target: String,
  },
  data: function() {
    return {
      loaded: false,
    }
  },
  methods: {
    loadContent: async function(tooltip) {
      if (this.loaded || tooltip === null) return
      tooltip.setContent(this.$refs.spinner)

      var response = await fetch(`/terms/${this.target}.html`)
      if (!response.ok) {
        tooltip.setContent('Failed to load')
        return
      }

      var content = await response.text()
      tooltip.setContent(content)
      this.loaded = true
    },
  },
  mounted: function() {
    const component = this
    const spinner = this.$refs.spinner
    tippy(this.$refs.button, {
      content: spinner,
      theme: 'term',
      allowHTML: true,
      delay: [400, 200],
      interactive: true,
      maxWidth: 400,
      placement: 'bottom',
      onShow: instance => component.loadContent(instance),
      popperOptions: {
        strategy: 'fixed',
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top', 'right', 'left'],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              altAxis: true,
              tether: true,
            },
          },
        ],
      },
    })
  },
}
</script>

<style lang="stylus" scoped>
@require '../assets/vars.styl'

button
  color accent-sec
  background-color transparent
button:hover, button:focus, button:active
  color accent-sec-dark
  background-color transparent
  opacity 1

pixel-spinner
  display none
</style>
