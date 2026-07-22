import { motion } from 'motion/react'
import { Pop3D } from './Motion'
import { DownloadIcon, WhatsAppGlyph } from './icons'
import { WA_LINK } from '../lib/motion'

export function FinalCTA() {
  return (
    <section style={{ maxWidth: 1200, margin: '70px auto 0', padding: '0 24px' }}>
      <Pop3D
        style={{
          background: 'linear-gradient(135deg,#1F4E79 0%,#143650 100%)',
          borderRadius: 24,
          padding: '64px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -60,
            left: -60,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'rgba(199,122,18,.18)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -40,
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: 'rgba(255,255,255,.05)',
          }}
        />
        <div style={{ position: 'relative' }}>
          <h2 style={{ margin: '0 0 14px', fontSize: 42, fontWeight: 700, color: '#fff', letterSpacing: '-.5px' }}>
            جاهز تنظّم محلك؟
          </h2>
          <p style={{ margin: '0 0 34px', fontSize: 20, color: '#9BC0DC' }}>
            حمّل حِسبة اليوم أو تواصل معنا بالواتساب — نرد عليك مباشرة.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.03, backgroundColor: '#EAF1F7' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#fff',
                color: '#143650',
                padding: '17px 34px',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              <DownloadIcon size={20} stroke="#143650" />
              حمّل التطبيق
            </motion.a>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.03, backgroundColor: '#20bd5a' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#25D366',
                color: '#fff',
                padding: '17px 34px',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              <WhatsAppGlyph size={20} />
              <span>
                واتساب:{' '}
                <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                  0770 088 0078
                </span>
              </span>
            </motion.a>
          </div>
        </div>
      </Pop3D>
    </section>
  )
}
