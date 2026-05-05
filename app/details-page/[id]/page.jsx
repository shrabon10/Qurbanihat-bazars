"use client";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import animalData from "@/data/animals.json";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export default function AnimalDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please login to view details and book.");
      router.push("/login");
    }
  }, [session, isPending, router]);

  const animal = animalData.find((a) => a.id === parseInt(id));

  const handleBooking = (e) => {
    e.preventDefault();

    toast.success(`Booking request for ${animal.name} sent successfully!`);
    e.target.reset();
  };

  if (isPending || !session || !animal)
    return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
      {/* Full Details View */}
      <div className="space-y-6">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">{animal.name}</h1>
          <p className="text-2xl text-green-600 font-bold mb-4">
            Price: ৳{animal.price.toLocaleString()}
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-6 rounded-2xl">
            <p>
              <strong>Breed:</strong> {animal.breed}
            </p>
            <p>
              <strong>Weight:</strong> {animal.weight} kg
            </p>
            <p>
              <strong>Age:</strong> {animal.age} Years
            </p>
            <p>
              <strong>Location:</strong> {animal.location}
            </p>
          </div>
          <p className="mt-6 text-gray-600 leading-relaxed">
            {animal.description}
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-white border p-8 rounded-3xl shadow-sm h-fit sticky top-24">
        <h3 className="text-2xl font-bold mb-6">Book This Animal</h3>
        <form onSubmit={handleBooking} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded-xl"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-3 border rounded-xl"
          />
          <textarea
            placeholder="Address"
            required
            rows="3"
            className="w-full p-3 border rounded-xl"
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition"
          >
            Confirm Booking
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-4 text-center italic">
          *Note: Data will not be saved to the database per requirements.
        </p>
      </div>
    </div>
  );
}
