const c1 = () => import(/* webpackChunkName: "page--src-pages-magic-veneration-md" */ "D:\\Projects\\othnell\\src\\pages\\magic\\veneration.md")
const c2 = () => import(/* webpackChunkName: "page--src-pages-magic-rule-of-law-md" */ "D:\\Projects\\othnell\\src\\pages\\magic\\rule-of-law.md")
const c3 = () => import(/* webpackChunkName: "page--src-pages-magic-soul-binding-md" */ "D:\\Projects\\othnell\\src\\pages\\magic\\soul-binding.md")
const c4 = () => import(/* webpackChunkName: "page--src-pages-magic-thaumaturgy-md" */ "D:\\Projects\\othnell\\src\\pages\\magic\\thaumaturgy.md")
const c5 = () => import(/* webpackChunkName: "page--src-pages-ref-clash-roll-md" */ "D:\\Projects\\othnell\\src\\pages\\ref\\clash-roll.md")
const c6 = () => import(/* webpackChunkName: "page--src-pages-characters-races-md" */ "D:\\Projects\\othnell\\src\\pages\\characters\\races.md")
const c7 = () => import(/* webpackChunkName: "page--src-pages-magic-hemoturgy-md" */ "D:\\Projects\\othnell\\src\\pages\\magic\\hemoturgy.md")
const c8 = () => import(/* webpackChunkName: "page--src-pages-magic-essence-weaving-md" */ "D:\\Projects\\othnell\\src\\pages\\magic\\essence-weaving.md")
const c9 = () => import(/* webpackChunkName: "page--src-pages-magic-energeia-md" */ "D:\\Projects\\othnell\\src\\pages\\magic\\energeia.md")
const c10 = () => import(/* webpackChunkName: "page--src-pages-magic-animare-md" */ "D:\\Projects\\othnell\\src\\pages\\magic\\animare.md")
const c11 = () => import(/* webpackChunkName: "page--src-pages-characters-domains-md" */ "D:\\Projects\\othnell\\src\\pages\\characters\\domains.md")
const c12 = () => import(/* webpackChunkName: "page--src-pages-combat-damage-md" */ "D:\\Projects\\othnell\\src\\pages\\combat\\damage.md")
const c13 = () => import(/* webpackChunkName: "page--src-pages-characters-attributes-md" */ "D:\\Projects\\othnell\\src\\pages\\characters\\attributes.md")
const c14 = () => import(/* webpackChunkName: "page--src-pages-magic-index-md" */ "D:\\Projects\\othnell\\src\\pages\\magic\\index.md")
const c15 = () => import(/* webpackChunkName: "page--src-pages-items-index-md" */ "D:\\Projects\\othnell\\src\\pages\\items\\index.md")
const c16 = () => import(/* webpackChunkName: "page--src-pages-characters-index-md" */ "D:\\Projects\\othnell\\src\\pages\\characters\\index.md")
const c17 = () => import(/* webpackChunkName: "page--src-pages-combat-index-md" */ "D:\\Projects\\othnell\\src\\pages\\combat\\index.md")
const c18 = () => import(/* webpackChunkName: "page--src-pages-core-index-md" */ "D:\\Projects\\othnell\\src\\pages\\core\\index.md")
const c19 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Projects\\othnell\\node_modules\\gridsome\\app\\pages\\404.vue")
const c20 = () => import(/* webpackChunkName: "page--src-pages-index-md" */ "D:\\Projects\\othnell\\src\\pages\\index.md")

export default [
  {
    path: "/magic/veneration/",
    component: c1
  },
  {
    path: "/magic/rule-of-law/",
    component: c2
  },
  {
    path: "/magic/soul-binding/",
    component: c3
  },
  {
    path: "/magic/thaumaturgy/",
    component: c4
  },
  {
    path: "/ref/clash-roll/",
    component: c5
  },
  {
    path: "/characters/races/",
    component: c6
  },
  {
    path: "/magic/hemoturgy/",
    component: c7
  },
  {
    path: "/magic/essence-weaving/",
    component: c8
  },
  {
    path: "/magic/energeia/",
    component: c9
  },
  {
    path: "/magic/animare/",
    component: c10
  },
  {
    path: "/characters/domains/",
    component: c11
  },
  {
    path: "/combat/damage/",
    component: c12
  },
  {
    path: "/characters/attributes/",
    component: c13
  },
  {
    path: "/magic/",
    component: c14
  },
  {
    path: "/items/",
    component: c15
  },
  {
    path: "/characters/",
    component: c16
  },
  {
    path: "/combat/",
    component: c17
  },
  {
    path: "/core/",
    component: c18
  },
  {
    name: "404",
    path: "/404/",
    component: c19
  },
  {
    path: "/",
    component: c20
  },
  {
    name: "*",
    path: "*",
    component: c19
  }
]
