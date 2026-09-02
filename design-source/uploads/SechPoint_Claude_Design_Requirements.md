# SechPoint Group Website — Claude Design Requirements

## 1. Project brief

Design a responsive corporate website for **SechPoint Group** using the approved content in this document. The site introduces the parent group, presents four specialised business entities with equal priority, and directs each visitor or enquiry to the correct business without confusion.

This requirement covers:

- Group homepage: `/`
- Contact page: `/contact/`
- Shared desktop, tablet, and mobile design system
- Navigation, enquiry routing, SEO, accessibility, and launch states

The deliverable should be a polished, implementation-ready website design/prototype. Do not rewrite, shorten, or invent approved content unless explicitly marked as a design label or placeholder.

## 2. Primary UX objective

The site must answer three questions quickly:

1. What is SechPoint Group?
2. Which of its four businesses is relevant to me?
3. Where should I go or whom should I contact next?

The four business entities are the central decision point. They must be easy to compare, equal in visual importance, and clearly linked to their respective subdomains.

## 3. Audience

- Government and public-sector decision-makers
- Enterprise technology and security leaders
- Technology vendors and channel partners
- Organisations seeking systems integration or managed services
- Media, corporate, careers, and general-enquiry visitors

The experience should feel credible to senior B2B and government audiences while remaining clear for visitors who do not know SechPoint’s organisational structure.

## 4. Brand and visual direction

### Desired character

- Premium, secure, modern, global, and technically credible
- Restrained enterprise-technology aesthetic
- Clear visual hierarchy with generous whitespace
- Structured grids and precise alignment
- Confident rather than aggressive
- Avoid visual clichés such as hooded hackers, glowing locks, excessive circuit patterns, or generic stock-photo handshakes

### Recommended design concept

Use a **connected group ecosystem** as the core visual idea: one parent group with four distinct specialist pathways. Express this through subtle lines, nodes, modular panels, layered grids, or controlled motion. The concept must support clarity and must not make one entity appear more important than the others.

### Brand constraints

The following are not approved in the source and must remain configurable:

- Group logo
- Colour palette
- Typefaces
- Final imagery
- Partner and vendor logos
- Social-media links

Use clearly named design tokens and temporary placeholders. Do not invent permanent brand assets or publish unapproved partner/vendor marks.

### Suggested temporary design tokens

These are design-system placeholders, not approved brand values:

- `color-bg-primary`
- `color-bg-secondary`
- `color-surface`
- `color-text-primary`
- `color-text-secondary`
- `color-border`
- `color-accent-group`
- `color-focus`
- `font-display`
- `font-body`
- `radius-card`
- `shadow-elevation-1`
- `space-section`
- `content-max-width`

The design must allow the final logo, colours, and fonts to be swapped without restructuring the pages.

## 5. Information architecture

### Main navigation

| Menu item | Behaviour |
| --- | --- |
| Home | Opens the SechPoint Group homepage |
| About SechPoint | Scrolls to the group overview section or opens a future About page |
| Our Businesses | Opens a clear dropdown listing all four entities |
| Global Presence | Scrolls to the regional-presence section |
| Contact Us | Opens `/contact/` |

### Business links

| Entity | Destination |
| --- | --- |
| SechPoint DPI | `https://dpi.sechpoint.com` |
| SechPoint Distribution | `https://distribution.sechpoint.com` |
| SechPoint SSIT | `https://ssit.sechpoint.com` |
| SechPoint ICT | `https://ict.sechpoint.com` |

External/subdomain transitions should be apparent but not alarming. Use consistent destination labels such as “Visit SechPoint DPI.”

### Header requirements

- Desktop: logo left, main navigation right, Contact Us as the primary header action
- Mobile: logo, accessible menu trigger, and an uncluttered full-screen or drawer menu
- Businesses dropdown must list all four entities with short descriptors if space permits
- Provide visible hover, focus, active, and open states
- Sticky behaviour is optional; if used, keep it compact and unobtrusive

