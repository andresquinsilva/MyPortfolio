/** =====================================================
 * File: src/components/Logo.jsx
 * Student's Name: Andres Quintero
 * StudentID: 301466379
 * Date: 2025-09-13
 * ==================================================== */
export default function Logo({ size = 36 }) {
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" aria-label="AQ Logo" role="img">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#5ea1ff" />
          <stop offset="100%" stopColor="#9b5efe" />
        </linearGradient>
      </defs>
      <polygon points="50,4 92,27 92,73 50,96 8,73 8,27"
        fill="url(#g)" stroke="#1f2a37" strokeWidth="2" />
      <text x="50" y="60" textAnchor="middle"
        fontFamily="Inter, ui-sans-serif" fontWeight="800"
        fontSize="44" fill="#0b0e13">AQ</text>
    </svg>
  )
}
