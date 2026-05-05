"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UpdateProfilePage() {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await authClient.updateUser({
      name: name,
      image: image,
    }, {
      onSuccess: () => {
        toast.success("Profile updated successfully!");
        router.push("/my-profile");
      },
      onError: (ctx) => toast.error(ctx.error.message),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
    
    <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold text-gray-800">
        Update Profile
      </h2>
      <p className="text-gray-500 text-sm mt-2">
        Change your personal information below
      </p>
    </div>

    <form onSubmit={handleUpdate} className="space-y-6">

      {/* Name Field */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name
        </label>
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Image Field */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Profile Image URL
        </label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
      >
        Save Changes
      </button>

    </form>
  </div>
</div>
  );
}