### Footer requirements

- Group identity and short descriptor
- Links to the four entity subdomains
- Main navigation
- Contact link
- Placeholders for privacy, cookies, legal wording, and social links pending approval
- Copyright line with dynamic year
- Do not publish an unapproved email, address, telephone number, or social account

## 6. Homepage requirements

### Section 1 — Hero

**Eyebrow, optional:** SechPoint Group

**H1:** Powering Secure Digital Transformation

**Body copy:**

> SechPoint is a diversified technology group delivering digital public infrastructure, cybersecurity, technology distribution, systems integration and enterprise ICT solutions across the Middle East, Africa and Asia.
>
> Through four specialised businesses, we help governments, enterprises, technology vendors and partners build secure, connected and future-ready digital environments.

**Primary CTA:** Explore Our Businesses  
Behaviour: scroll to the business-entity grid.

**Secondary CTA:** Contact SechPoint  
Behaviour: open `/contact/`.

**Design requirements:**

- Communicate “one group, four specialist pathways” in the first viewport
- Keep the H1 and opening message dominant and readable
- Use a purposeful group-level visual, abstract system, or subtle motion—not imagery associated with only one entity
- Keep both CTAs visible without overcrowding the hero
- Ensure the mobile hero retains a clear CTA order

### Section 2 — About SechPoint

**H2:** One Group. Four Specialised Businesses.

**Copy:**

> Established in 2020, SechPoint brings together specialised technology businesses with a shared purpose: enabling secure, resilient and sustainable digital growth.
>
> Our Group combines digital public infrastructure, cybersecurity distribution, systems integration and enterprise ICT capabilities. This enables customers and partners to access the right expertise while benefiting from a wider regional technology ecosystem.
>
> With operations across the Middle East, Africa and Asia, SechPoint combines global technologies, regional understanding and local execution to support complex transformation requirements.

**CTA:** Discover SechPoint Group

**Behaviour note:** Until a dedicated About page is confirmed, use an anchored interaction or omit the CTA destination from production rather than linking to a dead page.

**Design requirements:**

- Use a clear group-overview composition rather than a dense text block
- A restrained diagram or four-part visual may support the story
- Do not turn this into a timeline unless additional approved milestones are supplied

### Section 3 — Our Business Entities

**H2:** Our Business Entities

**Introduction:**

> SechPoint Group operates through four specialised businesses. Each entity has a clear focus, dedicated capabilities and its own website.

#### Entity card 1 — SechPoint DPI

**Positioning line:** Digital Public Infrastructure

**Description:**

> SechPoint DPI delivers secure and scalable digital infrastructure that supports national transformation, trusted digital identity, connected government services and citizen-focused platforms.

**Capabilities:**

- Digital identity and trust services
- Digital government platforms
- Data exchange and interoperability
- Digital payments enablement
- Citizen and public-service platforms

**Button:** Visit SechPoint DPI  
**Link:** `https://dpi.sechpoint.com`

#### Entity card 2 — SechPoint Distribution

**Positioning line:** Cybersecurity Distribution for Africa’s Digital Growth

**Description:**

> SechPoint Distribution connects global cybersecurity and technology vendors with partners and customers across Africa through market development, channel enablement and local technical expertise.

**Capabilities:**

- Cybersecurity and technology distribution
- Vendor market development
- Channel recruitment and enablement
- Pre-sales and technical support
- Training and professional services

**Button:** Visit SechPoint Distribution  
**Link:** `https://distribution.sechpoint.com`

#### Entity card 3 — SechPoint SSIT

**Positioning line:** Cybersecurity and Systems Integration

**Description:**

> SechPoint SSIT helps organisations strengthen cyber resilience, modernise technology environments and integrate security, infrastructure and operational capabilities around business priorities.

**Capabilities:**

