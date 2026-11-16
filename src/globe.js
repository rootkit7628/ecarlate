// The tool globe: chips spread on a sphere with CSS 3D, auto-rotating and draggable.
// Without JavaScript the chips are simply a wrapped list.

export default function mountGlobe(el, { calm = false } = {}) {
  const items = [...el.querySelectorAll('.gi')]
  const wire = el.querySelector('.globe-wire')
  const n = items.length
  if (!n) return

  // Fibonacci sphere: evenly spread points
  const pts = items.map((_, i) => {
    const y = 1 - ((i + 0.5) / n) * 2
    const r = Math.sqrt(1 - y * y)
    const th = i * Math.PI * (3 - Math.sqrt(5))
    return [Math.cos(th) * r, y, Math.sin(th) * r]
  })

  let ax = -0.35
  let ay = 0
  let vx = 0
  let vy = calm ? 0 : 0.0042
  const base = calm ? 0 : 0.0042
  let radius = 200
  let dragging = false
  let lastX = 0
  let lastY = 0
  let hover = false

  const size = () => (radius = el.clientWidth * (el.clientWidth < 480 ? 0.31 : 0.4))
  size()
  new ResizeObserver(size).observe(el)
  el.classList.add('on')

  function draw() {
    const cx = Math.cos(ax)
    const sxn = Math.sin(ax)
    const cy = Math.cos(ay)
    const syn = Math.sin(ay)
    for (let i = 0; i < n; i++) {
      const [x0, y0, z0] = pts[i]
      // Same convention as CSS `rotateX(ax) rotateY(ay)`: rotate around Y first, then X.
      const x1 = x0 * cy + z0 * syn
      const z1 = -x0 * syn + z0 * cy
      const y2 = y0 * cx - z1 * sxn
      const z2 = y0 * sxn + z1 * cx
      const depth = (z2 + 1) / 2
      const s = items[i].style
      s.transform = `translate(-50%,-50%) translate3d(${(x1 * radius).toFixed(1)}px,${(y2 * radius).toFixed(1)}px,${(z2 * radius).toFixed(1)}px)`
      s.opacity = (0.18 + depth * 0.82).toFixed(2)
      s.zIndex = String(Math.round(depth * 100))
      items[i].classList.toggle('back', depth < 0.35)
    }
    if (wire) wire.style.transform = `translate(-50%,-50%) rotateX(${ax}rad) rotateY(${ay}rad)`
  }

  el.addEventListener('pointerdown', (e) => {
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
    el.setPointerCapture(e.pointerId)
    el.classList.add('drag')
  })
  el.addEventListener('pointermove', (e) => {
    if (!dragging) return
    vy = (e.clientX - lastX) * 0.006
    vx = -(e.clientY - lastY) * 0.006
    lastX = e.clientX
    lastY = e.clientY
    if (calm) {
      ay += vy
      ax += vx
      draw()
    }
  })
  const release = () => {
    dragging = false
    el.classList.remove('drag')
  }
  el.addEventListener('pointerup', release)
  el.addEventListener('pointercancel', release)
  el.addEventListener('pointerenter', () => (hover = true))
  el.addEventListener('pointerleave', () => (hover = false))

  draw()
  if (calm) return

  let visible = false
  let raf = 0
  const tick = () => {
    raf = 0
    if (!visible) return
    ay += vy
    ax += vx
    ax = Math.max(-1.1, Math.min(1.1, ax))
    if (!dragging) {
      const target = hover ? base * 0.25 : base
      vy += (target - vy) * 0.03
      vx *= 0.94
    }
    draw()
    raf = requestAnimationFrame(tick)
  }
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible && !raf) raf = requestAnimationFrame(tick)
  }).observe(el)
}
