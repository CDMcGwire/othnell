import { writable, derived } from 'svelte/store'

export let name = writable('')
export let title = writable('')
export let race = writable('Human')
export let homeland = writable('')
export let portrait = writable('#')
export let brawn = writable(0)
export let poise = writable(0)
export let memory = writable(0)
export let wit = writable(0)
export let charisma = writable(0)
export let damage = writable(0)
export let cognition = writable(8)
export let proficiencies = writable(new Array<string>())
export let mundaneTraits = writable(new Array<string>())
export let exceptionalTraits = writable(new Array<string>())
export let weakened = writable(0)
export let staggered = writable(0)
export let dazed = writable(0)
export let slowed = writable(0)
export let stunned = writable(0)
export let bloodied = writable(0)

export let activeCharacter = derived(
  [
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
    damage,
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
  ],
  ([
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
    damage,
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
  ]) => {
    return {
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
      damage,
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
    }
  },
)
