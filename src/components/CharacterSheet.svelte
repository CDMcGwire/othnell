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
  portrait,
  brawn,
  poise,
  memory,
  wit,
  charisma,
  cognition,
  proficiencies,
  mundaneTraits,
  exceptionalTraits,
  weakened,
  staggered,
  dazed,
  slowed,
  stunned,
  bloodied,
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
const racialThresholds = new Map()
racialThresholds.set('Human', 3)
racialThresholds.set('Wyrm', 3)
racialThresholds.set('Wandering Spirit', 2)
racialThresholds.set('Stone Dweller', 3)
racialThresholds.set('Bofo', 4)
racialThresholds.set('Carapact', 2)

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
const intimidateDice = [
  'd2',
  'd4',
  'd6',
  'd8',
  'd10',
  'd12',
  'd12 + d2',
  'd12 + d4',
  'd12 + d6',
]
const minAttrScore = -1
const maxAttrScore = 3
const maxAttrTotal = 7

let unsubscribe
let itsFine = false
let selectedFoodType: Array<number> = [2]
let armor = 0
let damage = 0
let imgInput: HTMLInputElement
let attrTraits: string[] = []

$: attrTotal = calcAttrTotal($brawn, $poise, $memory, $wit, $charisma)
$: itsFine = attrTotal >= maxAttrTotal
$: cards = Math.abs($memory) + 1
$: intimidate = $brawn + $charisma + 2
$: threshold = racialThresholds.get($race) + $brawn
$: deathLimit = threshold * 2 + 1
$: cognitionMax = $wit > -1 ? 8 + $wit * 8 : 8 / Math.pow(2, Math.abs($wit))
$: checkAttrTraits($brawn, 'frail', 'mighty')
$: checkAttrTraits($poise, 'clumsy', 'graceful')
$: checkAttrTraits($memory, 'forgetful', 'domain-expert')
$: checkAttrTraits($wit, 'a-few-eggs-short-of-a-dozen', 'intuitive')
$: checkAttrTraits($charisma, 'repulsive', 'inspiring')

function loadLastCharacter() {
  const serialCharacter = localStorage.getItem('activeCharacter')
  if (serialCharacter) {
    const lastCharacter = JSON.parse(serialCharacter)
    if (lastCharacter.name) $name = lastCharacter.name
    if (lastCharacter.title) $title = lastCharacter.title
    if (lastCharacter.race) $race = lastCharacter.race
    if (lastCharacter.homeland) $homeland = lastCharacter.homeland
    if (lastCharacter.portrait) $portrait = lastCharacter.portrait
    if (lastCharacter.brawn) $brawn = lastCharacter.brawn
    if (lastCharacter.poise) $poise = lastCharacter.poise
    if (lastCharacter.memory) $memory = lastCharacter.memory
    if (lastCharacter.wit) $wit = lastCharacter.wit
    if (lastCharacter.charisma) $charisma = lastCharacter.charisma
    if (lastCharacter.cognition) $cognition = lastCharacter.cognition
    if (lastCharacter.proficiencies)
      $proficiencies = lastCharacter.proficiencies
    if (lastCharacter.mundaneTraits)
      $mundaneTraits = lastCharacter.mundaneTraits
    if (lastCharacter.exceptionalTraits)
      $exceptionalTraits = lastCharacter.exceptionalTraits
    if (lastCharacter.weakened) $weakened = lastCharacter.weakened
    if (lastCharacter.staggered) $staggered = lastCharacter.staggered
    if (lastCharacter.dazed) $dazed = lastCharacter.dazed
    if (lastCharacter.slowed) $slowed = lastCharacter.slowed
    if (lastCharacter.stunned) $stunned = lastCharacter.stunned
    if (lastCharacter.bloodied) $bloodied = lastCharacter.bloodied
  }
}
function saveActiveCharacter(character: any) {
  localStorage.setItem('activeCharacter', JSON.stringify(character))
}
function calcAttrTotal(...attrs: number[]): number {
  let total = 0
  for (let score of attrs) {
    total += score
    if (score > 2) total++
  }
  return total
}
function checkAttrTraits(
  score: number,
  negativeTrait: string,
  positiveTrait: string,
) {
  const hadPositive = attrTraits.includes(positiveTrait)
  if (score >= maxAttrScore && !hadPositive)
    attrTraits = [...attrTraits, positiveTrait].sort()
  else if (hadPositive)
    attrTraits = removeValueFromList(attrTraits, positiveTrait)
  const hadNegative = attrTraits.includes(negativeTrait)
  if (score <= minAttrScore && !hadNegative)
    attrTraits = [...attrTraits, negativeTrait].sort()
  else if (hadNegative)
    attrTraits = removeValueFromList(attrTraits, negativeTrait)
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
// Why isn't this a std lib function...
function randInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max))
}
function applyDamage() {
  const finalDamage = Math.min(Math.max(damage - armor, 0), deathLimit)
  let severity = 0
  for (var i = 0; i < finalDamage; i++) if (randInt(3) == 2) severity++
  switch (randInt(6)) {
    case 0:
      $weakened += severity
      break
    case 1:
      $staggered += severity
      break
    case 2:
      $dazed += severity
      break
    case 3:
      $slowed += severity
      break
    case 4:
      $stunned += severity
      break
    case 5:
      $bloodied += severity
      break
  }
  damage = 0
}
function portraitSelect(event: Event) {
  const file = imgInput.files[0]
  const reader = new FileReader()
  reader.onload = event => {
    const dataUrl = event.target.result as string
    console.log(dataUrl)
    $portrait = dataUrl
  }
  reader.readAsDataURL(file)
}
function close() {
  dispatch('close')
}
function removeFromList(values: Array<any>, index: number, count: number = 1) {
  values.splice(index, count)
  return values
}
function removeValueFromList(values: Array<any>, value: any) {
  const index = values.indexOf(value)
  values.splice(index, 1)
  return values
}

