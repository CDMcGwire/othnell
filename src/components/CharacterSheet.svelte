<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { onMount, onDestroy } from 'svelte'
  import NumberInput from './NumberInput.svelte'
  import Select from './Select.svelte'
  import ReferenceEntry from './ReferenceEntry.svelte'
  import {
    name,
    title,
    race,
    homeland,
    brawn,
    poise,
    memory,
    wit,
    charisma,
    damage,
    wounds,
    cognition,
    proficiencies,
    mundaneTraits,
    exceptionalTraits,
    minorDot,
    severeDot,
    slowed,
    immobile,
    weakened,
    drained,
    staggered,
    unstable,
    confused,
    amnesia,
    distracted,
    dazed,
    activeCharacter,
  } from '../character-store'

  const dispatch = createEventDispatcher()
  const raceOptions = [
    { name: 'Human' },
    { name: 'Wyrm' },
    { name: 'Wandering Spirit' },
    { name: 'Stone Dweller' },
    { name: 'Bofo' },
    { name: 'Carapact' },
  ]
  const foodTypes = [
    {
      name: 'Questionable',
      value: [-4, 1],
    },
    {
      name: 'Snack',
      value: [2],
    },
    {
      name: 'Decent Meal',
      value: [4],
    },
    {
      name: 'Good Meal',
      value: [8],
    },
    {
      name: 'Hearty Meal',
      value: [12],
    },
  ]
  const injuryTypes = [
    {
      name: '',
      value: '',
    },
    {
      name: 'Minor',
      children: [
        {
          name: 'Minor DoT',
          value: 'minorDot',
        },
        {
          name: 'Slowed',
          value: 'slowed',
        },
        {
          name: 'Weakened',
          value: 'weakened',
        },
        {
          name: 'Staggered',
          value: 'staggered',
        },
        {
          name: 'Confused',
          value: 'confused',
        },
        {
          name: 'Distracted',
          value: 'distracted',
        },
      ],
    },
    {
      name: 'Severe',
      children: [
        {
          name: 'Severe DoT',
          value: 'severeDot',
        },
        {
          name: 'Immobile',
          value: 'immobile',
        },
        {
          name: 'Drained',
          value: 'drained',
        },
        {
          name: 'Unstable',
          value: 'unstable',
        },
        {
          name: 'Amnesia',
          value: 'Amnesia',
        },
        {
          name: 'Dazed',
          value: 'dazed',
        },
      ],
    },
  ]
  const intimidateDice = ['d2', 'd4', 'd6', 'd8', 'd10', 'd12', 'd12 + d2', 'd12 + d4', 'd12 + d6']

  let unsubscribe
  let selectedFoodType: Array<number> = [2]

  $: cards = Math.abs($memory) + 1
  $: threshold = 3 + $brawn
  $: cognitionMax = $wit > -1 ? 8 + $wit * 8 : 8 / Math.pow(2, Math.abs($wit))

  function loadLastCharacter() {
    const serialCharacter = localStorage.getItem('activeCharacter')
    if (serialCharacter) {
      const lastCharacter = JSON.parse(serialCharacter)
      $name = lastCharacter.name
      $title = lastCharacter.title
      $race = lastCharacter.race
      $homeland = lastCharacter.homeland
      $brawn = lastCharacter.brawn
      $poise = lastCharacter.poise
      $memory = lastCharacter.memory
      $wit = lastCharacter.wit
      $charisma = lastCharacter.charisma
      $damage = lastCharacter.damage
      $wounds = lastCharacter.wounds
      $cognition = lastCharacter.cognition
      $proficiencies = lastCharacter.proficiencies
      $mundaneTraits = lastCharacter.mundaneTraits
      $exceptionalTraits = lastCharacter.exceptionalTraits
      $minorDot = lastCharacter.injuries.minorDot
      $severeDot = lastCharacter.injuries.severeDot
      $slowed = lastCharacter.injuries.slowed
      $immobile = lastCharacter.injuries.immobile
      $weakened = lastCharacter.injuries.weakened
      $drained = lastCharacter.injuries.drained
      $staggered = lastCharacter.injuries.staggered
      $unstable = lastCharacter.injuries.unstable
      $confused = lastCharacter.injuries.confused
      $amnesia = lastCharacter.injuries.amnesia
      $distracted = lastCharacter.injuries.distracted
      $dazed = lastCharacter.injuries.dazed
    }
  }
  function saveActiveCharacter(character: any) {
    localStorage.setItem('activeCharacter', JSON.stringify(character))
  }
  function sleep(amount: number) {
    $cognition = Math.min(
      $cognition + Math.ceil(amount * cognitionMax),
      cognitionMax,
    )
  }
  function eat() {
    const selectedValue = Math.floor(Math.random() * selectedFoodType.length)
    $cognition += selectedFoodType[selectedValue]
    if ($cognition > cognitionMax) $cognition = cognitionMax
  }
  function close() {
    dispatch('close')
  }
  function removeFromList(values: Array<any>, index: number, count: number = 1) {
    values.splice(index, count)
    return values
  }

  onMount(() => {
    loadLastCharacter()
    unsubscribe = activeCharacter.subscribe(saveActiveCharacter)
  })
  onDestroy(() => {if (unsubscribe) unsubscribe()})
