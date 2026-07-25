# حِسبة (Hisba) — Marketing Landing Page

A lively, motion-rich, **RTL Arabic** marketing landing page for **حِسبة** — an Iraqi
POS + inventory + debts + guarantor-installments desktop app for Windows.

Built as a faithful, high-fidelity recreation of the design handoff
(`design_handoff_hisba_website/`) on a real animation stack.

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
  assets/                      # placeholder screenshot SVGs (see below)
  favicon.svg
```

## Where to drop the real content

### 1. تحميل التطبيق (المثبّت) — Download / installer

The site hosts the installer itself, so the "حمّل التطبيق الآن" button downloads it
**immediately** (no external host needed).

**To add / update the installer:**
1. Put your Windows installer file here, named exactly **`hisba-setup.exe`**:
   ```
   public/downloads/hisba-setup.exe
   ```
   (To use a different name, change `DOWNLOAD_URL` / `DOWNLOAD_FILENAME` in
   `src/lib/motion.ts` to match.)
2. Rebuild & redeploy (`npm run build`, then publish `dist/` — see Deploy below).
   In local dev the button works as soon as the file is in place.

**To push an update later:** just replace `public/downloads/hisba-setup.exe` with the
new version (same filename) and redeploy. Users always get the latest file from the
same button. Nothing else to change.

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
- WhatsApp everywhere → `https://wa.me/9647700880078` (new tab, `rel="noopener"`).
- Footer phone → `+964 770 088 0078`.

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