- Cyber defence and security operations
- Identity and access security
- Application and API security
- Data, cloud and AI security
- Managed security services
- Systems integration and professional services

**Button:** Visit SechPoint SSIT  
**Link:** `https://ssit.sechpoint.com`

#### Entity card 4 — SechPoint ICT

**Positioning line:** Integrated Technology and Infrastructure Solutions

**Description:**

> SechPoint ICT delivers enterprise technology and infrastructure solutions that improve connectivity, collaboration, performance, scalability and business continuity.

**Capabilities:**

- IT infrastructure
- Networking and connectivity
- Cloud and data-centre solutions
- Enterprise applications
- Collaboration technologies
- Managed ICT services

**Button:** Visit SechPoint ICT  
**Link:** `https://ict.sechpoint.com`

**Entity-card layout requirements:**

- Desktop: equal-priority two-by-two grid
- Tablet: two columns where space allows; otherwise one column
- Mobile: single column
- Every card must include entity name, positioning line, description, capability highlights, and one direct CTA
- Use the same card dimensions, hierarchy, CTA prominence, and visual weight for all entities
- Allow natural content height; do not truncate critical copy
- Capability lists should remain scannable and accessible
- Cards may have subtle entity identifiers, but a colour system must not imply ranking
- Entire-card click behaviour is optional; the explicit CTA must always remain available
- Use correct semantic heading levels and avoid nested interactive controls

### Section 4 — Group technology landscape

**H2:** Technology Built Around Business Priorities

**Introduction:**

> Across its specialised businesses, SechPoint supports transformation across the following capability areas:

**Capabilities:**

- Digital public infrastructure and digital identity
- Cybersecurity and cyber defence
- Identity and access security
- Data protection and privacy
- Application and API security
- Cloud and artificial-intelligence security
- Network and infrastructure security
- Systems integration
- Enterprise ICT infrastructure
- Technology distribution
- Professional and managed services

**Design requirements:**

- Present as a structured capability matrix, grouped list, or responsive cluster
- Preserve legibility and avoid an arbitrary icon for every item
- Do not imply that every business provides every capability
- Consider hover/focus cross-references only if the mapping to entities is later confirmed

### Section 5 — Why SechPoint

**H2:** Global Technology. Regional Expertise. Local Execution.

**Points:**

- Four specialised businesses with clearly defined capabilities
- Regional presence across the Middle East, Africa and Asia
- Access to global technology ecosystems
- Business-led consulting and practical technical delivery
- Support across advisory, distribution, implementation and operations
- A clear route to the right specialist team

**Design requirements:**

- Make this a concise proof/benefit section
- Use a maximum of two visual levels: heading plus points
- Avoid unsupported statistics, client counts, awards, certifications, or partner logos

### Section 6 — Global presence

**H2:** Supporting Digital Growth Across High-Potential Markets

**Copy:**

> SechPoint supports customers and partners across the Middle East, Africa and Asia. Our regional presence helps us understand local priorities and deliver solutions aligned with business, operational and regulatory requirements.

**Critical content constraint:**

All country names, office addresses, map markers, and expansion statements must be validated before publication. Until approval, use only the three approved regions: **Middle East, Africa, and Asia**.

**Design requirements:**

- Prefer a region-level visual or abstract map
- Do not add country-level markers without validated data
- Provide an accessible text equivalent for any map-based presentation

### Section 7 — Closing CTA

**H2:** Connect With the Right SechPoint Business

**Copy:**

> Whether you require digital public infrastructure, cybersecurity distribution, systems integration or enterprise ICT solutions, we will connect you with the appropriate SechPoint team.

**Primary CTA:** Explore Our Businesses  
Behaviour: scroll to the entity grid.

**Secondary CTA:** Contact Us  
Behaviour: open `/contact/`.

**Design requirements:**

- Use a strong but compact closing panel
- Keep the action hierarchy consistent with the hero
- Do not introduce a third competing CTA

## 7. Contact page requirements

