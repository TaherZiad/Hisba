import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Logo } from './Logo'
import { ZoomImage } from './Lightbox'
import { EASE_OUT } from '../lib/motion'

/**
 * Hero: a cinematic product open.
 *
 *   1. Brand ident — the mark rises out of the screen, spins to face you, and
 *      the wordmark حِسبة wipes in beside it.
 *   2. Reveal — the ident clears, the mark flies home into the app header, the
 *      dashboard settles out of a 3D tilt and a light sweeps the surface.
 *   3. Tour — the camera leans toward one area at a time while the rest of the
 *      screen dims: reports → sales → invoices, each with a floating caption.
 *      It rests on the full dashboard, then quietly runs the tour again.
 *
 * Nothing is redrawn and no pixels are copied: the tour only dims, brightens
 * and outlines the real screenshot, so a second copy of the UI can never end
 * up sitting on top of the first.
 */

const SHOT = '/assets/app-dashboard.png'

/** Native size of the screenshot; every rect below is in its pixels. */
const IMG_W = 1918
const IMG_H = 979

/** The app's own logo mark inside the screenshot header. */
const LOGO_SLOT = { cx: 1885, cy: 23.5, size: 30 }
/** Ident mark width, as a fraction of the frame. */
const MARK_W = 0.19

type Step = {
  key: string
  rect: { x: number; y: number; w: number; h: number }
  label: string
  /** Where the camera leans while this step is held. */
  camera: { rotateX: number; rotateY: number }
  /** Captions sit above their area unless it is already near the top. */
  labelBelow?: boolean
}

const TOUR: Step[] = [
  {
    key: 'reports',
    rect: { x: 380, y: 306, w: 1272, h: 294 },
    label: 'تقارير مبيعاتك، لحظة بلحظة',
    camera: { rotateX: 3, rotateY: -5 },
  },
  {
    key: 'sales',
    rect: { x: 25, y: 152, w: 1627, h: 140 },
    label: 'أرقام محلك بنظرة وحدة',
    camera: { rotateX: -3, rotateY: 3 },
    labelBelow: true,
  },
  {
    key: 'invoices',
    rect: { x: 25, y: 620, w: 1627, h: 245 },
    label: 'كل فاتورة محفوظة ومرتّبة',
    camera: { rotateX: 4, rotateY: -2 },
  },
]

/** Beat map, in ms from mount. */
const T = {
  markIn: 150,
  wordIn: 850,
  identOut: 1850,
  frameIn: 1600,
  tourStart: 2900,
  stepHold: 1900,
  /** Rest on the untouched dashboard before touring again. */
  idle: 6000,
}

const pct = (v: number, total: number) => `${(v / total) * 100}%`

