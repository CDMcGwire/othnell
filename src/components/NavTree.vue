<template>
  <div>
    <div
      v-for="route of routes"
      :key="route.name"
      :class="['nav-tree-node', { open: isOpen }]"
    >
      <router-link
        :to="basePath + route.path"
        v-slot="{ href, isActive, isExactActive }"
      >
        <div
          :class="[
            'nav-tree-label',
            { active: isActive },
            { exact: isExactActive },
          ]"
          ref="labels"
        >
          <div
            v-if="route.children !== undefined"
            v-html="arrow"
            :class="['nav-tree-arrow']"
            ref="arrows"
          />
          <g-link
            v-if="route.path !== undefined"
            :to="href"
            :class="['nav-tree-link']"
            >{{ route.name }}</g-link
          >
          <div v-else>{{ route.name }}</div>
        </div>
      </router-link>
      <nav-tree
        v-if="route.children !== undefined"
        :routes="route.children"
        :class="['nav-tree-child']"
        :basePath="route.path !== undefined ? basePath + route.path : basePath"
        :depth="depth + 1"
        :open="false"
        ref="children"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-tree',
  props: {
    routes: {
      type: Array,
      default: [],
    },
    basePath: {
      type: String,
      default: '',
    },
    depth: {
      type: Number,
      default: 0,
    },
    open: {
      type: Boolean,
      default: true,
    },
    arrow: {
      type: String,
      default: '❯',
    },
    tieredStyles: {
      type: Array,
      default: function() {
        return [
          {
            style: 'padding-left',
            scalar: '20px',
            flat: '1.2em',
          },
        ]
      },
    },
  },
  data: function() {
    return {
      isOpen: false,
    }
  },
  methods: {
    calcTieredStyles(tieredStyles) {
      for (var label of this.$refs.labels) {
        for (var tieredStyle of tieredStyles) {
          const calc =
            tieredStyle.flat !== undefined
              ? `calc(${this.depth} * ${tieredStyle.scalar} + ${
                  tieredStyle.flat
                })`
              : `calc(${this.depth} * ${tieredStyle.scalar})`
          label.style.setProperty(tieredStyle.style, calc)
        }
      }
    },
  },
  mounted() {
    this.isOpen = this.open
    this.calcTieredStyles(this.tieredStyles)
    const arrows = this.$refs.arrows
    if (arrows === undefined) return
    for (var i = 0; i < arrows.length; i++) {
      const arrow = this.$refs.arrows[i]
      const text = arrow.nextSibling
      const child = this.$refs.children[i]
      arrow.onclick = () => {
        child.isOpen = !child.isOpen
        arrow.classList.toggle('open')
      }
      text.onclick = () => {
        child.isOpen = true
        arrow.classList.add('open')
      }
    }
  },
}
</script>

<style lang="stylus">
.nav-tree-node
  display none
  flex-direction column
.nav-tree-node.open
  display flex
.nav-tree-label
  display flex
  flex-direction row
  align-items center
.nav-tree-label.active
  background-color hsla(0, 0, 100%, 0.05)
.nav-tree-label.active.exact
  background-color hsla(0, 0, 100%, 0.2)
.nav-tree-arrow
  transition transform 0.2s
  display flex
  justify-content center
  align-items center
  margin-left -1em
  width 1em
  height 1em
  cursor pointer
  user-select none
  transform rotate(0turn)
.nav-tree-arrow.open
  transform rotate(0.25turn)
.nav-tree-link
  color inherit
</style>
