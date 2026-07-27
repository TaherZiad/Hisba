# حِسبة (Hisba) — Marketing Landing Page

A lively, motion-rich, **RTL Arabic** marketing landing page for **حِسبة** — an Iraqi
POS + inventory + debts + guarantor-installments desktop app for Windows.

Live at **https://hisba-iq.vercel.app**

## Stack

- **React 18 + Vite + TypeScript**
- **Motion** (Framer Motion — the `motion` package) for all animation:
  scroll-reveal + stagger, 3D scroll "pop", hero float + parallax, springy
  hover/tap, animated navbar blur, `AnimatePresence` FAQ accordion.
- **Lenis** for smooth momentum scrolling (with a 96px anchor offset).
- Plain global CSS (`src/index.css`) holding the exact design tokens, keyframes,
  and CSS-only hover states for text links. Layout uses inline style objects so
  the exact hex / px values from the handoff are reproduced 1:1.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
```

Build & preview a production bundle:

```bash
npm run build      # type-checks then builds to dist/
npm run preview
```

## Project structure

```
index.html                     # RTL root, Readex Pro + Tajawal fonts, meta
src/
  main.tsx                     # entry
  App.tsx                      # Lenis + smooth anchors + MotionConfig, section order
  index.css                    # tokens, keyframes, hover states, responsive, reduced-motion
  lib/motion.ts                # WA link, phone, download URL, shared variants/hooks
  components/
    Logo.tsx                   # inline SVG logo (nav + footer gradient variants)
    icons.tsx                  # all inline SVG icons + WhatsApp/Windows glyphs
    Motion.tsx                 # Reveal / Stagger / RevealItem / Pop3D / SectionHeading
    Navbar.tsx  Hero.tsx  TrustBar.tsx  Pain.tsx  BusinessModes.tsx
    Features.tsx  Hardware.tsx  HowItWorks.tsx  Screenshots.tsx  Pricing.tsx
    Download.tsx  Faq.tsx  FinalCTA.tsx  Footer.tsx  FloatingWhatsApp.tsx
public/
  assets/                      # real in-app screenshots (see below)
  media/install-guide.mp4      # install tutorial shown in the how-to-install section
  favicon.svg  robots.txt  sitemap.xml
```

## Where to drop the real content

### 1. تحميل التطبيق (المثبّت) — Download / installer

The installer is hosted on **GitHub Releases**, not in this repo — that keeps a
~35 MB binary out of the tree and gives the download a better host reputation
with browsers' Safe Browsing. The "حمّل التطبيق الآن" button links straight at
the release asset, so it still downloads immediately.

**To ship a new version:**
1. Create a GitHub Release with a version tag (e.g. `v1.7.17`).
2. Attach the installer, named exactly **`Hisba-Setup.zip`**.
3. Bump the tag in `DOWNLOAD_URL` in `src/lib/motion.ts` to match, then redeploy.

The URL shape is
`https://github.com/<user>/<repo>/releases/download/<tag>/Hisba-Setup.zip`.

> The download button is in the Download section. The navbar / hero "حمّل التطبيق"
> buttons smooth-scroll to that section (`#download`), where the real download button lives.

### 2. Product screenshots
Real in-app screenshots live in `public/assets/` and are wired in already. Every
screenshot is **clickable** — it opens a full-size lightbox (`src/components/Lightbox.tsx`,
close with Esc / click / the × button). To swap one, replace the file (keep the name)
or update its `src`/`alt` in the component.

| File | Where it's used | Content |
|------|-----------------|---------|
| `app-dashboard.png`    | Hero card + Screenshots row 1 | main dashboard (اللوحة الرئيسية) |
| `app-contract.png`     | Features star banner | new installment contract w/ guarantor + IMEI |
| `app-cashier.png`      | Screenshots row 1 | cashier / POS |
| `app-installments.png` | Screenshots row 2 | today's installments / overdue |
| `app-lists.png`        | Screenshots row 2 | wholesale prep lists (قوائم الجملة) |
| `app-customer.png`     | Screenshots row 2 | customer page + statement + debt aging |

Frames use `aspect-ratio` matched to the screenshots (~1.9:1) with `object-fit: cover`,
so they sit flush and consistent; the lightbox shows each image in full.

### 3. Contact details (already wired)
- WhatsApp everywhere → `https://wa.me/9647744553360` (new tab, `rel="noopener"`).
- Footer phone → `+964 774 455 3360`.

Both live in `src/lib/motion.ts` (`WA_LINK`, `PHONE`). Contact + purchase copy now
references **WhatsApp only** (payment: cash or ZainCash). If you add TikTok/Instagram
later, define `TIKTOK_URL` / `INSTAGRAM_URL` in `src/lib/motion.ts` and link them the
same way `WA_LINK` is used.

## Motion notes

- **Scroll reveal + stagger** — `whileInView` with `viewport={{ once:true, margin }}`;
  grids cascade via `staggerChildren`.
- **3D scroll pop** — `Pop3D` (How-It-Works + Final-CTA) drives `scale 0.9→1→0.9`,
  `rotateX +8→0→-8`, `opacity .5→1→.5` from `useScroll`, smoothed with `useSpring`,
  wrapped in `perspective(1300px)`.
- **Hero** — CSS `heroFloat` (6s infinite) + scroll parallax + on-load word/line stagger.
- **Navbar** — background alpha + blur intensify with scroll.
- **FAQ** — `AnimatePresence` height animation; the `+` rotates 45° to an ×.
- **prefers-reduced-motion** — honored globally via `<MotionConfig reducedMotion="user">`
  plus explicit guards in `Pop3D`, the hero parallax, the FAQ, and CSS
  (`heroFloat` / `waRing` disabled). Content still reveals; motion is removed.

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3…):

```bash
npm run build      # outputs dist/
```

Serve the `dist/` folder. For Vercel/Netlify the defaults (build command
`npm run build`, output `dist`) are auto-detected for Vite.

## License

Copyright (c) 2026 Taher Ziad. **All rights reserved** — see [LICENSE](LICENSE).

The source is published for transparency and reference only; it is not
open-source. Reading and short attributed quotes are fine. Copying,
redeploying, or building a derivative of this site requires written
permission. The name حِسبة / Hisba, the logo, and the app screenshots are not
covered by any grant.