export function HeroDashboard() {
  const reduce = useReducedMotion()
  const frameRef = useRef<HTMLDivElement>(null)

  /** -2 = ident, -1 = revealed, 0..n-1 = touring, n = resting. */
  const [step, setStep] = useState(reduce ? TOUR.length : -2)
  /** Last area the tour pointed at — keeps the focus window sized between runs. */
  const [anchor, setAnchor] = useState(0)
  /** Rendered width drives the caption type scale. Container queries would
   *  introduce containment, which collapses the 3D scene, so measure instead. */
  const [frameW, setFrameW] = useState(0)

  // Layout effect, not effect: the ident's mark and wordmark are sized from
  // this, so measuring after the first paint would flash them at zero size.
  useLayoutEffect(() => {
    const el = frameRef.current
    if (!el) return
    setFrameW(el.getBoundingClientRect().width)
    const ro = new ResizeObserver(([e]) => setFrameW(e.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (reduce) return
    const timers: number[] = []
    const runTour = () => {
      TOUR.forEach((_, i) => timers.push(window.setTimeout(() => setStep(i), i * T.stepHold)))
      timers.push(
        window.setTimeout(() => {
          setStep(TOUR.length)
          timers.push(window.setTimeout(runTour, T.idle))
        }, TOUR.length * T.stepHold),
      )
    }
    timers.push(window.setTimeout(() => setStep(-1), T.identOut))
    timers.push(window.setTimeout(runTour, T.tourStart))
    return () => timers.forEach(clearTimeout)
  }, [reduce])

  useEffect(() => {
    if (step >= 0 && step < TOUR.length) setAnchor(step)
  }, [step])

  const active = step >= 0 && step < TOUR.length ? TOUR[step] : null
  const identing = step === -2
  const camera = active ? active.camera : { rotateX: 0, rotateY: 0 }

  /** The focus window keeps the last area's geometry so it never collapses. */
  const held = TOUR[anchor]
  const captionSize = Math.max(11, frameW * 0.026)

  return (
    <div style={{ perspective: 1600, position: 'relative' }}>
      <motion.div
        ref={frameRef}
        initial={reduce ? false : { opacity: 0, scale: 0.94, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, ...camera }}
        transition={{
          opacity: { duration: 0.8, ease: EASE_OUT, delay: T.frameIn / 1000 },
          scale: { duration: 0.9, ease: EASE_OUT, delay: T.frameIn / 1000 },
          rotateX: { duration: 1.2, ease: EASE_OUT },
          rotateY: { duration: 1.2, ease: EASE_OUT },
        }}
        style={{
          background: '#fff',
          border: '1px solid #E2E6EC',
          borderRadius: 18,
          padding: 10,
          boxShadow: '0 40px 80px -32px rgba(20,54,80,.45)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* No overflow / filter / containment on this node: any of them would
            collapse the 3D scene to flat. */}
        <div
          style={{
            position: 'relative',
            aspectRatio: `${IMG_W} / ${IMG_H}`,
            transformStyle: 'preserve-3d',
          }}
        >
          <ZoomImage src={SHOT} alt="لوحة التحكم — نظرة عامة على أداء محلك" objectPosition="top" />

          {/* Dim the whole surface while the tour runs */}
          <motion.div
            aria-hidden
            initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            style={{
              position: 'absolute',
              inset: 0,
              // Neutral black: the focus window below cancels it with
              // brightness(1 / (1 - alpha)), which only restores the original
              // colours exactly if the dim has no hue of its own.
              background: 'rgba(0,0,0,.5)',
              borderRadius: 11,
              pointerEvents: 'none',
            }}
          />

          {/* Focus window — always mounted and sized, so it can never collapse.
              Kept flat on the surface so it lines up with the pixels exactly. */}
          <motion.div
            aria-hidden
            initial={false}
            animate={{
              opacity: active ? 1 : 0,
              left: pct(held.rect.x, IMG_W),
              top: pct(held.rect.y, IMG_H),
              width: pct(held.rect.w, IMG_W),
              height: pct(held.rect.h, IMG_H),
            }}
            transition={{ duration: 0.75, ease: EASE_OUT }}
            style={{
              position: 'absolute',
              borderRadius: 10,
              pointerEvents: 'none',
              // Exactly undoes the 50% black dim above (1 / 0.5 = 2).
              backdropFilter: 'brightness(2)',
              WebkitBackdropFilter: 'brightness(2)',
              boxShadow:
                'inset 0 0 0 2px rgba(199,122,18,.95), 0 0 0 1px rgba(255,255,255,.22), 0 18px 44px -14px rgba(0,0,0,.5)',
            }}
          />

          {/* Caption — a sibling, not a child of the focus window: backdrop-filter
              flattens its subtree, which would kill this pill's 3D float. */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.key}
                initial={{ opacity: 0, z: 0 }}
                animate={{ opacity: 1, z: 120 }}
                exit={{ opacity: 0, z: 0 }}
                transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.2 }}
                style={{
                  position: 'absolute',
                  insetInlineStart: pct(active.rect.x + 24, IMG_W),
                  top: active.labelBelow
                    ? pct(active.rect.y + active.rect.h, IMG_H)
                    : pct(active.rect.y, IMG_H),
                  y: active.labelBelow ? '28%' : '-128%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: captionSize * 0.5,
                  whiteSpace: 'nowrap',
                  background: '#fff',
                  color: '#143650',
                  fontFamily: "'Readex Pro', sans-serif",
                  fontWeight: 600,
                  fontSize: captionSize,
                  lineHeight: 1,
                  padding: `${captionSize * 0.62}px ${captionSize}px`,
                  borderRadius: 999,
                  boxShadow: '0 18px 36px -12px rgba(0,0,0,.55)',
                  pointerEvents: 'none',
                  transformStyle: 'preserve-3d',
                }}
              >
                <span
                  style={{
                    width: captionSize * 0.48,
                    height: captionSize * 0.48,
                    borderRadius: '50%',
                    background: '#C77A12',
                    flex: 'none',
                  }}
                />
                {active.label}
              </motion.div>
            )}
          </AnimatePresence>

          {/* One-off light sweep as the dashboard is revealed */}
          {!reduce && (
            <motion.div
              aria-hidden
              initial={{ x: '-130%', opacity: 0 }}
              animate={{ x: '130%', opacity: [0, 0.55, 0] }}
              transition={{ duration: 1.1, ease: 'easeInOut', delay: (T.frameIn + 250) / 1000 }}
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(105deg, transparent 43%, rgba(255,255,255,.6) 50%, transparent 57%)',
                pointerEvents: 'none',
                borderRadius: 11,
              }}
            />
          )}
        </div>
      </motion.div>

      {/* ── Brand ident ── */}
      <AnimatePresence>
        {identing && (
          <motion.div
            aria-hidden
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(6px)' }}
            transition={{ duration: 0.75, ease: EASE_OUT }}
            style={{
              position: 'absolute',
              inset: 10,
              borderRadius: 12,
              background:
                'radial-gradient(120% 90% at 70% 15%, #24608F 0%, #1F4E79 42%, #102C42 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: frameW * 0.035,
              zIndex: 4,
              overflow: 'hidden',
            }}
          >
            <motion.div
              className="hero-logo-3d"
              initial={{ opacity: 0, scale: 0.45, rotateY: -95 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.05, ease: EASE_OUT, delay: T.markIn / 1000 }}
              style={{
                width: frameW * MARK_W,
                filter: 'drop-shadow(0 18px 30px rgba(0,0,0,.45))',
              }}
            >
              {/* The footer gradient is the light-on-dark one — the nav variant
                  would sink into this navy panel. */}
              <Logo size={256} variant="footer" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: T.wordIn / 1000 }}
              style={{
                fontFamily: "'Readex Pro', sans-serif",
                fontWeight: 700,
                fontSize: frameW * 0.115,
                // Arabic descenders (بة) and the kasra on حِ sit outside a
                // line-height:1 box, and the panel clips — so give them room.
                lineHeight: 1.6,
                paddingBottom: '0.08em',
                color: '#fff',
                letterSpacing: '-1px',
              }}
            >
              حِسبة
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The mark flies home into the app header as the ident clears */}
      {!reduce && (
        <motion.div
          className="hero-logo-3d"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            left: ['50%', pct(LOGO_SLOT.cx, IMG_W)],
            top: ['50%', pct(LOGO_SLOT.cy, IMG_H)],
            scale: [1, LOGO_SLOT.size / IMG_W / MARK_W],
          }}
          transition={{
            duration: 0.85,
            ease: EASE_OUT,
            delay: T.identOut / 1000,
            opacity: { duration: 0.85, times: [0, 0.18, 1], delay: T.identOut / 1000 },
          }}
          style={{
            position: 'absolute',
            width: frameW * MARK_W,
            x: '-50%',
            y: '-50%',
            zIndex: 5,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 16px 26px rgba(20,54,80,.4))',
          }}
        >
          <Logo size={256} />
        </motion.div>
      )}
    </div>
  )
}
