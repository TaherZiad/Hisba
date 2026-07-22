import type { Variants } from 'motion/react'

/** Global constants */
export const WA_LINK = 'https://wa.me/9647700880078'
export const PHONE = '+964 770 088 0078'

/**
 * Windows installer download (served directly from the site — no external host).
 * On a new release: drop the new file in public/downloads/ and bump the version
 * in these two lines to match its filename.
 */
export const DOWNLOAD_URL = '/downloads/Hisba-Setup-1.7.0.zip'
export const DOWNLOAD_FILENAME = 'Hisba-Setup-1.7.0.zip'

/**
 * Install / download tutorial video.
 * Drop the video file at:  public/media/install-guide.mp4
 * (keep this exact name, or change the path below). MP4 (H.264) plays everywhere.
 */
export const INSTALL_VIDEO_URL = '/media/install-guide.mp4'

/** whileInView viewport config — reveal once, a touch before fully on-screen. */
export const VIEWPORT = { once: true, margin: '0px 0px -40px 0px' } as const

/** Springy easing used for card/section reveals (matches the source cubic-bezier). */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Stagger container: children cascade in ~0.07s apart. */
export const staggerContainer = (stagger = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

/** A single revealing child: fade + rise. */
export const revealItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
}

/** Springy hover/tap feedback for buttons & interactive cards. */
export const hoverPop = {
  whileHover: { scale: 1.03, transition: { type: 'spring', stiffness: 400, damping: 22 } },
  whileTap: { scale: 0.97 },
} as const

/** Gentler lift for larger cards. */
export const cardHover = {
  whileHover: {
    y: -6,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
} as const
