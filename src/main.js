// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueTreeNavigation from 'vue-tree-navigation'
import DefaultLayout from '~/layouts/Default.vue'
import 'tippy.js/dist/tippy.css'
import '~/assets/main.styl'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueTreeNavigation)

  router.addRoutes([
    {
      name: 'Home',
      path: '/home',
      redirect: '/',
    },
  ])
  // router.addRoutes([
  //   {
  //     name: 'Home',
  //     path: '/'
  //   },
  //   {
  //     name: 'Core Rules',
  //     path: '/core'
  //   },
  //   {
  //     name: 'Player Characters',
  //     path: '/characters',
  //     children: [
  //       {
  //         name: 'Attributes',
  //         path: '/characters/attributes'
  //       },
  //       {
  //         name: 'Races',
  //         path: '/characters/races'
  //       },
  //       {
  //         name: 'Traits',
  //         path: '/characters/traits'
  //       }
  //     ]
  //   }
  // ])
}
