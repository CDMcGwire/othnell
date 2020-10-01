<template>
  <div>
    <bs :options="options" />
  </div>
</template>

<script>
import bs from '~/components/BetterSelect.vue'

export default {
  components: {
    bs: bs,
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
          ]
        }
      ],
    }
  },
}
</script>

<style></style>
