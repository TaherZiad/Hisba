import { motion } from 'motion/react'
import { Reveal, Stagger, RevealItem, SectionHeading } from './Motion'
import { ZoomImage } from './Lightbox'
import { AndroidGlyph } from './icons'
import { cardHover } from '../lib/motion'

type Shot = {
  src: string
  alt: string
  caption: string
  big?: boolean
}

const row1: Shot[] = [
  { src: '/assets/app-dashboard.png', alt: 'اللوحة الرئيسية — أداء محلك اليوم', caption: 'لوحة التحكم', big: true },
  { src: '/assets/app-cashier.png', alt: 'شاشة الكاشير (نقطة البيع)', caption: 'الكاشير', big: true },
]

const row2: Shot[] = [
  { src: '/assets/app-installments.png', alt: 'الأقساط — أقساط اليوم والمتأخرون مع الكفيل', caption: 'أقساط اليوم' },
  { src: '/assets/app-lists.png', alt: 'قوائم بيع الجملة (قائمة تجهيز)', caption: 'قوائم الجملة' },
  { src: '/assets/app-customer.png', alt: 'صفحة الزبون وكشف الحساب وأعمار الديون', caption: 'صفحة الزبون' },
]

/** The Android build — same app, phone layout. */
const mobileShots: Shot[] = [
  { src: '/assets/mobile-dashboard.jpg', alt: 'لوحة التحكم على الأندرويد', caption: 'لوحة التحكم' },
  { src: '/assets/mobile-cashier.jpg', alt: 'الكاشير على الأندرويد', caption: 'الكاشير' },
  { src: '/assets/mobile-installments.jpg', alt: 'الأقساط والعقود على الأندرويد', caption: 'الأقساط' },
]

function ShotCard({ shot }: { shot: Shot }) {
  const big = shot.big
  return (
    <RevealItem style={{ minWidth: 0 }}>
      <motion.div
        {...cardHover}
        style={{
          background: '#fff',
          border: '1px solid #E2E6EC',
          borderRadius: 16,
          padding: 8,
          boxShadow: big
            ? '0 20px 46px -26px rgba(20,54,80,.4)'
            : '0 16px 40px -26px rgba(20,54,80,.35)',
        }}
      >
        <div
          style={{
            position: 'relative',
            aspectRatio: '1918 / 1009',
            borderRadius: 11,
            overflow: 'hidden',
          }}
        >
          <ZoomImage src={shot.src} alt={shot.alt} objectPosition="top" />
          <span
            style={{
              position: 'absolute',
              bottom: big ? 12 : 10,
              insetInlineEnd: big ? 12 : 10,
              background: 'rgba(20,54,80,.85)',
              color: '#fff',
              padding: big ? '5px 12px' : '4px 10px',
              borderRadius: big ? 8 : 7,
              fontSize: big ? 13 : 12,
              fontWeight: 600,
              pointerEvents: 'none',
            }}
          >
            {shot.caption}
          </span>
        </div>
      </motion.div>
    </RevealItem>
  )
}

/** Portrait frame for the phone build — native shot is 1220 × 2712. */
function PhoneCard({ shot }: { shot: Shot }) {
  return (
    <RevealItem style={{ minWidth: 0 }}>
      <motion.div
        {...cardHover}
        style={{
          background: '#fff',
          border: '1px solid #E2E6EC',
          borderRadius: 26,
          padding: 7,
          boxShadow: '0 22px 48px -26px rgba(20,54,80,.42)',
        }}
      >
        <div
          style={{
            position: 'relative',
            aspectRatio: '1220 / 2712',
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          <ZoomImage src={shot.src} alt={shot.alt} objectPosition="top" />
          <span
            style={{
              position: 'absolute',
              bottom: 10,
              insetInlineEnd: 10,
              background: 'rgba(20,54,80,.85)',
              color: '#fff',
              padding: '4px 10px',
              borderRadius: 7,
              fontSize: 12,
              fontWeight: 600,
              pointerEvents: 'none',
            }}
          >
            {shot.caption}
          </span>
        </div>
      </motion.div>
    </RevealItem>
  )
}

export function Screenshots() {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 24px 40px' }}>
      <SectionHeading
        label="لقطات من التطبيق"
        title="شوف حِسبة بعينك"
        sub="لوحة التحكم، الكاشير، أقساط اليوم، قوائم تجهيز الجملة، وصفحة الزبون — بواجهة عربية مرتّبة على ويندوز وأندرويد. اضغط أي لقطة لتكبيرها."
      />

      <Stagger
        className="shots-row1"
        stagger={0.08}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}
      >
        {row1.map((s) => (
          <ShotCard key={s.src} shot={s} />
        ))}
      </Stagger>

      <Stagger className="grid-3" stagger={0.08} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {row2.map((s) => (
          <ShotCard key={s.src} shot={s} />
        ))}
      </Stagger>

      {/* Same app on the phone */}
      <Reveal
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          margin: '54px 0 22px',
          fontSize: 17,
          fontWeight: 600,
          color: '#143650',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            width: 30,
            height: 30,
            borderRadius: 9,
            background: '#1C8A5A',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 'none',
          }}
        >
          <AndroidGlyph size={18} />
        </span>
        ونفس التطبيق على هاتفك — نسخة أندرويد
      </Reveal>

      <Stagger
        className="phone-row"
        stagger={0.08}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 210px))',
          justifyContent: 'center',
          gap: 20,
        }}
      >
        {mobileShots.map((s) => (
          <PhoneCard key={s.src} shot={s} />
        ))}
      </Stagger>
    </section>
  )
}
