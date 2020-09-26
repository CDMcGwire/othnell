// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import 'tippy.js/dist/tippy.css'
import '~/assets/main.styl'

export default function(Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuex)
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
      activeCharacter: {
        name: 'My Character',
        title: 'New',
        brawn: 0,
        poise: 0,
        memory: 0,
        wit: 0,
        charisma: 0,
      },
    },
    mutations: {
      setActiveCharacterName(state, name) {
        state.activeCharacter.name = name
      },
      setActiveCharacterTitle(state, title) {
        state.activeCharacter.title = title
      },
      setActiveCharacterBrawn(state, brawn) {
        state.activeCharacter.brawn = brawn
      },
      setActiveCharacterPoise(state, poise) {
        state.activeCharacter.poise = poise
      },
      setActiveCharacterMemory(state, memory) {
        state.activeCharacter.memory = memory
      },
      setActiveCharacterWit(state, wit) {
        state.activeCharacter.wit = wit
      },
      setActiveCharacterCharisma(state, charisma) {
        state.activeCharacter.charisma = charisma
      },
    },
  })
}
