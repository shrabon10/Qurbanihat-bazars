export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-400">

  <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

    {/* Brand */}
    <div className="md:col-span-2">
      <h2 className="text-3xl font-extrabold text-white mb-4">
        QurbaniHat
      </h2>
      <p className="text-sm leading-relaxed max-w-md">
        The leading livestock marketplace ensuring ethical, safe, and transparent 
        animal booking for the Qurbani season. Built for trust, speed, and reliability.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-green-400 cursor-pointer">Home</li>
        <li className="hover:text-green-400 cursor-pointer">Marketplace</li>
        <li className="hover:text-green-400 cursor-pointer">How it works</li>
        <li className="hover:text-green-400 cursor-pointer">Pricing</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-white font-semibold mb-4">Contact</h3>
      <ul className="space-y-2 text-sm">
        <li>📧 omar@qurbanihat.com</li>
        <li>📞 +880 1749761853</li>
        <li>📍 Dhaka, Bangladesh</li>
      </ul>
    </div>
  </div>

  {/* Social + Bottom */}
  <div className="border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Social */}
      <div className="flex gap-4">

        {["facebook", "twitter", "instagram"].map((item, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-green-500 transition"
          >
            <span className="text-xs text-white capitalize">{item[0]}</span>
          </a>
        ))}

      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 text-center">
        © 2026 <span className="text-white font-medium">QurbaniHat</span>. All rights reserved.
      </p>

    </div>
  </div>

</footer>
  );
}
