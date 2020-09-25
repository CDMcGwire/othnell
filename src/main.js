// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'tippy.js/dist/tippy.css'
import '~/assets/main.styl'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(() =>
    import('vue-tree-navigation')
      .then(m => m.VueTreeNavigation)
      .catch(r => console.error("Couldn't load vue-tree-navigation: " + r)),
  )
  Vue.use(() =>
    import('epic-spinners')
      .then(m => m.PixelSpinner)
      .catch(r => console.error("Couldn't load epic-spinners: " + r)),
  )

  router.addRoutes([
    {
      name: 'Home',
      path: '/home',
      redirect: '/',
    },
  ])
}
