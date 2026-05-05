"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) return <p className="text-center py-20">Loading profile...</p>;
  if (!session) { router.push("/login"); return null; }

  return (
    <div className="max-w-2xl mx-auto my-20 p-8 border rounded-2xl text-center shadow-lg">
      <img src={session.user.image} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-green-500" />
      <h2 className="text-3xl font-bold">{session.user.name}</h2>
      <p className="text-gray-500 mb-8">{session.user.email}</p>
      
      <Link href="/my-profile/update" className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700">
        Update Information
      </Link>
    </div>
  );
}