import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { AnimatePresence, motion } from 'motion/react'

type Img = { src: string; alt: string }
type OpenFn = (img: Img) => void

const LightboxContext = createContext<OpenFn>(() => {})

/** Call to open the full-size lightbox for an image. */
export const useLightbox = () => useContext(LightboxContext)

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [img, setImg] = useState<Img | null>(null)
  const open = useCallback<OpenFn>((i) => setImg(i), [])
  const close = useCallback(() => setImg(null), [])

  useEffect(() => {
    if (!img) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [img, close])

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <AnimatePresence>
        {img && (
          <motion.div
            key="lightbox"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              background: 'rgba(11,28,44,.86)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(16px, 4vw, 48px)',
              cursor: 'zoom-out',
            }}
          >
            <motion.figure
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              style={{
                margin: 0,
                maxWidth: '96vw',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                cursor: 'default',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  maxWidth: '96vw',
                  maxHeight: '82vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: 14,
                  boxShadow: '0 40px 90px -30px rgba(0,0,0,.7)',
                  border: '1px solid rgba(255,255,255,.14)',
                }}
              />
              <figcaption
                style={{ color: '#EAF1F7', fontSize: 15, fontWeight: 600, textAlign: 'center' }}
              >
                {img.alt}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={close}
              aria-label="إغلاق"
              style={{
                position: 'fixed',
                top: 18,
                insetInlineEnd: 18,
                width: 44,
                height: 44,
                borderRadius: 12,
                border: 'none',
                background: 'rgba(255,255,255,.12)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}

/**
 * Fills a positioned/overflow-hidden frame with a clickable image that opens
 * the lightbox. Hover zoom + a magnify hint are handled in CSS (.zoom-frame).
 */
export function ZoomImage({
  src,
  alt,
  objectPosition = 'center',
}: {
  src: string
  alt: string
  objectPosition?: CSSProperties['objectPosition']
}) {
  const open = useLightbox()
  return (
    <button type="button" className="zoom-frame" onClick={() => open({ src, alt })} aria-label={`تكبير: ${alt}`}>
      <img className="shot-img" src={src} alt={alt} style={{ objectPosition }} loading="lazy" />
      <span className="zoom-hint" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </span>
    </button>
  )
}
