
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  description: string;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  image, 
  price, 
  rating, 
  category,
  description,
  featured = false
}) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl
      ${featured ? 'border-2 border-loofinity-accent' : 'border border-gray-200'}`}>
      {featured && (
        <div className="bg-loofinity-accent text-white text-sm font-semibold px-4 py-1 text-center">
          Featured Product
        </div>
      )}
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-xs font-medium ml-1">{rating}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs font-medium text-loofinity-teal uppercase mb-2">{category}</div>
        <h3 className="font-bold text-lg mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-loofinity-teal">${price.toFixed(2)}</span>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="text-loofinity-teal border-loofinity-teal hover:bg-loofinity-light">
              <ShoppingCart className="w-4 h-4 mr-1" /> Add
            </Button>
            <Link to={`/products/${category}/${id}`}>
              <Button size="sm" className="bg-loofinity-teal hover:bg-loofinity-dark">
                Details <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
