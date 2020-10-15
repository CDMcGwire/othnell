<script>
	import { onMount } from 'svelte'
	import tippy from 'tippy.js'
	import 'tippy.js/dist/tippy.css'

	export let placeholder = "<em>Loading...</em>"
	export let target = 'empty'
	let button
	let placeholderElement

	function getContentLoader() {
		let loaded = false
		return async (tooltip) => {
			if (loaded || tooltip === null) return

			var response = await fetch(`/terms/${target}.html`)
			if (!response.ok) {
				tooltip.setContent('Failed to load')
				return
			}
			var content = await response.text()
			tooltip.setContent(content)
			loaded = true
		}
	}

	onMount(() => {
		tippy(button, {
			content: placeholderElement,
			theme: 'term',
			allowHTML: true,
			delay: [400, 200],
			interactive: true,
			maxWidth: 400,
			placement: 'bottom',
			onShow: getContentLoader(),
			popperOptions: {
				strategy: 'fixed',
				modifiers: [
					{
						name: 'flip',
						options: {
							fallbackPlacements: ['top', 'right', 'left'],
						},
					},
					{
						name: 'preventOverflow',
						options: {
							altAxis: true,
							tether: true,
						},
					},
				],
			},
		})
	})
</script>

<style lang="stylus">
	@require '../assets/vars.styl'

	button
		color accent-sec
		background-color transparent
	button:hover, button:focus, button:active
		color accent-sec-dark
		background-color transparent
		opacity 1
</style>

<button class="term" bind:this={button}>
	<slot />
	<div bind:this={placeholderElement}>
		{@html placeholder}
	</div>
</button>
