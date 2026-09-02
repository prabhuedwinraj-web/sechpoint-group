import React from 'react'
import { st, ACCENT } from './ui.js'
import { Link } from './router.jsx'
import { Header, Footer } from './Shared.jsx'
import SechPointField from './hero-field.jsx'

const BIZ = [
  { n: '01', name: 'SechPoint DPI', sub: 'Digital Public Infrastructure', url: 'https://dpi.sechpoint.com',
    desc: 'SechPoint DPI delivers secure and scalable digital infrastructure that supports national transformation, trusted digital identity, connected government services and citizen-focused platforms.',
    items: ['Digital identity and trust services', 'Digital government platforms', 'Data exchange and interoperability', 'Digital payments enablement', 'Citizen and public-service platforms'] },
  { n: '02', name: 'SechPoint Distribution', sub: "Cybersecurity Distribution for Africa's Digital Growth", url: 'https://distribution.sechpoint.com',
    desc: 'SechPoint Distribution connects global cybersecurity and technology vendors with partners and customers across Africa through market development, channel enablement and local technical expertise.',
    items: ['Cybersecurity and technology distribution', 'Vendor market development', 'Channel recruitment and enablement', 'Pre-sales and technical support', 'Training and professional services'] },
  { n: '03', name: 'SechPoint SSIT', sub: 'Cybersecurity and Systems Integration', url: 'https://ssit.sechpoint.com',
    desc: 'SechPoint SSIT helps organisations strengthen cyber resilience, modernise technology environments and integrate security, infrastructure and operational capabilities around business priorities.',
    items: ['Cyber defence and security operations', 'Identity and access security', 'Application and API security', 'Data, cloud and AI security', 'Managed security services', 'Systems integration and professional services'] },
  { n: '04', name: 'SechPoint ICT', sub: 'Integrated Technology and Infrastructure Solutions', url: 'https://ict.sechpoint.com',
    desc: 'SechPoint ICT delivers enterprise technology and infrastructure solutions that improve connectivity, collaboration, performance, scalability and business continuity.',
    items: ['IT infrastructure', 'Networking and connectivity', 'Cloud and data-centre solutions', 'Enterprise applications', 'Collaboration technologies', 'Managed ICT services'] },
]

const CAPS = [
  'Digital public infrastructure and digital identity',
  'Cybersecurity and cyber defence',
  'Identity and access security',
  'Data protection and privacy',
  'Application and API security',
  'Cloud and artificial-intelligence security',
  'Network and infrastructure security',
  'Systems integration',
  'Enterprise ICT infrastructure',
  'Technology distribution',
  'Professional and managed services',
]

const WHY = [
  'Four specialised businesses with clearly defined capabilities',
  'Regional presence across the Middle East, Africa and Asia',
  'Access to global technology ecosystems',
  'Business-led consulting and practical technical delivery',
  'Support across advisory, distribution, implementation and operations',
  'A clear route to the right specialist team',
]

const REGIONS = ['Middle East', 'Africa', 'Asia']
const eyebrow = st(`margin:0 0 14px;color:${ACCENT};font:500 12px IBM Plex Mono,monospace;letter-spacing:0.2em;text-transform:uppercase`)
const h2 = st('margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:clamp(26px,3.2vw,40px);line-height:1.15;letter-spacing:-0.015em')

