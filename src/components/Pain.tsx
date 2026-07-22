import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { Reveal, Stagger, RevealItem } from './Motion'
import { IconLedger, IconPaper, IconMonitorOff } from './icons'
import { cardHover } from '../lib/motion'

const cards: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <IconLedger />,
    title: 'دفتر الديون الورقي',
    body: 'تنسى مين عليه فلوس، والدفتر يضيع أو يتمزّق — وما تعرف مجموع ديونك.',
  },
  {
    icon: <IconPaper />,
    title: 'الأقساط بالورقة والكمبيالة',
    body: 'بلا متابعة، بلا تذكير، وبلا كفيل موثّق — والمتأخرون يضيعون عليك.',
  },
  {
    icon: <IconMonitorOff />,
    title: 'برامج أجنبية معقّدة',
    body: 'بالإنجليزي، بلا ديون ولا أقساط ولا كفيل — وتتوقف إذا طار النت.',
  },
]

export function Pain() {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 24px 40px' }}>
      <Reveal style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 52px' }}>
        <h2 style={{ margin: '0 0 14px', fontSize: 40, fontWeight: 700, color: '#1A2130', letterSpacing: '-.5px' }}>
          تتعب وأنت تدير محلك بالطريقة القديمة؟
        </h2>
        <p style={{ margin: 0, fontSize: 19, color: '#59616F', lineHeight: 1.7 }}>
          الدفتر يضيع، الأقساط بلا متابعة، والبرامج الأجنبية معقّدة وتتوقف بلا نت.
        </p>
      </Reveal>

      <Stagger className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {cards.map((c) => (
          <RevealItem key={c.title}>
            <motion.div
              {...cardHover}
              style={{
                background: '#fff',
                border: '1px solid #E2E6EC',
                borderRadius: 16,
                padding: 30,
                height: '100%',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 13,
                  background: '#FBE9E7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 18,
                }}
              >
                {c.icon}
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700, color: '#1A2130' }}>{c.title}</h3>
              <p style={{ margin: 0, fontSize: 16, color: '#59616F', lineHeight: 1.7 }}>{c.body}</p>
            </motion.div>
          </RevealItem>
        ))}
      </Stagger>

      <Reveal
        style={{
          textAlign: 'center',
          margin: '44px auto 0',
          fontSize: 22,
          fontWeight: 700,
          color: '#143650',
          maxWidth: 760,
        }}
      >
        حِسبة تحلّها كلها — بنظام واحد، بلغتك، ويشتغل أوفلاين.
      </Reveal>
    </section>
  )
}
