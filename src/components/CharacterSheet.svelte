<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { onMount, onDestroy } from 'svelte'
  import NumberInput from './NumberInput.svelte'
  import CharacterAttribute from './ChararacterAttribute.svelte'
  import Select from './Select.svelte'
  import InjuryTracker from './InjuryTracker.svelte'
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
import ChararacterAttribute from './ChararacterAttribute.svelte'

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

  let unsubscribe
  let selectedFoodType: Array<number> = [2]
  let selectedInjuryType: string = ''
  let currentInjury: number = 0

  $: threshold = 4 + (2 * $brawn) + $poise
  $: dead = $wounds >= threshold
  $: cognitionMax = $wit > -1 ? 8 + $wit * 8 : 8 / Math.pow(2, Math.abs($wit))
  $: totalDot = ($minorDot > 0 ? `${$minorDot}` : '') + ($minorDot > 0 && $severeDot > 0 ? ' + ' : '') + ($severeDot > 0 ? `${$severeDot}d4` : '')
  $: totalSlow = $immobile > 0 ? 'Speed 0' : `Speed -${$slowed}`
  $: totalWeaken = $drained > 0 ? 'Brawn -2' : `Brawn -${$weakened}`
  $: totalStagger = $unstable > 0 ? 'Poise -2' : `Poise -${$staggered}`
  $: totalConfusion = $amnesia > 0 ? 'Memory -2' : `Memory -${$confused}`
  $: totalDistraction = $dazed > 0 ? 'Wit -2' : `Wit -${$distracted}`

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
  function resolveDamage() {
    if ($damage < threshold) return
    const newWounds = Math.floor($damage / threshold)
    if (newWounds > 2) $wounds = threshold
    else $wounds += newWounds
    $damage = $wounds
  }
  function revive() {
    $wounds = Math.max(0, threshold - 1)
    $damage = $wounds
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
  function applyDot() {
    $damage += $minorDot
    if ($severeDot > 0)
      $damage += Math.ceil(Math.random() * 3 + ($severeDot - 1))
  }
  function close() {
    dispatch('close')
  }
  function removeFromList(values: Array<any>, index: number, count: number = 1) {
    values.splice(index, count)
    return values
  }
  function addInjury() {
    switch (selectedInjuryType) {
      case 'minorDot': $minorDot++; break;
      case 'severeDot': $severeDot++; break;
      case 'slowed': $slowed++; break;
      case 'immobile': $immobile++; break;
      case 'weakened': $weakened++; break;
      case 'drained': $drained++; break;
      case 'staggered': $staggered++; break;
      case 'unstable': $unstable++; break;
      case 'confused': $confused++; break;
      case 'amnesia': $amnesia++; break;
      case 'distracted': $distracted++; break;
      case 'dazed': $dazed++; break;
    }
    selectedInjuryType = ''
    currentInjury = 0
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
      margin 10px 0
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
  .char-trackers
    display grid
    grid-template-columns auto
    grid-gap 5px
    > div
      padding 10px
      background-color background-sub
      border-radius 15px
  .char-dmg-grid
    display grid
    grid-template-columns 1fr min-content
    grid-template-rows auto 1px auto auto auto
    grid-gap 5px
  .char-other-stats
    display grid
    grid-template-columns auto
    grid-auto-rows min-content
    grid-gap 10px
    background-color background-sub
    border-radius 15px
  .char-other-trackers
    display grid
    grid-template-columns auto
    grid-auto-rows min-content
    grid-gap 10px
  .char-dmg-grid-left
    grid-column 1
  .char-dmg-grid-right
    grid-column 2
  .char-dmg-grid-span
    grid-column 1 / span 2
  .char-dmg-divider
    background-color foreground
  .char-injury-trackers
    display grid
    grid-template-columns 1fr
    grid-gap 15px
    margin-top 15px
  .char-empty-ref-list
    font-size 0.8em
    color foreground-faint
  @media screen and (min-width: partial-width)
    .char-id
      flex-direction row
    .char-portrait-change
      margin-bottom 0
      margin-right 15px
    .char-trackers
      grid-template-columns 1fr 1fr
    .char-injury-trackers
      grid-template-columns 1fr 1fr

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
      .char-attrs
        font-size 1.2em
      .char-attr
        display flex
        flex-direction row
        justify-content space-between
        background-color background-sub
        border-radius 15px
        overflow hidden
        & + .char-attr
          margin-top 10px
        .number-input-field
          width 3ch
      .char-attr-label
        padding 5px 1ch
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
      .injury-tracker
        height min-content
      .injury-action-bttn
        border 1px solid accent-dark
      .injury-type
        color accent-light
    .char-id-race
      .select-input
        flex 1 0 20ch
        margin-left 0.5ch
    .char-trackers
      .number-input-field
        width 3ch
    .char-injury-type-select
      width 14ch

    @media screen and (min-width: partial-width)
      .char-sheet
        .char-attrs
          flex-direction row
          justify-content space-between
        .char-attr
          flex 0 0 110px
          flex-direction column
          text-align center
          & + .char-attr
            margin-top 0
          .number-input
            display grid
            grid-template-columns 1fr 1fr
            grid-template-rows 2.5em 1.2em
          .number-input-field
            grid-column 1 / span 2
            grid-row 1
            width 100%
            font-size 2em
            background-color transparent
          .number-input-button
            grid-row 2
          .number-input-button.decrement
            border-radius 0
          .number-input-button.increment
            border-radius 0
        .char-attr-label
          font-size 1em
          padding-bottom 0

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
  <div class="section-divider" />
  <div class="char-sheet-section char-attrs col">
    <ChararacterAttribute bind:value={$brawn}>Brawn</ChararacterAttribute>
    <ChararacterAttribute bind:value={$poise}>Poise</ChararacterAttribute>
    <ChararacterAttribute bind:value={$memory}>Memory</ChararacterAttribute>
    <ChararacterAttribute bind:value={$wit}>Wit</ChararacterAttribute>
    <ChararacterAttribute bind:value={$charisma}>Charisma</ChararacterAttribute>
  </div>
  <div class="section-divider" />
  <div class="char-sheet-section char-trackers">
  {#if dead}
    <div class="char-death-panel">
      <div>{$name} is Dead</div>
      <button class="char-revive-bttn" on:click={revive}></button>
    </div>
  {:else}
    <div class="char-dmg-grid">
      <div class="char-dmg-grid-left">Damage</div>
      <div class="char-dmg-grid-right row m-center">
        <NumberInput bind:value={$damage} min={0} />
      </div>
      <div class="char-dmg-grid-right char-dmg-divider" />
      <div class="char-dmg-grid-left">Threshold</div>
      <div class="char-dmg-grid-right row m-center">{threshold}</div>
      <button class="basic-input char-dmg-grid-span" on:click={resolveDamage}>Resolve</button>
      <div class="char-dmg-grid-left">Wounds</div>
      <div class="char-dmg-grid-right row m-center">{$wounds}</div>
    </div>
    <div class="char-other-stats">
      <div class="row m-spaced c-center">
        <div>Armor</div>
        <NumberInput min={0} max={100} setonly />
      </div>
      <div class="row m-spaced c-center">
        <div>Speed</div>
        <NumberInput min={0} max={100} setonly />
      </div>
    </div>
    <div class="char-other-trackers">
      <div class="row m-spaced c-center">
        <div>Cognition</div>
        <div class="row c-center">
          <NumberInput bind:value={$cognition} min={0} max={cognitionMax} />
          <div class="txt-suffix">of {cognitionMax}</div>
        </div>
      </div>
      <div class="row">
        <button class="basic-input left grow" on:click={() => sleep(0.5)}>Nap</button>
        <button class="basic-input right grow" on:click={() => sleep(1)}>Sleep</button>
      </div>
      <div class="row">
        <Select _class="left grow"
                on:select={event => selectedFoodType = event.detail.value}
                options={foodTypes}
                initial={1} />
        <button class="basic-input right fw-short" on:click={eat}>Eat</button>
      </div>
    </div>
  {/if}
  </div>
  <div class="section-divider" />
  <div class="char-sheet-section char-injuries">
    <div class="section-header">Injuries</div>
    <div class="row m-spaced c-center">
      <div class="row">Add Injury</div>
      <div class="row">
        <Select _class="left char-injury-type-select"
                on:select={event => selectedInjuryType = event.detail.value}
                options={injuryTypes}
                bind:current={currentInjury} />
        <button class="basic-input right"
                on:click={addInjury}
                disabled={selectedInjuryType === ''}>
          +
        </button>
      </div>
    </div>
    <div class="char-injury-trackers">
      <InjuryTracker bind:minor={$minorDot}
                    bind:severe={$severeDot}
                    effect={totalDot}
                    actions={[{name: 'Apply', handler: applyDot}]}>
        Damage Over Time
      </InjuryTracker>
      <InjuryTracker bind:minor={$slowed}
                    bind:severe={$immobile}
                    effect={totalSlow}>
        Slowed
      </InjuryTracker>
      <InjuryTracker bind:minor={$weakened}
                    bind:severe={$drained}
                    effect={totalWeaken}>
        Weakened
      </InjuryTracker>
      <InjuryTracker bind:minor={$staggered}
                    bind:severe={$unstable}
                    effect={totalStagger}>
        Staggered
      </InjuryTracker>
      <InjuryTracker bind:minor={$confused}
                    bind:severe={$amnesia}
                    effect={totalConfusion}>
        Confused
      </InjuryTracker>
      <InjuryTracker bind:minor={$distracted}
                    bind:severe={$dazed}
                    effect={totalDistraction}>
        Distracted
      </InjuryTracker>
    </div>
  </div>
  <div class="section-divider" />
  <div class="char-sheet-section char-ref-list char-proficiencies col">
    <div class="section-header">
      <a href="/characters/proficiencies">Proficiencies</a>
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
      <a href="/characters/traits/mundane">Mundane Traits</a>
    </div>
  {#if $mundaneTraits.length > 0}
  {#each $mundaneTraits as trait, i (trait)}
    <ReferenceEntry target={trait}
                    on:follow={close}
                    on:remove={() => $mundaneTraits = removeFromList($mundaneTraits, i)}
                    baseRulesUrl="/characters/proficiencies"
                    baseRefUrl="/ref/proficiencies" />
  {/each}
  {:else}
    <div class="char-empty-ref-list">Your character has no mundane traits yet...</div>
  {/if}
  </div>
  <div class="char-sheet-section char-ref-list char-traits col">
    <div class="section-divider" />
    <div class="section-header">
      <a href="/characters/traits/exceptional">Exceptional Traits</a>
    </div>
  {#if $exceptionalTraits.length > 0}
  {#each $exceptionalTraits as trait, i (trait)}
    <ReferenceEntry target={trait}
                    on:follow={close}
                    on:remove={() => $exceptionalTraits = removeFromList($exceptionalTraits, i)}
                    baseRulesUrl="/characters/proficiencies"
                    baseRefUrl="/ref/proficiencies" />
  {/each}
  {:else}
    <div class="char-empty-ref-list">Your character has no exceptional traits yet...</div>
  {/if}
  </div>
</div>
