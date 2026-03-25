# Brand Brief — The Vinyl Room

## Restaurant Overview

| Field | Detail |
|---|---|
| **Name** | The Vinyl Room |
| **Location** | 396 Main St, Beacon, NY 12508 |
| **Phone** | (845) 297-3344 |
| **Website** | tvrny.com |
| **Instagram** | @tvr_beacon |
| **Type** | Cocktail Bar + Record Shop + Speakeasy + Vintage Arcade |
| **Price point** | $$ (affordable) |
| **Occasion** | Date night, neighborhood staple, late-night hangout, private events / wedding after-parties |
| **Owners** | John Kihlmire and Kane Licari |
| **Chef** | Greg DeMichiel (tapas menu) |

---

## The Venue

Two-floor, 3,700 sq ft brick building (owned) on Beacon's Main Street.

- **Main level:** Cocktail bar, tapas menu, record shop, cozy booths, exposed brick, record-adorned walls
- **Basement:** Speakeasy + vintage arcade
- **Entertainment:** Hudson Valley's top DJs every Friday & Saturday (vinyl only — no Serato)
- **Brunch:** Weekends
- **Private events:** Yes — parties, welcome drinks, wedding after-parties

**Signature menu items:** Korean nachos (ribeye cut bulgogi), crispy wings, beef tallow fries, chicken tacos, craft cocktails

---

## Personality

| | |
|---|---|
| **In 3 words** | Cool, welcoming, alive |
| **Voice** | Sounds like a local who genuinely loves music. Warm but not soft. Confident without being exclusive. |
| **Not** | Not a dive bar. Not a nightclub. Not pretentious. Not corporate. Not trying to be NYC. |

**Owner ethos (direct quote):** "We're about positivity and creating a place where everyone feels welcome. Leave it at the door." — Kane Licari

---

## Emotional Hook

> The feeling this site should create in the first 5 seconds:
> **"You already want to go. You can almost hear the record dropping."**

---

## Customer Voice

**Ratings:** 4.5/5 (440 Google reviews) · 5.0/5 (TripAdvisor) · 96% recommend (Facebook, 242 reviews)

**Recurring adjectives:** cool, unique, vibrant, top-notch, incredible, cozy, welcoming, amazing

**Standout review quotes:**
- "It's like stepping into a pop museum filled with local treasures"
- "The cleanest bar I have ever been in. It literally SMELLS CLEAN"
- "Drinks were on point & my chicken tacos were delicious"
- Korean nachos described with genuine enthusiasm across multiple reviews

**What gets mentioned most:** Atmosphere/ambiance, Korean nachos, cocktail quality, arcade downstairs, vinyl records, bartender friendliness, cleanliness

---

## Visual Direction

**Aesthetic:** Vinyl-era warmth meets Hudson Valley late night. Warm charcoal base with coral, teal, and navy pulled directly from the TVR logo. Record label typography — bold, condensed, unapologetic. Photography-forward with warm amber overlay treatment on space shots.

**Theme:** "The Crate Dig" — every section feels like flipping through records: bold, tactile, discovered.

---

## Typography

| Role | Font | Weight | Rationale |
|---|---|---|---|
| **Display** | Bebas Neue | 700 | Record label energy. Condensed, bold, zero ambiguity. Perfectly specific to a vinyl bar. |
| **Body** | Nunito | 400, 600 | Warm and rounded — offsets the hard condensed display. Keeps it welcoming, not cold. |

**Heading style:** Wide tracking on subheadings, tight/no tracking on hero headlines. Massive scale contrast (hero: 96–120px desktop).

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## Color System

```css
:root {
  --c-bg:         #1C1814;  /* Deep warm charcoal — base page background */
  --c-surface:    #272019;  /* Card / panel background */
  --c-surface-2:  #312B20;  /* Elevated / floating elements */
  --c-border:     #3A3025;  /* Subtle warm separator */
  --c-border-2:   #4A3D30;  /* Hover / active borders */
  --c-text:       #F2E8D5;  /* Warm cream — primary text */
  --c-text-2:     #A89577;  /* Medium warm — secondary text, labels */
  --c-text-3:     #6B5E4A;  /* Tertiary — metadata, fine print */
  --c-accent:     #E86B47;  /* Coral — from the T in TVR logo. CTAs, highlights */
  --c-accent-2:   #4DB896;  /* Teal/mint — from the R in TVR logo. Badges, accents */
  --c-navy:       #1B4D70;  /* Navy — from the V in TVR logo. Border accents */
  --c-accent-fg:  #1C1814;  /* Text color on accent background */
}
```

