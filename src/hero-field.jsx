// Connectivity field for the SechPoint hero: rays streaming outward from a focal
// point below the frame. Ported to an ESM React module.
import React from 'react'

const W = 1920, H = 1080, CX = 960, CY = 1330, LOOP = 15.5

function clamp(v, a, b) { return v < a ? a : v > b ? b : v }

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function hexRgb(hex) {
  const h = String(hex || '#00baeb').replace('#', '')
  const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)]
}

function buildRays(n, seed, spread) {
  const rnd = mulberry32(seed)
  const out = []
  for (let i = 0; i < n; i++) {
    const f = (i + 0.5) / n
    const s = -1 + 2 * f
    const shaped = Math.sign(s) * Math.pow(Math.abs(s), 0.82)
    const a = shaped * spread + (rnd() - 0.5) * (spread * 2 / n) * 1.7
    const dx = Math.sin(a), dy = -Math.cos(a)
    const tx = dx > 0 ? (W + 200 - CX) / dx : dx < 0 ? (-200 - CX) / dx : 1e9
    const ty = dy < 0 ? (-260 - CY) / dy : 1e9
    const exit = Math.min(tx, ty)
    const r1 = rnd(), r2 = rnd(), r3 = rnd(), r4 = rnd(), r5 = rnd(), r6 = rnd()
    out.push({
      dx, dy,
      start: 30 + r1 * 150,
      reach: exit * (0.5 + r3 * 0.78),
      trail: 0.34 + r4 * 0.6,
      cycles: 1 + Math.floor(r2 * 3),
      phase: r5,
      bright: clamp(0.26 + (r1 * 0.5 + r3 * 0.8), 0.22, 1),
      w: 0.7 + r4 * 1.1,
      hot: r6 < 0.055,
      ord: r6,
    })
  }
  return out
}

function Field(props) {
  const { T, accent, opacity, speed, fan, count, mouse, mouseFx, cursorGlow, ripples, clock } = props
  const spread = (fan * Math.PI) / 360
  const rays = React.useMemo(() => buildRays(count, 20260830, spread), [count, spread])
  const [r, g, b] = React.useMemo(() => hexRgb(accent), [accent])
  const dim = [Math.round(r * 0.52), Math.round(g * 0.6), Math.round(b * 0.58)]
  const line = (o) => 'rgba(' + dim[0] + ',' + dim[1] + ',' + dim[2] + ',' + o.toFixed(3) + ')'
  const head = (o) => 'rgba(' + r + ',' + g + ',' + b + ',' + o.toFixed(3) + ')'

  const loopPh = (2 * Math.PI * T) / LOOP
  const surge = 0.94 + 0.12 * (1 - Math.cos(loopPh)) / 2
  const mx = mouse.x, my = mouse.y, mActive = mouse.active && mouseFx
  const RAD = props.cursorRadius

  const nodes = [], links = [], grads = []
  for (let i = 0; i < rays.length; i++) {
    const s = rays[i]
    const k = Math.max(1, Math.round(s.cycles * speed))
    const p = (T * k / LOOP + s.phase) % 1
    const hd = s.start + p * (s.reach - s.start)
    const tl = Math.max(s.start * 0.35, hd - s.trail * s.reach)
    const fin = clamp(p / 0.05, 0, 1)
    const fout = 1 - clamp((p - 0.88) / 0.12, 0, 1)
    const env = fin * fout * surge * opacity
    if (env <= 0.004) continue

    let x2 = CX + s.dx * hd, y2 = CY + s.dy * hd
    const x1 = CX + s.dx * tl, y1 = CY + s.dy * tl

    let flare = 0
    if (mActive) {
      const d = Math.hypot(x2 - mx, y2 - my)
      if (d < RAD) {
        flare = Math.pow(1 - d / RAD, 1.6)
        const push = flare * -34
        const ux = (x2 - mx) / (d || 1), uy = (y2 - my) / (d || 1)
        x2 += ux * push; y2 += uy * push
        links.push(React.createElement('line', {
          key: 'k' + i, x1: mx, y1: my, x2, y2,
          stroke: head(clamp(flare * 0.5, 0, 0.55)), strokeWidth: 0.8,
        }))
      }
    }
    let ripple = 0
    for (let q = 0; q < ripples.length; q++) {
      const rp = ripples[q]
      const age = (clock - rp.t) / 1000
      if (age < 0 || age > 1.4) continue
      const rr = age * 1500
      const d = Math.abs(Math.hypot(x2 - rp.x, y2 - rp.y) - rr)
      if (d < 180) ripple = Math.max(ripple, (1 - d / 180) * (1 - age / 1.4))
    }

    const boost = 1 + flare * 2.4 + ripple * 2.6
    const bb = s.bright * env * (s.hot ? 1.6 : 1) * boost
    const lw = s.w * (s.hot ? 1.5 : 1)
    const gid = 'spr' + i
    grads.push(React.createElement('linearGradient', {
      key: gid, id: gid, gradientUnits: 'userSpaceOnUse', x1, y1, x2, y2,
    },
      React.createElement('stop', { offset: '0%', stopColor: line(1), stopOpacity: 0 }),
      React.createElement('stop', { offset: '55%', stopColor: line(1), stopOpacity: 0.16 }),
      React.createElement('stop', { offset: '100%', stopColor: head(1), stopOpacity: 1 })
    ))
    nodes.push(React.createElement('line', {
      key: 'l' + i, x1, y1, x2, y2,
      stroke: 'url(#' + gid + ')',
      strokeOpacity: clamp(bb * 0.85, 0, 1).toFixed(3),
      strokeWidth: lw, strokeLinecap: 'round',
    }))
    const hr = (1.1 + s.w * 0.9) * (0.55 + p * 0.95) * (s.hot ? 1.55 : 1) * (1 + flare * 0.9 + ripple)
    if (s.hot || bb > 0.35) {
      nodes.push(React.createElement('circle', {
        key: 'g' + i, cx: x2, cy: y2, r: hr * 3.2, fill: head(clamp(bb * 0.1, 0, 0.2)),
      }))
    }
    nodes.push(React.createElement('circle', {
      key: 'h' + i, cx: x2, cy: y2, r: hr, fill: head(clamp(bb * 1.05, 0, 1)),
    }))
  }

  const scale = 1 + 0.11 * (1 - Math.cos(loopPh)) / 2
  const rot = 1.4 * Math.sin(loopPh)
  const coreO = 0.1 + 0.16 * (1 - Math.cos(loopPh)) / 2
  const px = mActive ? (mx - CX) * 0.03 : 0
  const py = mActive ? (my - H * 0.5) * 0.02 : 0

  return React.createElement('g', {
    transform: 'translate(' + (CX + px).toFixed(2) + ' ' + (CY + py).toFixed(2) + ') rotate(' + rot.toFixed(3) + ') scale(' + scale.toFixed(4) + ') translate(' + -CX + ' ' + -CY + ')',
  },
    React.createElement('ellipse', { cx: CX, cy: CY, rx: 1000, ry: 720, fill: 'url(#spCoreGlow)', opacity: coreO.toFixed(3) }),
    React.createElement('defs', null, grads),
    nodes,
    links,
    mActive && cursorGlow ? React.createElement('circle', { cx: mx, cy: my, r: 60, fill: 'url(#spCursorGlow)' }) : null
  )
}

