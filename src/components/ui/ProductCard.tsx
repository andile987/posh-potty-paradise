import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  description: string;
  featured?: boolean;
  location: string;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  rating,
  description,
  featured,
  location
}: ProductCardProps) => {
  const formattedPrice = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR'
  }).format(price);

  const handleLocationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {featured && (
          <div className="absolute top-2 right-2 bg-loofinity-accent text-white px-2 py-1 rounded-full text-sm">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-bold text-loofinity-teal">{formattedPrice}</span>
          <div className="flex items-center">
            {'★'.repeat(Math.floor(rating))}
            <span className="ml-1 text-sm text-gray-600">({rating})</span>
          </div>
        </div>
        <button
          onClick={handleLocationClick}
          className="flex items-center text-sm text-gray-500 hover:text-loofinity-teal transition-colors"
        >
          <MapPin size={16} className="mr-1" />
          <span className="truncate">{location}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
