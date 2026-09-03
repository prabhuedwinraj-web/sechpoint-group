import React, { useRef, useState } from 'react'
import { st, ACCENT, BUSINESSES } from './ui.js'
import { Header, Footer } from './Shared.jsx'

const FIELDS = [
  { name: 'name', id: 'f-name', label: 'Full name', msg: 'Please enter your full name.' },
  { name: 'email', id: 'f-email', label: 'Business email', msg: 'Please enter your business email address.' },
  { name: 'company', id: 'f-company', label: 'Company', msg: 'Please enter your company name.' },
  { name: 'country', id: 'f-country', label: 'Country', msg: 'Please select your country.' },
  { name: 'biz', id: 'f-biz', label: 'SechPoint business', msg: 'Please select a SechPoint business.' },
  { name: 'nature', id: 'f-nature', label: 'Nature of enquiry', msg: 'Please select the nature of your enquiry.' },
  { name: 'message', id: 'f-message', label: 'Message', msg: 'Please tell us about your requirements.' },
  { name: 'consent', id: 'f-consent', label: 'Consent', msg: 'Please confirm you agree to be contacted about your enquiry.' },
]

const CODES = ['+971', '+966', '+974', '+965', '+968', '+973', '+20', '+212', '+234', '+254', '+233', '+27', '+255', '+251', '+91', '+92', '+880', '+65', '+60', '+62', '+63', '+66', '+84', '+81', '+82', '+86', '+44', '+33', '+49', '+1']

