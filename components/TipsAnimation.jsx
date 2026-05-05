"use client";

const CowSVG = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-14 h-14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="32" cy="40" rx="20" ry="13" fill="#D4A96A" />
    <ellipse cx="32" cy="26" rx="12" ry="11" fill="#D4A96A" />
    <ellipse cx="32" cy="33" rx="7" ry="5" fill="#C49A5A" />
    <circle cx="29.5" cy="33" r="1.2" fill="#7C5A2A" />
    <circle cx="34.5" cy="33" r="1.2" fill="#7C5A2A" />
    <circle cx="26" cy="23" r="2" fill="#1a1a1a" />
    <circle cx="38" cy="23" r="2" fill="#1a1a1a" />
    <circle cx="26.7" cy="22.3" r="0.6" fill="white" />
    <circle cx="38.7" cy="22.3" r="0.6" fill="white" />
    <ellipse
      cx="20"
      cy="21"
      rx="4"
      ry="6"
      fill="#D4A96A"
      transform="rotate(-20 20 21)"
    />
    <ellipse
      cx="44"
      cy="21"
      rx="4"
      ry="6"
      fill="#D4A96A"
      transform="rotate(20 44 21)"
    />
    <path
      d="M22 17 Q18 10 15 9"
      stroke="#C49A5A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M42 17 Q46 10 49 9"
      stroke="#C49A5A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect x="18" y="50" width="5" height="10" rx="2.5" fill="#C49A5A" />
    <rect x="26" y="50" width="5" height="10" rx="2.5" fill="#C49A5A" />
    <rect x="33" y="50" width="5" height="10" rx="2.5" fill="#C49A5A" />
    <rect x="41" y="50" width="5" height="10" rx="2.5" fill="#C49A5A" />
  </svg>
);

const GoatSVG = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-14 h-14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="32" cy="40" rx="18" ry="12" fill="#e5e7eb" />
    <ellipse cx="32" cy="26" rx="10" ry="9" fill="#e5e7eb" />
    <ellipse cx="32" cy="32" rx="6" ry="4" fill="#d1d5db" />
    <circle cx="30" cy="32.5" r="1" fill="#6b7280" />
    <circle cx="34" cy="32.5" r="1" fill="#6b7280" />
    <ellipse cx="26" cy="24" rx="2" ry="1.5" fill="#1a1a1a" />
    <ellipse cx="38" cy="24" rx="2" ry="1.5" fill="#1a1a1a" />
    <circle cx="26.7" cy="23.5" r="0.5" fill="white" />
    <circle cx="38.7" cy="23.5" r="0.5" fill="white" />
    <ellipse
      cx="21"
      cy="23"
      rx="3.5"
      ry="5.5"
      fill="#e5e7eb"
      transform="rotate(-15 21 23)"
    />
    <ellipse
      cx="43"
      cy="23"
      rx="3.5"
      ry="5.5"
      fill="#e5e7eb"
      transform="rotate(15 43 23)"
    />
    <path
      d="M24 18 Q20 11 18 8"
      stroke="#9ca3af"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M40 18 Q44 11 46 8"
      stroke="#9ca3af"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <ellipse cx="32" cy="37" rx="3" ry="4" fill="#d1d5db" />
    <rect x="18" y="49" width="4.5" height="11" rx="2.2" fill="#d1d5db" />
    <rect x="25" y="49" width="4.5" height="11" rx="2.2" fill="#d1d5db" />
    <rect x="34" y="49" width="4.5" height="11" rx="2.2" fill="#d1d5db" />
    <rect x="41" y="49" width="4.5" height="11" rx="2.2" fill="#d1d5db" />
  </svg>
);

const stats = [
  {
    label: "Animals",
    value: "120+",
    bg: "bg-green-50 border-green-200 text-green-700",
  },
  {
    label: "Breeds",
    value: "12",
    bg: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    label: "Cities",
    value: "8+",
    bg: "bg-teal-50 border-teal-200 text-teal-700",
  },
];

export default function TipsAnimation() {
  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(-12px); }
          50%       { transform: translateY(0px); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .float-up   { animation: floatUp   2.4s ease-in-out infinite; }
        .float-down { animation: floatDown 2.4s ease-in-out infinite; }
        .stat-card  { animation: fadeSlideIn 0.5s ease-out both; }
        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.25s; }
        .stat-card:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      <div className="w-full flex flex-col items-center gap-6 py-2">
        {/* Live badge */}
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          <span className="text-sm font-bold text-green-700 tracking-wide">
            Live Marketplace
          </span>
        </div>

        {/* Floating livestock */}
        <div className="flex gap-4 items-end">
          <div className="float-up flex flex-col items-center gap-3">
            <div className="bg-amber-50 rounded-3xl p-3 shadow-lg border-2 border-amber-100">
              <CowSVG />
            </div>
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
              Cow
            </span>
          </div>

          <div className="float-down flex flex-col items-center gap-3">
            <div className="bg-gray-50 rounded-3xl p-3 shadow-lg border-2 border-gray-100">
              <GoatSVG />
            </div>
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
              Goat
            </span>
          </div>
        </div>

        {/* Stat pills */}
        <div className="flex gap-3 w-full justify-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`stat-card flex-1 max-w-[90px] border rounded-2xl p-3 text-center ${stat.bg}`}
            >
              <p className="text-lg font-black">{stat.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
