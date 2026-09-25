export default function ContactHeroVisual() {
  return (
    <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
      <svg
        className="w-full h-full"
        viewBox="0 0 460 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Conversation connects Software, Marketing, and Academy"
      >
        {/* Left Topic Text and Bullet Nodes */}
        {/* Software */}
        <text
          x="30"
          y="75"
          className="text-[13px] font-medium fill-[#111827]"
          fontFamily="var(--font-sans, system-ui, sans-serif)"
        >
          Software
        </text>
        <circle cx="120" cy="71" r="3.5" fill="#111827" />

        {/* Marketing */}
        <text
          x="30"
          y="155"
          className="text-[13px] font-medium fill-[#111827]"
          fontFamily="var(--font-sans, system-ui, sans-serif)"
        >
          Marketing
        </text>
        <circle cx="120" cy="151" r="3.5" fill="#111827" />

        {/* Academy */}
        <text
          x="30"
          y="235"
          className="text-[13px] font-medium fill-[#111827]"
          fontFamily="var(--font-sans, system-ui, sans-serif)"
        >
          Academy
        </text>
        <circle cx="120" cy="231" r="3.5" fill="#111827" />

        {/* Converging Connector Curves to Center (330, 151) */}
        <path
          d="M 120 71 C 200 71, 240 151, 330 151"
          stroke="#111827"
          strokeWidth="1.2"
          strokeOpacity="0.25"
          fill="none"
        />
        <path
          d="M 120 151 L 330 151"
          stroke="#111827"
          strokeWidth="1.2"
          strokeOpacity="0.25"
          fill="none"
        />
        <path
          d="M 120 231 C 200 231, 240 151, 330 151"
          stroke="#111827"
          strokeWidth="1.2"
          strokeOpacity="0.25"
          fill="none"
        />

        {/* Right Concentric Circles Visual Node */}
        {/* Outer subtle rings */}
        <circle
          cx="330"
          cy="151"
          r="80"
          stroke="#111827"
          strokeOpacity="0.05"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle
          cx="330"
          cy="151"
          r="62"
          stroke="#111827"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
        <circle
          cx="330"
          cy="151"
          r="48"
          fill="#faf9f5"
          stroke="#111827"
          strokeOpacity="0.15"
          strokeWidth="1.2"
        />

        {/* Inner Hub Center Dot */}
        <circle cx="330" cy="151" r="3.5" fill="#111827" />

        {/* Text inside circle */}
        <text
          x="330"
          y="138"
          textAnchor="middle"
          className="text-[10px] font-mono font-semibold fill-[#4b5563] tracking-[0.14em]"
        >
          A
        </text>
        <text
          x="330"
          y="152"
          textAnchor="middle"
          className="text-[10px] font-mono font-bold fill-[#111827] tracking-[0.14em]"
        >
          CONVERSATION
        </text>
        <text
          x="330"
          y="166"
          textAnchor="middle"
          className="text-[9px] font-mono font-medium fill-[#4b5563] tracking-[0.12em]"
        >
          STARTS HERE
        </text>
      </svg>
    </div>
  )
}
