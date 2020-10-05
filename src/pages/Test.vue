<template>
  <div>
    <bs :options="options" />
    <nav-tree :routes="routes" />
  </div>
</template>

<script>
import NavTree from '~/components/NavTree.vue'

export default {
  components: {
    NavTree: NavTree,
  },
  data() {
    return {
      options: [
        {
          label: 'First',
          value: 0,
        },
        {
          label: 'Second',
          value: 1,
        },
        {
          label: 'Third',
          value: 2,
        },
        {
          label: 'Group',
          options: [
            {
              label: 'Sub One',
              value: 10,
            },
            {
              label: 'Sub Two',
              value: 20,
            },
            {
              label: 'Sub Three',
              value: 30,
            },
          ],
        },
      ],
      routes: [
        {
          name: 'Home',
          path: '/home',
        },
        {
          name: 'Core Rules',
          path: '/core',
        },
        {
          name: 'Player Characters',
          path: '/characters',
          children: [
            {
              name: 'Attributes',
              path: '/attributes',
            },
            {
              name: 'Races',
              path: '/races',
            },
            {
              name: 'Proficiencies',
              path: '/proficiencies',
            },
            {
              name: 'Traits',
              path: '/traits',
              children: [
                {
                  name: 'Attribute',
                  path: '/attribute',
                },
                {
                  name: 'Mundane',
                  path: '/mundane',
                },
                {
                  name: 'Exceptional',
                  path: '/exceptional',
                },
              ],
            },
          ],
        },
        {
          name: 'Combat',
          path: '/combat',
          children: [
            {
              name: 'Damage',
              path: '/damage',
            },
          ],
        },
        {
          name: 'Magic',
          path: '/magic',
          children: [
            {
              name: 'Animare',
              path: '/animare',
            },
            {
              name: 'Energeia',
              path: '/energeia',
            },
            {
              name: 'Essense Weaving',
              path: '/essence-weaving',
            },
            {
              name: 'Hemoturgy',
              path: '/hemoturgy',
            },
            {
              name: 'THE RULE OF LAW',
              path: '/rule-of-law',
            },
            {
              name: 'Soul Binding',
              path: '/soul-binding',
            },
            {
              name: 'Thaumaturgy',
              path: '/thaumaturgy',
            },
            {
              name: 'Veneration',
              path: '/veneration',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