export default function Home() {
  // Sibling business sites live on their own subdomains in production; in local
  // dev, point the SSIT card at the running SSIT app so the link works now.
  const isLocal = typeof window !== 'undefined' && /^(localhost|127\.|0\.0\.0\.0)/.test(window.location.hostname)
  const hrefFor = (b) => (b.name === 'SechPoint SSIT' && isLocal) ? 'http://localhost:5180/' : b.url
  return (
    <>
      <Header page="home" />
      <main id="main" style={st('display:block')}>
        <span id="top"></span>

        {/* HERO */}
        <section style={st('position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,0.07);background:#050506;min-height:min(88vh, 860px);display:flex;align-items:flex-end')}>
          <div aria-hidden="true" style={st('position:absolute;inset:0;overflow:hidden')}>
            <SechPointField accent="#00baeb" opacity={0.8} speed={0.5} fan={140} density="full" mouseFx cursorGlow={false} cursorRadius={250} />
          </div>
          <div aria-hidden="true" style={st('position:absolute;inset:0;background:linear-gradient(180deg, rgba(11,10,10,0.4) 0%, rgba(11,10,10,0) 34%, rgba(11,10,10,0.72) 74%, #050506 100%);pointer-events:none')}></div>
          <div aria-hidden="true" style={st('position:absolute;inset:0;background:linear-gradient(95deg, rgba(11,10,10,0.9) 0%, rgba(11,10,10,0.45) 44%, rgba(11,10,10,0) 80%);pointer-events:none')}></div>
          <div style={st('position:relative;width:100%;max-width:1180px;margin:0 auto;padding:clamp(180px,26vw,320px) 24px clamp(56px,7vw,88px)')}>
            <p style={st(`margin:0 0 18px;color:${ACCENT};font:500 12px IBM Plex Mono,monospace;letter-spacing:0.2em;text-transform:uppercase;animation:spFadeUp 0.5s ease both`)}>SechPoint Group</p>
            <h1 style={st('margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:clamp(34px,5.4vw,64px);line-height:1.08;letter-spacing:-0.02em;max-width:15ch;text-wrap:balance;animation:spFadeUp 0.55s ease 0.05s both')}>Powering Secure Digital Transformation</h1>
            <div style={st('max-width:640px;animation:spFadeUp 0.6s ease 0.12s both')}>
              <p style={st('margin:26px 0 0;color:rgba(242,245,250,0.62);font-size:clamp(16px,1.5vw,19px);line-height:1.65;text-wrap:pretty')}>SechPoint is a diversified technology group delivering digital public infrastructure, cybersecurity, technology distribution, systems integration and enterprise ICT solutions across the Middle East, Africa and Asia.</p>
              <p style={st('margin:16px 0 0;color:rgba(242,245,250,0.62);font-size:clamp(16px,1.5vw,19px);line-height:1.65;text-wrap:pretty')}>Through four specialised businesses, we help governments, enterprises, technology vendors and partners build secure, connected and future-ready digital environments.</p>
            </div>
            <div style={st('display:flex;flex-wrap:wrap;gap:14px;margin-top:36px;animation:spFadeUp 0.6s ease 0.18s both')}>
              <a href="#businesses" className="sp-btn-accent" style={st(`background:${ACCENT};color:#050506;font-weight:600;font-size:16px;padding:14px 26px;border-radius:10px;min-height:44px;display:inline-flex;align-items:center`)}>Explore Our Businesses</a>
              <Link to="/contact" className="sp-btn-outline" style={st('border:1px solid rgba(255,255,255,0.22);color:#f2f5fa;font-weight:600;font-size:16px;padding:14px 26px;border-radius:10px;min-height:44px;display:inline-flex;align-items:center')}>Contact SechPoint</Link>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={st('border-bottom:1px solid rgba(255,255,255,0.07)')}>
          <div style={st('max-width:1180px;margin:0 auto;padding:clamp(64px,8vw,110px) 24px;display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 460px), 1fr));gap:clamp(36px,5vw,80px);align-items:start')}>
            <div>
              <p style={eyebrow}>About SechPoint</p>
              <h2 style={{ ...h2, textWrap: 'balance' }}>One Group. Four Specialised Businesses.</h2>
              <p style={st('margin:24px 0 0;color:rgba(242,245,250,0.62);font-size:17px;line-height:1.7;text-wrap:pretty')}>Established in 2020, SechPoint brings together specialised technology businesses with a shared purpose: enabling secure, resilient and sustainable digital growth.</p>
              <p style={st('margin:16px 0 0;color:rgba(242,245,250,0.62);font-size:17px;line-height:1.7;text-wrap:pretty')}>Our Group combines digital public infrastructure, cybersecurity distribution, systems integration and enterprise ICT capabilities. This enables customers and partners to access the right expertise while benefiting from a wider regional technology ecosystem.</p>
              <p style={st('margin:16px 0 0;color:rgba(242,245,250,0.62);font-size:17px;line-height:1.7;text-wrap:pretty')}>With operations across the Middle East, Africa and Asia, SechPoint combines global technologies, regional understanding and local execution to support complex transformation requirements.</p>
              <a href="#about" className="sp-link" style={st(`display:inline-flex;align-items:center;gap:8px;margin-top:28px;color:${ACCENT};font-weight:600;font-size:16px`)}>Discover SechPoint Group <span aria-hidden="true">→</span></a>
            </div>
            <div aria-hidden="true" style={st('display:grid;grid-template-columns:1fr 1fr;gap:12px;position:relative')}>
              <div style={st(`grid-column:1 / -1;border:1px solid rgba(0,186,235,0.4);border-radius:14px;padding:20px 22px;background:rgba(0,186,235,0.06);display:flex;align-items:center;gap:12px`)}>
                <span style={st(`width:22px;height:22px;border:1.5px solid ${ACCENT};display:grid;place-items:center;border-radius:5px;flex:none`)}><span style={st(`width:7px;height:7px;background:${ACCENT};border-radius:2px`)}></span></span>
                <span style={st('font-family:Funnel Display,sans-serif;font-weight:600;font-size:15px')}>SechPoint Group</span>
                <span style={st('margin-left:auto;color:rgba(242,245,250,0.42);font-size:13px')}>Est. 2020 · Dubai, UAE</span>
              </div>
              <div style={st('grid-column:1 / -1;display:flex;justify-content:center')}><span style={st('width:1px;height:26px;background:linear-gradient(180deg, rgba(0,186,235,0.6), rgba(255,255,255,0.1))')}></span></div>
              {[['DPI', 'Digital public infrastructure'], ['Distribution', 'Cybersecurity distribution'], ['SSIT', 'Security & systems integration'], ['ICT', 'Enterprise technology & infrastructure']].map(([t, d]) => (
                <div key={t} style={st('border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:18px 20px;background:rgba(255,255,255,0.02)')}>
                  <span style={st('font-family:Funnel Display,sans-serif;font-weight:600;font-size:14px;display:block')}>{t}</span>
                  <span style={st('color:rgba(242,245,250,0.5);font-size:13px;line-height:1.5')}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESSES */}
        <section id="businesses" style={st('background:#0b0c0f;border-bottom:1px solid rgba(255,255,255,0.07)')}>
          <div style={st('max-width:1180px;margin:0 auto;padding:clamp(64px,8vw,110px) 24px')}>
            <p style={eyebrow}>Our Businesses</p>
            <h2 style={h2}>Our Business Entities</h2>
            <p style={st('margin:20px 0 0;color:rgba(242,245,250,0.62);font-size:17px;line-height:1.65;max-width:620px;text-wrap:pretty')}>SechPoint Group operates through four specialised businesses. Each entity has a clear focus, dedicated capabilities and its own website.</p>
            <div style={st('display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 440px), 1fr));gap:20px;margin-top:44px')}>
              {BIZ.map((b) => (
                <a key={b.n} href={hrefFor(b)} aria-label={'Visit ' + b.name} className="sp-card" style={st('border:1px solid rgba(255,255,255,0.1);border-radius:16px;background:#0d0e11;padding:clamp(24px,3vw,34px);display:flex;flex-direction:column;gap:16px;text-decoration:none;color:inherit;cursor:pointer')}>
                  <div style={st('display:flex;align-items:center;gap:10px')}>
                    <span aria-hidden="true" style={st(`width:8px;height:8px;border-radius:50%;background:${ACCENT}`)}></span>
                    <span style={st('color:rgba(242,245,250,0.42);font-size:12px;letter-spacing:0.14em;text-transform:uppercase')}>{b.n}</span>
                  </div>
                  <div>
                    <h3 style={st('margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:22px;color:#f2f5fa')}>{b.name}</h3>
                    <p style={st(`margin:6px 0 0;color:${ACCENT};font-size:14px;font-weight:600;letter-spacing:0.02em`)}>{b.sub}</p>
                  </div>
                  <p style={st('margin:0;color:rgba(242,245,250,0.62);font-size:15.5px;line-height:1.65;text-wrap:pretty')}>{b.desc}</p>
                  <ul style={st('margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px;color:rgba(242,245,250,0.66);font-size:14.5px')}>
                    {b.items.map((it) => (
                      <li key={it} style={st('display:flex;gap:10px;align-items:baseline')}><span aria-hidden="true" style={st(`color:${ACCENT};font-size:11px`)}>◆</span>{it}</li>
                    ))}
                  </ul>
                  <span className="sp-ghost" style={st(`margin-top:auto;align-self:flex-start;display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(0,186,235,0.55);color:${ACCENT};font-weight:600;font-size:15px;padding:11px 20px;border-radius:9px;min-height:44px`)}>Visit {b.name} <span aria-hidden="true">↗</span></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITY LANDSCAPE */}
        <section style={st('border-bottom:1px solid rgba(255,255,255,0.07)')}>
          <div style={st('max-width:1180px;margin:0 auto;padding:clamp(64px,8vw,110px) 24px')}>
            <p style={eyebrow}>Group Technology Landscape</p>
            <h2 style={{ ...h2, maxWidth: '20ch', textWrap: 'balance' }}>Technology Built Around Business Priorities</h2>
            <p style={st('margin:20px 0 0;color:rgba(242,245,250,0.62);font-size:17px;line-height:1.65;max-width:620px;text-wrap:pretty')}>Across its specialised businesses, SechPoint supports transformation across the following capability areas:</p>
            <ul style={st('margin:40px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fill, minmax(min(100%, 280px), 1fr));gap:1px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.08);border-radius:14px;overflow:hidden')}>
              {CAPS.map((c) => (
                <li key={c} className="sp-cap" style={st('background:#0b0c0f;padding:20px 22px;font-size:15.5px;color:rgba(242,245,250,0.9);display:flex;gap:12px;align-items:baseline')}><span aria-hidden="true" style={st(`color:${ACCENT};font-size:10px`)}>●</span>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY SECHPOINT */}
        <section style={st('background:#0b0c0f;border-bottom:1px solid rgba(255,255,255,0.07)')}>
          <div style={st('max-width:1180px;margin:0 auto;padding:clamp(64px,8vw,110px) 24px')}>
            <p style={eyebrow}>Why SechPoint</p>
            <h2 style={{ ...h2, maxWidth: '22ch', textWrap: 'balance' }}>Global Technology. Regional Expertise. Local Execution.</h2>
            <ul style={st('margin:44px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fill, minmax(min(100%, 330px), 1fr));gap:14px 40px')}>
              {WHY.map((w, i) => (
                <li key={w} style={st('display:flex;gap:14px;align-items:baseline;color:rgba(242,245,250,0.9);font-size:16.5px;line-height:1.6;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07)')}>
                  <span aria-hidden="true" style={st(`color:${ACCENT};font-family:Funnel Display,sans-serif;font-weight:600;font-size:13px`)}>{'0' + (i + 1)}</span>{w}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GLOBAL PRESENCE */}
        <section id="global" style={st('border-bottom:1px solid rgba(255,255,255,0.07)')}>
          <div style={st('max-width:1180px;margin:0 auto;padding:clamp(64px,8vw,110px) 24px;display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 420px), 1fr));gap:clamp(36px,5vw,80px);align-items:center')}>
            <div>
              <p style={eyebrow}>Global Presence</p>
              <h2 style={{ ...h2, textWrap: 'balance' }}>Supporting Digital Growth Across High-Potential Markets</h2>
              <p style={st('margin:24px 0 0;color:rgba(242,245,250,0.62);font-size:17px;line-height:1.7;text-wrap:pretty')}>SechPoint supports customers and partners across the Middle East, Africa and Asia. Our regional presence helps us understand local priorities and deliver solutions aligned with business, operational and regulatory requirements.</p>
            </div>
            <div role="img" aria-label="SechPoint operates across three regions: the Middle East, Africa and Asia" style={st('display:flex;flex-direction:column;gap:12px')}>
              {REGIONS.map((r) => (
                <div key={r} className="sp-cardline" style={st('border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:24px 26px;background:rgba(255,255,255,0.02);display:flex;align-items:center;gap:16px')}>
                  <span aria-hidden="true" style={st(`width:10px;height:10px;border-radius:50%;background:${ACCENT};flex:none`)}></span>
                  <span style={st('font-family:Funnel Display,sans-serif;font-weight:600;font-size:18px')}>{r}</span>
                  <span style={st('margin-left:auto;color:rgba(242,245,250,0.42);font-size:13px;letter-spacing:0.1em')}>REGION</span>
                </div>
              ))}
              <p style={st('margin:6px 0 0;color:rgba(242,245,250,0.34);font-size:12.5px;font-family:IBM Plex Mono,monospace')}>[ Country-level presence pending validation — regions only ]</p>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section>
          <div style={st('max-width:1180px;margin:0 auto;padding:clamp(64px,8vw,100px) 24px')}>
            <div style={st('border:1px solid rgba(0,186,235,0.35);border-radius:20px;background:linear-gradient(140deg, rgba(0,186,235,0.10), rgba(255,255,255,0.02) 55%);padding:clamp(36px,5vw,64px);text-align:center')}>
              <h2 style={{ ...h2, margin: '0 auto', fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.2, maxWidth: '22ch', textWrap: 'balance' }}>Connect With the Right SechPoint Business</h2>
              <p style={st('margin:18px auto 0;color:rgba(242,245,250,0.62);font-size:17px;line-height:1.65;max-width:560px;text-wrap:pretty')}>Whether you require digital public infrastructure, cybersecurity distribution, systems integration or enterprise ICT solutions, we will connect you with the appropriate SechPoint team.</p>
              <div style={st('display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:32px')}>
                <a href="#businesses" className="sp-btn-accent" style={st(`background:${ACCENT};color:#050506;font-weight:600;font-size:16px;padding:14px 26px;border-radius:10px;min-height:44px;display:inline-flex;align-items:center`)}>Explore Our Businesses</a>
                <Link to="/contact" className="sp-btn-outline" style={st('border:1px solid rgba(255,255,255,0.22);color:#f2f5fa;font-weight:600;font-size:16px;padding:14px 26px;border-radius:10px;min-height:44px;display:inline-flex;align-items:center')}>Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