const COUNTRIES = ['Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belgium', 'Benin', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Chad', 'Chile', 'China', 'Colombia', 'Costa Rica', "Côte d'Ivoire", 'Croatia', 'Cyprus', 'Czechia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Egypt', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Guinea', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Republic of the Congo', 'Romania', 'Rwanda', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland', 'Tanzania', 'Thailand', 'Togo', 'Tunisia', 'Türkiye', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uzbekistan', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']

const DIRECTORY = [
  { name: 'SechPoint DPI', desc: 'Digital public infrastructure, digital identity and government platforms', url: 'https://dpi.sechpoint.com' },
  { name: 'SechPoint Distribution', desc: 'Cybersecurity distribution, vendor and channel partnerships across Africa', url: 'https://distribution.sechpoint.com' },
  { name: 'SechPoint SSIT', desc: 'Cybersecurity, managed services and systems integration', url: 'https://ssit-theta.vercel.app/' },
  { name: 'SechPoint ICT', desc: 'ICT infrastructure, cloud, networking and enterprise technology', url: 'https://ict.sechpoint.com' },
]

const inputStyle = st('background:#0d0e11;border:1px solid rgba(255,255,255,0.14);border-radius:9px;color:#f2f5fa;font-size:15.5px;padding:12px 14px;min-height:46px')
const labelStyle = st('font-size:14.5px;font-weight:600;color:rgba(242,245,250,0.9)')
const errStyle = st('margin:0;color:#F2A0A0;font-size:13.5px')

function validate(name, value, checked) {
  const f = FIELDS.find((x) => x.name === name)
  if (!f) return null
  if (name === 'consent') return checked ? null : f.msg
  const v = (value || '').trim()
  if (!v) return f.msg
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Please enter a valid email address, e.g. name@company.com.'
  return null
}

export default function Contact() {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [summary, setSummary] = useState([])
  const successRef = useRef(null)
  const summaryRef = useRef(null)
  const submitting = status === 'submitting'

  const blurField = (e) => {
    const err = validate(e.target.name, e.target.value, e.target.checked)
    setErrors((s) => ({ ...s, [e.target.name]: err }))
  }
  const resetForm = () => { setStatus('idle'); setErrors({}); setSummary([]) }
  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    if (form.elements.website_url && form.elements.website_url.value) return // honeypot
    const errs = {}; const sum = []
    FIELDS.forEach((f) => {
      const el = form.elements[f.name]
      const err = el ? validate(f.name, el.value, el.checked) : null
      if (err) { errs[f.name] = err; sum.push({ label: f.label + ': ' + err, href: '#' + f.id }) }
    })
    if (sum.length) {
      setErrors(errs); setSummary(sum); setStatus('idle')
      requestAnimationFrame(() => summaryRef.current && summaryRef.current.focus())
      return
    }
    if (!navigator.onLine) { setStatus('offline'); setErrors({}); setSummary([]); return }
    setStatus('submitting'); setErrors({}); setSummary([])
    setTimeout(() => {
      setStatus('success')
      requestAnimationFrame(() => successRef.current && successRef.current.focus())
    }, 1400)
  }

  const inv = (n) => (errors[n] ? 'true' : 'false')
  const Err = ({ n }) => (errors[n] ? <p style={errStyle}>⚠ {errors[n]}</p> : null)

  return (
    <>
      <Header page="contact" />
      <main id="main" style={st('display:block')}>
        {/* CONTACT HERO */}
        <section style={st('position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,0.07)')}>
          <div aria-hidden="true" style={st('position:absolute;inset:0;background:radial-gradient(900px 400px at 30% -10%, rgba(0,186,235,0.09), transparent 65%);pointer-events:none')}></div>
          <div style={st('position:relative;max-width:1180px;margin:0 auto;padding:clamp(56px,7vw,96px) 24px')}>
            <p style={st(`margin:0 0 18px;color:${ACCENT};font:500 12px IBM Plex Mono,monospace;letter-spacing:0.2em;text-transform:uppercase;animation:spFadeUp 0.5s ease both`)}>Contact Us</p>
            <h1 style={st('margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:clamp(30px,4.4vw,52px);line-height:1.1;letter-spacing:-0.02em;max-width:18ch;text-wrap:balance;animation:spFadeUp 0.55s ease 0.05s both')}>Connect With the Right SechPoint Business</h1>
            <p style={st('margin:24px 0 0;color:rgba(242,245,250,0.62);font-size:clamp(16px,1.5vw,19px);line-height:1.65;max-width:600px;text-wrap:pretty;animation:spFadeUp 0.6s ease 0.12s both')}>Tell us about your requirements and we will connect you with the appropriate SechPoint business and regional team.</p>
          </div>
        </section>

        {/* FORM + DIRECTORY */}
        <section id="form" style={st('border-bottom:1px solid rgba(255,255,255,0.07)')}>
          <div style={st('max-width:1180px;margin:0 auto;padding:clamp(56px,7vw,90px) 24px;display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 440px), 1fr));gap:clamp(40px,5vw,72px);align-items:start')}>
            <div>
              <h2 style={st('margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:clamp(24px,2.8vw,34px);letter-spacing:-0.015em')}>How Can We Help?</h2>
              <p style={st('margin:18px 0 0;color:rgba(242,245,250,0.62);font-size:16.5px;line-height:1.65;text-wrap:pretty')}>Contact SechPoint Group to discuss technology requirements, partnership opportunities, corporate enquiries or regional collaboration. Select the relevant business below so your enquiry reaches the right team.</p>

              {status === 'success' && (
                <div role="status" tabIndex="-1" ref={successRef} style={st('margin-top:32px;border:1px solid rgba(0,186,235,0.5);background:rgba(0,186,235,0.08);border-radius:14px;padding:28px;animation:spFadeUp 0.3s ease')}>
                  <p style={st(`margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:18px;color:${ACCENT}`)}>✓ Enquiry received</p>
                  <p style={st('margin:12px 0 0;color:rgba(242,245,250,0.9);font-size:16px;line-height:1.6')}>Thank you for contacting SechPoint. Your enquiry has been received and will be directed to the appropriate team.</p>
                  <button onClick={resetForm} className="sp-btn-outline" style={st('margin-top:18px;background:none;border:1px solid rgba(255,255,255,0.2);color:#f2f5fa;font-size:14px;padding:9px 16px;border-radius:8px;cursor:pointer;font-family:inherit')}>Send another enquiry</button>
                </div>
              )}
              {status === 'offline' && (
                <div role="alert" style={st('margin-top:24px;border:1px solid rgba(255,180,80,0.5);background:rgba(255,180,80,0.07);border-radius:12px;padding:16px 20px;color:#F0C987;font-size:15px')}>⚠ You appear to be offline. Your entries are preserved — reconnect and submit again.</div>
              )}
              {status === 'serverError' && (
                <div role="alert" style={st('margin-top:24px;border:1px solid rgba(255,110,110,0.5);background:rgba(255,110,110,0.07);border-radius:12px;padding:16px 20px;color:#F2A0A0;font-size:15px')}>⚠ Something went wrong on our side. Your entries are preserved — please try again.</div>
              )}
              {summary.length > 0 && status !== 'success' && (
                <div role="alert" tabIndex="-1" ref={summaryRef} style={st('margin-top:24px;border:1px solid rgba(255,110,110,0.5);background:rgba(255,110,110,0.06);border-radius:12px;padding:18px 22px')}>
                  <p style={st('margin:0;font-weight:600;font-size:15.5px;color:#F2A0A0')}>⚠ Please correct the following before submitting:</p>
                  <ul style={st('margin:10px 0 0;padding-left:20px;color:#E8B8B8;font-size:14.5px;display:flex;flex-direction:column;gap:4px')}>
                    {summary.map((it) => <li key={it.href}><a href={it.href} style={st('color:#F2A0A0;text-decoration:underline')}>{it.label}</a></li>)}
                  </ul>
                </div>
              )}

              {status !== 'success' && (
                <form onSubmit={onSubmit} noValidate style={st('margin-top:32px;display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 260px), 1fr));gap:20px 18px')}>
                  <div style={st('display:flex;flex-direction:column;gap:7px')}>
                    <label htmlFor="f-name" style={labelStyle}>Full name <span style={{ color: ACCENT }} aria-hidden="true">*</span></label>
                    <input id="f-name" name="name" type="text" autoComplete="name" required onBlur={blurField} aria-invalid={inv('name')} style={inputStyle} />
                    <Err n="name" />
                  </div>
                  <div style={st('display:flex;flex-direction:column;gap:7px')}>
                    <label htmlFor="f-email" style={labelStyle}>Business email <span style={{ color: ACCENT }} aria-hidden="true">*</span></label>
                    <input id="f-email" name="email" type="email" autoComplete="email" required onBlur={blurField} aria-invalid={inv('email')} style={inputStyle} />
                    <Err n="email" />
                  </div>
                  <div style={st('display:flex;flex-direction:column;gap:7px')}>
                    <label htmlFor="f-phone" style={labelStyle}>Phone number <span style={st('color:rgba(242,245,250,0.42);font-weight:400')}>(optional)</span></label>
                    <div style={st('display:flex;gap:8px')}>
                      <select id="f-code" name="code" aria-label="Country code" style={st('background:#0d0e11;border:1px solid rgba(255,255,255,0.14);border-radius:9px;color:#f2f5fa;font-size:15px;padding:12px 8px;min-height:46px;width:108px;flex:none')}>
                        {CODES.map((c) => <option key={c} value={c}>{c}</option>)}
                        <option value="other">Other</option>
                      </select>
                      <input id="f-phone" name="phone" type="tel" autoComplete="tel-national" inputMode="tel" style={st('background:#0d0e11;border:1px solid rgba(255,255,255,0.14);border-radius:9px;color:#f2f5fa;font-size:15.5px;padding:12px 14px;min-height:46px;flex:1;min-width:0')} />
                    </div>
                  </div>
                  <div style={st('display:flex;flex-direction:column;gap:7px')}>
                    <label htmlFor="f-company" style={labelStyle}>Company <span style={{ color: ACCENT }} aria-hidden="true">*</span></label>
                    <input id="f-company" name="company" type="text" autoComplete="organization" required onBlur={blurField} aria-invalid={inv('company')} style={inputStyle} />
                    <Err n="company" />
                  </div>
                  <div style={st('display:flex;flex-direction:column;gap:7px')}>
                    <label htmlFor="f-country" style={labelStyle}>Country <span style={{ color: ACCENT }} aria-hidden="true">*</span></label>
                    <input id="f-country" name="country" type="text" list="country-list" autoComplete="country-name" required onBlur={blurField} aria-invalid={inv('country')} aria-describedby="country-hint" style={inputStyle} />
                    <datalist id="country-list">{COUNTRIES.map((c) => <option key={c} value={c}></option>)}</datalist>
                    <p id="country-hint" style={st('margin:0;color:rgba(242,245,250,0.42);font-size:13px')}>Start typing to search</p>
                    <Err n="country" />
                  </div>
                  <div style={st('display:flex;flex-direction:column;gap:7px')}>
                    <label htmlFor="f-title" style={labelStyle}>Job title <span style={st('color:rgba(242,245,250,0.42);font-weight:400')}>(optional)</span></label>
                    <input id="f-title" name="jobtitle" type="text" autoComplete="organization-title" style={inputStyle} />
                  </div>
                  <div style={st('display:flex;flex-direction:column;gap:7px')}>
                    <label htmlFor="f-biz" style={labelStyle}>SechPoint business <span style={{ color: ACCENT }} aria-hidden="true">*</span></label>
                    <select id="f-biz" name="biz" required onBlur={blurField} aria-invalid={inv('biz')} aria-describedby="biz-hint" style={inputStyle} defaultValue="">
                      <option value="">Select a business…</option>
                      <option>SechPoint DPI</option><option>SechPoint Distribution</option><option>SechPoint SSIT</option><option>SechPoint ICT</option>
                      <option>Group or corporate enquiry</option><option>Technology partnership</option><option>Careers</option><option>Other</option>
                    </select>
                    <p id="biz-hint" style={st('margin:0;color:rgba(242,245,250,0.42);font-size:13px')}>Routes your enquiry to the right team</p>
                    <Err n="biz" />
                  </div>
                  <div style={st('display:flex;flex-direction:column;gap:7px')}>
                    <label htmlFor="f-nature" style={labelStyle}>Nature of enquiry <span style={{ color: ACCENT }} aria-hidden="true">*</span></label>
                    <select id="f-nature" name="nature" required onBlur={blurField} aria-invalid={inv('nature')} style={inputStyle} defaultValue="">
                      <option value="">Select enquiry type…</option>
                      <option>Sales or solution enquiry</option><option>Vendor or technology partnership</option><option>Channel partnership</option>
                      <option>Government or enterprise project</option><option>Professional or managed services</option><option>Media or corporate enquiry</option>
                      <option>Careers</option><option>Other</option>
                    </select>
                    <Err n="nature" />
                  </div>
                  <div style={st('grid-column:1 / -1;display:flex;flex-direction:column;gap:7px')}>
                    <label htmlFor="f-message" style={labelStyle}>Message <span style={{ color: ACCENT }} aria-hidden="true">*</span></label>
                    <textarea id="f-message" name="message" rows={5} required onBlur={blurField} aria-invalid={inv('message')} style={st('background:#0d0e11;border:1px solid rgba(255,255,255,0.14);border-radius:9px;color:#f2f5fa;font-size:15.5px;padding:12px 14px;min-height:130px;resize:vertical')}></textarea>
                    <Err n="message" />
                  </div>
                  <input type="text" name="website_url" tabIndex="-1" autoComplete="off" aria-hidden="true" style={st('position:absolute;left:-9999px;height:0;width:0;border:0;padding:0')} />
                  <div style={st('grid-column:1 / -1;display:flex;flex-direction:column;gap:7px')}>
                    <label style={st('display:flex;gap:12px;align-items:flex-start;cursor:pointer;color:rgba(242,245,250,0.66);font-size:14.5px;line-height:1.55')}>
                      <input id="f-consent" name="consent" type="checkbox" onBlur={blurField} aria-invalid={inv('consent')} style={st('width:19px;height:19px;margin:2px 0 0;accent-color:#00baeb;flex:none')} />
                      <span>By submitting this form, you agree that SechPoint may contact you regarding your enquiry. <span style={{ color: ACCENT }} aria-hidden="true">*</span></span>
                    </label>
                    {errors.consent && <p style={st('margin:0 0 0 31px;color:#F2A0A0;font-size:13.5px')}>⚠ {errors.consent}</p>}
                  </div>
                  <div style={st('grid-column:1 / -1;display:flex;flex-wrap:wrap;align-items:center;gap:16px')}>
                    <button type="submit" disabled={submitting} className="sp-btn-accent" style={st(`background:${ACCENT};color:#050506;font-weight:600;font-size:16px;padding:14px 30px;border-radius:10px;border:none;cursor:pointer;font-family:inherit;min-height:48px;display:inline-flex;align-items:center;gap:10px;opacity:${submitting ? 0.7 : 1}`)}>
                      {submitting && <span aria-hidden="true" style={st('width:15px;height:15px;border:2px solid rgba(0,0,0,0.35);border-top-color:#050506;border-radius:50%;display:inline-block;animation:spSpin 0.7s linear infinite')}></span>}
                      {submitting ? 'Submitting…' : 'Submit Enquiry'}
                    </button>
                    <p style={st('margin:0;color:rgba(242,245,250,0.42);font-size:13px')}><span style={{ color: ACCENT }}>*</span> Required field</p>
                  </div>
                </form>
              )}
            </div>

            {/* DIRECTORY */}
            <aside aria-label="Choose the right business">
              <h2 style={st('margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:clamp(22px,2.4vw,28px);letter-spacing:-0.015em')}>Choose the Right Business</h2>
              <div style={st('margin-top:24px;display:flex;flex-direction:column;gap:12px')}>
                {DIRECTORY.map((d) => (
                  <div key={d.name} className="sp-cardline" style={st('border:1px solid rgba(255,255,255,0.1);border-radius:14px;background:#0d0e11;padding:20px 22px;display:flex;flex-direction:column;gap:8px')}>
                    <h3 style={st('margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:16.5px')}>{d.name}</h3>
                    <p style={st('margin:0;color:rgba(242,245,250,0.5);font-size:14.5px;line-height:1.55')}>{d.desc}</p>
                    <a href={d.url} target="_blank" rel="noopener" className="sp-link" style={st(`align-self:flex-start;display:inline-flex;align-items:center;gap:7px;color:${ACCENT};font-weight:600;font-size:14.5px;padding:6px 0;min-height:32px`)}>Visit {d.name} <span aria-hidden="true">↗</span></a>
                  </div>
                ))}
              </div>
              <div style={st('margin-top:28px;border:1px solid rgba(255,255,255,0.1);border-radius:14px;background:rgba(255,255,255,0.02);padding:22px 24px')}>
                <h3 style={st('margin:0;font-family:Funnel Display,sans-serif;font-weight:600;font-size:15px;letter-spacing:0.04em;color:rgba(242,245,250,0.9)')}>SechPoint Group</h3>
                <dl style={st('margin:14px 0 0;display:grid;grid-template-columns:auto 1fr;gap:8px 18px;font-size:14.5px')}>
                  <dt style={st('color:rgba(242,245,250,0.42)')}>Location</dt><dd style={st('margin:0;color:rgba(242,245,250,0.9)')}>Dubai, United Arab Emirates</dd>
                  <dt style={st('color:rgba(242,245,250,0.42)')}>Enquiries</dt><dd style={st('margin:0;color:rgba(242,245,250,0.42);font-family:IBM Plex Mono,monospace;font-size:13px')}>[ Approved group email required ]</dd>
                  <dt style={st('color:rgba(242,245,250,0.42)')}>Website</dt><dd style={st('margin:0')}><a className="sp-link" href="/" style={{ color: ACCENT }}>www.sechpoint.com</a></dd>
                </dl>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
