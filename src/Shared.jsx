import React, { useEffect, useState } from 'react'
import { st, ACCENT, LOGO, BUSINESSES } from './ui.js'
import { Link } from './router.jsx'

// Marked slot for a real image to be dropped in later.
export function ImagePlaceholder({ ratio = '16 / 10', label = 'Image placeholder', note, style, light = false }) {
  const stroke = light ? '#0072c6' : '#00baeb'
  return (
    <div
      role="img"
      aria-label={label + (note ? ' — ' + note : '')}
      style={{
        position: 'relative', width: '100%', aspectRatio: ratio,
        border: light ? '1px dashed rgba(0,114,198,0.35)' : '1px dashed rgba(0,186,235,0.4)', borderRadius: '16px',
        background: light
          ? 'repeating-linear-gradient(135deg, rgba(0,114,198,0.05) 0 10px, transparent 10px 20px)'
          : 'repeating-linear-gradient(135deg, rgba(0,186,235,0.05) 0 10px, transparent 10px 20px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '10px', textAlign: 'center', padding: '24px', overflow: 'hidden', ...style,
      }}
    >
      <span style={{ position: 'absolute', inset: 0, background: light ? 'radial-gradient(60% 60% at 50% 40%, rgba(0,114,198,0.09), transparent 70%)' : 'radial-gradient(60% 60% at 50% 40%, rgba(0,125,220,0.12), transparent 70%)', pointerEvents: 'none' }} />
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative' }}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.6" />
        <path d="M21 16l-5-5-9 9" />
      </svg>
      <span style={st(`position:relative;font:500 12px IBM Plex Mono,monospace;letter-spacing:0.14em;text-transform:uppercase;color:${stroke}`)}>{label}</span>
      {note && <span style={st(`position:relative;font-size:12.5px;line-height:1.45;color:${light ? 'rgba(5,15,35,0.42)' : 'rgba(242,245,250,0.45)'};max-width:260px`)}>{note}</span>}
    </div>
  )
}

function Logo() {
  return (
    <Link to="/" aria-label="SechPoint Group home" style={st('display:flex;align-items:center;gap:10px;color:#f2f5fa')}>
      <img src={LOGO} alt="SechPoint" width="118" height="29" style={st('height:26px;width:auto;display:block')} />
      <span style={st("font-family:Funnel Display,sans-serif;font-weight:400;font-size:13px;letter-spacing:0.16em;color:rgba(242,245,250,0.42)")}>GROUP</span>
    </Link>
  )
}

function NavItem({ item }) {
  const style = st('color:rgba(242,245,250,0.66);font-size:15px;padding:9px 13px;border-radius:8px')
  return item.cross
    ? <Link className="sp-navlink" to={item.href} style={style}>{item.label}</Link>
    : <a className="sp-navlink" href={item.href} style={style}>{item.label}</a>
}

