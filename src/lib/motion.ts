import type { Variants } from 'motion/react'

/** Global constants */
export const WA_LINK = 'https://wa.me/9647744553360'
export const PHONE = '+964 774 455 3360'

/**
 * Windows installer download — hosted on GitHub Releases (not on Vercel).
 * This keeps the 37 MB binary out of the site's bandwidth and gives the file
 * a better host reputation with browsers' Safe Browsing.
 *
 * On a new release:
 *   1. Create a GitHub Release with a version tag (e.g. v1.7.17).
 *   2. Attach the installer named exactly "Hisba-Setup.zip".
 *   3. Bump the tag in DOWNLOAD_URL below to match the new release.
 * URL shape: https://github.com/<user>/<repo>/releases/download/<tag>/<file>
 */
export const DOWNLOAD_URL =
  'https://github.com/TaherZiad/Hisba/releases/download/v1.9.0/Hisba-Setup.zip'
export const DOWNLOAD_FILENAME = 'Hisba-Setup.zip'

/** Android build (APK, zipped). Attached to the same release as the Windows one. */
export const ANDROID_DOWNLOAD_URL =
  'https://github.com/TaherZiad/Hisba/releases/download/v1.9.0/Hisba-Setup-for-android.zip'
export const ANDROID_DOWNLOAD_FILENAME = 'Hisba-Setup-for-android.zip'

/**
 * Install / download tutorial video.
 * Drop the video file at:  public/media/install-guide.mp4
 * (keep this exact name, or change the path below). MP4 (H.264) plays everywhere.
 *
 * The `?v=` is a cache-buster: browsers that visited while the file was still
 * missing cached a stale fallback response for the bare path. Bump this number
 * whenever you replace the video so every visitor re-fetches the new file.
 */
export const INSTALL_VIDEO_URL = '/media/install-guide.mp4?v=1'

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
