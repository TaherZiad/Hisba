import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Reveal, SectionHeading } from './Motion'
import { Logo } from './Logo'
import { INSTALL_VIDEO_URL } from '../lib/motion'

export function InstallVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  const play = () => {
    const v = videoRef.current
    if (!v) return
    setStarted(true)
    v.play().catch(() => {
      /* file not present yet — overlay stays; nothing to do */
    })
  }

  return (
    <section id="how-to-install" style={{ maxWidth: 1000, margin: '0 auto', padding: '70px 24px 20px' }}>
      <SectionHeading
        label="شرح مصوّر"
        title="شلون تحمّل وتثبّت التطبيق؟"
        sub="فيديو قصير يوريك خطوة بخطوة طريقة التحميل والتثبيت على ويندوز — وشلون تكمّل بأمان إذا طلع تحذير ويندوز (التطبيق آمن ١٠٠٪)."
        maxWidth={760}
      />

      <Reveal>
        <div
          style={{
            position: 'relative',
            maxWidth: 900,
            margin: '0 auto',
            aspectRatio: '16 / 9',
            borderRadius: 16,
            overflow: 'hidden',
            background: '#0B1C2C',
            border: '1px solid #E2E6EC',
            boxShadow: '0 30px 70px -30px rgba(20,54,80,.55)',
          }}
        >
          <video
            ref={videoRef}
            src={INSTALL_VIDEO_URL}
            controls={started}
            preload="metadata"
            playsInline
            controlsList="nodownload"
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#0B1C2C' }}
          />

          {/* Branded overlay = poster + big play button (until first play) */}
          <AnimatePresence>
            {!started && (
              <motion.button
                type="button"
                onClick={play}
                aria-label="تشغيل فيديو الشرح"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 18,
                  color: '#EAF1F7',
                  background:
                    'radial-gradient(900px 480px at 50% 35%, rgba(31,78,121,.55) 0%, rgba(11,28,44,0) 60%), linear-gradient(160deg,#1F4E79 0%,#0B1C2C 100%)',
                }}
              >
                <Logo size={54} variant="footer" />
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ scale: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' } }}
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: '50%',
                    background: '#C77A12',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 14px 36px -8px rgba(199,122,18,.7)',
                  }}
                >
                  {/* play triangle — nudged for optical centering (LTR glyph in RTL) */}
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="#fff" style={{ marginInlineStart: 4 }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.span>
                <span style={{ fontSize: 18, fontWeight: 700 }}>شاهد شرح التحميل والتثبيت</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  )
}
