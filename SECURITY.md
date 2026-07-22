# Security Policy — حِسبة Landing Page

## Scope
This repository is a **static marketing website** (React + Vite, no backend, no
database, no server-side code). It stores **no secrets, API keys, tokens, or user
data**. The only personal-looking data on the page — the WhatsApp number and phone —
is public contact information, published intentionally.

## Hardening in place
- **Security headers** (`vercel.json`) applied to every response:
  - `Content-Security-Policy` — restricts scripts to same-origin, blocks inline JS,
    limits fonts/styles to Google Fonts, images to self + `data:`, and disallows the
    site being framed (`frame-ancestors 'none'`).
  - `X-Frame-Options: DENY` — clickjacking protection.
  - `X-Content-Type-Options: nosniff` — blocks MIME sniffing.
  - `Strict-Transport-Security` — enforces HTTPS (HSTS, 2 years, preload).
  - `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` — reduce
    leakage and lock down unused browser features (camera, mic, geolocation, payment…).
- **No inline scripts** in the build (verified) — the CSP needs no `unsafe-inline` for JS.
- **Secrets never committed** — `.gitignore` excludes `.env*`, `*.pem`, `*.key`,
  `secrets.json`, and build caches.
- **Dependencies** — kept current; run `npm audit` before releases.

## If you add a backend / API later
Move any keys into environment variables (`.env`, already git-ignored) and access them
server-side only. Never embed a secret in client code — anything shipped to the browser
is public. Update the CSP `connect-src` to allow your API origin.

## Reporting a vulnerability
Please report privately via WhatsApp: https://wa.me/9647700880078 — do not open a public
issue for security matters.
