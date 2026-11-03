// Build-time rendering: turns content.json into the HTML of the repeated sections, so the page
// works and is indexable without JavaScript. Used by the Vite plugin in vite.config.js.

const ICONS = {
  code: 'M8 6l-6 6 6 6M16 6l6 6-6 6',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7z',
  layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5',
  braces:
    'M8 3C6 3 5 4 5 6v3c0 1-1 2-2 2 1 0 2 1 2 2v3c0 2 1 3 3 3M16 3c2 0 3 1 3 3v3c0 1 1 2 2 2-1 0-2 1-2 2v3c0 2-1 3-3 3',
  grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
  box: 'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10',
  flow: 'M12 3a9 9 0 1 0 .01 0zM10 8l6 4-6 4z',
  term: 'M4 17l6-5-6-5M12 19h8',
  spark: 'M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z',
  win: 'M3 4h18v16H3zM7 9l3 3-3 3M13 15h4',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
  monitor: 'M3 4h18v12H3zM8 20h8M12 16v4',
  loop: 'M21 12a9 9 0 0 1-15.5 6.2M3 12a9 9 0 0 1 15.5-6.2M18 2v4h-4M6 22v-4h4',
  brief: 'M3 8h18v12H3zM8 8V5h8v3M3 13h18',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
  phone: 'M7 2h10v20H7zM11 18h2',
  cup: 'M5 8h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5zM17 10h2a2 2 0 0 1 0 4h-2M8 2v3M12 2v3',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 .01 0z',
  db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
}

const ARROW = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>'

export function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function icon(name, size = 22, stroke = 1.8) {
  const d = ICONS[name]
  if (!d) throw new Error(`Unknown icon "${name}"`)
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"></path></svg>`
}

/** The rising particles behind the glass buttons; positions are deterministic. */
export function particles(count = 12) {
  let out = '<span class="evap" aria-hidden="true">'
  for (let i = 0; i < count; i++) {
    const x = (2 + i * (96 / count)).toFixed(1)
    const s = 2 + ((i * 7) % 3)
    const dx = ((i * 37) % 21) - 10
    const d = (-(i * 0.29)).toFixed(2)
    const t = (1.5 + ((i * 13) % 9) / 10).toFixed(2)
    out += `<span style="left:${x}%;width:${s}px;height:${s}px;--dx:${dx}px;animation-delay:${d}s;animation-duration:${t}s"></span>`
  }
  return `${out}</span>`
}

const pad = (n) => String(n).padStart(2, '0')

export function hiredBy(c) {
  return c.hiredBy.map((name) => `<li>${esc(name)}</li>`).join('')
}

export function facts(c) {
  return c.profile.facts
    .map(
      ([label, value], i) =>
        `<li class="rv s${i + 2}"><div class="fact tilt"><p class="mono-sm">${esc(label)}</p><p>${esc(value)}</p></div></li>`,
    )
    .join('')
}

export function featured(c) {
  const f = c.featured
  return `<a class="feat tilt" href="${esc(f.href)}" data-cur="Open">
  <div class="feat-media rvC">
    <span class="big-k kanji dy" aria-hidden="true">${esc(f.kanji)}</span>
    <img class="feat-shot" src="${esc(f.image)}" alt="${esc(f.imageAlt)}" width="1400" height="900" loading="lazy">
  </div>
  <div class="feat-body">
    <div>
      <p class="mono-sm" style="margin:0 0 16px;color:var(--accent-hi)">Featured · 01</p>
      <h3>${esc(f.title)}</h3>
      <p>${esc(f.summary)}</p>
    </div>
    <div class="feat-foot">
      <ul class="tags" aria-label="Stack">${f.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <span class="go-link">Read case study ${ARROW}</span>
    </div>
  </div>
</a>`
}

export function projects(c) {
  return c.projects
    .map((p, i) => {
      const inner = `<span class="num">${pad(i + 2)}</span>
    <span class="t">${esc(p.title)}</span>
    <span class="d">${esc(p.summary)}</span>
    <span class="tg">${esc(p.tag)}</span>
    ${p.href ? `<span class="warrow">${ARROW}</span>` : `<span class="private">${esc(p.note ?? 'Private')}</span>`}
    <span class="wline" aria-hidden="true"></span>`
      const data = `data-p="${i}" data-k="${esc(p.kanji)}" data-tag="${esc(p.tag)}" data-bg="${esc(p.bg)}"`
      return p.href
        ? `<li class="rvL"><a class="wrow" href="${esc(p.href)}" target="_blank" rel="noopener" data-cur="View" ${data}>${inner}<span class="visually-hidden"> (opens in a new tab)</span></a></li>`
        : `<li class="rvL"><div class="wrow" ${data}>${inner}</div></li>`
    })
    .join('')
}