### Section 1 — Contact hero

**H1:** Connect With the Right SechPoint Business

**Copy:**

> Tell us about your requirements and we will connect you with the appropriate SechPoint business and regional team.

### Section 2 — Opening content

> Contact SechPoint Group to discuss technology requirements, partnership opportunities, corporate enquiries or regional collaboration. Select the relevant business below so your enquiry reaches the right team.

### Section 3 — Enquiry form

**H2:** How Can We Help?

#### Form fields

| Field | Type | Requirement |
| --- | --- | --- |
| Full name | Text | Required |
| Business email | Email | Required; validate email format |
| Phone number | Telephone | Include country-code selector |
| Company | Text | Required |
| Country | Searchable select | Required |
| Job title | Text | Optional |
| SechPoint business | Select | Required |
| Nature of enquiry | Select | Required |
| Message | Textarea | Required |
| Consent | Checkbox | Required |

Do not use placeholder text as the only label. Clearly mark required and optional fields.

#### SechPoint business options

- SechPoint DPI
- SechPoint Distribution
- SechPoint SSIT
- SechPoint ICT
- Group or corporate enquiry
- Technology partnership
- Careers
- Other

#### Nature of enquiry options

- Sales or solution enquiry
- Vendor or technology partnership
- Channel partnership
- Government or enterprise project
- Professional or managed services
- Media or corporate enquiry
- Careers
- Other

#### Form wording

**Consent:** By submitting this form, you agree that SechPoint may contact you regarding your enquiry.

**Submit button:** Submit Enquiry

**Success message:** Thank you for contacting SechPoint. Your enquiry has been received and will be directed to the appropriate team.

#### Form UX requirements

- Use a one-column form on mobile
- Desktop may use two columns for short related fields, but Message and Consent should span the full width
- Use persistent labels, useful helper text, and clear required indicators
- Validate on blur and on submit without clearing entered data
- Display errors next to the relevant field and provide an error summary after failed submission
- Move focus to the error summary or success confirmation as appropriate
- Preserve entered data after recoverable server errors
- Disable duplicate submissions while processing and show a visible loading state
- Provide success, validation-error, server-error, and offline states
- Do not rely on colour alone for status or errors
- Country and phone controls must support keyboard and screen-reader use
- Include spam protection that does not create unnecessary user friction
- Do not expose routing email addresses in client-side code

#### Routing requirements

Route submissions according to the selected SechPoint business. Do not send every enquiry to one unmonitored mailbox. Final recipient addresses must be approved and tested before launch.

Define routing as configurable server-side data. Include safe handling for Group, Technology partnership, Careers, Other, and routing failures. Log delivery status without storing more personal data than necessary.

### Section 4 — Choose the right business

**H2:** Choose the Right Business

| Business | Contact for | Website |
| --- | --- | --- |
| SechPoint DPI | Digital public infrastructure, digital identity and government platforms | `https://dpi.sechpoint.com` |
| SechPoint Distribution | Cybersecurity distribution, vendor and channel partnerships across Africa | `https://distribution.sechpoint.com` |
| SechPoint SSIT | Cybersecurity, managed services and systems integration | `https://ssit.sechpoint.com` |
| SechPoint ICT | ICT infrastructure, cloud, networking and enterprise technology | `https://ict.sechpoint.com` |

**Design requirements:**

- On desktop, use a clear directory or compact cards
- On mobile, convert the table into stacked accessible records rather than forcing horizontal scrolling
- Keep business names and destination actions prominent

### Section 5 — Group contact details

**Organisation:** SechPoint Group  
**Location:** Dubai, United Arab Emirates  
**General enquiries:** `[APPROVED GROUP EMAIL REQUIRED]`  
**Website:** `www.sechpoint.com`

Do not invent a street address, phone number, or email address.

## 8. Responsive behaviour

Design at minimum for the following ranges:

