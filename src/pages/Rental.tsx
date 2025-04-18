
import React from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, ShieldCheck, Clock } from "lucide-react";

const Rental = () => {
  const rentalOptions = [
    {
      title: "Standard Weekend",
      price: 199,
      period: "per weekend",
      features: [
        "1 Standard Portable Toilet",
        "Weekend Delivery & Pickup",
        "Basic Cleaning Kit",
        "24/7 Emergency Support"
      ],
      popular: false,
      buttonText: "Select This Plan"
    },
    {
      title: "Premium Event",
      price: 499,
      period: "per event",
      features: [
        "1 Luxury Portable Toilet",
        "Scheduled Delivery & Pickup",
        "Premium Cleaning Supplies",
        "Attendant Service Available",
        "Emergency Support"
      ],
      popular: true,
      buttonText: "Select This Plan"
    },
    {
      title: "Construction",
      price: 799,
      period: "per month",
      features: [
        "2 Standard Portable Toilets",
        "Weekly Maintenance",
        "Industrial Cleaning Supplies",
        "OSHA Compliant",
        "Damage Protection"
      ],
      popular: false,
      buttonText: "Select This Plan"
    }
  ];

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-32 pb-16 bg-loofinity-light">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Rental Options" 
            subtitle="Flexible rental solutions for events, construction sites, and more."
            centered
          />
        </div>
      </section>

      {/* Rental Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-loofinity-light rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Flexible Scheduling</h3>
              <p className="text-gray-600">
                From one-day events to long-term projects, we offer rental periods that fit your timeline.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-loofinity-light rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-10 h-10 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All our rental units are meticulously maintained and cleaned before each delivery.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-loofinity-light rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Prompt Service</h3>
              <p className="text-gray-600">
                On-time delivery, reliable maintenance, and quick pickup when your rental period ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Choose Your Rental Plan" 
            subtitle="Select the rental option that best suits your needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {rentalOptions.map((option, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105 ${
                  option.popular ? 'border-2 border-loofinity-accent' : 'border border-gray-100'
                } bg-white`}
              >
                {option.popular && (
                  <div className="bg-loofinity-accent text-white text-center text-sm font-semibold py-2">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-loofinity-teal mb-2">{option.title}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-800">${option.price}</span>
                    <span className="text-gray-500 ml-2">{option.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      option.popular 
                        ? 'bg-loofinity-accent hover:bg-amber-500' 
                        : 'bg-loofinity-teal hover:bg-loofinity-dark'
                    } text-white`}
                  >
                    {option.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-gray-600">
            <p>Custom rental solutions available for large events or specialized needs.</p>
            <p>Contact us for a personalized quote.</p>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Simple Rental Process" 
            subtitle="We make renting portable toilets easy and hassle-free."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center relative">
              <div className="bg-loofinity-light text-loofinity-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Request a Quote</h3>
              <p className="text-gray-600">
                Contact us with your rental needs and timeline for a customized quote.
              </p>
              {/* Line connector - hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-loofinity-light -z-10 transform -translate-x-4"></div>
            </div>
            
            <div className="text-center relative">
              <div className="bg-loofinity-light text-loofinity-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Confirm Details</h3>
              <p className="text-gray-600">
                We'll schedule delivery and confirm all the specifics of your rental.
              </p>
              {/* Line connector - hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-loofinity-light -z-10 transform -translate-x-4"></div>
            </div>
            
            <div className="text-center relative">
              <div className="bg-loofinity-light text-loofinity-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Delivery & Setup</h3>
              <p className="text-gray-600">
                We deliver and install the units at your specified location.
              </p>
              {/* Line connector - hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-loofinity-light -z-10 transform -translate-x-4"></div>
            </div>
            
            <div className="text-center">
              <div className="bg-loofinity-light text-loofinity-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Pickup & Removal</h3>
              <p className="text-gray-600">
                Upon rental completion, we'll pick up and remove the units promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our rental services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-800">How far in advance should I book?</h3>
              <p className="text-gray-600">
                For events, we recommend booking at least 2-4 weeks in advance. For construction projects, 1-2 weeks notice is usually sufficient, but longer lead times may be necessary during peak seasons.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-800">What is included in the rental fee?</h3>
              <p className="text-gray-600">
                The rental fee includes delivery, setup, pickup, and basic supplies. Maintenance services may be included depending on the rental package or can be added for an additional fee.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-800">How often are rental units serviced?</h3>
              <p className="text-gray-600">
                For short-term rentals (1-3 days), units are serviced before delivery. For longer rentals, we offer regular maintenance as needed or on a scheduled basis, typically weekly for construction sites.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-800">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, checks, and electronic transfers. For long-term rentals, we can set up recurring billing for your convenience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Can I extend my rental period?</h3>
              <p className="text-gray-600">
                Yes, rental extensions are available based on unit availability. Please contact us at least 48 hours before your scheduled pickup to arrange an extension.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-gray-800">What if I need to cancel my rental?</h3>
              <p className="text-gray-600">
                Our cancellation policy requires 48 hours notice for a full refund. Cancellations with less notice may be subject to a partial fee depending on circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Book Your Rental?"
        subtitle="Contact us now to secure the perfect portable toilet solution for your needs."
        buttonText="Get a Quote"
        buttonLink="/contact"
        imageBackground={true}
      />
    </PageWrapper>
  );
};

export default Rental;
