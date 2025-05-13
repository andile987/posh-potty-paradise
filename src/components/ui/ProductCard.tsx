
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, ShoppingCart } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

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
  category,
  description,
  featured,
  location
}: ProductCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR'
  }).format(price);

  const handleLocationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
  };

  const handleCardClick = () => {
    setIsDialogOpen(true);
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Simulate adding to cart
    setTimeout(() => {
      setIsAddingToCart(false);
      setIsDialogOpen(false);
      toast({
        title: "Added to cart",
        description: `${name} has been added to your cart.`,
      });
    }, 800);
  };

  const handlePurchaseNow = () => {
    toast({
      title: "Processing Payment",
      description: "Redirecting to payment page...",
    });
    
    // Simulate redirect to payment page
    setTimeout(() => {
      window.location.href = `/payment?product=${id}`;
    }, 1000);
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer transform hover:-translate-y-1"
        onClick={handleCardClick}
      >
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
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
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

      {/* Product Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{name}</DialogTitle>
            <DialogDescription className="text-loofinity-teal text-lg font-semibold">
              {formattedPrice}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img src={image} alt={name} className="w-full h-64 object-cover rounded-md" />
            </div>
            <div>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500">Description</h4>
                <p className="text-gray-800">{description}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500">Rating</h4>
                <div className="flex items-center">
                  <span className="text-amber-400">{'★'.repeat(Math.floor(rating))}</span>
                  <span className="ml-1 text-sm text-gray-600">({rating})</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Location</h4>
                <button
                  onClick={handleLocationClick}
                  className="flex items-center text-sm text-loofinity-teal hover:text-loofinity-dark transition-colors"
                >
                  <MapPin size={16} className="mr-1" />
                  <span>{location}</span>
                  <ExternalLink size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => handleAddToCart()}
              disabled={isAddingToCart}
              className="flex-1"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {isAddingToCart ? "Adding..." : "Add to Cart"}
            </Button>
            <Button 
              onClick={handlePurchaseNow} 
              className="flex-1 bg-loofinity-teal hover:bg-loofinity-dark"
            >
              Purchase Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
