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

  function validate(value: number) {
    const newVal = float ? value : Math.round(value)
    incButton.disabled = newVal >= max
    decButton.disabled = newVal <= min
    return Math.max(Math.min(newVal, max), min)
  }
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
    value = validate(calcTarget(newVal, additivity))
  }
</script>

<style lang="stylus">
  .number-input
    display flex
    flex-direction row
  .number-input-field
    text-align center
    padding 0.3em 0
  .number-input-button
    display flex
    flex-direction row
    justify-content center
    align-items center
    padding 0.3em 0.3em
  .number-input-button.decrement
    border-radius 9999px 0 0 9999px
  .number-input-button.increment
    border-radius 0 9999px 9999px 0
  .number-input-icon
    fill white
    height 0.8em
</style>

<div class="number-input">
  {#if !setonly}
  <button class="number-input-button decrement"
          on:click={() => value = validate(value - step)}
          bind:this={decButton}>
    <svg class="number-input-icon decrement" viewBox="0 0 100 100">
      <polygon points="90,0 10,50 90,100" />
    </svg>
  </button>
  {/if}
  <input class="number-input-field"
         type=text value={value}
         on:change={handleChange}
         bind:this={field}>
  {#if !setonly}
  <button class="number-input-button increment"
          on:click={() => value = validate(value + step)}
          bind:this={incButton}>
    <svg class="number-input-icon increment" viewBox="0 0 100 100">
      <polygon points="10,0 10,100 90,50" />
    </svg>
  </button>
  {/if}
</div>