// Parse an inline CSS string into a React style object (camelCased keys),
// so the design's inline styles can be ported almost verbatim.
export function st(cssText) {
  const out = {}
  String(cssText).split(';').forEach((decl) => {
    const i = decl.indexOf(':')
    if (i === -1) return
    const prop = decl.slice(0, i).trim()
    const val = decl.slice(i + 1).trim()
    if (!prop) return
    out[prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val
  })
  return out
}

export const ACCENT = 'var(--sp-accent, #00baeb)'
export const LOGO = 'assets/sechpoint-logo.svg'

export const BUSINESSES = [
  { name: 'SechPoint DPI', tag: 'Digital public infrastructure', url: 'https://dpi.sechpoint.com' },
  { name: 'SechPoint Distribution', tag: 'Cybersecurity distribution for Africa', url: 'https://distribution.sechpoint.com' },
  { name: 'SechPoint SSIT', tag: 'Cybersecurity & systems integration', url: 'https://ssit-theta.vercel.app/' },
  { name: 'SechPoint ICT', tag: 'Enterprise technology & infrastructure', url: 'https://ict.sechpoint.com' },
]
