import Link from "next/link";

export default function NotFound() {
  return (
  <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-100 overflow-hidden">
    
    <div className="absolute w-[500px] h-[500px] bg-green-200 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]" />
    <div className="absolute w-[400px] h-[400px] bg-emerald-300 rounded-full blur-3xl opacity-20 bottom-[-100px] right-[-100px]" />

    <div className="text-center z-10">
      <h1 className="text-[120px] md:text-[160px] font-extrabold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent animate-pulse">
        404
      </h1>

      <div className="mt-[-40px]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Lost in the Hat 🐄
        </h2>
        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Looks like this animal wandered off. The page you’re searching for isn’t here anymore.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow-lg transition"
          >
            Go Home
          </Link>

          <Link
            href="/animals"
            className="px-8 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-full font-semibold transition"
          >
            Browse Animals
          </Link>
        </div>
      </div>
    </div>
  </div>
);
}