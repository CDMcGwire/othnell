<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { onMount } from 'svelte'
import TwoStageButton from './TwoStageButton.svelte'

const dispatch = createEventDispatcher()

export let target: string
export let baseRulesUrl: string
export let baseRefUrl: string
export let _class: string = ''

let referenceDesc = ''

$: referenceName = toDisplayString(target)

function toDisplayString(value: string) {
  const regex = /([ -]*)([a-zA-Z])([a-zA-Z]*)/g
  const mapper = x => {
    const prefix = x[1].replace(/-{1}?/, ' ').replace(/ -/, '-')
    return `${prefix}${x[2].toUpperCase()}${x[3].toLowerCase()}`
  }
  return [...value.matchAll(regex)].map(mapper).join('')
}

onMount(() => {
  const descUrl = `${baseRefUrl}/${target}.html`
  fetch(descUrl)
    .then(response =>
      response.ok ? response.text() : 'Description unavailable',
    )
    .then(text => (referenceDesc = text))
    .catch(error => console.error(error))
})
</script>

<div class="{_class}">
  <div class="ref-entry-header">
    <div class="ref-entry-name">
      <a
        href="{baseRulesUrl + '#' + target}"
        on:click="{() => dispatch('follow')}"
      >
        {referenceName}
      </a>
    </div>
    <TwoStageButton on:click="{() => dispatch('remove')}">Remove</TwoStageButton
    >
  </div>
  <div class="ref-entry-content">{@html referenceDesc}</div>
</div>