export function steps(c) {
  return c.process
    .map(
      ([title, text], i) =>
        `<li class="step stp"><span>${pad(i + 1)}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></li>`,
    )
    .join('')
}

export function terminal(c) {
  const lines = c.terminal.lines
    .map(
      ([cmd, out], i) =>
        `<div class="cmd ty s${i + 1}"><b>$</b> ${esc(cmd)}</div><div class="out ty s${i + 1}">${esc(out)}</div>`,
    )
    .join('')
  return `${lines}<div class="cmd ty s5"><b>$</b> <span class="caret"></span></div>`
}

export function terminalTitle(c) {
  return esc(c.terminal.title)
}

function chips(list, hidden) {
  return list
    .map(
      ([name, ic, style]) =>
        `<span class="chip ${style}"${hidden ? ' aria-hidden="true"' : ''}><span class="chip-ic">${icon(ic)}</span>${esc(name)}</span>`,
    )
    .join('')
}

/** Each row is written twice so the marquee loops seamlessly; the copy is hidden from readers. */
export function toolsA(c) {
  return chips(c.tools.rowA, false) + chips(c.tools.rowA, true)
}
export function toolsB(c) {
  return chips(c.tools.rowB, false) + chips(c.tools.rowB, true)
}

export function categories(c) {
  return c.categories
    .map(
      ([label, items, ic], i) =>
        `<li class="cat rv s${i + 1}"><span class="cat-ic">${icon(ic, 26)}</span><p class="mono-sm">${esc(label)}</p><p>${esc(items)}</p></li>`,
    )
    .join('')
}

export function awards(c) {
  return c.awards
    .map(
      ([year, name, place]) =>
        `<li class="rvL"><span class="yr">${esc(year)}</span><span class="ev-name">${esc(name)}</span><span class="place${place.startsWith('1st') ? ' first' : ''}">${esc(place)}</span></li>`,
    )
    .join('')
}

export function communities(c) {
  return c.communities
    .map(([name, role]) => `<li class="rvR"><span>${esc(name)}</span><span>${esc(role)}</span></li>`)
    .join('')
}

// Positions around the red sun, used in order
const ORBIT = [
  ['85%', '15%', '.2s'],
  ['96%', '38%', '.4s'],
  ['94%', '63%', '.6s'],
  ['82%', '84%', '.8s'],
]

export function socials(c) {
  return c.socials
    .map(([label, href, ic], i) => {
      const [x, y, delay] = ORBIT[i % ORBIT.length]
      return `<a class="sb" href="${esc(href)}" target="_blank" rel="noopener" aria-label="${esc(label)} profile" data-cur="${esc(label)}" style="left:${x};top:${y};animation-delay:${delay}"><span class="sb-in" style="animation-delay:${delay}"><span class="sb-c">${icon(ic, 24)}</span><span class="sb-l">${esc(label)}</span></span></a>`
    })
    .join('')
}

/** Replace every `<!--@name-->` marker in the page with the matching renderer's output. */
export function renderPage(html, content, extra = {}) {
  const renderers = {
    hiredBy,
    facts,
    featured,
    projects,
    steps,
    terminal,
    terminalTitle,
    toolsA,
    toolsB,
    categories,
    awards,
    communities,
    socials,
    ...extra,
  }
  return html
    .replace(/<!--@particles(?::(\d+))?-->/g, (_, n) => particles(n ? Number(n) : 12))
    .replace(/<!--@icon:(\w+)(?::(\d+))?-->/g, (_, name, size) => icon(name, size ? Number(size) : 22))
    .replace(/<!--@(\w+)-->/g, (marker, name) => {
      const render = renderers[name]
      if (!render) throw new Error(`No renderer for ${marker}`)
      return render(content)
    })
    .replace(/\{\{([\w.]+)\}\}/g, (_, path) => {
      const value = path.split('.').reduce((obj, key) => obj?.[key], content)
      if (value === undefined) throw new Error(`Unknown content field {{${path}}}`)
      return esc(value)
    })
}
