
import React, { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, CreditCard } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

// Mock cart data - in a real app this would come from context/state management
const mockCartItems = [
  {
    id: "luxury-portable",
    name: "VIP Luxury Portable Toilet",
    price: 39999.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1nXxUPNmQonzVdsduqSRw-7PtGQzFQvNWw&s",
    quantity: 1
  },
  {
    id: "eco-clean",
    name: "Eco-Clean Solution",
    price: 849.99,
    image: "https://images.unsplash.com/photo-1584385529355-4e1b8d7bd507?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quantity: 2
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart."
    });
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR'
    }).format(price);
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <PageWrapper>
        <div className="py-32">
          <div className="max-w-md mx-auto text-center">
            <div className="flex justify-center mb-6">
              <ShoppingCart className="text-gray-400 h-24 w-24" />
            </div>
            <SectionHeading
              title="Your Cart is Empty"
              subtitle="Looks like you haven't added any products to your cart yet."
              centered
            />
            <div className="mt-8">
              <Link to="/products/toilets">
                <Button className="bg-loofinity-teal hover:bg-loofinity-dark">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="py-32">
        <SectionHeading
          title="Shopping Cart"
          subtitle="Review your items and proceed to checkout"
          centered
        />
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Cart Items</h3>
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start border-b pb-6 last:border-0 last:pb-0 gap-4">
                        <div className="w-24 h-24 rounded overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow text-center sm:text-left">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-loofinity-teal font-medium mt-1">{formatPrice(item.price)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-full border"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-full border"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="text-red-500 hover:text-red-700 transition-colors"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/payment">
                      <Button className="w-full bg-loofinity-teal hover:bg-loofinity-dark">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/products/toilets">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Cart;
