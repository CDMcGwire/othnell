<script lang="ts" context="module">
let overlayDiv: HTMLElement
let overlayContentDiv: HTMLElement
</script>

<script lang="ts">
import { createEventDispatcher, onMount } from 'svelte'

class OptionInput {
  name: string
  value?: any
  children?: Array<OptionInput>
}

class OptionListing {
  name: string
  value?: any
  grouped: boolean
  index?: number
}

class Option {
  name: string
  value: any
}

export let options: Array<OptionInput> = []
export let initial: string | number = 0
export let arrow: string = null
export let _class: string = ''
const listings: Array<OptionListing> = []
const finalOptions: Array<Option> = []
let open = false
let dropdownOpen = false
export let current = 0
let flipped = false
$: setInitial(initial)
$: currentName = finalOptions.length > 0 ? finalOptions[current].name : ''

const dispatch = createEventDispatcher()
const optionElements: Array<HTMLElement> = []
let container: HTMLElement
let dropdown: HTMLElement

function clampCurrent(value: number) {
  return Math.max(Math.min(value, finalOptions.length - 1), 0)
}
function handleKeydown(event: KeyboardEvent) {
  switch (event.key) {
    case 'Down':
    case 'ArrowDown':
    case 'Up':
    case 'ArrowUp':
    case 'Enter':
      if (event.defaultPrevented) return
      event.preventDefault()
      break
    default:
      break
  }
}
function handleKeyup(event: KeyboardEvent) {
  switch (event.key) {
    case 'Down':
    case 'ArrowDown':
      if (event.defaultPrevented) return
      navigate(current + 1)
      break
    case 'Up':
    case 'ArrowUp':
      if (event.defaultPrevented) return
      navigate(current - 1)
      break
    case 'Enter':
      if (event.defaultPrevented) return
      if (open) {
        select(current)
        setOpen(false)
      }
      break
    default:
      break
  }
}
function handleBlur(event: FocusEvent) {
  if (!dropdownOpen) return
  const currentTarget = event.currentTarget as HTMLElement
  const relatedTarget = event.relatedTarget as HTMLElement
  if (currentTarget.contains(relatedTarget)) return
  setOpen(false)
}
function navigate(target: number) {
  if (options.length < 1) return
  if (!dropdownOpen)
    overlayContentDiv.children[current].classList.remove('current')
  current = clampCurrent(target)
  if (!dropdownOpen)
    overlayContentDiv.children[current].classList.add('current')
  if (open) optionElements[current].scrollIntoView(false)
  else select(current)
}
function select(index: number) {
  if (options.length < 1) return
  current = clampCurrent(index)
  dispatch('select', finalOptions[current])
}
function setOpen(value: boolean) {
  open = value
  if (open) size()
  else if (window.innerWidth < 760) {
    overlayDiv.classList.remove('open')
  }
}
function size() {
  if (!window) return
  const bounds = container.getBoundingClientRect()
  const distToBot = window.innerHeight - bounds.bottom
  flipped = false
  dropdownOpen = true
  if (window.innerWidth < 760) {
    populateOverlay()
    dropdownOpen = false
  } else if (distToBot > 200) {
    dropdown.style.top = '100%'
    dropdown.style.removeProperty('bottom')
    dropdown.style.maxHeight = `${distToBot}px`
  } else {
    dropdown.style.removeProperty('top')
    dropdown.style.bottom = '100%'
    dropdown.style.maxHeight = `${bounds.top}px`
    flipped = true
  }
}
function setInitial(value: string | number) {
  if (typeof value === 'string') {
    let initialStr = value as string
    for (let option of listings) {
      if (option.name === initialStr) {
        current = clampCurrent(option.index)
        break
      }
    }
  } else {
    let current = initial as number
    if (current >= finalOptions.length)
      current = clampCurrent(finalOptions.length - 1)
  }
}
function populateOverlay() {
  overlayDiv.classList.add('open')
  overlayDiv.onclick = event => {
    if (event.target === overlayDiv) setOpen(false)
  }

  for (let i = overlayContentDiv.childElementCount; i < listings.length; i++)
    overlayContentDiv.appendChild(document.createElement('div'))

  let i = 0
  for (; i < listings.length; i++) {
    const option = overlayContentDiv.children[i] as HTMLElement
    const listing = listings[i]
    if ('index' in listing) {
      option.className =
        'select-overlay-option' + (listing.grouped ? ' grouped' : '')
      if (listing.index === current) option.classList.add('current')
      option.onclick = () => {
        select(listing.index)
        setOpen(false)
      }
    } else {
      option.className = 'select-overlay-group'
      option.onclick = null
    }
    option.textContent = listing.name ? listing.name : '- None -'
    option.style.removeProperty('display')
  }
  for (; i < overlayContentDiv.childElementCount; i++)
    (overlayContentDiv.children[i] as HTMLElement).style.display = 'none'
}

