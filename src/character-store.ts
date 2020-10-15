import { writable, derived } from 'svelte/store'

export let name = writable('')
export let title = writable('')
export let race = writable('Human')
export let homeland = writable('')
export let brawn = writable(0)
export let poise = writable(0)
export let memory = writable(0)
export let wit = writable(0)
export let charisma = writable(0)
export let damage = writable(0)
export let wounds = writable(0)
export let cognition = writable(8)
export let proficiencies = writable(new Array<string>())
export let mundaneTraits = writable(new Array<string>())
export let exceptionalTraits = writable(new Array<string>())
export let minorDot = writable(0)
export let severeDot = writable(0)
export let slowed = writable(0)
export let immobile = writable(0)
export let weakened = writable(0)
export let drained = writable(0)
export let staggered = writable(0)
export let unstable = writable(0)
export let confused = writable(0)
export let amnesia = writable(0)
export let distracted = writable(0)
export let dazed = writable(0)

export let injuries = derived(
  [minorDot, severeDot, slowed, immobile, weakened, drained, staggered, unstable, confused, amnesia, distracted, dazed],
  ([
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
  ]) => {
    return {
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
    }
  },
)

export let activeCharacter = derived(
  [
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
    injuries,
  ],
  ([
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
    injuries,
  ]) => {
    return {
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
      injuries,
    }
  },
)
