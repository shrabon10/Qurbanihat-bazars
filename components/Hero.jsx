import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
 
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_ease-out_forwards]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=85&w=1920&auto=format&fit=crop')",
          backgroundPosition: "center 40%",
        }}
      />
 
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e0f]/95 via-[#0a1e0f]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e0f]/50 via-transparent to-transparent" />
 
      {/* Main Content */}
      <div className="relative z-10 px-8 md:px-16 pb-20 max-w-4xl">
 
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-[#C8A84B]/50 text-[#C8A84B] text-xs font-medium tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-7 animate-[fadeUp_0.8s_ease_0.1s_both]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A84B] animate-pulse" />
          Eid ul Adha 2026 · Live Marketplace
        </div>
 
        {/* Heading */}
        <h1
          className="text-5xl md:text-7xl font-semibold leading-[1.05] text-[#F5F0E8] mb-6 animate-[fadeUp_0.8s_ease_0.25s_both]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Premium{" "}
          <em className="italic text-[#C8A84B]">Qurbani</em>
          <br />
          Animals, Delivered
          <br />
          to Your Door.
        </h1>
 
        {/* Divider */}
        <div className="w-14 h-0.5 bg-gradient-to-r from-[#C8A84B] to-transparent mb-6 animate-[fadeUp_0.8s_ease_0.35s_both]" />
 
        {/* Subtitle */}
        <p className="text-base md:text-lg font-light text-[#F5F0E8]/65 leading-relaxed max-w-lg mb-10 animate-[fadeUp_0.8s_ease_0.45s_both]">
          Handpicked cows and goats from trusted farms across Bangladesh.
          Browse, select, and arrange doorstep delivery — all in one place.
        </p>
 
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 animate-[fadeUp_0.8s_ease_0.6s_both]">
          <Link
            href="/animals"
            className="inline-flex items-center gap-2 bg-[#C8A84B] hover:bg-[#D4AF5A] text-[#0A1E0F] text-sm font-medium tracking-wide px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 group"
          >
            Browse Marketplace
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
 
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/[0.06] text-[#F5F0E8] text-sm font-normal px-7 py-3.5 rounded border border-white/25 hover:border-white/60 transition-all duration-200 hover:-translate-y-0.5"
          >
            How It Works
          </Link>
        </div>
      </div>
 
      {/* Stats — bottom right */}
      <div className="hidden md:flex absolute bottom-20 right-16 z-10 items-center gap-10 animate-[fadeUp_0.8s_ease_0.75s_both]">
        {[
          { number: "500+", label: "Animals Listed" },
          { number: "48h",  label: "Fast Delivery"  },
          { number: "100%", label: "Verified Farms" },
        ].map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-10">
            {i > 0 && <div className="w-px h-10 bg-white/15" />}
            <div className="text-right">
              <div
                className="text-3xl font-bold text-[#C8A84B] leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {stat.number}
              </div>
              <div className="text-[10px] tracking-widest uppercase text-white/40 mt-1">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
 
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-[fadeUp_1s_ease_1s_both]">
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
 
      {/* Custom keyframes + Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400&display=swap');
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.0);  }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  );
}