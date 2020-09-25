// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'tippy.js/dist/tippy.css'
import '~/assets/main.styl'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  console.log(isClient)
  if (isClient) {
    import('vue-tree-navigation')
      .then(esm => Vue.use(esm))
      .catch(msg => console.error("Failed to load tree nav. " + msg))
  }

  router.addRoutes([
    {
      name: 'Home',
      path: '/home',
      redirect: '/',
    },
  ])
}
