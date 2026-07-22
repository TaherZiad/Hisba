/* All icons are the exact inline SVGs from the design source (hisba-landing.dc.html). */
import type { CSSProperties } from 'react'

type IconProps = { size?: number; style?: CSSProperties }

/* ---- Filled brand glyphs ---- */

export function WhatsAppGlyph({ size = 18, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" style={style}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-.9-1.1-1.2-1.7-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4 0-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.7.7-.9 1.6-.9 2.5.1 1.1.5 2.1 1.2 3 .1.2 1.7 2.7 4.2 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2z" />
    </svg>
  )
}

export function WindowsGlyph({ size = 24, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" style={style}>
      <path d="M3 5.5l7-1v7H3v-6zm0 13l7 1v-6.9H3v5.9zM11 4.3L21 3v8.5H11V4.3zm0 15.4L21 21v-8.5H11v7.2z" />
    </svg>
  )
}

/* ---- Stroke icons ---- */

export function DownloadIcon({ size = 17, style, stroke = '#fff', strokeWidth = 2.2 }: IconProps & { stroke?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}

export function Check({ size = 18, stroke = '#1C8A5A', strokeWidth = 2.4, style }: IconProps & { stroke?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

/* Trust bar icons (orange outline) */
export function IconOffline({ size = 22, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C77A12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M1 1l22 22" />
      <path d="M16.7 12.5a5 5 0 0 0-2.5-1.4M5 12.5a10 10 0 0 1 4-2.3M2 8.8a15 15 0 0 1 4.2-2.5M22 8.8a15 15 0 0 0-6.4-3.3 15 15 0 0 0-4 .1M8.5 16a5 5 0 0 1 7 0M12 20h.01" />
    </svg>
  )
}

export function IconShield({ size = 22, stroke = '#C77A12', style }: IconProps & { stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconChat({ size = 22, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C77A12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M21 11.5a8.5 8.5 0 0 1-9 8.5 8.4 8.4 0 0 1-4-1L3 21l1.9-4.5A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  )
}

/* Pain icons (red outline) */
export function IconLedger({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C43B2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M4 4v16a2 2 0 0 0 2 2h13V7l-3-3H6a2 2 0 0 0-2 0z" />
      <path d="M8 4v16M12 9h4M12 13h4" />
    </svg>
  )
}

export function IconPaper({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C43B2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M9 2h6l2 4v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6l2-4z" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  )
}

export function IconMonitorOff({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C43B2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 22h8M12 18v4" />
      <path d="M2 1l20 20" strokeOpacity="0" />
    </svg>
  )
}

/* Feature icons (blue outline) */
export function IconCashier({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M2 20h20M8 17v3M16 17v3" />
    </svg>
  )
}

export function IconInventory({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" />
    </svg>
  )
}

export function IconDebts({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5a2.5 2.5 0 0 0-2.5-1.5c-1.4 0-2.5.8-2.5 2s1.1 1.8 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2a2.5 2.5 0 0 1-2.5-1.5M12 6.5v11" />
    </svg>
  )
}

export function IconReports({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M3 3v18h18" />
      <rect x="7" y="11" width="3" height="6" />
      <rect x="12" y="7" width="3" height="10" />
      <rect x="17" y="13" width="3" height="4" />
    </svg>
  )
}

export function IconPermissions({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M3 9l1.5-5h15L21 9M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M3 9h18" />
      <path d="M9 20v-6h6v6" />
    </svg>
  )
}

/* Hardware icons (blue outline) */
export function IconBarcode({ size = 28, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M3 5v14M6 5v14M9.5 5v14M13 5v14M16.5 5v14M20 5v14" />
    </svg>
  )
}

export function IconThermalPrinter({ size = 28, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M6 9V3h12v6" />
      <rect x="4" y="9" width="16" height="7" rx="1.5" />
      <path d="M7 16h10v5H7z" />
      <path d="M9 13h.01" />
    </svg>
  )
}

export function IconA4Printer({ size = 28, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M6 9V3h12v6" />
      <rect x="3" y="9" width="18" height="8" rx="1.5" />
      <path d="M6 17h12v4H6z" />
      <path d="M17 12.5h.01" />
    </svg>
  )
}

/* Star (feature banner badge) */
export function IconStar({ size = 15, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff" style={style}>
      <path d="M12 2l3 6.5 7 .6-5.3 4.6L18.5 21 12 17.3 5.5 21l1.8-7.3L2 9.1l7-.6L12 2z" />
    </svg>
  )
}

/* ---- Feature / mode icons added for the product update ---- */

/* Retail storefront */
export function IconStore({ size = 30, stroke = '#1F4E79', style }: IconProps & { stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M3 9l1.5-5h15L21 9M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M3 9h18" />
      <path d="M9 20v-6h6v6" />
    </svg>
  )
}

/* Wholesale warehouse / boxes */
export function IconWarehouse({ size = 30, stroke = '#1F4E79', style }: IconProps & { stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M2 21V8l10-5 10 5v13" />
      <path d="M6 21v-7h5v7M13 21v-4h5v4" />
    </svg>
  )
}

/* Purchases — shopping bag */
export function IconPurchases({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

/* Print templates — layered documents */
export function IconTemplates({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <rect x="7" y="3" width="12" height="15" rx="2" />
      <path d="M11 7h4M11 10h4M11 13h2" />
      <path d="M5 7v12a2 2 0 0 0 2 2h9" />
    </svg>
  )
}

/* Multi-currency — coins */
export function IconCurrency({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <ellipse cx="9" cy="7" rx="6" ry="3" />
      <path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7" />
      <path d="M9 15v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.5-2-2.7-4.7-2.95" />
    </svg>
  )
}

/* Sync — cloud with refresh arrows */
export function IconSync({ size = 26, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1F4E79" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M6.5 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5H7z" />
      <path d="M10 13l1.5-1.5L13 13M11.5 11.5V15" />
    </svg>
  )
}
