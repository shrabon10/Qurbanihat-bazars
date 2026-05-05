import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-green-100">404</h1>
      <div className="absolute">
        <h2 className="text-3xl font-bold">Oops! Animal Not Found</h2>
        <p className="text-gray-500 mt-2 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="px-8 py-3 bg-green-600 text-white rounded-full font-bold shadow-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
}