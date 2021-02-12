<script lang="ts">
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let confirmText: string = 'Yes'
export let abortText: string = 'No'
export let _class: string = ''

let primed = false
</script>

<div class="{'two-stage-bttn-container ' + _class}">
  <button
    class="two-stage-bttn two-stage-prime"
    class:hidden="{primed}"
    on:click="{() => (primed = true)}"
  >
    <slot />
  </button>
  <button
    class="two-stage-bttn confirm"
    class:hidden="{!primed}"
    on:click="{() => {
      dispatch('click')
      primed = false
    }}"
  >
    {confirmText}
  </button>
  <button
    class="two-stage-bttn abort"
    class:hidden="{!primed}"
    on:click="{() => (primed = false)}"
  >
    {abortText}
  </button>
</div>

<style lang="stylus">
  .two-stage-bttn-container
    display flex
    flex-direction row
  .two-stage-bttn
    display block
  .two-stage-bttn.hidden
    display none
</style>
