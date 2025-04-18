
import React from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import CTASection from "@/components/ui/CTASection";

interface ProductCategory {
  title: string;
  subtitle: string;
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  description: string;
  featured?: boolean;
}

const Products = () => {
  const { category = "toilets" } = useParams<{ category?: string }>();
  
  const productCategories: Record<string, ProductCategory> = {
    toilets: {
      title: "Mobile Toilets",
      subtitle: "Premium portable toilet solutions for every setting - from luxury events to construction sites.",
      products: [
        {
          id: "luxury-portable",
          name: "VIP Luxury Portable Toilet",
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 2499.99,
          rating: 4.9,
          category: "toilets",
          description: "Premium portable toilet with luxury amenities, perfect for upscale events.",
          featured: true
        },
        {
          id: "standard-portable",
          name: "Standard Portable Toilet",
          image: "https://images.unsplash.com/photo-1585332889055-87c9798e7082?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 1299.99,
          rating: 4.7,
          category: "toilets",
          description: "Durable and reliable standard portable toilet for any setting."
        },
        {
          id: "ada-compliant",
          name: "ADA Compliant Portable Toilet",
          image: "https://images.unsplash.com/photo-1585333639894-37851b54b7d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 1899.99,
          rating: 4.8,
          category: "toilets",
          description: "Accessible portable toilet designed to meet ADA specifications for handicap accessibility."
        },
        {
          id: "trailer-restroom",
          name: "Luxury Restroom Trailer",
          image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 7999.99,
          rating: 5.0,
          category: "toilets",
          description: "High-end restroom trailer with multiple stalls, sinks, air conditioning, and premium fixtures."
        },
        {
          id: "compact-portable",
          name: "Compact Portable Toilet",
          image: "https://images.unsplash.com/photo-1584980461765-5129123e65d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 899.99,
          rating: 4.5,
          category: "toilets",
          description: "Space-saving portable toilet ideal for areas with limited space without sacrificing comfort."
        },
        {
          id: "solar-powered",
          name: "Solar-Powered Portable Toilet",
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 3299.99,
          rating: 4.7,
          category: "toilets",
          description: "Eco-friendly portable toilet with solar-powered lighting and ventilation systems."
        }
      ]
    },
    chemicals: {
      title: "Cleaning Chemicals",
      subtitle: "Eco-friendly, effective sanitation products to maintain hygiene and eliminate odors in portable toilets.",
      products: [
        {
          id: "eco-clean",
          name: "Eco-Clean Solution",
          image: "https://images.unsplash.com/photo-1584385529355-4e1b8d7bd507?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 49.99,
          rating: 4.8,
          category: "chemicals",
          description: "Environmentally friendly cleaning solution that eliminates odors and breaks down waste."
        },
        {
          id: "fresh-scent",
          name: "Fresh Scent Deodorizer",
          image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 29.99,
          rating: 4.6,
          category: "chemicals",
          description: "Long-lasting deodorizer that keeps portable toilets smelling fresh."
        },
        {
          id: "heavy-duty-cleaner",
          name: "Heavy Duty Cleaner",
          image: "https://images.unsplash.com/photo-1585333639898-311686eb4b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 59.99,
          rating: 4.9,
          category: "chemicals",
          description: "Industrial-strength cleaner for deep cleaning and sanitizing portable toilets."
        },
        {
          id: "winterizing-additive",
          name: "Winterizing Additive",
          image: "https://images.unsplash.com/photo-1556911820-1238441ed1a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 64.99,
          rating: 4.7,
          category: "chemicals",
          description: "Special formula to prevent freezing in portable toilets during cold weather."
        },
        {
          id: "enzyme-treatment",
          name: "Enzyme Treatment",
          image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 39.99,
          rating: 4.8,
          category: "chemicals",
          description: "Biological enzyme treatment for natural breakdown of waste and elimination of odors."
        },
        {
          id: "maintenance-kit",
          name: "Complete Maintenance Kit",
          image: "https://images.unsplash.com/photo-1523579086881-437123ecbeab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          price: 119.99,
          rating: 5.0,
          category: "chemicals",
          description: "All-in-one kit with cleaning solutions, deodorizers, and tools for portable toilet maintenance."
        }
      ]
    }
  };
  
  const currentCategory = productCategories[category] || productCategories.toilets;
  
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-32 pb-16 bg-loofinity-light">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={currentCategory.title} 
            subtitle={currentCategory.subtitle}
            centered
          />
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.products.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                category={product.category}
                description={product.description}
                featured={product.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need Help Choosing the Right Product?"
        subtitle="Our experts are ready to assist you in finding the perfect solution for your needs."
        buttonText="Contact Us"
        buttonLink="/contact"
        imageBackground={false}
      />
    </PageWrapper>
  );
};

export default Products;
