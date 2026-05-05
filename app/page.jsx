import Hero from "@/components/Hero";
import TipsAnimation from "@/components/TipsAnimation";
import animalData from "@/data/animals.json";
import Link from "next/link";

export default function HomePage() {
  const featuredAnimals = animalData.slice(0, 4);

  return (
    <div className="space-y-16 md:space-y-24 pb-16 md:pb-24">
      {/* Hero section */}
      <Hero />

      {/* Featured Animals Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              Featured Livestock
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Handpicked selection of premium cows and goats for Qurbani.
            </p>
          </div>
          <Link
            href="/animals"
            className="text-green-600 font-extrabold border-b-2 border-green-600 hover:text-green-700 hover:border-green-700 transition-all pb-1"
          >
            Browse All Animals →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase text-green-700 shadow-sm">
                  {animal.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-xs font-bold text-green-600 mb-1 uppercase tracking-widest">
                  {animal.type} • {animal.breed}
                </p>
                <h3 className="font-bold text-xl text-gray-900 mb-4 line-clamp-1">
                  {animal.name}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-gray-50">
                  <div>
                    <p className="text-2xl font-black text-green-600">
                      ৳{animal.price.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold tracking-tighter uppercase">
                      {animal.weight} KG • {animal.location}
                    </p>
                  </div>
                  <Link
                    href={`/details-page/${animal.id}`}
                    className="p-3 bg-gray-900 text-white rounded-2xl group-hover:bg-green-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Qurbani Tips Section */}
<section className="relative bg-gradient-to-br from-green-50 via-white to-amber-50 py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">

    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-gray-900">
        Smart <span className="bg-gradient-to-r from-green-600 to-amber-400 bg-clip-text text-transparent">Qurbani Guide</span>
      </h2>
      <p className="text-gray-500 mt-3">
        Cow & Goat specific tips for better selection
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Cow: Check Teeth",
          desc: "At least 2 permanent teeth indicate proper Qurbani age.",
          img: "https://images.unsplash.com/photo-1556997685-309989c1aa82?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          type: "cow",
        },
        {
          title: "Goat: Stay Active",
          desc: "Healthy goats are energetic, alert, and responsive.",
          img: "https://images.unsplash.com/photo-1560819400-434c188f63ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          type: "goat",
        },
        {
          title: "Cow: Grass Fed",
          desc: "Natural feeding ensures better meat quality.",
          img: "https://plus.unsplash.com/premium_photo-1664005044750-9ab92c4fcf44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          type: "cow",
        },
      ].map((tip, i) => (
        <div
          key={i}
          className={`group relative rounded-[2rem] overflow-hidden transition duration-500 hover:-translate-y-3 ${
            tip.type === "cow"
              ? "border-2 border-green-400/30"
              : "border-2 border-amber-400/30"
          }`}
        >

          {/* Image */}
          <div
            className="h-64 bg-cover bg-center group-hover:scale-110 transition duration-700"
            style={{ backgroundImage: `url(${tip.img})` }}
          />

          {/* Overlay color based on type */}
          <div
            className={`absolute inset-0 ${
              tip.type === "cow"
                ? "bg-gradient-to-t from-green-900/70 via-black/20"
                : "bg-gradient-to-t from-amber-900/70 via-black/20"
            }`}
          />

          {/* Content */}
          <div className="absolute bottom-0 p-6 text-white">
            
            {/* Tag */}
            <span
              className={`text-xs px-3 py-1 rounded-full font-semibold ${
                tip.type === "cow"
                  ? "bg-green-500/80"
                  : "bg-amber-500/80"
              }`}
            >
              {tip.type === "cow" ? "🐄 Cow Tip" : "🐐 Goat Tip"}
            </span>

            <h4 className="text-xl font-bold mt-3 mb-2">
              {tip.title}
            </h4>

            <p className="text-sm text-gray-200">
              {tip.desc}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* Top Breeds */}
      <section className="max-w-7xl mx-auto px-4">
  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[3rem] p-10 md:p-16 overflow-hidden">

    {/* Glow Background */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/20 blur-[120px]" />
    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-400/20 blur-[120px]" />

    {/* Title */}
    <div className="text-center mb-14 relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200 mb-4 tracking-tight">
        Elite Qurbani Picks
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto text-lg">
        Handpicked premium breeds with superior quality, perfect weight, and trusted lineage.
      </p>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {[
        {
          name: "Deshi Shahiwal",
          desc: "High milk & strong build",
        },
        {
          name: "Premium Brahman",
          desc: "Heavy weight champion",
        },
        {
          name: "Black Bengal",
          desc: "Top-quality goat breed",
        },
        {
          name: "Jamunapari",
          desc: "Tall & premium class",
        },
      ].map((breed) => (
        <div
          key={breed.name}
          className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-green-400/40 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-green-500/10"
        >
          {/* Floating Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl" />

          {/* Number badge */}
          <span className="absolute top-4 right-4 text-xs text-gray-500 group-hover:text-green-400">
            0{Math.floor(Math.random() * 9) + 1}
          </span>

          {/* Content */}
          <h4 className="text-xl font-extrabold text-white mb-2 group-hover:text-green-400 transition">
            {breed.name}
          </h4>

          <p className="text-gray-400 text-sm group-hover:text-gray-300">
            {breed.desc}
          </p>

          {/* Bottom line */}
          <div className="mt-6 h-[2px] w-10 bg-gray-700 group-hover:w-full group-hover:bg-green-500 transition-all duration-500" />
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}
