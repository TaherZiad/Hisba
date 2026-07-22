import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { Reveal, Stagger, RevealItem, SectionHeading } from './Motion'
import {
  Check,
  IconStar,
  IconCashier,
  IconInventory,
  IconDebts,
  IconReports,
  IconPurchases,
  IconTemplates,
  IconCurrency,
  IconSync,
} from './icons'
import { ZoomImage } from './Lightbox'
import { cardHover } from '../lib/motion'

const bullets = [
  'بيانات الكفيل (اسم، هاتف، هوية، عنوان) + رفع صور المستندات',
  'ربط العقد بـ IMEI الجهاز + جدول أقساط تلقائي وشاشتَي «أقساط اليوم» و«المتأخرون»',
  'تذكير واتساب مجاني (wa.me) + طباعة العقد A4 بالعربي',
]

const features: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <IconCashier />,
    title: 'الكاشير (نقطة البيع)',
    body: 'بحث بالمنتج، مسدس باركود أو كاميرا، فلاتر تصنيفات، عرض بطاقات أو جدول، تعليق وتفريغ السلة، اختصارات لوحة مفاتيح، وطباعة حرارية (58/80مم) أو A4.',
  },
  {
    icon: <IconInventory />,
    title: 'المخزون',
    body: 'منتجات وتصنيفات ووحدات، تنبيه حد أدنى وقرب انتهاء، رقم IMEI/سيريال للأجهزة، تكلفة متوسط مرجّح، واستيراد من Excel.',
  },
  {
    icon: <IconDebts />,
    title: 'الديون والزبائن',
    body: 'كشف حساب لكل زبون، أعمار ديون (30/60/90)، تسديد جزئي، تصفير حساب، وزر تذكير واتساب مباشر.',
  },
  {
    icon: <IconPurchases />,
    title: 'المشتريات والموردون',
    body: 'شراء تفصيلي يزيد المخزون (وتضيف منتج جديد بالطاير)، أو شراء سريع بصورة فاتورة المورد ومبلغها — وكل مورد له كشف حساب.',
  },
  {
    icon: <IconTemplates />,
    title: 'قوالب طباعة احترافية',
    body: '6 قوالب فواتير وقوائم (رسمي/عصري/مفصّل/جملة/بسيط/نظيف) مع معاينة حيّة بالإعدادات قبل ما تختار — بشعارك واسم البائع والمجاميع والمدفوع والأجل.',
  },
  {
    icon: <IconReports />,
    title: 'التقارير والأرباح',
    body: 'مبيعات يومية وحسب الفترة، الربح الصافي، الأكثر مبيعاً والراكد، قيمة المخزون، وتصدير التقارير.',
  },
  {
    icon: <IconCurrency />,
    title: 'تعدد عملات وإدخال ذكي',
    body: 'دينار ودولار بسعر صرف قابل للتعديل، فواصل آلاف تلقائية وأنت تكتب المبلغ، والمبالغ تُخزّن كأعداد صحيحة — دقّة بلا أخطاء تقريب.',
  },
  {
    icon: <IconSync />,
    title: 'أوفلاين + مزامنة وحماية',
    body: 'يشتغل 100٪ أوفلاين والبيع ما يتوقف. وعند النت يزامن تلقائياً مع مؤشّر حالة، ملف نسخ احتياطي محلي، سجل تدقيق، ووضع ليلي.',
  },
]

export function Features() {
  return (
    <section id="features" style={{ maxWidth: 1200, margin: '0 auto', padding: '70px 24px 40px' }}>
      <SectionHeading
        label="المميزات"
        title="كل محلك بجيبك — بمكان واحد"
        sub="كاشير، مخزون، ديون، مشتريات، وأقساط بكفيل — مربوطة ببعض، تشتغل أوفلاين، ومصمّمة لتجارتك."
      />

      {/* Star feature banner — installments */}
      <Reveal>
        <div
          className="star-banner"
          style={{
            background: 'linear-gradient(135deg,#EAF1F7 0%,#D6E3EF 100%)',
            border: '1px solid #D6E3EF',
            borderRadius: 20,
            padding: 40,
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 36,
            alignItems: 'center',
            marginBottom: 24,
            overflow: 'hidden',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#C77A12',
                color: '#fff',
                padding: '6px 13px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              <IconStar size={15} />
              الميزة الحصرية — نجم العرض
            </div>
            <h3 style={{ margin: '0 0 14px', fontSize: 30, fontWeight: 700, color: '#143650' }}>الأقساط بكفيل</h3>
            <p style={{ margin: '0 0 20px', fontSize: 17, color: '#3F4855', lineHeight: 1.75 }}>
              عقد تقسيط من فاتورة البيع: مقدّم + عدد أقساط + زيادة + دورية — مع بيانات الكفيل الكاملة ورفع صور
              المستندات.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {bullets.map((b) => (
                <span
                  key={b}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 16, color: '#1A2130', fontWeight: 500 }}
                >
                  <Check size={20} stroke="#1F4E79" style={{ flex: 'none', marginTop: 2 }} />
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              minWidth: 0,
              borderRadius: 14,
              overflow: 'hidden',
              height: 320,
              boxShadow: '0 24px 50px -20px rgba(20,54,80,.4)',
            }}
          >
            <ZoomImage src="/assets/app-contract.png" alt="عقد تقسيط جديد بكفيل — المبالغ والجدولة و IMEI" objectPosition="top" />
          </div>
        </div>
      </Reveal>

      {/* 6-card feature grid */}
      <Stagger className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {features.map((f) => (
          <RevealItem key={f.title}>
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
                  background: '#EAF1F7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 18,
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700, color: '#1A2130' }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 16, color: '#59616F', lineHeight: 1.7 }}>{f.body}</p>
            </motion.div>
          </RevealItem>
        ))}
      </Stagger>
    </section>
  )
}
