"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import SocialLogin from "@/components/SocialLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    await authClient.signIn.email({ email, password }, {
      onSuccess: () => {
        toast.success("Logged in successfully!");
        router.push("/"); 
      },
      onError: (ctx) => toast.error(ctx.error.message || "Invalid credentials"), 
    });
  };

  return (
    <div className="max-w-md mx-auto my-20 p-8 border rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to QurbaniHat</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input 
          type="email" placeholder="Email" required 
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Password" required 
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full py-3 bg-green-600 text-white rounded-lg font-bold">Login</button>
        <div className="text-sm text-gray-500 mt-2 text-left font-bold">
          Default Email: example@example.com <br />
          Default Password: admin123
        </div>
      </form>
      <div className="my-6 flex items-center gap-2 text-gray-400">
        <hr className="flex-1" /> <span>OR</span> <hr className="flex-1" />
      </div>
      <SocialLogin />
      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account? <Link href="/register" className="text-green-600 font-bold">Register here</Link>
      </p>
    </div>
  );
}