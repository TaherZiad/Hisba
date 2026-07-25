/* Inline SVG logo — rounded-square gradient, white Arabic "ح", white circle + orange dot.
   variant="nav"   → gradient #1F4E79 → #143650
   variant="footer" → gradient #4C93C9 → #1F4E79 */

type LogoProps = { size?: number; variant?: 'nav' | 'footer' }

export function Logo({ size = 40, variant = 'nav' }: LogoProps) {
  const gradId = variant === 'footer' ? 'lgFoot' : 'lgNav'
  const stops =
    variant === 'footer'
      ? { from: '#4C93C9', to: '#1F4E79' }
      : { from: '#1F4E79', to: '#143650' }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flex: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={stops.from} />
          <stop offset="100%" stopColor={stops.to} />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="143" fill={`url(#${gradId})`} />
      <text
        x="256"
        y="256"
        fill="#fff"
        fontFamily="'Readex Pro','Tajawal',sans-serif"
        fontWeight="700"
        fontSize="287"
        textAnchor="middle"
        dominantBaseline="central"
      >
        ح
      </text>
      <circle cx="112" cy="400" r="66" fill="#fff" />
      <circle cx="112" cy="400" r="51" fill="#C77A12" />
    </svg>
  )
}
