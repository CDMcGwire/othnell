export function delayedHover(node: Node, duration: number) {
  let timer: ReturnType<typeof setTimeout>

  const handleMouseover = () => {
    timer = setTimeout(() => {
      node.dispatchEvent(new CustomEvent('delayedHover'))
    }, duration)
  }

  const handleMouseleave = () => {
    clearTimeout(timer)
  }

  node.addEventListener('mouseover', handleMouseover)
  node.addEventListener('mouseleave', handleMouseleave)

  return {
    update(newDuration: number) {
      duration = newDuration
    },
    destroy() {
      node.removeEventListener('mouseover', handleMouseover)
      node.removeEventListener('mouseleave', handleMouseleave)
    },
  }
}