</script>

<style lang="stylus">
  @require '../assets/vars.styl'

  .char-sheet
    .section-divider
      width 100%
      height 1px
      margin 15px 0
      background-color accent-pri
    .section-header
      font-size 1.6em
      font-weight bold
      a
        color inherit
      a:hover, a:focus
        color accent-dark
      a::after
        content "❱"
        margin-left 0.5ch
        color accent-link
        font-size 0.8em
      a:hover::after, a:focus::after
        color accent-link-dark
  .char-sheet-section
    margin-bottom 2ex
  .char-portrait-change
    display flex
    flex 0 0 auto
    justify-content center
    align-items center
    width 175px
    height 175px
    margin-bottom 15px
  .char-portrait-img
    width 150px
    height 150px
  .char-id
    display flex
    flex-direction column
    align-items center
    font-size 1.2em
  .char-id-entry
    width 100%
    > * + *
      margin-top 5px
  .char-id-name-input
    font-size 1.4em
    width 100%
    padding 5px 10px
    color accent-light
    border-radius 10px
    overflow hidden
  .char-id-title
    display flex
    flex-direction row
    align-items center
    width 100%
    padding-left 10px
  .char-id-title-input
    flex 1 1 100%
    margin-left 0.5ch
    padding 5px 0.5ch
    color accent-light
    border-radius 10px
    overflow hidden
  .char-id-race
    display flex
    flex-direction row
    align-items center
    width 100%
    padding-left 10px
  .char-id-homeland
    display flex
    flex-direction row
    align-items center
    width 100%
    padding-left 10px
  .char-id-homeland-input
    flex 1 1 100%
    padding 5px 0.5ch
    margin-left 0.5ch
    color accent-light
    border-radius 10px
    overflow hidden
  .char-attr-row
    margin-bottom 2ex
  .char-attr-main
    display flex
    flex-direction row
    justify-content space-between
    width 17ch
    margin-left -15px
    padding-left 45px
    font-size 1.3em
    border 4px solid accent-faint
    border-left none
    border-bottom none
    border-radius 0 20px 5px 0
    overflow hidden
  .char-attr-sub
    display flex
    flex-direction row
    justify-content flex-start
    align-items center
    align-self flex-end
    width 70%
    min-width 30ch
    margin-right -15px
    padding 0.5ex 30px 0.5ex 1ch
    color foreground-faint
    border-bottom 3px solid field-bg
    border-radius 0 0 0 5px
    overflow hidden
    strong
      color foreground-strong
    .left
      flex 0 1 10ch
    .right
      flex 0 1 16ch
      text-align right
  .char-empty-ref-list
    font-size 0.8em
    color foreground-faint
  @media screen and (min-width: partial-width)
    .char-id
      flex-direction row
    .char-portrait-change
      margin-bottom 0
      margin-right 15px

  :global
    .char-sheet
      .basic-input
        padding 0.3em 1.25ch
      .select-input
        border-radius 15px
      .select-input.right
        border-radius 0 15px 15px 0
      .select-input.left
        border-radius 15px 0 0 15px
      .select-label
        padding 5px 10px
      .ref-entry-header
        display flex
        flex-direction row
        justify-content space-between
        align-items flex-end
        margin-top 15px
        a
          color inherit
        a:hover, a:focus
          color accent-dark
        a::after
          content "❱"
          margin-left 0.5ch
          color accent-link
          font-size 0.8em
        a:hover::after, a:focus::after
          color accent-link-dark
        .two-stage-bttn
          padding 0.25em 1ch
          font-size 0.9em
          border-radius 15px
        .two-stage-bttn.confirm
          border-radius 15px 0 0 15px
        .two-stage-bttn.abort
          border-radius 0 15px 15px 0
      .ref-entry-name
        font-size 1.25em
        color foreground-minor
    .char-id-race
      .select-input
        flex 1 0 20ch
        margin-left 0.5ch
    .char-attr-main
      .number-input-field
        width 3.5ch
        border-radius 0 0 0 20px
    .char-attr-sub
      .number-input
        margin 0 1ch
      .number-input-field
        width 3.5ch

    //@media screen and (min-width: partial-width)

</style>

