import { motion } from 'motion/react'
import { Logo } from './Logo'
import { WhatsAppGlyph } from './icons'
import { WA_LINK, PHONE } from '../lib/motion'

const links = [
  { href: '#features', label: 'المميزات' },
  { href: '#pricing', label: 'التسعير' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
  { href: '#download', label: 'تحميل التطبيق' },
]

export function Footer() {
  return (
    <footer style={{ background: '#143650', marginTop: 70, color: '#EAF1F7' }}>
      <div
        className="footer-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '64px 24px 30px',
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr',
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <Logo size={40} variant="footer" />
            <span style={{ fontSize: 24, fontWeight: 700, color: '#fff' }}>حِسبة</span>
          </div>
          <p style={{ margin: '0 0 8px', fontSize: 17, color: '#9BA7B5', lineHeight: 1.7, maxWidth: 340 }}>
            حسبتك بيدك — بلا دفتر، بلا إنترنت.
          </p>
          <p style={{ margin: 0, fontSize: 15, color: '#6C7887', lineHeight: 1.7, maxWidth: 340 }}>
            أول نظام عراقي متكامل للبيع والتقسيط بكفيل — لكل المحلات التجارية والمخازن.
          </p>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#fff' }}>روابط</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 15 }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="footer-link">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#fff' }}>تواصل معنا</h4>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            whileHover={{ scale: 1.03, backgroundColor: '#20bd5a' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              background: '#25D366',
              color: '#fff',
              padding: '11px 16px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
              marginBottom: 14,
            }}
          >
            <WhatsAppGlyph size={18} />
            واتساب الدعم
          </motion.a>
          <p style={{ margin: 0, fontSize: 15, color: '#9BA7B5', direction: 'ltr', textAlign: 'right' }}>{PHONE}</p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(234,241,247,.12)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 24px', fontSize: 14, color: '#6C7887' }}>
          © حِسبة — نظام إدارة المحلات العراقي.
        </div>
      </div>
    </footer>
  )
}
