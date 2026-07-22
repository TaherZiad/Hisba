import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { Reveal, Stagger, RevealItem, SectionHeading } from './Motion'
import { Check, IconBarcode, IconThermalPrinter, IconA4Printer } from './icons'
import { cardHover } from '../lib/motion'

type Card = {
  icon: ReactNode
  title: ReactNode
  body: string
  chip: string
}

const cards: Card[] = [
  {
    icon: <IconBarcode />,
    title: (
      <>
        قارئ الباركود <span style={{ fontSize: 15, fontWeight: 600, color: '#8A93A1' }}>(مسدس USB)</span>
      </>
    ),
    body: 'امسح المنتجات فوراً على الكاشير. يدعم أي مسدس باركود USB عادي (نوع لوحة المفاتيح) — توصله وتشتغل، بلا إعدادات.',
    chip: 'يعمل فوراً — Plug & Play',
  },
  {
    icon: <IconThermalPrinter />,
    title: (
      <>
        الطابعة الحرارية{' '}
        <span style={{ fontSize: 15, fontWeight: 600, color: '#8A93A1', direction: 'ltr' }}>(58/80mm)</span>
      </>
    ),
    body: 'تطبع إيصال البيع بالعربي تلقائياً بعد كل عملية. تدعم ورق 58mm و80mm. تنصّب تعريف الطابعة على ويندوز، تختارها من إعدادات التطبيق، وفيه زر «طباعة تجريبية».',
    chip: 'إيصال عربي تلقائي',
  },
  {
    icon: <IconA4Printer />,
    title: (
      <>
        الطابعة العادية / <span style={{ direction: 'ltr' }}>A4</span>
      </>
    ),
    body: 'تطبع عقود التقسيط، كشوف حساب الزبائن، وقوائم الجملة كمستندات A4 عربية مرتّبة — على أي طابعة منصّبة عندك.',
    chip: 'مستندات A4 بالعربي',
  },
]

export function Hardware() {
  return (
    <section id="hardware" style={{ maxWidth: 1200, margin: '0 auto', padding: '70px 24px 40px' }}>
      <SectionHeading
        label="التوافق"
        title="متوافق مع أجهزتك"
        sub="ما في ربط بأجهزة خاصة — استخدم قارئ الباركود والطابعة اللي عندك، أو اشترِ أي جهاز عادي بالسوق. حِسبة يشتغل معاها مباشرة."
        maxWidth={760}
      />

      <Stagger className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {cards.map((c, i) => (
          <RevealItem key={i}>
            <motion.div
              {...cardHover}
              style={{
                background: '#fff',
                border: '1px solid #E2E6EC',
                borderRadius: 16,
                padding: 32,
                height: '100%',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: '#EAF1F7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                {c.icon}
              </div>
              <h3 style={{ margin: '0 0 9px', fontSize: 21, fontWeight: 700, color: '#1A2130' }}>{c.title}</h3>
              <p style={{ margin: '0 0 16px', fontSize: 16, color: '#59616F', lineHeight: 1.75 }}>{c.body}</p>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1C8A5A',
                  background: '#E8F5EE',
                  padding: '6px 12px',
                  borderRadius: 8,
                }}
              >
                <Check size={15} stroke="#1C8A5A" strokeWidth={2.6} />
                {c.chip}
              </span>
            </motion.div>
          </RevealItem>
        ))}
      </Stagger>

      <Reveal
        style={{
          textAlign: 'center',
          margin: '28px auto 0',
          fontSize: 15,
          color: '#8A93A1',
          maxWidth: 640,
        }}
      >
        تطبيق ويندوز يشتغل مع أجهزة محلك القياسية — بلا حاجة لأجهزة خاصة أو مكلفة.
      </Reveal>
    </section>
  )
}