<div class="char-sheet">
  <div class="char-sheet-section char-id">
    <button class="char-portrait-change">
      <img class="char-portrait-img" src="#" alt="">
    </button>
    <div class="col char-id-entry">
      <input class="char-id-name-input" 
            type=text bind:value={$name}
            placeholder="Character Name" />
      <div class="char-id-title">
        <div>the</div>
        <input class="char-id-title-input"
              type=text bind:value={$title}
              placeholder="Character Title" />
      </div>
      <div class="char-id-race">
        <div>a</div>
        <Select options={raceOptions} initial={$race} on:select={event => $race = event.detail.value} />
      </div>
      <div class="char-id-homeland">
        <div>from</div>
        <input type=text class="char-id-homeland-input" placeholder="Homeland" bind:value={$homeland} />
      </div>
    </div>
  </div>
  <!-- Character attributes -->
  <div class="char-sheet-section char-attrs col">
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Brawn</div>
        <NumberInput bind:value={$brawn} min={-1} max={3} setonly />
      </div>
      <div class="char-attr-sub row">
        <span><strong>{$brawn > 0 ? '+' : ''}{$brawn}</strong> to Clash Die Rank</span>
      </div>
    </div>
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Poise</div>
        <NumberInput bind:value={$poise} min={-1} max={3} setonly />
      </div>
      <div class="char-attr-sub row">
        <span>
        {#if $poise < 0}
          Hand size reduced to <strong>2</strong>
        {:else}
          <strong>{$poise}</strong> Redraws
        {/if}
        </span>
      </div>
    </div>
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Memory</div>
        <NumberInput bind:value={$memory} min={-1} max={3} setonly />
      </div>
      <div class="char-attr-sub row">
        <span>Draw <strong>{cards}</strong> card{cards > 1 ? 's' : ''} - Match <strong>{$memory < 0 ? 'ALL' : 'ANY'}</strong></span>
      </div>
    </div>
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Wit</div>
        <NumberInput bind:value={$wit} min={-1} max={3} setonly />
      </div>
      <div class="char-attr-sub row">
        <span>Cognition</span>
        <NumberInput bind:value={$cognition} min={0} max={cognitionMax} />
        <span>of <strong>{cognitionMax}</strong></span>
      </div>
    </div>
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Charisma</div>
        <NumberInput bind:value={$charisma} min={-1} max={3} setonly />
      </div>
      <div class="char-attr-sub row m-spaced">
        <span class="left">Intimidate</span>
        <span class="right"><strong>{intimidateDice[$brawn + $charisma + 2]}</strong> Clash Die</span>
      </div>
      <div class="char-attr-sub row m-spaced">
        <span class="left">Charm</span>
        <span class="right"><strong>{$charisma > 0 ? '+' : ''}{$charisma}</strong> to card played</span>
      </div>
      <div class="char-attr-sub row m-spaced">
        <span class="left">Lie</span>
      {#if $charisma >= 0}
        <span class="right"><strong>{$charisma}</strong> redraw{$charisma > 1 ? 's' : ''}</span>
      {:else}
        <span class="right">Must match <strong>{Math.abs($charisma) + 1}</strong> cards</span>
      {/if}
      </div>
      <div class="char-attr-sub row m-spaced">
        <span class="left">Persuade</span>
        <span class="right"><strong>{$charisma > 0 ? '+' : ''}{$charisma}</strong> starting wager</span>
      </div>
    </div>
  </div>
  <!-- Tracker tools -->
  <div class="char-sheet-section char-trackers">

  </div>
  <!-- Character Traits -->
  <div class="char-sheet-section char-ref-list char-proficiencies col">
    <div class="section-header">
      <a href="/characters/proficiencies" on:click={close}>Proficiencies</a>
    </div>
  {#if $proficiencies.length > 0}
  {#each $proficiencies as proficiency, i (proficiency)}
    <ReferenceEntry target={proficiency}
                    on:follow={close}
                    on:remove={() => $proficiencies = removeFromList($proficiencies, i)}
                    baseRulesUrl="/characters/proficiencies"
                    baseRefUrl="/ref/proficiencies" />
  {/each}
  {:else}
    <div class="char-empty-ref-list">Your character has no proficiencies yet...</div>
  {/if}
  </div>
  <div class="section-divider" />
  <div class="char-sheet-section char-ref-list char-traits col">
    <div class="section-header">
      <a href="/characters/traits/mundane" on:click={close}>Mundane Traits</a>
    </div>
  {#if $mundaneTraits.length > 0}
  {#each $mundaneTraits as trait, i (trait)}
    <ReferenceEntry target={trait}
                    on:follow={close}
                    on:remove={() => $mundaneTraits = removeFromList($mundaneTraits, i)}
                    baseRulesUrl="/characters/traits/mundane"
                    baseRefUrl="/ref/traits/mundane" />
  {/each}
  {:else}
    <div class="char-empty-ref-list">Your character has no mundane traits yet...</div>
  {/if}
  </div>
  <div class="char-sheet-section char-ref-list char-traits col">
    <div class="section-divider" />
    <div class="section-header">
      <a href="/characters/traits/exceptional" on:click={close}>Exceptional Traits</a>
    </div>
  {#if $exceptionalTraits.length > 0}
  {#each $exceptionalTraits as trait, i (trait)}
    <ReferenceEntry target={trait}
                    on:follow={close}
                    on:remove={() => $exceptionalTraits = removeFromList($exceptionalTraits, i)}
                    baseRulesUrl="/characters/traits/exceptional"
                    baseRefUrl="/ref/traits/exceptional" />
  {/each}
  {:else}
    <div class="char-empty-ref-list">Your character has no exceptional traits yet...</div>
  {/if}
  </div>
</div>
