import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { Check, DownloadIcon } from './icons'
import { ZoomImage } from './Lightbox'
import { EASE_OUT } from '../lib/motion'

const loadContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const loadItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

const trustItems = ['بدون بطاقة', 'كل المميزات', 'دعم عراقي مباشر']

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  // Subtle parallax drift on the product card as the hero scrolls away.
  const parallax = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -46])

  return (
    <header
      style={{
        background:
          'radial-gradient(1100px 520px at 82% -8%, #EAF1F7 0%, rgba(234,241,247,0) 62%), #F1F4F8',
        overflow: 'hidden',
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '78px 24px 90px',
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        {/* Left column — words/lines animate in on load */}
        <motion.div
          variants={loadContainer}
          initial="hidden"
          animate="show"
          style={{ minWidth: 0 }}
        >
          <motion.div
            variants={loadItem}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#fff',
              border: '1px solid #E2E6EC',
              padding: '7px 14px',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              color: '#143650',
              marginBottom: 22,
            }}
          >
            <span
              style={{ width: 8, height: 8, borderRadius: '50%', background: '#C77A12', display: 'inline-block' }}
            />
            أول نظام عراقي متكامل للبيع والتقسيط بكفيل
          </motion.div>

          <motion.h1
            variants={loadItem}
            style={{
              margin: '0 0 18px',
              fontSize: 52,
              lineHeight: 1.18,
              fontWeight: 700,
              color: '#1A2130',
              letterSpacing: '-1px',
              textWrap: 'balance',
            } as CSSProperties}
          >
            نظام محلك المتكامل — بيع، مخزون، ديون، وأقساط بكفيل.{' '}
            <span style={{ color: '#1F4E79' }}>يعمل أوفلاين ويزامن أونلاين.</span>
          </motion.h1>

          <motion.p
            variants={loadItem}
            style={{
              margin: '0 0 30px',
              fontSize: 20,
              lineHeight: 1.75,
              color: '#59616F',
              maxWidth: 560,
              textWrap: 'pretty',
            } as CSSProperties}
          >
            يشتغل 100٪ أوفلاين — الكاشير والمخزون والديون والأقساط بكفيل بتطبيق واحد على حاسوبك، مع تتبّع IMEI/سيريال وتعدد عملات (دينار/دولار). رخصة دائمة، دفعة وحدة.
          </motion.p>

          <motion.div
            variants={loadItem}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 22 }}
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.03, backgroundColor: '#1A4569' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: '#1F4E79',
                color: '#fff',
                padding: '16px 30px',
                borderRadius: 11,
                fontWeight: 600,
                fontSize: 18,
                boxShadow: '0 10px 26px -8px rgba(31,78,121,.55)',
              }}
            >
              <DownloadIcon size={20} />
              حمّل التطبيق الآن
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.03, borderColor: '#1F4E79' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: '#fff',
                color: '#1F4E79',
                padding: '16px 28px',
                borderRadius: 11,
                fontWeight: 600,
                fontSize: 18,
                border: '1.5px solid #CFD6DF',
              }}
            >
              جرّبه 14 يوم مجاناً
            </motion.a>
          </motion.div>

          <motion.div
            variants={loadItem}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 22, fontSize: 15, color: '#59616F', fontWeight: 500 }}
          >
            {trustItems.map((t) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                <Check size={18} />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — floating product card (CSS float + scroll parallax) */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.25 }}
          style={{ minWidth: 0, y: parallax }}
        >
          <div className="hero-float">
            <div
              style={{
                background: '#fff',
                border: '1px solid #E2E6EC',
                borderRadius: 18,
                padding: 10,
                boxShadow: '0 40px 80px -32px rgba(20,54,80,.45)',
              }}
            >
              <div style={{ aspectRatio: '1918 / 1009', borderRadius: 11, overflow: 'hidden', position: 'relative' }}>
                <ZoomImage src="/assets/app-dashboard.png" alt="لوحة التحكم — نظرة عامة على أداء محلك" objectPosition="top" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
