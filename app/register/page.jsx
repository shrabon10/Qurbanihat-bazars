"use client";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import SocialLogin from "@/components/SocialLogin";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });
  const router = useRouter();
  const { data: session } = authClient.useSession();

  // Redirect already-logged-in users away from register page
  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);

  const handleRegister = async (e) => {
    e.preventDefault();
    await authClient.signUp.email(
      {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        image: formData.image,
        autoSignIn: false,
      },
      {
        onSuccess: async () => {
          await authClient.signOut();
          toast.success("Registered successfully! Please login.");
          router.push("/login");
        },
        onError: (ctx) => toast.error(ctx.error.message),
      },
    );
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 border rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="url"
          placeholder="Photo URL"
          required
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 border rounded-lg"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button className="w-full py-3 bg-green-600 text-white rounded-lg font-bold">
          Register
        </button>
      </form>
      <div className="my-6 border-t pt-6">
        <SocialLogin />
      </div>
      <p className="mt-6 text-center text-sm">
        Already registered?{" "}
        <Link href="/login" className="text-green-600 font-bold">
          Login here
        </Link>
      </p>
    </div>
  );
}
