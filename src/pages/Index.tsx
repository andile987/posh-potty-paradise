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
import { 
  Truck, Droplet, Wrench, Recycle, Clock, Award, PiggyBank, 
  ArrowRight, CalendarCheck, CheckCircle, MapPin, Star 
} from "lucide-react";

// Move constants to separate files in a constants directory for better organization
const slideshowImages = [
  {
    src: "https://loohire.co.za/wp-content/uploads/2022/09/COMPACT-23-copy.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1nXxUPNmQonzVdsduqSRw-7PtGQzFQvNWw&s",
    price: 39999.99,
    rating: 4.9,
    category: "toilets",
    description: "Premium portable toilet with luxury amenities including flushing system, mirror, and premium finishes.",
    features: ["Flushing system", "Mirror", "Premium finishes", "Ventilation"],
    location: "123 Main Road, Sandton, Johannesburg, 2196"
  },
  {
    id: "standard-portable",
    name: "Standard Portable Toilet",
    image: "https://images.unsplash.com/photo-1585332889055-87c9798e7082?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 24999.99,
    rating: 4.7,
    category: "toilets",
    description: "Durable and reliable standard portable toilet with robust construction.",
    features: ["Durable construction", "Easy to clean", "Ventilation", "Lockable door"],
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
    features: ["Biodegradable", "Odor elimination", "Waste breakdown", "5L container"],
    location: "789 Umhlanga Rocks Drive, Durban North, 4051"
  }
];

const services = [
  {
    id: "maintenance",
    title: "Regular Maintenance",
    description: "Professional maintenance services to keep your portable toilets in pristine condition.",
    icon: <Wrench className="w-12 h-12 text-loofinity-teal" />,
    link: "/services#maintenance",
    features: ["Weekly servicing", "Chemical top-ups", "Damage inspection"]
  },
  {
    id: "cleaning",
    title: "Deep Cleaning",
    description: "Thorough cleaning and sanitization using our premium chemical products.",
    icon: <Droplet className="w-12 h-12 text-loofinity-teal" />,
    link: "/services#cleaning",
    features: ["Full sanitization", "Odor elimination", "Waste removal"]
  },
  {
    id: "delivery",
    title: "Delivery & Setup",
    description: "Fast and efficient delivery, installation, and removal of rental units.",
    icon: <Truck className="w-12 h-12 text-loofinity-teal" />,
    link: "/services#delivery",
    features: ["24/7 availability", "Professional setup", "Site assessment"]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Manager",
    company: "Prestige Events",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    testimonial: "Loofinity provided exceptional portable toilets for our charity gala. Guests were impressed with the cleanliness and luxury amenities.",
    rating: 5,
    date: "15 March 2023"
  },
  {
    name: "Robert Chen",
    role: "Construction Manager",
    company: "BuildRight Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    testimonial: "We've been using Loofinity's portable toilets and maintenance services for our construction sites for over 2 years. Their reliability and service quality is unmatched.",
    rating: 5,
    date: "2 November 2022"
  }
];

const features = [
  {
    title: "Premium Quality",
    description: "Luxury mobile toilets built with high-quality materials for comfort and durability.",
    icon: <Award className="w-8 h-8 text-loofinity-teal" />
  },
  {
    title: "Eco-Friendly",
    description: "Environmentally conscious products and practices to minimize ecological impact.",
    icon: <Recycle className="w-8 h-8 text-loofinity-teal" />
  },
  {
    title: "Prompt Service",
    description: "Fast delivery, reliable maintenance, and responsive customer support.",
    icon: <Clock className="w-8 h-8 text-loofinity-teal" />
  },
  {
    title: "Competitive Pricing",
    description: "Premium quality at reasonable rates with flexible payment options.",
    icon: <PiggyBank className="w-8 h-8 text-loofinity-teal" />
  }
];

const rentalBenefits = [
  {
    title: "Short-Term Rentals",
    description: "Perfect for events, parties, weddings, and festivals.",
    icon: <CheckCircle className="w-5 h-5 text-loofinity-accent" />
  },
  {
    title: "Long-Term Rentals",
    description: "Ideal for construction sites, renovations, and extended projects.",
    icon: <CheckCircle className="w-5 h-5 text-loofinity-accent" />
  },
  {
    title: "Maintenance Packages",
    description: "Regular cleaning and servicing included with all rental agreements.",
    icon: <CheckCircle className="w-5 h-5 text-loofinity-accent" />
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
      <section className="relative h-[90vh] min-h-[600px] flex items-center pt-16">
        <div className="absolute inset-0">
          <ImageSlideshow 
            images={slideshowImages} 
            autoPlay={true}
            interval={5000}
            showControls={true}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-loofinity-teal/90 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Premium Mobile Toilet Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in animate-delay-100">
              Elevate your sanitation experience with Loofinity's VIP mobile toilets, maintenance services, and eco-friendly cleaning products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
              <Link to="/products/toilets">
                <Button size="lg" className="bg-loofinity-accent hover:bg-amber-500 text-white shadow-lg">
                  Explore Products
                </Button>
              </Link>
              <Link to="/rental">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-loofinity-teal">
                  Rental Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Loofinity?" 
            subtitle="We provide premium sanitation solutions with a focus on quality, cleanliness, and sustainability."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-lg transition-all">
                <div className="bg-loofinity-light/20 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Products" 
            subtitle="Discover our premium mobile toilets and cleaning solutions."
            centered
            action={
              <Link to="/products">
                <Button variant="ghost" className="text-loofinity-teal hover:bg-loofinity-light/20">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            }
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                features={product.features}
                location={product.location}
                action={
                  <div className="flex gap-2 mt-4">
                    <Link to={`/products/${product.id}`}>
                      <Button className="w-full">View Details</Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleLocationClick(product.location)}
                    >
                      <MapPin className="w-4 h-4 mr-2" /> Location
                    </Button>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
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
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rental Info Section */}
      <section className="py-16 bg-loofinity-teal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Rental Options for Every Need</h2>
              <p className="text-loofinity-light/90 mb-8 text-lg">
                Whether you need portable toilets for a one-day event or a long-term construction project, we offer customized rental solutions to meet your specific requirements.
              </p>
              
              <div className="space-y-6">
                {rentalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">{benefit.title}</h4>
                      <p className="text-loofinity-light/80">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/rental">
                  <Button size="lg" className="bg-loofinity-accent hover:bg-amber-500 text-black shadow-lg">
                    <CalendarCheck className="mr-2 h-5 w-5" /> View Rental Options
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Get a Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Portable Toilet"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg text-gray-800">
                <div className="flex items-center">
                  <div className="bg-loofinity-accent/10 p-2 rounded-full mr-3">
                    <Star className="w-6 h-6 text-loofinity-accent" />
                  </div>
                  <div>
                    <p className="font-bold">100+</p>
                    <p className="text-sm">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Hear from businesses and event organizers who trust Loofinity for their portable sanitation needs."
            centered
            action={
              <Link to="/testimonials">
                <Button variant="ghost" className="text-loofinity-teal hover:bg-loofinity-light/20">
                  Read All Testimonials
                </Button>
              </Link>
            }
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                date={testimonial.date}
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
        secondaryButtonText="Call Us Now"
        secondaryButtonLink="tel:+27123456789"
        imageBackground={true}
      />
    </PageWrapper>
  );
};

export default Index;
