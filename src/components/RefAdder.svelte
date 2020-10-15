<script lang="ts">
  import { proficiencies, mundaneTraits, exceptionalTraits } from '../character-store'

  export let type: string
  export let target: string

  function add() {
    switch (type) {
      case 'proficiency':
        if ($proficiencies.includes(target)) return
        $proficiencies = [...$proficiencies, target]
        return
      case 'mundaneTrait':
        if ($mundaneTraits.includes(target)) return
        $mundaneTraits = [...$mundaneTraits, target]
        return
      case 'exceptionalTrait':
        if ($exceptionalTraits.includes(target)) return
        $exceptionalTraits = [...$exceptionalTraits, target]
        return
    }
  }
</script>

<style lang="stylus">
  .ref-adder
    display flex
    justify-content center
    align-items center
    margin-top -5px
    margin-bottom 10px
    padding 0.2em 0.4em
    border-radius 9999px
    font-size 0.9em
    text-align center
</style>

<button class="ref-adder" on:click={add}>+ Add To Character</button>