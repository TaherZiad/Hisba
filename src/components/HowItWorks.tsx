import { Pop3D, Reveal, Stagger, RevealItem } from './Motion'

const steps = [
  { n: '1', title: 'حمّل واختر نوعك', body: 'نزّل التطبيق، أدخل مفتاح التفعيل، واختر نوع محلك: تجزئة أو جملة.' },
  { n: '2', title: 'استخدم محلك', body: 'بيع، سجّل ديون وأقساط، جهّز قوائم الجملة، وتابع مخزونك — كله أوفلاين وسريع.' },
  { n: '3', title: 'زامن واطمئن', body: 'بياناتك ترتفع تلقائياً للسحابة عند وجود النت، ومحفوظة للأبد.' },
]

export function HowItWorks() {
  return (
    <section id="how" style={{ background: '#143650', marginTop: 56 }}>
      <Pop3D style={{ maxWidth: 1200, margin: '0 auto', padding: '90px 24px' }}>
        <Reveal style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#C77A12', letterSpacing: '.5px' }}>كيف يعمل؟</span>
          <h2 style={{ margin: '10px 0 0', fontSize: 40, fontWeight: 700, color: '#fff', letterSpacing: '-.5px' }}>
            تبدأ بثلاث خطوات فقط
          </h2>
        </Reveal>

        <Stagger className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 26 }}>
          {steps.map((s) => (
            <RevealItem
              key={s.n}
              style={{
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(234,241,247,.14)',
                borderRadius: 16,
                padding: 34,
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  background: '#C77A12',
                  color: '#fff',
                  fontSize: 24,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                {s.n}
              </div>
              <h3 style={{ margin: '0 0 10px', fontSize: 22, fontWeight: 700, color: '#fff' }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 16, color: '#9BA7B5', lineHeight: 1.75 }}>{s.body}</p>
            </RevealItem>
          ))}
        </Stagger>
      </Pop3D>
    </section>
  )
}
