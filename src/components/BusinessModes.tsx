import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { Stagger, RevealItem, SectionHeading } from './Motion'
import { Check, IconStore, IconWarehouse } from './icons'
import { cardHover } from '../lib/motion'

type Mode = {
  icon: ReactNode
  tag: string
  title: string
  body: string
  bullets: string[]
  featured?: boolean
}

const modes: Mode[] = [
  {
    icon: <IconStore size={30} stroke="#1F4E79" />,
    tag: 'محل تجزئة',
    title: 'وضع المفرد',
    body: 'للمحلات اللي تبيع بالمفرّد للزبون مباشرة — كاشير سريع وكل شي بضغطة.',
    bullets: [
      'كاشير سريع (نقطة بيع) بالباركود أو بحث بالاسم',
      'بيع نقد ودَين مختلط بنفس الفاتورة',
      'أقساط بكفيل + طباعة إيصال حراري وعقد',
    ],
  },
  {
    icon: <IconWarehouse size={30} stroke="#fff" />,
    tag: 'مخزن جملة',
    title: 'وضع الجملة',
    body: 'للموزّعين والمخازن — بلا كاشير مفرد، بدله «قائمة تجهيز» للمحلات.',
    bullets: [
      'جهّز قوائم بضاعة للمحلات واطبعها',
      'تُحفظ أجلاً افتراضياً — تسجّل التسديد كامل أو جزئي لاحقاً',
      'كل محل له حسابه وكشفه المستقل',
    ],
    featured: true,
  },
]

export function BusinessModes() {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '70px 24px 40px' }}>
      <SectionHeading
        label="اختر نوع محلك"
        title="تطبيق واحد… يشتغل بوضعين"
        sub="على أول تشغيل تختار نوع محلك — تجزئة أو جملة — والتطبيق يعيد ترتيب نفسه ليناسب طريقة شغلك."
        maxWidth={760}
      />

      <Stagger
        className="modes-grid"
        stagger={0.12}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, alignItems: 'stretch' }}
      >
        {modes.map((m) => {
          const dark = m.featured
          return (
            <RevealItem key={m.title} style={{ display: 'flex' }}>
              <motion.div
                {...cardHover}
                style={{
                  width: '100%',
                  borderRadius: 20,
                  padding: 36,
                  display: 'flex',
                  flexDirection: 'column',
                  background: dark ? 'linear-gradient(155deg,#1F4E79 0%,#143650 100%)' : '#fff',
                  border: dark ? 'none' : '1px solid #E2E6EC',
                  boxShadow: dark ? '0 30px 60px -26px rgba(20,54,80,.6)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      flex: 'none',
                      background: dark ? 'rgba(255,255,255,.1)' : '#EAF1F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {m.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: dark ? '#fff' : '#C77A12',
                      background: dark ? 'rgba(199,122,18,.9)' : '#FBF0E1',
                      padding: '6px 13px',
                      borderRadius: 999,
                    }}
                  >
                    {m.tag}
                  </span>
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 24, fontWeight: 700, color: dark ? '#fff' : '#1A2130' }}>
                  {m.title}
                </h3>
                <p
                  style={{
                    margin: '0 0 20px',
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: dark ? '#9BC0DC' : '#59616F',
                  }}
                >
                  {m.body}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 'auto' }}>
                  {m.bullets.map((b) => (
                    <span
                      key={b}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        fontSize: 16,
                        color: dark ? '#EAF1F7' : '#3F4855',
                      }}
                    >
                      <Check
                        size={19}
                        stroke={dark ? '#C77A12' : '#1F4E79'}
                        strokeWidth={2.5}
                        style={{ flex: 'none', marginTop: 2 }}
                      />
                      {b}
                    </span>
                  ))}
                </div>
              </motion.div>
            </RevealItem>
          )
        })}
      </Stagger>
    </section>
  )
}
