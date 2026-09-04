import React from 'react'
import { st, ACCENT } from './ui.js'
import { Link } from './router.jsx'
import { Header, Footer } from './Shared.jsx'
import SechPointField from './hero-field.jsx'
import Globe from './Globe.jsx'

const ECO = [
  { n: '01', short: 'DPI', tag: 'Digital public infrastructure', url: 'https://dpi.sechpoint.com' },
  { n: '02', short: 'Distribution', tag: 'Cybersecurity distribution', url: 'https://distribution.sechpoint.com' },
  { n: '03', short: 'SSIT', tag: 'Security & systems integration', url: 'https://ssit-theta.vercel.app/' },
  { n: '04', short: 'ICT', tag: 'Enterprise technology & infrastructure', url: 'https://ict.sechpoint.com' },
]

const BIZ = [
  { n: '01', name: 'SechPoint DPI', sub: 'Digital Public Infrastructure', url: 'https://dpi.sechpoint.com',
    desc: 'SechPoint DPI delivers secure and scalable digital infrastructure that supports national transformation, trusted digital identity, connected government services and citizen-focused platforms.',
    items: ['Digital identity and trust services', 'Digital government platforms', 'Data exchange and interoperability', 'Digital payments enablement', 'Citizen and public-service platforms'] },
  { n: '02', name: 'SechPoint Distribution', sub: "Cybersecurity Distribution for Africa's Digital Growth", url: 'https://distribution.sechpoint.com',
    desc: 'SechPoint Distribution connects global cybersecurity and technology vendors with partners and customers across Africa through market development, channel enablement and local technical expertise.',
    items: ['Cybersecurity and technology distribution', 'Vendor market development', 'Channel recruitment and enablement', 'Pre-sales and technical support', 'Training and professional services'] },
  { n: '03', name: 'SechPoint SSIT', sub: 'Cybersecurity and Systems Integration', url: 'https://ssit-theta.vercel.app/',
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
            <div className="sp-actions" style={st('display:flex;flex-wrap:wrap;gap:14px;margin-top:36px;animation:spFadeUp 0.6s ease 0.18s both')}>
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
            <div style={st('position:relative')}>
              <div style={st('position:relative;border:1px solid rgba(255,255,255,0.09);border-radius:20px;background:#0b0c0f;padding:clamp(18px,2.2vw,24px);overflow:hidden')}>
                <span style={st('position:absolute;top:-30%;right:-10%;width:70%;height:120%;background:radial-gradient(50% 50% at 50% 50%,rgba(0,125,220,0.14),rgba(5,5,6,0) 70%);pointer-events:none')}></span>
                <div style={st('position:relative;display:flex;align-items:center;gap:12px;border:1px solid rgba(0,186,235,0.4);border-radius:14px;padding:16px 18px;background:rgba(0,186,235,0.06)')}>
                  <span style={st(`width:24px;height:24px;border:1.5px solid ${ACCENT};display:grid;place-items:center;border-radius:6px;flex:none`)}><span style={st(`width:8px;height:8px;background:${ACCENT};border-radius:2px`)}></span></span>
                  <span style={st('font-family:Funnel Display,sans-serif;font-weight:600;font-size:15px')}>SechPoint Group</span>
                  <span style={st('margin-left:auto;font:500 11px IBM Plex Mono,monospace;letter-spacing:0.06em;color:rgba(242,245,250,0.45)')}>EST. 2020 · DUBAI</span>
                </div>
                <div style={st('position:relative;display:flex;justify-content:center;margin:2px 0')}><span style={st('width:1px;height:22px;background:linear-gradient(180deg,rgba(0,186,235,0.6),rgba(255,255,255,0.08))')}></span></div>
                <div style={st('position:relative;display:grid;grid-template-columns:1fr 1fr;gap:12px')}>
                  {ECO.map((e) => (
                    <a key={e.short} href={e.url} target="_blank" rel="noopener" aria-label={'Visit SechPoint ' + e.short} className="sp-card" style={st('position:relative;overflow:hidden;border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:16px 16px 15px;background:rgba(255,255,255,0.02);display:flex;flex-direction:column;gap:7px;text-decoration:none;color:inherit')}>
                      <span style={st('position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#007ddc,#01f1f8)')}></span>
                      <span style={st('display:flex;align-items:center;justify-content:space-between')}>
                        <span aria-hidden="true" style={st(`width:7px;height:7px;border-radius:50%;background:${ACCENT}`)}></span>
                        <span style={st('font:500 10.5px IBM Plex Mono,monospace;letter-spacing:0.14em;color:rgba(242,245,250,0.4)')}>{e.n}</span>
                      </span>
                      <span style={st('font-family:Funnel Display,sans-serif;font-weight:600;font-size:15px;color:#f2f5fa')}>{e.short}</span>
                      <span style={st('color:rgba(242,245,250,0.5);font-size:12.5px;line-height:1.45')}>{e.tag}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESSES */}
        <section id="businesses" style={st('background:#eef1f6;border-bottom:1px solid rgba(5,15,35,0.08)')}>
          <div style={st('max-width:1180px;margin:0 auto;padding:clamp(64px,8vw,110px) 24px')}>
            <p style={st('margin:0 0 14px;color:#0072c6;font:500 12px IBM Plex Mono,monospace;letter-spacing:0.2em;text-transform:uppercase')}>Our Businesses</p>
            <h2 style={{ ...h2, color: '#0a1424' }}>Our Business Entities</h2>
            <p style={st('margin:20px 0 0;color:rgba(10,20,36,0.66);font-size:17px;line-height:1.65;max-width:620px;text-wrap:pretty')}>SechPoint Group operates through four specialised businesses. Each entity has a clear focus, dedicated capabilities and its own website.</p>
            <div style={st('display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 440px), 1fr));gap:20px;margin-top:44px')}>
              {BIZ.map((b) => (
                <a key={b.n} href={b.url} aria-label={'Visit ' + b.name} className="sp-card-light" style={st('border:1px solid rgba(10,25,50,0.1);border-radius:16px;background:#ffffff;padding:clamp(24px,3vw,34px);display:flex;flex-direction:column;gap:16px;text-decoration:none;color:inherit;cursor:pointer;box-shadow:0 1px 2px rgba(10,25,50,0.04)')}>
                  <div style={st('display:flex;align-items:center;gap:10px')}>
                    <span aria-hidden="true" style={st('width:8px;height:8px;border-radius:50%;background:#0072c6')}></span>
                    <span style={st('color:rgba(10,20,36,0.5);font-size:12px;letter-spacing:0.14em;text-transform:uppercase')}>{b.n}</span>
                  </div>
                  <div>
                    <h3 style={st('margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:22px;color:#0a1424')}>{b.name}</h3>
                    <p style={st('margin:6px 0 0;color:#0072c6;font-size:14px;font-weight:600;letter-spacing:0.02em')}>{b.sub}</p>
                  </div>
                  <p style={st('margin:0;color:rgba(10,20,36,0.68);font-size:15.5px;line-height:1.65;text-wrap:pretty')}>{b.desc}</p>
                  <ul style={st('margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px;color:rgba(10,20,36,0.72);font-size:14.5px')}>
                    {b.items.map((it) => (
                      <li key={it} style={st('display:flex;gap:10px;align-items:baseline')}><span aria-hidden="true" style={st('color:#0072c6;font-size:11px')}>◆</span>{it}</li>
                    ))}
                  </ul>
                  <span className="sp-ghost-light" style={st('margin-top:auto;align-self:flex-start;display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(0,114,198,0.5);color:#0072c6;font-weight:600;font-size:15px;padding:11px 20px;border-radius:9px;min-height:44px')}>Visit {b.name} <span aria-hidden="true">↗</span></span>
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
          <div style={st('max-width:1180px;margin:0 auto;padding:clamp(64px,8vw,110px) 24px;display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 360px), 1fr));gap:clamp(36px,5vw,72px);align-items:stretch')}>
            <div>
              <p style={eyebrow}>Why SechPoint</p>
              <h2 style={{ ...h2, maxWidth: '16ch', textWrap: 'balance' }}>Global Technology. Regional Expertise. Local Execution.</h2>
              <ul style={st('margin:36px 0 0;padding:0;list-style:none;display:flex;flex-direction:column')}>
                {WHY.map((w, i) => (
                  <li key={w} style={st('display:flex;gap:14px;align-items:baseline;color:rgba(242,245,250,0.9);font-size:16.5px;line-height:1.6;padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.07)')}>
                    <span aria-hidden="true" style={st(`color:${ACCENT};font-family:Funnel Display,sans-serif;font-weight:600;font-size:13px`)}>{'0' + (i + 1)}</span>{w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-media" style={st('position:relative;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.1)')}>
              <img src="/assets/why-sechpoint.jpg" alt="Software engineer analysing code across multiple displays" width="1254" height="836" loading="lazy" style={st('position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;display:block')} />
            </div>
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
            <div style={st('display:flex;flex-direction:column;gap:12px')}>
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
            <div className="sp-cta-globe" style={st('position:relative;overflow:hidden;border:1px solid rgba(0,186,235,0.35);border-radius:24px;background:radial-gradient(120% 120% at 85% 0%, rgba(0,186,235,0.14), rgba(5,6,9,0) 55%), linear-gradient(160deg, rgba(0,125,220,0.08), rgba(255,255,255,0.015) 60%);display:grid;grid-template-columns:1.05fr 0.95fr;align-items:center;gap:clamp(24px,4vw,56px);padding:clamp(32px,5vw,64px)')}>
              <div className="sp-cta-copy">
                <p style={st(`margin:0 0 16px;color:${ACCENT};font:500 12px IBM Plex Mono,monospace;letter-spacing:0.2em;text-transform:uppercase`)}>One Group, Four Specialists</p>
                <h2 style={{ ...h2, margin: 0, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.14, maxWidth: '18ch', textWrap: 'balance' }}>Connect With the Right SechPoint Business</h2>
                <p style={st('margin:20px 0 0;color:rgba(242,245,250,0.62);font-size:17px;line-height:1.65;max-width:520px;text-wrap:pretty')}>Whether you require digital public infrastructure, cybersecurity distribution, systems integration or enterprise ICT solutions, we will connect you with the appropriate SechPoint team.</p>
                <div className="sp-actions" style={st('display:flex;flex-wrap:wrap;gap:14px;margin-top:32px')}>
                  <a href="#businesses" className="sp-btn-accent" style={st(`background:${ACCENT};color:#050506;font-weight:600;font-size:16px;padding:14px 26px;border-radius:10px;min-height:44px;display:inline-flex;align-items:center`)}>Explore Our Businesses</a>
                  <Link to="/contact" className="sp-btn-outline" style={st('border:1px solid rgba(255,255,255,0.22);color:#f2f5fa;font-weight:600;font-size:16px;padding:14px 26px;border-radius:10px;min-height:44px;display:inline-flex;align-items:center')}>Contact Us</Link>
                </div>
              </div>
              <div className="sp-cta-visual" style={st('position:relative;width:100%;aspect-ratio:1 / 1;min-height:280px')}>
                <Globe />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
