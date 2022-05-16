import 'css-paint-polyfill'

import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm'

import 'reveal.js/dist/reset.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'
import 'reveal.js/plugin/highlight/monokai.css'

import workletUrl from './paint_worklets.js?url'
CSS.paintWorklet.addModule(workletUrl)

Reveal.initialize({
  hash: true,
  plugins: [Markdown, RevealHighlight, RevealNotes],
})