- Mobile: 320–767 px
- Tablet: 768–1023 px
- Desktop: 1024 px and above
- Large desktop: constrain readable content width rather than stretching indefinitely

Requirements:

- No horizontal page scrolling at 320 px
- Body text remains comfortably readable without zoom
- Touch targets should be at least 44 × 44 CSS px where practical
- Entity cards change from 2 × 2 to one column cleanly
- Navigation collapses before items wrap
- Tables become stacked records when needed
- CTA pairs stack on narrow screens with the primary action first
- Decorative visuals must not push key content below the first mobile viewport unnecessarily

## 9. Component and state inventory

Create reusable components for:

- Header
- Desktop navigation
- Mobile navigation
- Businesses dropdown
- Hero
- Section heading/intro
- Primary and secondary buttons
- Business entity card
- Capability list/matrix
- Benefit point
- Region/global-presence visual
- Closing CTA panel
- Contact form controls
- Searchable country select
- Telephone input with country code
- Checkbox
- Inline validation message
- Form error summary
- Loading, success, error, and offline notices
- Business directory card/row
- Footer

For every interactive component, design default, hover, focus-visible, active/pressed, disabled, loading where relevant, error where relevant, and selected/open states.

## 10. Motion and interaction

- Keep motion subtle and purposeful
- Suggested uses: hero ecosystem reveal, gentle connector movement, card hover elevation, dropdown transitions, and section entrance transitions
- Respect `prefers-reduced-motion`
- Avoid constant background animation, parallax that harms readability, and effects that suggest network activity or live data when none exists
- Animations must not delay access to navigation, content, or form controls

## 11. Accessibility requirements

Target **WCAG 2.2 AA**.

- One unique H1 per page with logical H2/H3 order
- Semantic landmarks: header, nav, main, sections, and footer
- Keyboard access for navigation, dropdowns, subdomain links, form controls, and dialogs/drawers
- Clearly visible focus indicators
- Minimum AA colour contrast for text and controls
- Descriptive link text; avoid “Learn more” without context
- Alternative text for meaningful images; empty alt text for decorative images
- Accessible names and states for mobile menu and dropdown triggers
- Skip-to-content link
- Form labels, instructions, required states, errors, and success updates announced correctly
- Do not encode entity meaning by colour alone
- Maintain usability at 200% zoom and with text spacing overrides

## 12. SEO and metadata

### Homepage

- URL: `https://www.sechpoint.com/`
- Title: `SechPoint Group | Digital Infrastructure, Cybersecurity & ICT`
- Meta description: `Explore SechPoint Group and its specialised businesses in digital public infrastructure, cybersecurity distribution, systems integration and enterprise ICT.`
- Primary keyword: `SechPoint Group`
- Secondary topics: digital public infrastructure; cybersecurity distribution Africa; systems integration; enterprise ICT solutions
- H1: `Powering Secure Digital Transformation`

### Contact page

- URL: `https://www.sechpoint.com/contact/`
- Title: `Contact SechPoint Group`
- Meta description: `Contact SechPoint Group for digital public infrastructure, cybersecurity distribution, systems integration, enterprise ICT and partnership enquiries.`
- Primary keyword: `Contact SechPoint Group`
- H1: `Connect With the Right SechPoint Business`

### Technical SEO

- Add canonical URLs
- Add Open Graph metadata and approved social-sharing images
- Implement appropriate `Organization`, `WebSite`, `ContactPage`, and `BreadcrumbList` structured data
- Create and submit an XML sitemap
- Use descriptive internal and external link text
- Ensure the parent website does not duplicate detailed entity content
- Route detailed service searches to the most relevant entity subdomain
- Keep visible page copy and structured data consistent

## 13. Content governance and domain rules

`www.sechpoint.com` must contain only SechPoint Group content. Each entity subdomain must contain only its assigned business content.

Before launch:

