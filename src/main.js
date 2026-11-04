// Interactions of the portfolio. The content itself is rendered at build time; everything here
// is an enhancement, and stays off for touch screens and reduced motion.

const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]

const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
const fancy = finePointer && !calm

/** Restart a CSS animation by removing and re-adding its class. */
function replay(el, cls) {
  if (!el) return
  el.classList.remove(cls)
  void el.offsetWidth
  el.classList.add(cls)
}

// --- Role line: scrambles into place on load and on hover ------------------------------------

function setupScramble() {
  const el = $('.role')
  if (!el || calm) return
  const text = el.dataset.text
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+/<>=01'
  let raf = 0
  const run = () => {
    cancelAnimationFrame(raf)
    let frame = 0
    const total = 36
    const step = () => {
      let out = ''
      for (let i = 0; i < text.length; i++) {
        const reveal = (i / text.length) * total * 0.8
        out += frame >= reveal + 6 || text[i] === ' ' ? text[i] : chars[Math.floor(Math.random() * chars.length)]
      }
      el.textContent = out
      frame++
      if (frame <= total) raf = requestAnimationFrame(step)
      else el.textContent = text
    }
    step()
  }
  setTimeout(run, 600)
  el.addEventListener('mouseenter', run)
}

// --- Cursor: a dot plus a little kendoka that raises its shinai over links ------------------

function setupCursor() {
  const dot = $('.cur-dot')
  const ring = $('.kc')
  const tag = $('.kc-tag')
  const pv = $('.pv')
  let mx = -200
  let my = -200
  let dx = -200
  let dy = -200
  let rx = -200
  let ry = -200
  let qx = -200
  let qy = -200
  let big = false
  let label = ''

  addEventListener('mousemove', (e) => {
    mx = e.clientX
    my = e.clientY
    const target = e.target.closest?.('a,button,input,textarea,[data-cur]')
    const nextLabel = target?.getAttribute('data-cur') || ''
    if (!!target !== big) {
      big = !!target
      ring.classList.toggle('up', big)
    }
    if (nextLabel !== label) {
      label = nextLabel
      ring.classList.toggle('lbl', !!label)
      tag.textContent = label
    }
  })
  document.documentElement.addEventListener('mouseleave', () => {
    mx = -200
    my = -200
  })
  addEventListener('mousedown', () => replay(ring, 'cut'))

  const tick = () => {
    dx += (mx - dx) * 0.45
    dy += (my - dy) * 0.45
    rx += (mx - rx) * 0.16
    ry += (my - ry) * 0.16
    const vx = mx - qx
    qx += vx * 0.12
    qy += (my - qy) * 0.12
    dot.style.transform = `translate3d(${dx.toFixed(1)}px,${dy.toFixed(1)}px,0)`
    ring.style.transform = `translate3d(${rx.toFixed(1)}px,${ry.toFixed(1)}px,0)`
    const tilt = Math.max(-8, Math.min(8, vx * 0.04)).toFixed(2)
    pv.style.transform = `translate3d(${(qx + 30).toFixed(1)}px,${(qy - 115).toFixed(1)}px,0) rotate(${tilt}deg)`
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

// --- Hero: parallax, spotlight and a strike where you click ------------------------------------

function setupHero() {
  const hero = $('.hero')
  const fig = $('.fig-par')
  const sun = $('.sun-par')
  const spot = $('.spot')
  const slash = $('.slash')
  const men = $('.men')

  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect()
    const px = ((e.clientX - r.left) / r.width) * 2 - 1
    const py = ((e.clientY - r.top) / r.height) * 2 - 1
    fig.style.transform = `translate3d(${(px * -18).toFixed(1)}px,${(py * -8).toFixed(1)}px,0)`
    sun.style.transform = `translate3d(${(px * 22).toFixed(1)}px,${(py * 14).toFixed(1)}px,0)`
    spot.style.setProperty('--sx', `${e.clientX - r.left}px`)
    spot.style.setProperty('--sy', `${e.clientY - r.top}px`)
  })
  hero.addEventListener('mouseleave', () => {
    fig.style.transform = ''
    sun.style.transform = ''
  })
  hero.addEventListener('click', (e) => {
    if (e.target.closest('a,button')) return
    const r = hero.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    slash.style.left = `${x}px`
    slash.style.top = `${y}px`
    slash.style.transform = `rotate(${(-20 - Math.random() * 25).toFixed(1)}deg)`
    replay(slash, 'go')
    men.style.left = `${x}px`
    men.style.top = `${y - 50}px`
    replay(men, 'go')
    replay($('.fig'), 'hit')
    replay($('.sun'), 'sunhit')
  })
}

// --- Magnetic buttons and tilting cards ---------------------------------------------------------

function setupMagnetsAndTilts() {
  for (const el of $$('.mag')) {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${(x * 0.3).toFixed(1)}px,${(y * 0.4).toFixed(1)}px)`
    })
    el.addEventListener('mouseleave', () => (el.style.transform = ''))
  }
  for (const el of $$('.tilt')) {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      el.style.transform = `perspective(1000px) rotateX(${((0.5 - y) * 7).toFixed(2)}deg) rotateY(${((x - 0.5) * 9).toFixed(2)}deg)`
      el.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`)
      el.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`)
    })
    el.addEventListener('mouseleave', () => (el.style.transform = ''))
  }
}

// --- Project rows: a card with the project's kanji follows the pointer ---------------------------

function setupPreview() {
  const pv = $('.pv')
  const rows = $$('.wrow[data-p]')
  for (const row of rows) {
    row.addEventListener('mouseenter', () => {
      $('.pv-k', pv).textContent = row.dataset.k
      $('.pv-tag', pv).textContent = row.dataset.tag
      $('.pv-t', pv).textContent = $('.t', row).textContent
      pv.style.background = row.dataset.bg
      pv.classList.add('on')
    })
  }
  $('.rows')?.addEventListener('mouseleave', () => pv.classList.remove('on'))
}

// --- Contact form: sent through Web3Forms; without a key it opens the visitor's email app -------

function setupForm() {
  const form = $('.form')
  if (!form) return
  const key = form.dataset.key
  const note = $('.form-note', form)
  const button = $('button[type=submit]', form)
  const label = button.firstChild.textContent
  if (key) note.textContent = 'Goes straight to my inbox. I reply within a few days.'

  const mailto = (data) => {
    const to = form.getAttribute('action').replace(/^mailto:/, '')
    const subject = `Hello from ${data.get('name')}`
    const body = `${data.get('message')}\n\n${data.get('name')} <${data.get('email')}>`
    location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = new FormData(form)
    if (!key) return mailto(data)
    if (data.get('botcheck')) return

    button.disabled = true
    button.firstChild.textContent = 'Sending…'
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: `Portfolio: message from ${data.get('name')}`,
          from_name: data.get('name'),
          name: data.get('name'),
          email: data.get('email'),
          replyto: data.get('email'),
          message: data.get('message'),
        }),
      })
      const result = await response.json()
      if (!result.success) throw new Error(result.message)
      form.reset()
      note.textContent = 'Message sent. Thank you, I will get back to you soon.'
    } catch {
      note.innerHTML = ''
      note.append('It did not go through. Please write to ')
      const link = document.createElement('a')
      link.href = form.getAttribute('action')
      link.textContent = link.href.replace(/^mailto:/, '')
      note.append(link, ' directly.')
    } finally {
      button.disabled = false
      button.firstChild.textContent = label
    }
  })
}

setupScramble()
setupForm()
if (fancy) {
  setupCursor()
  setupHero()
  setupMagnetsAndTilts()
  setupPreview()
}
