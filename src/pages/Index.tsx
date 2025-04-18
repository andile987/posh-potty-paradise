import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTASection from "@/components/ui/CTASection";
import ImageSlideshow from "@/components/ui/ImageSlideshow";
import { Truck, Droplet, Wrench, Recycle, Clock, Award, PiggyBank, ArrowRight, CalendarCheck, CheckCircle } from "lucide-react";

const slideshowImages = [
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "VIP Luxury Portable Toilet",
    title: "Premium Mobile Solutions",
    description: "Experience luxury and comfort with our VIP portable toilets"
  },
  {
    src: "https://images.unsplash.com/photo-1585332889055-87c9798e7082?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Standard Portable Toilet",
    title: "Reliable Standard Units",
    description: "Durable and clean portable toilets for any event"
  },
  {
    src: "https://images.unsplash.com/photo-1584385529355-4e1b8d7bd507?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Eco-Clean Solution",
    title: "Eco-Friendly Cleaning",
    description: "Environmentally conscious cleaning solutions"
  }
];

const featuredProducts = [
  {
    id: "luxury-portable",
    name: "VIP Luxury Portable Toilet",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 39999.99,
    rating: 4.9,
    category: "toilets",
    description: "Premium portable toilet with luxury amenities, perfect for upscale events.",
    featured: true,
    location: "123 Main Road, Sandton, Johannesburg, 2196"
  },
  {
    id: "standard-portable",
    name: "Standard Portable Toilet",
    image: "https://images.unsplash.com/photo-1585332889055-87c9798e7082?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 24999.99,
    rating: 4.7,
    category: "toilets",
    description: "Durable and reliable standard portable toilet for any setting.",
    location: "456 Beach Road, Sea Point, Cape Town, 8005"
  },
  {
    id: "eco-clean",
    name: "Eco-Clean Solution",
    image: "https://images.unsplash.com/photo-1584385529355-4e1b8d7bd507?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 849.99,
    rating: 4.8,
    category: "chemicals",
    description: "Environmentally friendly cleaning solution that eliminates odors and breaks down waste.",
    location: "789 Umhlanga Rocks Drive, Durban North, 4051"
  },
  {
    id: "fresh-scent",
    name: "Fresh Scent Deodorizer",
    image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 499.99,
    rating: 4.6,
    category: "chemicals",
    description: "Long-lasting deodorizer that keeps portable toilets smelling fresh.",
    location: "321 Pretorius Street, Pretoria Central, 0002"
  }
];

const services = [
  {
    id: "maintenance",
    title: "Regular Maintenance",
    description: "Professional maintenance services to keep your portable toilets in pristine condition.",
    icon: <Wrench size={48} />,
    link: "/services#maintenance"
  },
  {
    id: "cleaning",
    title: "Deep Cleaning",
    description: "Thorough cleaning and sanitization using our premium chemical products.",
    icon: <Droplet size={48} />,
    link: "/services#cleaning"
  },
  {
    id: "delivery",
    title: "Delivery & Setup",
    description: "Fast and efficient delivery, installation, and removal of rental units.",
    icon: <Truck size={48} />,
    link: "/services#delivery"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Manager",
    company: "Prestige Events",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    testimonial: "Loofinity provided exceptional portable toilets for our charity gala. Guests were impressed with the cleanliness and luxury amenities.",
    rating: 5
  },
  {
    name: "Robert Chen",
    role: "Construction Manager",
    company: "BuildRight Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    testimonial: "We've been using Loofinity's portable toilets and maintenance services for our construction sites for over 2 years. Their reliability and service quality is unmatched.",
    rating: 5
  },
  {
    name: "Amanda Peterson",
    role: "Festival Coordinator",
    company: "SummerFest",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    testimonial: "The VIP portable toilets were a hit at our music festival. Attendees loved the premium experience, and the maintenance team kept everything spotless throughout the weekend.",
    rating: 4
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR'
  }).format(price);
};

const handleLocationClick = (address: string) => {
  window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
};

const Index = () => {
  return (
    <PageWrapper>
      {/* Hero Section with Slideshow */}
      <section className="min-h-screen flex items-center relative">
        <div className="absolute inset-0">
          <ImageSlideshow images={slideshowImages} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-loofinity-teal to-transparent opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Premium Mobile Toilet Solutions
            </h1>
            <p className="text-xl text-white mb-8 animate-fade-in animate-delay-100">
              Elevate your sanitation experience with Loofinity's VIP mobile toilets, maintenance services, and eco-friendly cleaning products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
              <Link to="/products/toilets">
                <Button size="lg" className="bg-loofinity-accent hover:bg-amber-500 text-white">
                  Explore Products
                </Button>
              </Link>
              <Link to="/rental">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-loofinity-teal">
                  Rental Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Loofinity?" 
            subtitle="We provide premium sanitation solutions with a focus on quality, cleanliness, and sustainability."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-loofinity-light rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600">
                Luxury mobile toilets built with high-quality materials for comfort and durability.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-loofinity-light rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-12 h-12 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Eco-Friendly</h3>
              <p className="text-gray-600">
                Environmentally conscious products and practices to minimize ecological impact.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-loofinity-light rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-12 h-12 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Prompt Service</h3>
              <p className="text-gray-600">
                Fast delivery, reliable maintenance, and responsive customer support.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-loofinity-light rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="w-12 h-12 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Competitive Pricing</h3>
              <p className="text-gray-600">
                Premium quality at reasonable rates with flexible payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Products" 
            subtitle="Discover our premium mobile toilets and cleaning solutions."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
                location={product.location}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/products/toilets">
              <Button className="bg-loofinity-teal hover:bg-loofinity-dark">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="Professional maintenance and support to keep your mobile toilets in perfect condition."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rental Info Section */}
      <section className="py-16 bg-loofinity-teal text-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Rental Options for Every Need</h2>
              <p className="text-loofinity-light mb-6">
                Whether you need portable toilets for a one-day event or a long-term construction project, we offer customized rental solutions to meet your specific requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-loofinity-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Short-Term Rentals</h4>
                    <p className="text-loofinity-light">Perfect for events, parties, weddings, and festivals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-loofinity-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Long-Term Rentals</h4>
                    <p className="text-loofinity-light">Ideal for construction sites, renovations, and extended projects.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-loofinity-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Maintenance Packages</h4>
                    <p className="text-loofinity-light">Regular cleaning and servicing included with all rental agreements.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/rental">
                  <Button size="lg" className="bg-loofinity-accent hover:bg-amber-500 text-black">
                    <CalendarCheck className="mr-2 h-5 w-5" /> View Rental Options
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Portable Toilet"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Hear from businesses and event organizers who trust Loofinity for their portable sanitation needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Elevate Your Sanitation Experience?"
        subtitle="Contact us today for a customized quote on mobile toilet sales, rentals, or maintenance services."
        buttonText="Request a Quote"
        buttonLink="/contact"
        imageBackground={true}
      />
    </PageWrapper>
  );
};

export default Index;
