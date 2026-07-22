import { Fragment, type ReactNode } from 'react'
import { Stagger, RevealItem } from './Motion'
import { IconOffline, IconShield, IconChat } from './icons'

const items: { icon: ReactNode; label: string }[] = [
  { icon: <IconOffline />, label: 'يعمل أوفلاين + مزامنة سحابية' },
  { icon: <IconShield />, label: 'رخصة دائمة — دفعة وحدة' },
  { icon: <IconChat />, label: 'دعم عراقي مباشر بالواتساب' },
]

export function TrustBar() {
  return (
    <section style={{ background: '#143650' }}>
      <Stagger
        stagger={0.1}
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '22px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '14px 46px',
          color: '#EAF1F7',
          fontSize: 17,
          fontWeight: 600,
        }}
      >
        {items.map((it, i) => (
          <Fragment key={it.label}>
            <RevealItem style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              {it.icon}
              {it.label}
            </RevealItem>
            {i < items.length - 1 && (
              <span style={{ width: 1, height: 24, background: 'rgba(234,241,247,.22)' }} />
            )}
          </Fragment>
        ))}
      </Stagger>
    </section>
  )
}
