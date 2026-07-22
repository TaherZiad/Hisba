import type { CSSProperties, ReactNode } from 'react'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from 'motion/react'
import { VIEWPORT, revealItem, staggerContainer } from '../lib/motion'

type CommonProps = {
  children: ReactNode
  style?: CSSProperties
  className?: string
  id?: string
}

/**
 * Standalone scroll-reveal element (fade + rise on enter).
 * Reduced-motion is honored globally via <MotionConfig reducedMotion="user">.
 */
export function Reveal({ children, style, className, id }: CommonProps) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={revealItem}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  )
}

/**
 * Stagger container — children (RevealItem) cascade in ~0.07s apart when the
 * container scrolls into view.
 */
export function Stagger({
  children,
  style,
  className,
  id,
  stagger = 0.07,
  delayChildren = 0,
}: CommonProps & { stagger?: number; delayChildren?: number }) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  )
}

/** A child of <Stagger> — inherits the cascade timing. */
export function RevealItem({
  children,
  style,
  className,
  variants = revealItem,
}: CommonProps & { variants?: Variants }) {
  return (
    <motion.div className={className} style={style} variants={variants}>
      {children}
    </motion.div>
  )
}

/**
 * 3D scroll "pop" — as the block crosses viewport center it tilts + scales
 * toward the viewer. Drives scale 0.9→1→0.9, rotateX +8→0→-8, opacity .5→1→.5,
 * smoothed with a spring. Disabled entirely under reduced-motion.
 */
export function Pop3D({ children, style, className, id }: CommonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const spring = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  const scale = useTransform(spring, [0, 0.5, 1], [0.9, 1, 0.9])
  const rotateX = useTransform(spring, [0, 0.5, 1], [8, 0, -8])
  const opacity = useTransform(spring, [0, 0.5, 1], [0.5, 1, 0.5])

  if (reduce) {
    return (
      <div id={id} className={className} style={style} ref={ref}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      id={id}
      ref={ref}
      className={className}
      style={{
        ...style,
        scale,
        rotateX,
        opacity,
        transformPerspective: 1300,
        transformOrigin: 'center',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  )
}

/** Centered section heading block: optional orange eyebrow label + H2 + sub. */
export function SectionHeading({
  label,
  title,
  sub,
  titleColor = '#1A2130',
  subColor = '#59616F',
  maxWidth = 740,
  marginBottom = 52,
}: {
  label?: string
  title: string
  sub?: string
  titleColor?: string
  subColor?: string
  maxWidth?: number
  marginBottom?: number
}) {
  return (
    <Reveal
      style={{
        textAlign: 'center',
        maxWidth,
        margin: `0 auto ${marginBottom}px`,
      }}
    >
      {label && (
        <span style={{ fontSize: 15, fontWeight: 700, color: '#C77A12', letterSpacing: '.5px' }}>
          {label}
        </span>
      )}
      <h2
        style={{
          margin: label ? '10px 0 14px' : '0 0 14px',
          fontSize: 40,
          fontWeight: 700,
          color: titleColor,
          letterSpacing: '-.5px',
        }}
      >
        {title}
      </h2>
      {sub && (
        <p style={{ margin: 0, fontSize: 19, color: subColor, lineHeight: 1.7, textWrap: 'pretty' } as CSSProperties}>
          {sub}
        </p>
      )}
    </Reveal>
  )
}
