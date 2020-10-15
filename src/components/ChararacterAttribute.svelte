<script lang="ts">
  import NumberInput from './NumberInput.svelte'
  export let value: number
</script>

<div class="char-attr">
  <div class="char-attr-label"><slot /></div>
  <NumberInput bind:value min={-1} max={3} />
</div>
