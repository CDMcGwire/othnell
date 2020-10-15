<script lang="ts">
  import { onMount } from "svelte";

  class NavTreeRoute {
    name: string
    path: string
    children?: Array<NavTreeRoute>
    open?: boolean
  }
  class TieredStyle {
    style: string
    scalar: string
    flat?: string
    constructor(style: string, scalar: string, flat?: string) {
      this.style = style
      this.scalar = scalar
      this.flat = flat
    }
    atDepth(depth: number) {
      return `calc(${depth} * ${this.scalar}` + (this.flat ? ` + ${this.flat}` : '') + ')'
    }
    apply(element: HTMLElement, depth: number) {
      element.style.setProperty(this.style, this.atDepth(depth))
    }
  }

  export let routes: Array<NavTreeRoute>
  export let activePath: string = ''
  export let basePath: string = ''
  export let depth: number = 0
  export let arrowContent: string = '❯'
  export let tieredStyles: Array<TieredStyle> = [
    new TieredStyle('padding-left' ,'1.2em' ,'1.5em')
  ]
  
  for (let route of routes)
    if (route.children) route.open = checkActive(activePath, route.path)

  let labels: Array<HTMLElement> = []

  onMount(() => {
    for (let label of labels)
      for (let tieredStyle of tieredStyles)
        tieredStyle.apply(label, depth)
  })

  function checkActive(activePath: string, targetPath: string): boolean {
    return activePath.startsWith(targetPath)
  }
</script>


<div class="nav-tree">
  {#each routes as route, i (route.name)}
  <div class="nav-tree-label nav-tree-label-{depth}" 
       class:active={checkActive(activePath, (basePath + route.path))}
       class:exactActive={activePath === basePath + route.path}
       bind:this={labels[i]}>
    {#if route.children}
    <div class="nav-tree-arrow"
         class:open={route.open}
         on:click={() => route.open = !route.open}>
      {@html arrowContent}
    </div>
    {/if}
    <a href={basePath + route.path}
       class="nav-tree-label-text"
       on:keyup|stopPropagation={e => { if (!e.isComposing && e.key === ' ') route.open = !route.open}}>
      {route.name}
    </a>
  </div>
  {#if route.children && route.open}
  <svelte:self routes={route.children}
               activePath={activePath}
               basePath={basePath + (route.path ? route.path : '')}
               depth={depth + 1}
               arrowContent={arrowContent}
               class="nav-tree-children" />
  {/if}
  {/each}
</div>


<style lang="stylus">
  arrow-width = 1.2em
  .nav-tree
    display flex
    flex-direction column
    position relative
  .nav-tree-label
    display flex
    flex-direction row
    align-items center
  .nav-tree-label.active
    background-color hsla(0, 0, 100%, 0.05)
  .nav-tree-label.exactActive
    background-color hsla(0, 0, 100%, 0.14)
  .nav-tree-arrow
    display flex
    justify-content center
    align-items center
    position absolute
    margin-left -(arrow-width)
    width arrow-width
    height arrow-width
    user-select none
    transition transform 0.2s
    transform rotate(0turn)
  .nav-tree-label-text
    flex 1 1 100%
    display flex
    flex-direction row
    height 100%
    color inherit
  .nav-tree-arrow.open
    transform rotate(0.25turn)
</style>
