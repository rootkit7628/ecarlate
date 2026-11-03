import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { renderPage } from './src/render.js'

const root = import.meta.dirname
const content = () => JSON.parse(readFileSync(resolve(root, 'src/content.json'), 'utf8'))

/** Fills the `<!--@section-->` markers and `{{fields}}` of every page from content.json. */
function contentPages() {
  return {
    name: 'content-pages',
    transformIndexHtml: (html) => renderPage(html, content()),
    handleHotUpdate({ file, server }) {
      if (file.endsWith('content.json') || file.endsWith('render.js')) server.ws.send({ type: 'full-reload' })
    },
  }
}

export default defineConfig({
  // Relative paths: the build works at the root of rootkit7628.github.io or in any sub-folder.
  base: './',
  plugins: [contentPages()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        nirvix: resolve(root, 'nirvix.html'),
      },
    },
  },
})