**Color rationale:**
- Coral (#E86B47) — CTAs, hover states, the primary action color
- Teal (#4DB896) — section accents, badges, the "discovery" color
- Navy (#1B4D70) — borders, secondary elements, the "depth" color
- All three pulled directly from the TVR logo letterforms

---

## Layout Signature

| Element | Decision | Rationale |
|---|---|---|
| **Structure** | Asymmetric editorial grid | Breaks the symmetry of generic bar sites |
| **Hero** | Typographic domination | Venue name at 96–120px Bebas Neue fills viewport |
| **Navigation** | Transparent → warm dark solid after 40px | Cinematic reveal as user engages |
| **Cards** | Record-sleeve style | Bold left color strip + content right, like a 7" single sleeve |
| **Mobile priority** | Tap-to-call, hours, menu, Maps link | Customers deciding right now on their phones |

**Hero spec:** Venue name massive in Bebas Neue. Coral accent strip on left edge. Tagline in Nunito below. Two CTAs (Reserve / View Menu). Background: warm dark with subtle CSS record-groove texture.

---

## Motion Language

| | |
|---|---|
| **Archetype** | Cinematic |
| **Duration** | 0.8–1.2s ease-out |
| **Rationale** | Experience venue — the site should feel like the moment before the needle drops. Deliberate, not rushed. |
| **Properties** | `transform` and `opacity` only. Never `transition-all`. |
| **Reduced motion** | `prefers-reduced-motion` override required |

---

## Page Scope

**Format:** Single-page with anchor navigation

**Sections in order:**
1. Navigation — logo, anchor links, tap-to-call (mobile), coral Reserve CTA
2. Hero — typographic domination, venue name, tagline, two CTAs
3. About blurb — short, owner-voice, the "leave it at the door" spirit
4. What's Here — 4 record-sleeve cards (Cocktails / Tapas / Record Shop / Speakeasy + Arcade)
5. Menu teaser — signature dishes with record-sleeve card treatment
6. Events / DJ nights — Friday & Saturday, private events CTA
7. Hours + Location — today's hours prominent, address → Maps link, phone
8. Reviews — 3 curated quotes with star ratings
9. Footer — address, hours, phone, social links, copyright

**Must-haves:** Tap-to-call, hours visible, menu link, address → Maps, private events CTA

---

## The Unforgettable Thing

The **"record sleeve" card component**: each of the 4 venue pillars (Cocktails, Tapas, Record Shop, Speakeasy + Arcade) is presented as a bold record sleeve — a thick coral/teal/navy left-edge color strip, a mock "label" icon, a bold Bebas Neue title, and a short Nunito descriptor.

This component recurs across the What's Here section and the menu teaser. Nothing else on the web looks like this for a bar. It makes the owner say "this is us."

---

## Sources

| Source | URL | What it informed |
|---|---|---|
| **Existing website** | [tvrny.com](https://tvrny.com/) | Color palette, copy tone, navigation structure, site gaps |
| **Gallery** | [tvrny.com/gallery](https://tvrny.com/gallery/) | Photography style assessment |
| **Hours & Reservations** | [tvrny.com/contact-hours](https://tvrny.com/contact-hours/) | Hours, address, phone |
| **Yelp listing** | [yelp.com/biz/the-vinyl-room-beacon](https://www.yelp.com/biz/the-vinyl-room-beacon) | Rating, reviews, customer language, price range |
| **Wanderlog / Google reviews** | [wanderlog.com/place/details/3767670](https://wanderlog.com/place/details/3767670/the-vinyl-room) | 440 Google reviews aggregate, standout quotes, recurring adjectives |
| **TripAdvisor** | [tripadvisor.com — The Vinyl Room Beacon](https://www.tripadvisor.com/Restaurant_Review-g47291-d26921586-Reviews-The_Vinyl_Room-Beacon_New_York.html) | 5.0 rating, review tone |
| **Facebook** | [facebook.com/thevinylroomny](https://www.facebook.com/thevinylroomny/) | 96% recommend, 242 reviews, community presence |
| **Instagram** | [@tvr_beacon](https://www.instagram.com/tvr_beacon/) | Handle, 14K followers, visual identity signals |
| **Hudson Valley Magazine** | [hvmag.com — Faces of Hudson Valley 2025](https://hvmag.com/partner/faces-of-hudson-valley-2025/the-vinyl-room/) | Owners' names, venue concept, chef, entertainment details |
| **Chronogram** | [chronogram.com — The Vinyl Room Reopening](https://www.chronogram.com/food-drink/the-vinyl-room-to-reopen-on-beacons-main-street-in-august-18614045/) | Owner quotes, venue history, relocation story, ethos ("leave it at the door"), vinyl-only DJ policy |
| **TVR Logo** | `brand_assets/tvr_logo.png` | Color system — coral, navy, teal extracted directly from letterforms |

---

## Current Site Weaknesses (tvrny.com)

- Generic sans-serif fonts (Arial-class), no personality
- Red accent (#a90707) — not derived from logo, feels off
- Minimal photography — space looks empty online vs. full of life in person
- No visual hierarchy — reads like an information dump
- Doesn't communicate the energy, uniqueness, or the multi-experience nature of the venue
- No clear reservation pathway visible