- Correct any existing domain-mapping errors
- Test every navigation, CTA, footer, and business-directory link
- Confirm no entity-specific service page is accidentally hosted on the parent domain
- Confirm canonical URLs and sitemap entries match the final domain structure

## 14. Performance and technical expectations

- Optimise for Core Web Vitals
- Use responsive images with explicit dimensions
- Prefer SVG for approved logos and interface illustrations
- Lazy-load below-the-fold media
- Avoid autoplay video unless essential and explicitly approved
- Keep animation and third-party scripts lightweight
- Prevent layout shift from imagery, web fonts, cookie controls, and form feedback
- Use progressive enhancement for navigation and form interactions
- Provide sensible no-JavaScript fallbacks where feasible

## 15. Privacy, security, and legal requirements

- Privacy, cookies, and legal wording require approval before publication
- Do not collect unnecessary personal data
- Do not expose form-routing addresses or secrets in front-end code
- Use secure server-side validation in addition to client-side validation
- Escape/sanitise submitted data and protect the form against abuse
- Define retention, consent evidence, and privacy-notice links with the legal owner before launch
- Do not preselect the consent checkbox
- Do not add marketing consent unless approved copy and purpose are supplied

## 16. Content that must not be invented

- Country-level presence beyond Middle East, Africa, and Asia
- Office addresses other than the approved high-level location “Dubai, United Arab Emirates”
- Telephone numbers
- Group enquiry email
- Certifications, awards, statistics, client names, testimonials, or case studies
- Partner/vendor relationships or logos
- Social-media accounts
- Legal, privacy, or cookie wording
- Detailed histories or milestones beyond “Established in 2020”

Use explicit placeholders where these items affect layout.

## 17. Items requiring approval before publication

- Approved Group logo, colours, and fonts
- Group email and form-routing addresses
- Office addresses and telephone numbers
- Regional presence statements
- Partner and vendor logos
- Privacy, cookies, and legal wording
- Social-media links
- Final imagery and social-sharing images

## 18. Claude output requirements

Produce:

1. A concise visual concept statement
2. Desktop and mobile designs for the homepage
3. Desktop and mobile designs for the contact page
4. A reusable component system with variants and interaction states
5. Responsive behaviour notes
6. Form validation, submission, success, and error states
7. Accessibility annotations for navigation, cards, directory, and form
8. A design-token sheet with temporary values clearly marked as replaceable
9. Developer handoff notes for links, anchors, routing, metadata, and structured data

Keep all approved copy editable as real text. Do not embed essential text inside images.

## 19. Acceptance checklist

- [ ] Homepage and contact page are both designed for desktop and mobile
- [ ] The parent-group proposition is clear in the first viewport
- [ ] All four entities receive equal visual priority
- [ ] Every entity has the correct description, capabilities, CTA, and subdomain
- [ ] Explore Our Businesses scrolls to the entity section
- [ ] Contact CTAs open `/contact/`
- [ ] Navigation dropdown lists all four entities
- [ ] No unapproved locations, statistics, contact details, or partner claims appear
- [ ] Contact form includes every required field and option
- [ ] Form routing is defined by selected SechPoint business
- [ ] Required, optional, validation, loading, error, offline, and success states are designed
- [ ] Mobile layout works without horizontal scrolling at 320 px
- [ ] Heading hierarchy and focus order are logical
- [ ] Colour contrast and interactive states meet WCAG 2.2 AA
- [ ] Reduced-motion behaviour is supported
- [ ] Homepage and contact metadata match the approved copy
- [ ] Canonicals, Open Graph, structured data, sitemap, and alt-text requirements are covered
- [ ] All links and domain mappings are tested before launch
- [ ] Approval-dependent items remain clearly marked and unpublished

## 20. Final instruction to Claude

Treat this as a high-trust B2B and public-sector technology group website. Prioritise clarity, credibility, and routing over decorative complexity. The final experience should make SechPoint feel like one coherent group while allowing each of its four businesses to remain distinct, equal, and easy to reach.