export default function SechPointField(props) {
  const accent = props.accent || '#00baeb'
  const densityMap = { sparse: 170, full: 270, dense: 400 }
  const [r, g, b] = hexRgb(accent)
  const svgRef = React.useRef(null)
  const mouse = React.useRef({ x: CX, y: H * 0.5, active: false })
  const target = React.useRef({ x: CX, y: H * 0.5 })
  const ripples = React.useRef([])
  const start = React.useRef(null)
  const [now, setNow] = React.useState(0)
  const reduce = typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false

  React.useEffect(() => {
    const clock = () => (window.performance || Date).now()
    if (start.current == null) start.current = clock()
    if (reduce) { setNow(clock()); return undefined }
    const id = setInterval(() => {
      const m = mouse.current, tg = target.current
      m.x += (tg.x - m.x) * 0.12
      m.y += (tg.y - m.y) * 0.12
      setNow(clock())
    }, 1000 / 30)
    return () => clearInterval(id)
  }, [reduce])

  React.useEffect(() => {
    if (props.mouseFx === false || props.mouseFx === 'false' || reduce) return undefined
    const toLocal = (e) => {
      const el = svgRef.current
      if (!el) return null
      const bx = el.getBoundingClientRect()
      if (!bx.width || !bx.height) return null
      return { x: ((e.clientX - bx.left) / bx.width) * W, y: ((e.clientY - bx.top) / bx.height) * H }
    }
    const move = (e) => { const p = toLocal(e); if (!p) return; target.current = p; mouse.current.active = true }
    const leave = () => { mouse.current.active = false }
    const down = (e) => {
      const p = toLocal(e); if (!p) return
      const t = (window.performance || Date).now()
      ripples.current = ripples.current.filter((x) => t - x.t < 1500).slice(-4)
      ripples.current.push({ x: p.x, y: p.y, t })
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerleave', leave)
    }
  }, [props.mouseFx, reduce])

  const elapsed = start.current == null ? 0 : (now - start.current) / 1000
  const T = ((elapsed % LOOP) + LOOP) % LOOP

  return React.createElement('svg', {
    ref: svgRef,
    width: '100%', height: '100%',
    viewBox: '0 0 ' + W + ' ' + H,
    preserveAspectRatio: 'xMidYMid slice',
    'aria-hidden': 'true',
    style: { position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%' },
  },
    React.createElement('defs', null,
      React.createElement('radialGradient', { id: 'spCoreGlow' },
        React.createElement('stop', { offset: '0%', stopColor: 'rgb(' + r + ',' + g + ',' + b + ')', stopOpacity: 0.5 }),
        React.createElement('stop', { offset: '55%', stopColor: 'rgb(' + Math.round(r * 0.5) + ',' + Math.round(g * 0.6) + ',' + Math.round(b * 0.6) + ')', stopOpacity: 0.12 }),
        React.createElement('stop', { offset: '100%', stopColor: '#000', stopOpacity: 0 })
      ),
      React.createElement('radialGradient', { id: 'spCursorGlow' },
        React.createElement('stop', { offset: '0%', stopColor: 'rgb(' + r + ',' + g + ',' + b + ')', stopOpacity: 0.28 }),
        React.createElement('stop', { offset: '100%', stopColor: 'rgb(' + r + ',' + g + ',' + b + ')', stopOpacity: 0 })
      )
    ),
    React.createElement(Field, {
      T, accent,
      opacity: props.opacity == null ? 0.75 : Number(props.opacity),
      speed: props.speed == null ? 0.5 : Number(props.speed),
      fan: props.fan == null ? 140 : Number(props.fan),
      count: densityMap[props.density] || 270,
      cursorRadius: props.cursorRadius == null ? 250 : Number(props.cursorRadius),
      cursorGlow: props.cursorGlow === true || props.cursorGlow === 'true',
      mouseFx: props.mouseFx !== false && props.mouseFx !== 'false' && !reduce,
      mouse: mouse.current,
      ripples: ripples.current,
      clock: now,
    })
  )
}
