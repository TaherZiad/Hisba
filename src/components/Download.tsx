import { motion } from 'motion/react'
import { Reveal } from './Motion'
import { DownloadIcon, WindowsGlyph, AndroidGlyph } from './icons'
import {
  DOWNLOAD_URL,
  DOWNLOAD_FILENAME,
  ANDROID_DOWNLOAD_URL,
  ANDROID_DOWNLOAD_FILENAME,
} from '../lib/motion'

export function Download() {
  return (
    <section id="download" style={{ maxWidth: 1000, margin: '0 auto', padding: '70px 24px 40px' }}>
      <Reveal
        style={{
          background: '#EAF1F7',
          border: '1px solid #D6E3EF',
          borderRadius: 22,
          padding: 52,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 16,
            background: '#1F4E79',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 22px',
          }}
        >
          <DownloadIcon size={30} />
        </div>
        <h2 style={{ margin: '0 0 12px', fontSize: 36, fontWeight: 700, color: '#143650', letterSpacing: '-.5px' }}>
          حمّل حِسبة
        </h2>
        <p style={{ margin: '0 0 28px', fontSize: 18, color: '#59616F' }}>
          ابدأ خلال دقائق — على حاسوبك أو على هاتفك.
        </p>
        {/* Both builds are attached to the same GitHub Release — see README. */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 14,
          }}
        >
          <motion.a
            href={DOWNLOAD_URL}
            download={DOWNLOAD_FILENAME}
            whileHover={{ scale: 1.03, backgroundColor: '#1A4569' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 11,
              background: '#1F4E79',
              color: '#fff',
              padding: '18px 36px',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 19,
              boxShadow: '0 14px 30px -10px rgba(31,78,121,.6)',
            }}
          >
            <WindowsGlyph size={23} />
            حمّل لويندوز
          </motion.a>
          <motion.a
            href={ANDROID_DOWNLOAD_URL}
            download={ANDROID_DOWNLOAD_FILENAME}
            whileHover={{ scale: 1.03, backgroundColor: '#177449' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 11,
              background: '#1C8A5A',
              color: '#fff',
              padding: '18px 36px',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 19,
              boxShadow: '0 14px 30px -10px rgba(28,138,90,.55)',
            }}
          >
            <AndroidGlyph size={23} />
            حمّل لأندرويد (APK)
          </motion.a>
        </div>
      </Reveal>
    </section>
  )
}
