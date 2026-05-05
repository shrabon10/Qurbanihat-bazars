"use client";
import { useState } from "react";
import animalData from "@/data/animals.json";
import Link from "next/link";

export default function AllAnimalsPage() {
  const [sortOrder, setSortOrder] = useState("default");
  const [animals, setAnimals] = useState(animalData);

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...animals].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      if (order === "desc") return b.price - a.price;
      return a.id - b.id;
    });
    setAnimals(sorted);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl font-bold">Marketplace</h1>
        
        {/* Sort by Price Requirement */}
        <div className="flex items-center gap-3">
          <label className="font-medium text-gray-600">Sort by Price:</label>
          <select 
            className="border p-2 rounded-lg bg-white outline-none focus:ring-2 focus:ring-green-500"
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {animals.map((animal) => (
          <div key={animal.id} className="border rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <img src={animal.image} alt={animal.name} className="h-56 w-full object-cover" />
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold">{animal.name}</h2>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                  {animal.category}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{animal.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-green-600">৳{animal.price.toLocaleString()}</p>
                {/* Details Button */}
                <Link 
                  href={`/details-page/${animal.id}`} 
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}