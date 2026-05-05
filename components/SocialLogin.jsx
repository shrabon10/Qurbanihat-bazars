"use client";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

export default function SocialLogin() {
  const handleGoogleLogin = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/",
      },
      {
        onError: (ctx) => toast.error(ctx.error.message),
      },
    );
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        className="w-5 h-5"
      />
      Continue with Google
    </button>
  );
}
