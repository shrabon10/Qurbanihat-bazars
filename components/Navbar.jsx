"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  // Check session status to conditionally render buttons
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully");
          router.push("/"); 
          router.refresh();
        },
      },
    });
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
  href="/"
  className="text-2xl font-black tracking-tighter bg-gradient-to-r from-green-600 via-emerald-500 to-yellow-400 bg-clip-text text-transparent"
>
  QurbaniHat
</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link href="/" className="text-gray-900 font-bold hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/animals" className="text-gray-900 font-bold hover:text-green-600 transition-colors">
              All Animals
            </Link>
            
            {session ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/my-profile" 
                  className="flex items-center gap-2 text-gray-900 font-bold hover:text-green-600 transition px-3 py-2 rounded-lg"
                >
                  <User className="w-5 h-5" />
                  My Profile
                </Link>
                
                
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 font-bold hover:text-red-700 hover:bg-red-50 hover:shadow-md px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer border border-transparent hover:border-red-100"
                >
                  <LogOut className="w-5 h-5" /> 
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-6">
                <Link href="/login" className="text-gray-900 font-bold hover:text-green-600 transition">
                  Login
                </Link>
                <Link href="/register" className="px-6 py-2.5 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-md">
                  Register
                </Link>
              </div>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 shadow-xl">
          <Link href="/" className="block text-xl font-bold text-gray-900" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/animals" className="block text-xl font-bold text-gray-900" onClick={() => setIsOpen(false)}>All Animals</Link>
          
          <div className="border-t pt-4 space-y-4">
             {session ? (
               <>
                 <Link href="/my-profile" className="block text-lg font-bold text-gray-900" onClick={() => setIsOpen(false)}>My Profile</Link>
                 <button 
                    onClick={handleLogout} 
                    className="block w-full text-left text-lg font-bold text-red-600 hover:bg-red-50 p-2 rounded-lg cursor-pointer"
                 >
                    Logout
                 </button>
               </>
             ) : (
               <>
                 <Link href="/login" className="block text-lg font-bold text-gray-900" onClick={() => setIsOpen(false)}>Login</Link>
                 <Link href="/register" className="block text-lg font-bold text-green-600" onClick={() => setIsOpen(false)}>Register</Link>
               </>
             )}
          </div>
        </div>
      )}
    </nav>
  );
}