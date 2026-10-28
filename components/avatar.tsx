export default function DeveloperAvatar({ size = 280 }: { size?: number }) {
  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size, maxWidth: "100%" }}
      aria-label="Illustrated developer avatar"
      role="img"
    >
      <div className="absolute inset-[7%] rounded-full border border-violet-300/25 pulse-ring" />
      <div className="absolute inset-[15%] rounded-full border border-cyan-200/20" />
      <div className="absolute inset-[22%] rounded-full bg-gradient-to-br from-violet-500/25 via-indigo-500/10 to-cyan-300/20 blur-2xl" />
      <svg viewBox="0 0 300 300" className="relative h-full w-full float-animation drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hoodie" x1="76" y1="177" x2="228" y2="292" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6"/><stop offset="1" stopColor="#0891B2"/>
          </linearGradient>
          <linearGradient id="skin" x1="112" y1="75" x2="194" y2="172" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8C7A3"/><stop offset="1" stopColor="#D99A79"/>
          </linearGradient>
          <linearGradient id="hair" x1="104" y1="43" x2="201" y2="115" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34304C"/><stop offset="1" stopColor="#12121D"/>
          </linearGradient>
        </defs>
        <circle cx="150" cy="150" r="112" fill="#11111C" stroke="#8B5CF6" strokeOpacity=".35"/>
        <path d="M64 274C70 224 98 193 130 185H170C203 194 231 225 237 274" fill="url(#hoodie)" stroke="#A78BFA" strokeOpacity=".65" strokeWidth="2"/>
        <path d="M121 184L150 220L180 184" stroke="#D9D3FF" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round"/>
        <path d="M137 170H164V201C164 214 137 214 137 201V170Z" fill="url(#skin)"/>
        <path d="M107 98C107 66 126 49 151 49C179 49 195 69 195 99V130C195 159 176 178 151 178C127 178 107 157 107 130V98Z" fill="url(#skin)"/>
        <path d="M103 112C96 89 98 62 116 48C129 28 160 31 174 39C198 46 207 68 199 98L190 116L184 87C162 91 139 79 126 67C124 87 113 100 103 112Z" fill="url(#hair)"/>
        <path d="M122 119C129 114 137 114 143 119M160 119C166 114 174 114 180 119" stroke="#4B3440" strokeWidth="3" strokeLinecap="round"/>
        <path d="M132 128H137M166 128H171" stroke="#201C2C" strokeWidth="5" strokeLinecap="round"/>
        <path d="M146 145C151 149 158 149 163 144" stroke="#9F554D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M111 104C106 124 109 148 126 163" stroke="#FDE1C8" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round"/>
        <path d="M86 274L104 229L132 250L150 274L168 250L196 229L214 274" fill="#11111C" fillOpacity=".65"/>
        <rect x="188" y="201" width="49" height="34" rx="7" fill="#0A0A12" stroke="#67E8F9" strokeWidth="1.5"/>
        <path d="M199 211L205 217L199 223M211 223H225" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="224" cy="73" r="5" fill="#67E8F9"/><circle cx="78" cy="170" r="3" fill="#A78BFA"/>
      </svg>
      <div className="absolute bottom-[5%] right-[0%] rounded-2xl border border-cyan-200/25 bg-[#10101a]/90 px-3 py-2 text-xs text-cyan-100 shadow-xl backdrop-blur">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" /> Open to opportunities
      </div>
    </div>
  );
}