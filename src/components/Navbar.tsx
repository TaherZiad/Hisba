import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react'
import { Logo } from './Logo'
import { WhatsAppGlyph, DownloadIcon } from './icons'
import { WA_LINK } from '../lib/motion'

const navLinks = [
  { href: '#features', label: 'المميزات' },
  { href: '#how', label: 'كيف يعمل' },
  { href: '#hardware', label: 'التوافق' },
  { href: '#pricing', label: 'التسعير' },
  { href: '#faq', label: 'الأسئلة' },
]

export function Navbar() {
  const { scrollY } = useScroll()

  // Background + blur intensify as the user scrolls past the hero.
  const bgAlpha = useTransform(scrollY, [0, 400], [0.72, 0.92])
  const background = useMotionTemplate`rgba(255,255,255,${bgAlpha})`
  const blur = useTransform(scrollY, [0, 400], [8, 14])
  const backdropFilter = useMotionTemplate`blur(${blur}px)`
  const boxShadow = useTransform(
    scrollY,
    [0, 400],
    ['0 0 0 rgba(20,54,80,0)', '0 6px 24px -18px rgba(20,54,80,.6)'],
  )

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        borderBottom: '1px solid #E2E6EC',
        boxShadow,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}
      >
        <motion.a
          href="#top"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <Logo size={40} variant="nav" />
          <span style={{ fontSize: 24, fontWeight: 700, color: '#143650', letterSpacing: '-.5px' }}>
            حِسبة
          </span>
        </motion.a>

        <div
          className="nav-center"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            fontSize: 16,
            fontWeight: 500,
            color: '#59616F',
          }}
        >
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            whileHover={{ scale: 1.04, backgroundColor: '#20bd5a' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              background: '#25D366',
              color: '#fff',
              padding: '10px 16px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            <WhatsAppGlyph size={18} />
            <span className="nav-cta-label">تواصل</span>
          </motion.a>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.04, backgroundColor: '#1A4569' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              background: '#1F4E79',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            <DownloadIcon size={17} />
            <span className="nav-cta-label">حمّل التطبيق</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
