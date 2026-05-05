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
    <div className="max-w-md mx-auto my-20 p-8 border rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Information</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">New Name</label>
          <input type="text" value={name} className="w-full p-3 border rounded-lg" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">New Photo URL</label>
          <input type="url" value={image} className="w-full p-3 border rounded-lg" onChange={(e) => setImage(e.target.value)} />
        </div>
        <button className="w-full py-3 bg-green-600 text-white rounded-lg font-bold">Update Information</button>
      </form>
    </div>
  );
}