# Omnifood — Responsive Food Delivery Landing Page

## Project Overview
A single-page, fully responsive landing website for **Omnifood**, a fictional
healthy food delivery brand. The page recreates the six sections requested in
the assignment brief using only **HTML and CSS**, with a small amount of
vanilla **JavaScript** used exclusively to power the mobile hamburger menu.

### Sections included
1. **Header + Hero** — logo, nav links, hero headline, two CTA buttons, and a
   dark-overlaid background illustration so the hero text stays readable.
2. **How It Works** — phone mockup on one side, 3 numbered steps on the
   other, plus Google Play / App Store badges.
3. **Our Cities** — a 4-column card grid (Lisbon, London, Berlin, San
   Francisco), each with an image, city name, and stats (happy eaters, chefs,
   social handle).
4. **Testimonials** — 3 customer quotes over a dark, food-themed background
   image with an overlay, each with an avatar and name.
5. **Pricing** — 3 plan cards (Premium, Pro, Starter) with price, feature
   list (check/cross icons), and a "Sign up" button. The Pro plan is
   visually highlighted as the recommended option.
6. **Footer** — logo + tagline, footer navigation links, social icons, and a
   copyright line.

### About the images
Since this project doesn't pull in external stock photography, every visual
(the logo, hero/testimonial backgrounds, phone mockup, city illustrations,
app-store badges, avatars, and check/cross/social icons) is an original,
lightweight **SVG** illustration built specifically for this project and
stored in the `assets/` folder. This keeps the page fast, fully
self-contained, and free of any copyright/licensing concerns.

## Project Structure
```
YourName_Task3/
├── index.html          # Page markup (all 6 sections)
├── style.css            # All styling, including responsive breakpoints
├── script.js             # Mobile nav (hamburger) toggle logic
├── assets/
│   ├── logo.svg
│   ├── hero-bg.svg
│   ├── phone-mockup.svg
│   ├── testimonials-bg.svg
│   ├── google-play.svg
│   ├── app-store.svg
│   ├── city-lisbon.svg
│   ├── city-london.svg
│   ├── city-berlin.svg
│   ├── city-sanfrancisco.svg
│   ├── avatar-1.svg / avatar-2.svg / avatar-3.svg
│   ├── icon-check.svg / icon-cross.svg
│   └── social-facebook.svg / social-twitter.svg / social-instagram.svg
└── README.md
```

## How to Run
1. Unzip the folder.
2. Open `index.html` directly in any modern web browser (double-click it, or
   right-click → Open With → your browser). No build step, server, or
   dependencies are required.
3. Resize the browser window (or open dev tools' device toolbar) to see the
   responsive behavior described below.

## Responsive Breakpoints Used
| Breakpoint            | Target device       | Layout behavior |
|------------------------|---------------------|-----------------|
| `> 834px`              | Desktop (≥1200px design) | Full multi-column grid layout: 2-column "How it works", 4-column cities grid, 3-column testimonials/pricing, horizontal navbar. |
| `≤ 834px`              | Tablet               | Sections stack vertically where needed; cities and pricing grids collapse to **2 columns**; "How it works" becomes a single stacked column (phone image above the steps). |
| `≤ 600px` (covers ≤390px phones) | Mobile | Single-column layout throughout; the navbar collapses into a **hamburger menu** (slide-in panel) toggled with a small JavaScript snippet; hero, cities, and pricing cards all become one column; font sizes scale down slightly for tighter phones. |

The `≤600px` rule is intentionally used instead of stopping at exactly
390px, since it comprehensively covers every phone at or below that width
(and everything a bit larger too), avoiding any narrow gap where the layout
would break between 390px and 600px.

### Tested for
- No horizontal scrolling at 1440px, 834px, 390px, 375px, and 320px widths.
- Images and grids resize/reflow properly at each breakpoint.
- Text and buttons stay readable and aligned at every size.
- Mobile menu opens/closes correctly and closes automatically after a link
  is tapped.
- Reduced-motion preference is respected (`prefers-reduced-motion`), and
  interactive elements have a visible keyboard focus state.

## Restrictions Followed
- Pure HTML + CSS for all layout and styling (no Bootstrap/Tailwind used).
- JavaScript is used **only** for the mobile navbar toggle, as permitted.
- No backend and no forms are included.
