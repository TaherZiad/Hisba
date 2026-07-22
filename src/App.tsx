import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import Lenis from 'lenis'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { Pain } from './components/Pain'
import { BusinessModes } from './components/BusinessModes'
import { Features } from './components/Features'
import { Hardware } from './components/Hardware'
import { HowItWorks } from './components/HowItWorks'
import { Screenshots } from './components/Screenshots'
import { Pricing } from './components/Pricing'
import { InstallVideo } from './components/InstallVideo'
import { Download } from './components/Download'
import { Faq } from './components/Faq'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { LightboxProvider } from './components/Lightbox'

const NAV_OFFSET = 96

export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let lenis: Lenis | null = null
    let rafId = 0

    if (!prefersReduced) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true })
      const raf = (time: number) => {
        lenis?.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    // Smooth anchor scrolling with a 96px offset so links clear the sticky nav.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const el = document.querySelector(href)
      if (!el) return
      e.preventDefault()
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -NAV_OFFSET })
      } else {
        const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - NAV_OFFSET
        window.scrollTo({ top: y, behavior: prefersReduced ? 'auto' : 'smooth' })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <LightboxProvider>
        <div dir="rtl" lang="ar" style={{ minHeight: '100vh' }}>
          <Navbar />
        <div id="top" />
        <Hero />
        <TrustBar />
        <Pain />
        <BusinessModes />
        <Features />
        <Hardware />
        <HowItWorks />
        <Screenshots />
        <Pricing />
        <InstallVideo />
        <Download />
        <Faq />
        <FinalCTA />
        <Footer />
          <FloatingWhatsApp />
        </div>
      </LightboxProvider>
    </MotionConfig>
  )
}