onMount(() => {
  loadLastCharacter()
  unsubscribe = activeCharacter.subscribe(saveActiveCharacter)
})
onDestroy(() => {
  if (unsubscribe) unsubscribe()
})
</script>

<div class="char-sheet">
  <div class="char-sheet-section char-id">
    <button class="char-portrait-change" on:click="{() => imgInput.click()}">
      <input
        id="char-portrait-select"
        type="file"
        accept="image/*"
        bind:this="{imgInput}"
        on:change="{portraitSelect}"
      />
      <img class="char-portrait-img" src="{$portrait}" alt="" />
    </button>
    <div class="col char-id-entry">
      <input
        class="char-id-name-input"
        type="text"
        bind:value="{$name}"
        placeholder="Character Name"
      />
      <div class="char-id-title">
        <div>the</div>
        <input
          class="char-id-title-input"
          type="text"
          bind:value="{$title}"
          placeholder="Character Title"
        />
      </div>
      <div class="char-id-race">
        <div>a</div>
        <Select
          options="{raceOptions}"
          initial="{$race}"
          on:select="{event => ($race = event.detail.value)}"
        />
      </div>
      <div class="char-id-homeland">
        <div>from</div>
        <input
          type="text"
          class="char-id-homeland-input"
          placeholder="Homeland"
          bind:value="{$homeland}"
        />
      </div>
    </div>
  </div>
  <!-- Character attributes -->
  <div class="char-sheet-section char-attrs col">
    {#if attrTotal > maxAttrTotal}
      <div class="char-attr-score-warning">
        <span>
          Attribute Total is
          <strong class="negative">{attrTotal - maxAttrTotal}</strong>
          above the maximum
        </span>
      </div>
    {:else if attrTotal < maxAttrTotal && !itsFine}
      <div class="char-attr-score-warning">
        <span>
          <strong>{maxAttrTotal - attrTotal}</strong>
          remaining attribute points
        </span>
        <button class="basic-input" on:click="{() => (itsFine = true)}"
          >That's fine</button
        >
      </div>
    {/if}
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Brawn</div>
        <NumberInput bind:value="{$brawn}" min="{-1}" max="{3}" setonly />
      </div>
      <div class="char-attr-sub row">
        <span
          ><strong class:negative="{$brawn < 0}"
            >{$brawn > 0 ? '+' : ''}{$brawn}</strong
          > to Clash Die Rank</span
        >
      </div>
    </div>
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Poise</div>
        <NumberInput bind:value="{$poise}" min="{-1}" max="{3}" setonly />
      </div>
      <div class="char-attr-sub row">
        <span>
          {#if $poise < 0}
            Held Cards Reduced to <strong class="negative">{3 + $poise}</strong>
          {:else}
            <strong>{$poise}</strong> Redraws
          {/if}
        </span>
      </div>
    </div>
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Memory</div>
        <NumberInput bind:value="{$memory}" min="{-1}" max="{3}" setonly />
      </div>
      <div class="char-attr-sub row">
        <span
          >Draw <strong>{cards}</strong> Match
          <strong class:negative="{$memory < 0}"
            >{$memory < 0 ? 'ALL' : 'ANY'}</strong
          ></span
        >
      </div>
    </div>
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Wit</div>
        <NumberInput bind:value="{$wit}" min="{-1}" max="{3}" setonly />
      </div>
      <div class="char-attr-sub row">
        <span>Cognition</span>
        <NumberInput bind:value="{$cognition}" min="{0}" max="{cognitionMax}" />
        <span
          >of <strong class:negative="{$wit < 0}">{cognitionMax}</strong></span
        >
      </div>
    </div>
    <div class="char-attr-row col">
      <div class="char-attr-main row c-center">
        <div class="char-attr-label">Charisma</div>
        <NumberInput bind:value="{$charisma}" min="{-1}" max="{3}" setonly />
      </div>
      <div class="char-attr-sub row m-spaced">
        <span class="left">Intimidate</span>
        <span class="right"
          ><strong class:negative="{intimidate <= 0}"
            >{intimidateDice[intimidate]}</strong
          > Clash Die</span
        >
      </div>
      <div class="char-attr-sub row m-spaced">
        <span class="left">Charm</span>
        <span class="right"
          ><strong class:negative="{$charisma < 0}"
            >{$charisma > 0 ? '+' : ''}{$charisma}</strong
          > to Card Played</span
        >
      </div>
      <div class="char-attr-sub row m-spaced">
        <span class="left">Lie</span>
        {#if $charisma >= 0}
          <span class="right"
            ><strong>{$charisma}</strong> Redraw{$charisma > 1 ? 's' : ''}</span
          >
        {:else}
          <span class="right"
            >Must match <strong class="negative"
              >{Math.abs($charisma) + 1}</strong
            > Cards</span
          >
        {/if}
      </div>
      <div class="char-attr-sub row m-spaced">
        <span class="left">Persuade</span>
        <span class="right"
          ><strong class:negative="{$charisma < 0}"
            >{$charisma > 0 ? '+' : ''}{$charisma}</strong
          > Starting Wager</span
        >
      </div>
    </div>
  </div>
  <!-- Tracker tools -->
  <div class="char-sheet-section char-trackers">
    <div class="char-tracker-section calculator cognition">
      <div class="row">
        <Select
          _class="left grow"
          on:select="{event => (selectedFoodType = event.detail.value)}"
          options="{foodTypes}"
          initial="{1}"
        />
        <button class="basic-input top-right fw-short" on:click="{eat}"
          >Eat</button
        >
      </div>
      <div class="row">
        <button class="basic-input top-left grow" on:click="{() => sleep(0.5)}"
          >Nap</button
        >
        <button class="basic-input bot-right grow" on:click="{() => sleep(1)}"
          >Sleep</button
        >
      </div>
    </div>
    <div class="char-tracker-section calculator damage">
      <div class="row m-spaced c-center damage-factors-display">
        <div class="row m-spaced">
          <span class="label">Threshold</span>
          <strong>{threshold}</strong>
        </div>
        <div class="row m-spaced c-center">
          <span class="label">Armor</span>
          <NumberInput bind:value="{armor}" min="{0}" max="{5}" setonly />
        </div>
      </div>
      <div class="row m-spaced damage-calc-tool">
        <div class="label">Damage</div>
        <NumberInput bind:value="{damage}" min="{0}" max="{threshold * 2}" />
        <button class="basic-input tl-br" on:click="{applyDamage}">Apply</button
        >
      </div>
    </div>
    <div class="char-tracker-section wounds">
      <div class="char-tracker-wound">
        <div class="char-wound-label">Weakened</div>
        <NumberInput bind:value="{$weakened}" min="{0}" max="{threshold * 2}" />
      </div>
      <div class="char-tracker-wound">
        <div class="char-wound-label">Staggered</div>
        <NumberInput
          bind:value="{$staggered}"
          min="{0}"
          max="{threshold * 2}"
        />
      </div>
      <div class="char-tracker-wound">
        <div class="char-wound-label">Dazed</div>
        <NumberInput bind:value="{$dazed}" min="{0}" max="{threshold * 2}" />
      </div>
      <div class="char-tracker-wound">
        <div class="char-wound-label">Slowed</div>
        <NumberInput bind:value="{$slowed}" min="{0}" max="{threshold * 2}" />
      </div>
      <div class="char-tracker-wound">
        <div class="char-wound-label">Stunned</div>
        <NumberInput bind:value="{$stunned}" min="{0}" max="{threshold * 2}" />
      </div>
      <div class="char-tracker-wound">
        <div class="char-wound-label">Bloodied</div>
        <NumberInput bind:value="{$bloodied}" min="{0}" max="{threshold * 2}" />
      </div>
    </div>
  </div>
  <!-- Character Traits -->
  <div class="char-sheet-section char-ref-list char-proficiencies col">
    <div class="section-header">
      <a href="/characters/proficiencies" on:click="{close}">Proficiencies</a>
    </div>
    {#if $proficiencies.length > 0}
      {#each $proficiencies as proficiency, i (proficiency)}
        <ReferenceEntry
          target="{proficiency}"
          on:follow="{close}"
          on:remove="{() =>
            ($proficiencies = removeFromList($proficiencies, i))}"
          baseRulesUrl="/characters/proficiencies"
          baseRefUrl="/ref/proficiencies"
        />
      {/each}
    {:else}
      <div class="char-empty-ref-list">
        Your character has no proficiencies yet...
      </div>
    {/if}
  </div>
  <div class="section-divider"></div>
  <div class="char-sheet-section char-ref-list char-traits col">
    <div class="section-header">
      <a href="/characters/traits/attribute" on:click="{close}">Attribute Traits</a>
    </div>
    {#if attrTraits.length > 0}
      {#each attrTraits as trait, i (trait)}
        <ReferenceEntry
          target="{trait}"
          on:follow="{close}"
          baseRulesUrl="/characters/traits/attribute"
          baseRefUrl="/ref/traits/attribute"
          noremove
        />
      {/each}
    {:else}
      <div class="char-empty-ref-list">
        Your character has no attribute traits yet...
      </div>
    {/if}
  </div>
  <div class="char-sheet-section char-ref-list char-traits col">
    <div class="section-header">
      <a href="/characters/traits/mundane" on:click="{close}">Mundane Traits</a>
    </div>
    {#if $mundaneTraits.length > 0}
      {#each $mundaneTraits as trait, i (trait)}
        <ReferenceEntry
          target="{trait}"
          on:follow="{close}"
          on:remove="{() =>
            ($mundaneTraits = removeFromList($mundaneTraits, i))}"
          baseRulesUrl="/characters/traits/mundane"
          baseRefUrl="/ref/traits/mundane"
        />
      {/each}
    {:else}
      <div class="char-empty-ref-list">
        Your character has no mundane traits yet...
      </div>
    {/if}
  </div>
  <div class="char-sheet-section char-ref-list char-traits col">
    <div class="section-divider"></div>
    <div class="section-header">
      <a href="/characters/traits/exceptional" on:click="{close}"
        >Exceptional Traits</a
      >
    </div>
    {#if $exceptionalTraits.length > 0}
      {#each $exceptionalTraits as trait, i (trait)}
        <ReferenceEntry
          target="{trait}"
          on:follow="{close}"
          on:remove="{() =>
            ($exceptionalTraits = removeFromList($exceptionalTraits, i))}"
          baseRulesUrl="/characters/traits/exceptional"
          baseRefUrl="/ref/traits/exceptional"
        />
      {/each}
    {:else}
      <div class="char-empty-ref-list">
        Your character has no exceptional traits yet...
      </div>
    {/if}
  </div>
</div>

<style lang="stylus">
  @require '../assets/vars.styl'

  #char-portrait-select
    display none
  .char-sheet
    strong
      color foreground-strong
      &.negative
        color foreground-negative
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
  .char-attr-score-warning
    align-self flex-end
    margin-right -15px
    margin-bottom 2ex
    padding 1ex 15px 1ex 1ch
    background-color field-bg
    border 3px solid button-bg
    border-right none
    border-radius 10px 0 0 10px
    span
      vertical-align middle
    .basic-input
      margin-left 1ch
      font-size 0.875em
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
    font-weight 600
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
    width 80%
    min-width 30ch
    margin-right -15px
    padding 0.5ex 30px 0.5ex 1ch
    color foreground-faint
    border-bottom 3px solid field-bg
    border-radius 0 0 0 5px
    overflow hidden
    .left
      flex 0 1 10ch
    .right
      flex 0 1 17ch
      text-align right
  .char-trackers
    display flex
    flex-direction column
  .char-tracker-section
    margin-bottom 1em
    & > .row
      margin-bottom 1px
      &:last-of-type
        margin-bottom 0
  .char-tracker-section.calculator
    display flex
    flex-direction column
    align-self flex-start
    margin-left -15px
    padding-left 15px
    font-size 1.1em
    background-color field-bg
    border-radius 0 15px 15px 0
    button
      height 100%
    &.cognition
      width 26ch
    & > div
      height 1.8em
  .damage-factors-display
    padding-right 1ch
    & > *
      flex 0 1 12ch
      margin-right 10px
      &:last-of-type
        margin-right 0
  .damage-calc-tool
    align-items center
    width 30ch
  .char-tracker-section.wounds
    display flex
    flex-direction row
    flex-wrap wrap
    max-width 65ch
    font-size 1.1em
  .char-tracker-wound
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    width 21ch
    margin 0 1.5ch 1ex -30px
    padding-left 30px
    border-top 2px solid accent-dark
    border-radius 0 20px 20px 0
    overflow none
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
    .char-trackers
      .number-input
        height 100%
      .number-input-field
        width 3.5ch

    //@media screen and (min-width: partial-width)

</style>
