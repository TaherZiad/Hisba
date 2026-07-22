import { motion } from 'motion/react'
import { Reveal, Stagger, RevealItem, SectionHeading } from './Motion'
import { Check, WhatsAppGlyph } from './icons'
import { WA_LINK } from '../lib/motion'

const trialBullets = ['كل المميزات، بلا قيود', 'بدون بطاقة ائتمان', 'دعم كامل أثناء التجربة']
const permBullets = [
  'كل المميزات — كاشير، مخزون، ديون، أقساط بكفيل',
  'التحديثات المستقبلية',
  'دعم عراقي مباشر بالواتساب',
]

export function Pricing() {
  return (
    <section id="pricing" style={{ maxWidth: 1080, margin: '0 auto', padding: '70px 24px 40px' }}>
      <SectionHeading
        label="التسعير"
        title="تدفع مرة وحدة — التطبيق يبقى لك"
        sub="بلا اشتراك شهري. بياناتك دائماً ملكك."
      />

      <Stagger
        className="pricing-grid"
        stagger={0.1}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 24, alignItems: 'stretch' }}
      >
        {/* Trial */}
        <RevealItem style={{ display: 'flex' }}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            style={{
              background: '#fff',
              border: '1px solid #E2E6EC',
              borderRadius: 20,
              padding: 38,
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <h3 style={{ margin: '0 0 6px', fontSize: 22, fontWeight: 700, color: '#1A2130' }}>تجربة مجانية</h3>
            <p style={{ margin: '0 0 22px', fontSize: 15, color: '#8A93A1' }}>جرّب كل شي قبل ما تقرر</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 24 }}>
              <span style={{ fontSize: 46, fontWeight: 700, color: '#1A2130' }}>14 يوم</span>
              <span style={{ fontSize: 17, color: '#59616F' }}>مجاناً</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginBottom: 30 }}>
              {trialBullets.map((b) => (
                <span key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: '#3F4855' }}>
                  <Check size={19} stroke="#1C8A5A" style={{ flex: 'none' }} />
                  {b}
                </span>
              ))}
            </div>
            <motion.a
              href="#download"
              whileHover={{ borderColor: '#1F4E79' }}
              whileTap={{ scale: 0.98 }}
              style={{
                marginTop: 'auto',
                display: 'block',
                textAlign: 'center',
                background: '#fff',
                color: '#1F4E79',
                padding: 15,
                borderRadius: 11,
                fontWeight: 600,
                fontSize: 17,
                border: '1.5px solid #CFD6DF',
              }}
            >
              ابدأ التجربة
            </motion.a>
          </motion.div>
        </RevealItem>

        {/* Permanent license */}
        <RevealItem style={{ display: 'flex' }}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            style={{
              position: 'relative',
              background: 'linear-gradient(155deg,#1F4E79 0%,#143650 100%)',
              borderRadius: 20,
              padding: 38,
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              boxShadow: '0 30px 60px -26px rgba(20,54,80,.6)',
            }}
          >
            <h3 style={{ margin: '0 0 6px', fontSize: 22, fontWeight: 700, color: '#fff' }}>رخصة دائمة</h3>
            <p style={{ margin: '0 0 22px', fontSize: 15, color: '#9BC0DC' }}>ملكية كاملة، بلا اشتراك</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 42, fontWeight: 700, color: '#fff', direction: 'ltr' }}>125,000</span>
              <span style={{ fontSize: 17, color: '#9BC0DC' }}>د.ع</span>
            </div>
            <p style={{ margin: '0 0 24px', fontSize: 15, color: '#C77A12', fontWeight: 700 }}>
              دفعة وحدة — رخصة مدى الحياة، بلا اشتراك شهري
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginBottom: 30 }}>
              {permBullets.map((b) => (
                <span key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: '#EAF1F7' }}>
                  <Check size={19} stroke="#C77A12" strokeWidth={2.6} style={{ flex: 'none' }} />
                  {b}
                </span>
              ))}
            </div>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.03, backgroundColor: '#b06d0f' }}
              whileTap={{ scale: 0.97 }}
              style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
                background: '#C77A12',
                color: '#fff',
                padding: 16,
                borderRadius: 11,
                fontWeight: 700,
                fontSize: 17,
              }}
            >
              <WhatsAppGlyph size={19} />
              اطلب رخصتك الآن
            </motion.a>
          </motion.div>
        </RevealItem>
      </Stagger>

      <Reveal
        style={{
          textAlign: 'center',
          margin: '30px auto 0',
          maxWidth: 760,
          fontSize: 16,
          color: '#59616F',
          lineHeight: 1.8,
        }}
      >
        <strong style={{ color: '#143650' }}>طريقة الشراء:</strong> تواصل معنا بالواتساب ← ادفع نقداً أو عن
        طريق زين كاش ← نرسل لك مفتاح التفعيل مباشرة. الدعم شخصي ومباشر.
      </Reveal>
    </section>
  )
}
