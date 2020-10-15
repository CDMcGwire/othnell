<script lang="ts">
  export let severe: number
  export let minor: number
  export let effect: string
  export let actions: Array<{ name: string, handler: () => void}> = []
  export let _class: string = ''
</script>

<style lang="stylus">
  @require '../assets/vars.styl'

  .injury-tracker
    display flex
    flex-direction column
    background-color background-sub
    border-radius 15px
  .injury-tracker.hide
    display none
  .injury-summary
    display flex
    flex-direction row
    justify-content space-between
    padding 0.3em 1ch
    border-radius 15px 15px 0 0
  .injury-action-grid
    display grid
    grid-template-columns auto auto
    grid-gap 5px
    margin-top 5px
  .injury-action-bttn
    grid-column 1 / span 2
    padding 0.3em 1ch
  .injury-action-bttn.left
    grid-column 1
    border-radius 0 0 0 15px
  .injury-action-bttn.right
    grid-column 2
    border-radius 0 0 15px 0
</style>

<div class="injury-tracker" class:_class class:hide={severe < 1 && minor < 1}>
  <div class="injury-summary">
    <div class="injury-type"><slot/></div>
    <div class="injury-effect">{effect}</div>
  </div>
  <div class="injury-action-grid">
  {#each actions as action}
    <button class="injury-action-bttn" on:click={action.handler}>{action.name}</button>
  {/each}
    <button class="injury-action-bttn heal left"
            on:click={() => {if (minor > 0) minor--}}
            disabled={minor < 1}>
            Heal Minor [{minor}]
    </button>
    <button class="injury-action-bttn heal right"
            on:click={() => {if (severe > 0) severe--}}
            disabled={severe < 1}>
      Heal Severe [{severe}]
    </button>
  </div>
</div>