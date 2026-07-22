import { motion } from 'motion/react'
import { WhatsAppGlyph } from './icons'
import { WA_LINK } from '../lib/motion'

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      aria-label="تواصل واتساب"
      className="wa-ring"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.8 }}
      whileHover={{ scale: 1.08, backgroundColor: '#20bd5a' }}
      whileTap={{ scale: 0.92 }}
      style={{
        position: 'fixed',
        bottom: 26,
        left: 26,
        zIndex: 200,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 26px -6px rgba(37,211,102,.6)',
      }}
    >
      <WhatsAppGlyph size={32} />
    </motion.a>
  )
}