// Flatten the list of options
for (let option of options) {
  if ('children' in option) {
    listings.push({
      name: option.name,
      grouped: false,
    })
    for (let sub of option.children) {
      finalOptions.push({
        name: sub.name,
        value: sub.value ?? sub.name,
      })
      listings.push({
        name: sub.name,
        value: sub.value,
        grouped: true,
        index: finalOptions.length - 1,
      })
    }
  } else {
    finalOptions.push({
      name: option.name,
      value: option.value ?? option.name,
    })
    listings.push({
      name: option.name,
      value: option.name ?? option.value,
      grouped: false,
      index: finalOptions.length - 1,
    })
  }
}

onMount(() => {
  if (overlayDiv) return
  overlayDiv = document.createElement('div')
  overlayDiv.className = 'select-overlay'
  overlayContentDiv = document.createElement('div')
  overlayContentDiv.className = 'select-overlay-content'

  overlayDiv.appendChild(overlayContentDiv)
  document.body.appendChild(overlayDiv)
})
</script>

<div
  class="{'select-input ' + _class}"
  bind:this="{container}"
  on:focusout="{handleBlur}"
>
  <button
    class="select-label"
    on:click="{() => setOpen(!open)}"
    on:keydown="{handleKeydown}"
    on:keyup="{handleKeyup}"
  >
    <div class="select-current">{currentName}</div>
    <div class="select-arrow">
      {#if arrow}
        {@html arrow}
      {:else}
        <svg class="select-arrow-icon" class:open viewBox="0 0 100 100">
          <polygon points="0,10 50,90 100,10"></polygon>
        </svg>
      {/if}
    </div>
  </button>
  <div
    class="select-dropdown-wrapper"
    class:open="{open && dropdownOpen}"
    class:flipped
    bind:this="{dropdown}"
  >
    <div class="select-dropdown-content" tabindex="-1">
      {#each listings as option}
        {#if 'index' in option}
          <div
            class="select-option"
            class:grouped="{option.grouped}"
            class:current="{current === option.index}"
            on:mousedown="{() => (current = option.index)}"
            on:click="{() => {
              select(option.index)
              setOpen(false)
            }}"
            bind:this="{optionElements[option.index]}"
          >
            {option.name ? option.name : '- None -'}
          </div>
        {:else}
          <div class="select-group">{option.name}</div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style lang="stylus">
  .select-input
    position relative
  .select-label
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    width 100%
    height 100%
    background-color transparent
    user-select none
    cursor pointer
  .select-arrow
    display flex
    flex-direction row
    align-items center
    height 100%
    width 1ch
    margin-left 5px
  .select-arrow-icon
    fill white
    width 100%
    transition transform 0.2s
  .select-arrow-icon.open
    transform rotate(0.5turn)
  .select-dropdown-wrapper
    display none
    flex-direction column
    justify-content center
    align-items center
    width 100vw
    height 100vh
    background-color hsla(0, 0, 10%, 0.8)
    z-index 9999
  .select-dropdown-wrapper.open
    display flex
  .select-dropdown-content
    width 80%
    max-height 60%
    overflow-x hidden
    overflow-y auto
    background-color hsl(0, 0, 15%)
  .select-option
    user-select none
    cursor pointer
  .select-option.current
    background-color hsla(0, 0, 100%, 0.15)
  .select-group
    background-color hsla(0, 0, 0, 0.15)
    user-select none
  @media screen and (max-width: 759px)
    .select-dropdown-wrapper
      position fixed
      top 0
      left 0
  @media screen and (min-width: 760px)
    .select-dropdown-wrapper
      position absolute
      min-width 100%
      width min-content
      height auto
      background-color transparent
      padding-bottom 5px
    .select-dropdown-wrapper.flipped
      padding-bottom 0
      padding-top 5px
    .select-dropdown-content
      width 100%
      max-height 100%

  :global
    .select-overlay
      display none
      flex-direction column
      justify-content center
      align-items center
      position fixed
      top 0
      left 0
      width 100vw
      height 100vh
      background-color hsla(0, 0, 10%, 0.8)
      z-index 9999
    .select-overlay.open
      display flex
    .select-overlay-content
      width 80%
      max-height 60%
      overflow-x hidden
      overflow-y auto
      background-color hsl(0, 0, 15%)
    .select-overlay-option
      min-height 1em
      padding 8px 10px
      font-size 18pt
      user-select none
      cursor pointer
    .select-overlay-option.current
      background-color hsla(0, 0, 100%, 0.15)
    .select-overlay-group
      background-color hsla(0, 0, 0, 0.15)
      user-select none
</style>
