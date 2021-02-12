<script lang="ts">
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let value: number = 0
export let min: number = Number.MIN_SAFE_INTEGER
export let max: number = Number.MAX_SAFE_INTEGER
export let step: number = 1
export let float: boolean = false
export let setonly: boolean = false

let field: HTMLInputElement
let incButton: HTMLButtonElement
let decButton: HTMLButtonElement

$: dispatch('input', value)
$: value = Math.max(Math.min(float ? value : Math.round(value), max), min)
$: minReached = value <= min
$: maxReached = value >= max

function calcTarget(modifier: number, additivity: number) {
  return additivity > 0
    ? value + modifier
    : additivity < 0
    ? value - modifier
    : modifier
}
function handleChange(event: Event) {
  const input = event.target as HTMLInputElement
  const additivity = input.value.startsWith('++')
    ? 1
    : input.value.startsWith('--')
    ? -1
    : 0
  const newVal = parseInt(additivity === 0 ? input.value : input.value.slice(2))
  if (isNaN(newVal)) {
    field.value = value.toString()
    return
  }
  value = calcTarget(newVal, additivity)
}
</script>

<div class="number-input">
  {#if !setonly}
    <button
      class="number-input-button decrement"
      on:click="{() => (value = value - step)}"
      bind:this="{decButton}"
      disabled={minReached}
    >
      -
    </button>
  {/if}
  <input
    class="number-input-field"
    type="text"
    value="{value}"
    on:change="{handleChange}"
    bind:this="{field}"
  />
  {#if !setonly}
    <button
      class="number-input-button increment"
      on:click="{() => (value = value + step)}"
      bind:this="{incButton}"
      disabled={maxReached}
    >
      +
    </button>
  {/if}
</div>

<style lang="stylus">
  .number-input
    display flex
    flex-direction row
  .number-input-field
    text-align center
    padding 0.3ex 0
  .number-input-button
    display flex
    flex-direction row
    justify-content center
    align-items center
    padding 0 0.625ch
  .number-input-button.decrement
    border-radius 9999px 0 0 9999px
  .number-input-button.increment
    border-radius 0 9999px 9999px 0
</style>