export function Header({ page = 'home' }) {
  const isHome = page === 'home'
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 920 : false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [bizOpen, setBizOpen] = useState(false)

  useEffect(() => {
    const on = () => { const m = window.innerWidth < 920; setIsMobile(m); if (!m) { setMenuOpen(false); setBizOpen(false) } }
    on()
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])
  useEffect(() => {
    const onDoc = (e) => { if (!e.target.closest('[data-biz]')) setBizOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') { setBizOpen(false); setMenuOpen(false) } }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey) }
  }, [])

  const links = isHome
    ? [{ label: 'Home', href: '#top' }, { label: 'About SechPoint', href: '#about' }, { label: 'Global Presence', href: '#global' }]
    : [{ label: 'Home', href: '/', cross: true }, { label: 'About SechPoint', href: '/#about', cross: true }, { label: 'Global Presence', href: '/#global', cross: true }]
  const contactHref = isHome ? '/contact' : '#form'
  const ContactCta = ({ style, onClick }) => (
    isHome
      ? <Link className="sp-btn-accent" to={contactHref} style={style} onClick={onClick}>Contact Us</Link>
      : <a className="sp-btn-accent" href={contactHref} style={style} onClick={onClick}>Contact Us</a>
  )

  return (
    <header style={st('position:sticky;top:0;z-index:100;background:rgba(19,18,17,0.86);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,0.07)')}>
      <div style={st('max-width:1180px;margin:0 auto;padding:0 24px;height:68px;display:flex;align-items:center;justify-content:space-between;gap:24px')}>
        <Logo />
        {!isMobile && (
          <nav aria-label="Main" style={st('display:flex;align-items:center;gap:6px')}>
            {links.map((item) => <NavItem key={item.label} item={item} />)}
            <div style={st('position:relative')} data-biz>
              <button onClick={(e) => { e.stopPropagation(); setBizOpen((v) => !v) }} aria-expanded={bizOpen} aria-haspopup="true" className="sp-navlink" style={st('display:flex;align-items:center;gap:7px;color:rgba(242,245,250,0.66);font-size:15px;padding:9px 13px;border-radius:8px;background:none;border:none;cursor:pointer;font-family:inherit')}>
                Our Businesses <span aria-hidden="true" style={st(`font-size:10px;transform:${bizOpen ? 'rotate(180deg)' : 'rotate(0deg)'};transition:transform 0.2s;display:inline-block`)}>▾</span>
              </button>
              {bizOpen && (
                <div role="menu" style={st('position:absolute;top:calc(100% + 10px);right:0;width:360px;background:#101114;border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:8px;box-shadow:0 20px 50px rgba(0,0,0,0.5);animation:spFadeUp 0.18s ease')}>
                  {BUSINESSES.map((b) => (
                    <a key={b.name} role="menuitem" href={b.url} target="_blank" rel="noopener" onClick={() => setBizOpen(false)} className="sp-menuitem" style={st('display:block;padding:12px 14px;border-radius:9px;color:#f2f5fa')}>
                      <span style={st('font-family:Funnel Display,sans-serif;font-weight:600;font-size:14px;display:block')}>{b.name}</span>
                      <span style={st('color:rgba(242,245,250,0.5);font-size:13px')}>{b.tag}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <ContactCta style={st(`margin-left:10px;background:${ACCENT};color:#050506;font-weight:600;font-size:15px;padding:10px 18px;border-radius:9px`)} />
          </nav>
        )}
        {isMobile && (
          <button onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label="Menu" style={st('background:none;border:1px solid rgba(255,255,255,0.15);border-radius:9px;color:#f2f5fa;padding:10px 14px;font-size:14px;cursor:pointer;font-family:inherit;min-height:44px')}>
            {menuOpen ? '✕ Close' : '☰ Menu'}
          </button>
        )}
      </div>
      {isMobile && menuOpen && (
        <nav aria-label="Mobile" style={st('background:#101114;border-bottom:1px solid rgba(255,255,255,0.08);padding:12px 20px 20px;display:flex;flex-direction:column;gap:4px;animation:spFadeUp 0.2s ease')}>
          {links.map((item) => (
            item.cross
              ? <Link key={item.label} className="sp-menuitem" to={item.href} onClick={() => setMenuOpen(false)} style={st('color:#f2f5fa;padding:13px 10px;border-radius:8px;font-size:16px')}>{item.label}</Link>
              : <a key={item.label} className="sp-menuitem" href={item.href} onClick={() => setMenuOpen(false)} style={st('color:#f2f5fa;padding:13px 10px;border-radius:8px;font-size:16px')}>{item.label}</a>
          ))}
          <div style={st('padding:13px 10px 4px;color:rgba(242,245,250,0.42);font-size:12px;letter-spacing:0.12em;text-transform:uppercase')}>Our Businesses</div>
          {BUSINESSES.map((b) => (
            <a key={b.name} href={b.url} target="_blank" rel="noopener" className="sp-menuitem" style={st('color:#f2f5fa;padding:11px 10px 11px 22px;border-radius:8px;font-size:15px')}>{b.name}</a>
          ))}
          <ContactCta onClick={() => setMenuOpen(false)} style={st(`margin-top:10px;background:${ACCENT};color:#050506;font-weight:600;font-size:16px;padding:13px;border-radius:10px;text-align:center`)} />
        </nav>
      )}
    </header>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={st('border-top:1px solid rgba(255,255,255,0.07);background:#08090b')}>
      <div style={st('max-width:1180px;margin:0 auto;padding:56px 24px 32px')}>
        <div style={st('display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 230px), 1fr));gap:40px')}>
          <div style={st('max-width:300px')}>
            <div style={st('display:flex;align-items:center;gap:10px')}>
              <img src={LOGO} alt="SechPoint" width="110" height="27" style={st('height:24px;width:auto;display:block')} />
              <span style={st("font-family:Funnel Display,sans-serif;font-weight:400;font-size:12px;letter-spacing:0.16em;color:rgba(242,245,250,0.42)")}>GROUP</span>
            </div>
            <p style={st('margin:16px 0 0;color:rgba(242,245,250,0.42);font-size:14px;line-height:1.6')}>A diversified technology group powering secure digital transformation across the Middle East, Africa and Asia.</p>
            <p style={st('margin:14px 0 0;color:rgba(242,245,250,0.3);font-size:12.5px;font-family:IBM Plex Mono,monospace')}>[ Social links pending approval ]</p>
          </div>
          <nav aria-label="Our businesses" style={st('display:flex;flex-direction:column;gap:10px')}>
            <span style={st('color:rgba(242,245,250,0.42);font-size:12px;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px')}>Our Businesses</span>
            {BUSINESSES.map((b) => (
              <a key={b.name} href={b.url} target="_blank" rel="noopener" className="sp-link" style={st('color:rgba(242,245,250,0.66);font-size:14.5px')}>{b.name}</a>
            ))}
          </nav>
          <nav aria-label="Site" style={st('display:flex;flex-direction:column;gap:10px')}>
            <span style={st('color:rgba(242,245,250,0.42);font-size:12px;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px')}>Group</span>
            <Link className="sp-link" to="/" style={st('color:rgba(242,245,250,0.66);font-size:14.5px')}>Home</Link>
            <Link className="sp-link" to="/#about" style={st('color:rgba(242,245,250,0.66);font-size:14.5px')}>About SechPoint</Link>
            <Link className="sp-link" to="/#global" style={st('color:rgba(242,245,250,0.66);font-size:14.5px')}>Global Presence</Link>
            <Link className="sp-link" to="/contact" style={st('color:rgba(242,245,250,0.66);font-size:14.5px')}>Contact Us</Link>
          </nav>
          <div style={st('display:flex;flex-direction:column;gap:10px')}>
            <span style={st('color:rgba(242,245,250,0.42);font-size:12px;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px')}>Legal</span>
            <span style={st('color:rgba(242,245,250,0.3);font-size:14px')}>Privacy — pending approval</span>
            <span style={st('color:rgba(242,245,250,0.3);font-size:14px')}>Cookies — pending approval</span>
            <span style={st('color:rgba(242,245,250,0.3);font-size:14px')}>Legal — pending approval</span>
          </div>
        </div>
        <div style={st('margin-top:48px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06);display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;color:rgba(242,245,250,0.3);font-size:13.5px')}>
          <span>© {year} SechPoint Group. All rights reserved.</span>
          <span>www.sechpoint.com · Dubai, United Arab Emirates</span>
        </div>
      </div>
    </footer>
  )
}
