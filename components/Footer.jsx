export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
  <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

    {/* Brand */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">QurbaniHat</h2>
      <p className="text-sm leading-relaxed">
        The leading livestock marketplace ensuring ethical, safe, and transparent 
        animal booking for the Qurbani season.
      </p>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-white font-semibold mb-4">Contact</h3>
      <ul className="space-y-2 text-sm">
        <li>Email: support@qurbanihat.com</li>
        <li>Phone: +880 1234 567890</li>
        <li>Location: Dhaka, Bangladesh</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h3 className="text-white font-semibold mb-4">Follow Us</h3>
      <div className="flex gap-4">

        {/* Facebook */}
        <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33V21.878C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </a>

        {/* Twitter/X */}
        <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
          </svg>
        </a>

      </div>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-gray-800 text-center py-5 text-xs text-gray-500">
    © 2026 QurbaniHat. All rights reserved.
  </div>
</footer>
  );
}
