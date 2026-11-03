# Ecarlate

My portfolio, live at **https://rootkit7628.github.io**.

Dark lacquer, a red sun and kanji watermarks, with a few toys: a little kendoka cursor that
raises its shinai over links, a strike where you click on the hero, and project previews that
follow the pointer. They switch off on touch screens and with reduced motion.

## Editing the content

Everything written on the site lives in [`src/content.json`](src/content.json): profile,
companies, projects, tools, awards, communities and social links. The sections are rendered from
it **at build time** (see [`src/render.js`](src/render.js)), so the published HTML is complete
without JavaScript. The Nirvix case study is [`nirvix.html`](nirvix.html).

## Running it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static site in dist/
```

## Deployment

Every push to `main` builds the site with GitHub Actions and publishes `dist/` to
[rootkit7628.github.io](https://github.com/rootkit7628/rootkit7628.github.io), using a deploy key
stored as the `PAGES_DEPLOY_KEY` secret.

## Stack

Vite, plain HTML, CSS and JavaScript. Fonts: Fira Sans, JetBrains Mono, Shippori Mincho B1.

---

The previous version (React + Tailwind, 2025) is in the history before the 2.0.0 commit.
