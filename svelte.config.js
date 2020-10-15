const getPreprocessor = require('svelte-preprocess')
const { mdsvex } = require('mdsvex')

const stylusPreprocess = getPreprocessor({ stylus: true })
module.exports = {
  preprocess: [stylusPreprocess, mdsvex({ smartypants: true })],
}
