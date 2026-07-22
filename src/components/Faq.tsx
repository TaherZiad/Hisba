import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Reveal, Stagger, RevealItem } from './Motion'

const faqs: { q: string; a: string }[] = [
  {
    q: 'هل يشتغل بدون إنترنت؟ وشلون المزامنة؟',
    a: 'نعم، حِسبة تشتغل 100٪ أوفلاين والبيع ما يتوقف أبداً. الإنترنت يحتاجه فقط لرفع بياناتك ومزامنتها على السحابة كنسخة احتياطية — وتصير المزامنة تلقائياً أول ما يرجع النت، مع مؤشّر يوريك حالة المزامنة.',
  },
  {
    q: 'أشتغل جملة لو مفرد — أي وضع يناسبني؟',
    a: 'على أول تشغيل تختار نوع محلك. وضع «التجزئة» يعطيك كاشير سريع للبيع بالمفرّد. وضع «الجملة» يشيل الكاشير ويعطيك بدله «قائمة تجهيز»: تجهّز قوائم للمحلات، تطبعها، تُحفظ أجلاً، وتسجّل التسديد لاحقاً — وكل محل له حسابه المستقل.',
  },
  {
    q: 'هل يدعم الأقساط والكفيل؟',
    a: 'نعم، وهي ميزتنا الأقوى: عقد تقسيط + بيانات كفيل كاملة + صور مستندات + ربط بـ IMEI الجهاز + جدول أقساط تلقائي + شاشتَي «أقساط اليوم» و«المتأخرون» + تذكير واتساب + طباعة العقد A4.',
  },
  {
    q: 'لو ضاع جهازي؟',
    a: 'بياناتك محفوظة بالسحابة عند المزامنة، وعندك ملف نسخة احتياطية محلي — نصّب التطبيق بجهاز جديد وأدخل نفس المفتاح، ترجع بياناتك.',
  },
  {
    q: 'هل فيه اشتراك شهري؟',
    a: 'لا — رخصة مدى الحياة، دفعة وحدة. التطبيق يبقى لك بلا رسوم متكررة.',
  },
  {
    q: 'شنو يطبع؟ وعلى أي طابعة؟',
    a: 'إيصال حراري 58/80 مم للكاشير، ومستندات A4 (عقود تقسيط، كشوف حساب، قوائم جملة) على أي طابعة عادية. وتختار من 6 قوالب طباعة احترافية مع معاينة حيّة قبل ما تعتمدها.',
  },
  {
    q: 'كيف أحصل عليه؟',
    a: 'تواصل معنا بالواتساب، تدفع نقداً أو عن طريق زين كاش، ونرسل لك مفتاح التفعيل مباشرة. تقدر تجرّبه 14 يوم مجاناً قبل الشراء.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <RevealItem
      style={{
        background: '#fff',
        border: '1px solid #E2E6EC',
        borderRadius: 14,
        padding: '0 22px',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          all: 'unset',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 14,
          padding: '20px 0',
          width: '100%',
          fontSize: 18,
          fontWeight: 600,
          color: '#1A2130',
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        {q}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{ flex: 'none', color: '#1F4E79', fontSize: 24, fontWeight: 400, lineHeight: 1 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ margin: '0 0 20px', fontSize: 16, color: '#59616F', lineHeight: 1.75 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealItem>
  )
}

export function Faq() {
  return (
    <section id="faq" style={{ maxWidth: 820, margin: '0 auto', padding: '70px 24px 40px' }}>
      <Reveal style={{ textAlign: 'center', margin: '0 auto 44px' }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#C77A12', letterSpacing: '.5px' }}>
          الأسئلة الشائعة
        </span>
        <h2 style={{ margin: '10px 0 0', fontSize: 40, fontWeight: 700, color: '#1A2130', letterSpacing: '-.5px' }}>
          كل اللي تريد تعرفه
        </h2>
      </Reveal>

      <Stagger stagger={0.06} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqs.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </Stagger>
    </section>
  )
}
