// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import bs from '~/components/BetterSelect.vue'
import RefAdder from '~/components/RefAdder.vue'
import Term from '~/components/Term.vue'
import 'tippy.js/dist/tippy.css'
import '~/assets/main.styl'

export default function(Vue, { appOptions, router, head, isClient }) {
  Vue.use(Vuex)
  Vue.component('Layout', DefaultLayout)
  Vue.component('bs', bs)
  Vue.component('ref-adder', RefAdder)
  Vue.component('term', Term)
  if (isClient) {
    import('vue-tree-navigation')
      .then(esm => Vue.use(esm))
      .catch(msg => console.error('Failed to load tree nav. ' + msg))
  }

  router.addRoutes([
    {
      name: 'Home',
      path: '/home',
      redirect: '/',
    },
  ])

  appOptions.store = new Vuex.Store({
    state: {
      character: {
        name: 'My Character',
        title: 'New',
        brawn: 0,
        poise: 0,
        memory: 0,
        wit: 0,
        charisma: 0,
        damage: 0,
        wounds: 0,
        cognition: 8,
        injuries: {
          minorDot: 0,
          severeDot: 0,
          slowed: 0,
          immobile: 0,
          weakened: 0,
          drained: 0,
          staggered: 0,
          unstable: 0,
          distracted: 0,
          amnesia: 0,
          dulled: 0,
          dazed: 0,
        },
        proficiencies: [],
        mundaneTraits: [],
        heroicTraits: [],
      },
    },
    mutations: {
      setCharacter(state, character) {
        state.character = character
      },
      setCharacterName(state, name) {
        state.character.name = name
      },
      setCharacterTitle(state, title) {
        state.character.title = title
      },
      setCharacterBrawn(state, brawn) {
        state.character.brawn = brawn
      },
      setCharacterPoise(state, poise) {
        state.character.poise = poise
      },
      setCharacterMemory(state, memory) {
        state.character.memory = memory
      },
      setCharacterWit(state, wit) {
        state.character.wit = wit
      },
      setCharacterCharisma(state, charisma) {
        state.character.charisma = charisma
      },
      setCharacterDamage(state, damage) {
        state.character.damage = damage
      },
      setCharacterWounds(state, wounds) {
        state.character.wounds = wounds
      },
      setCharacterCognition(state, cognition) {
        state.character.cognition = cognition
      },
      setCharacterMinorDot(state, minorDot) {
        state.character.injuries.minorDot = minorDot
      },
      setCharacterSevereDot(state, severeDot) {
        state.character.injuries.severeDot = severeDot
      },
      setCharacterSlowed(state, slowed) {
        state.character.injuries.slowed = slowed
      },
      setCharacterImmobile(state, immobile) {
        state.character.injuries.immobile = immobile
      },
      setCharacterWeakened(state, weakened) {
        state.character.injuries.weakened = weakened
      },
      setCharacterDrained(state, drained) {
        state.character.injuries.drained = drained
      },
      setCharacterStaggered(state, staggered) {
        state.character.injuries.staggered = staggered
      },
      setCharacterUnstable(state, unstable) {
        state.character.injuries.unstable = unstable
      },
      setCharacterDistracted(state, distracted) {
        state.character.injuries.distracted = distracted
      },
      setCharacterAmnesia(state, amnesia) {
        state.character.injuries.amnesia = amnesia
      },
      setCharacterDulled(state, dulled) {
        state.character.injuries.dulled = dulled
      },
      setCharacterDazed(state, dazed) {
        state.character.injuries.dazed = dazed
      },
      addProficiency(state, proficiency) {
        if (state.character.proficiencies.includes(proficiency)) return
        state.character.proficiencies.push(proficiency)
      },
      removeProficiency(state, proficiency) {
        const index = state.character.proficiencies.indexOf(proficiency)
        if (index < 0) return
        state.character.proficiencies.splice(index, 1)
      },
      addMundaneTrait(state, mundaneTrait) {
        if (state.character.proficiencies.includes(mundaneTrait)) return
        state.character.mundaneTraits.push(mundaneTrait)
      },
      removeMundaneTrait(state, mundaneTrait) {
        const index = state.character.proficiencies.indexOf(mundaneTrait)
        if (index < 0) return
        state.character.mundaneTraits.splice(index, 1)
      },
      addHeroicTrait(state, heroicTrait) {
        if (state.character.proficiencies.includes(heroicTrait)) return
        state.character.heroicTraits.push(heroicTrait)
      },
      removeHeroicTrait(state, heroicTrait) {
        const index = state.character.proficiencies.indexOf(heroicTrait)
        if (index < 0) return
        state.character.heroicTraits.splice(index, 1)
      },
    },
    actions: {
      async save({ state }) {
        window.localStorage.setItem(
          'activeCharacter',
          JSON.stringify(state.character),
        )
      },
      async load({ commit }) {
        const character = JSON.parse(
          window.localStorage.getItem('activeCharacter'),
        )
        if (character === null) return
        commit('setCharacter', character)
      },
    },
  })
}
