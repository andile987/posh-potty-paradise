
import React from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, Droplet, Truck, Clock, CheckCircle } from "lucide-react";

const Services = () => {
  const maintenancePlans = [
    {
      title: "Standard",
      description: "Regular maintenance for occasional-use toilets",
      price: "$99",
      period: "per service",
      features: [
        "Waste removal",
        "Basic cleaning",
        "Refill of supplies",
        "Deodorizer application"
      ]
    },
    {
      title: "Premium",
      description: "Thorough maintenance for high-traffic facilities",
      price: "$149",
      period: "per service",
      features: [
        "Everything in Standard",
        "Deep cleaning of all surfaces",
        "Sanitizing treatment",
        "Premium deodorizing",
        "Minor repairs"
      ]
    },
    {
      title: "Deluxe",
      description: "Comprehensive service for luxury portable toilets",
      price: "$219",
      period: "per service",
      features: [
        "Everything in Premium",
        "Exterior pressure washing",
        "Specialty fragrance treatment",
        "Component inspection",
        "Preventative maintenance",
        "24/7 priority support"
      ]
    }
  ];

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-32 pb-16 bg-loofinity-light">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="Professional maintenance and care for your portable sanitation facilities."
            centered
          />
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-16 bg-white" id="services-tabs">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="maintenance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="maintenance" className="text-base">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                  <Wrench className="w-5 h-5 md:mr-2" />
                  <span>Maintenance</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="cleaning" className="text-base">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                  <Droplet className="w-5 h-5 md:mr-2" />
                  <span>Cleaning</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="delivery" className="text-base">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                  <Truck className="w-5 h-5 md:mr-2" />
                  <span>Delivery</span>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Maintenance Tab */}
            <TabsContent value="maintenance" id="maintenance">
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Wrench className="w-10 h-10 text-loofinity-teal mr-4" />
                    <h3 className="text-2xl font-bold text-gray-800">Regular Maintenance</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Keep your portable toilets in optimal condition with our professional maintenance services. 
                    Our trained technicians will ensure that your facilities remain clean, functional, and 
                    odor-free through regular servicing tailored to your specific needs.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {maintenancePlans.map((plan, index) => (
                      <Card key={index} className={`border ${index === 1 ? 'border-loofinity-accent' : 'border-gray-200'}`}>
                        {index === 1 && (
                          <div className="bg-loofinity-accent text-white text-center text-sm font-semibold py-2">
                            MOST POPULAR
                          </div>
                        )}
                        <CardContent className="pt-6">
                          <h4 className="text-xl font-bold mb-1 text-loofinity-teal">{plan.title}</h4>
                          <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                          <div className="flex items-baseline mb-6">
                            <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                            <span className="text-gray-500 ml-2">{plan.period}</span>
                          </div>
                          
                          <ul className="space-y-2">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-loofinity-teal mr-2 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Cleaning Tab */}
            <TabsContent value="cleaning" id="cleaning">
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Droplet className="w-10 h-10 text-loofinity-teal mr-4" />
                    <h3 className="text-2xl font-bold text-gray-800">Deep Cleaning</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our specialized cleaning services go beyond regular maintenance to ensure your portable toilets 
                    meet the highest standards of cleanliness and hygiene. We use eco-friendly, industrial-grade 
                    cleaning products that effectively sanitize all surfaces while being gentle on the environment.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-xl font-bold mb-4 text-loofinity-teal">Standard Cleaning Process</h4>
                      <ol className="space-y-3">
                        <li className="flex">
                          <span className="bg-loofinity-light text-loofinity-teal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                          <span>Waste removal and disposal at approved facilities</span>
                        </li>
                        <li className="flex">
                          <span className="bg-loofinity-light text-loofinity-teal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                          <span>Tank treatment with specialized waste-digesting chemicals</span>
                        </li>
                        <li className="flex">
                          <span className="bg-loofinity-light text-loofinity-teal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                          <span>Surface cleaning and sanitizing of all touch points</span>
                        </li>
                        <li className="flex">
                          <span className="bg-loofinity-light text-loofinity-teal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                          <span>Floor scrubbing and disinfection</span>
                        </li>
                        <li className="flex">
                          <span className="bg-loofinity-light text-loofinity-teal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                          <span>Application of odor control agents</span>
                        </li>
                        <li className="flex">
                          <span className="bg-loofinity-light text-loofinity-teal rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">6</span>
                          <span>Restocking of supplies (toilet paper, hand sanitizer)</span>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-xl font-bold mb-4 text-loofinity-teal">Our Cleaning Products</h4>
                      <p className="text-gray-600 mb-4">
                        We use only the highest quality, environmentally responsible cleaning products that provide superior results:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold">EcoClean Solution</span> - Our proprietary blend that breaks down waste while minimizing environmental impact.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold">SaniGuard</span> - Hospital-grade disinfectant effective against 99.9% of bacteria and viruses.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold">FreshScent</span> - Long-lasting deodorizer with natural essential oils for a pleasant fragrance.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold">EnzymeTreat</span> - Biological enzyme treatment for natural breakdown of waste.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Delivery Tab */}
            <TabsContent value="delivery" id="delivery">
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Truck className="w-10 h-10 text-loofinity-teal mr-4" />
                    <h3 className="text-2xl font-bold text-gray-800">Delivery & Setup</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    We handle all logistics of delivering, setting up, and removing portable toilets from your location. 
                    Our experienced team ensures proper placement and installation for optimal accessibility and functionality.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-loofinity-teal">Our Delivery Process</h4>
                      <div className="space-y-6">
                        <div className="flex">
                          <div className="bg-loofinity-light text-loofinity-teal rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                          <div>
                            <h5 className="font-semibold text-lg mb-1">Site Assessment</h5>
                            <p className="text-gray-600">
                              We evaluate your site to determine the optimal placement for portable toilets, 
                              considering factors like ground stability, accessibility, and privacy.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="bg-loofinity-light text-loofinity-teal rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                          <div>
                            <h5 className="font-semibold text-lg mb-1">Scheduled Delivery</h5>
                            <p className="text-gray-600">
                              Our team arrives at the predetermined time to deliver your units with minimal 
                              disruption to your event or work site.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="bg-loofinity-light text-loofinity-teal rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                          <div>
                            <h5 className="font-semibold text-lg mb-1">Professional Setup</h5>
                            <p className="text-gray-600">
                              We properly level and secure each unit, ensure all components are functioning, 
                              and stock with necessary supplies.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="bg-loofinity-light text-loofinity-teal rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                          <div>
                            <h5 className="font-semibold text-lg mb-1">Timely Removal</h5>
                            <p className="text-gray-600">
                              At the end of your rental period, we promptly collect and remove the units, 
                              leaving your site clean and undisturbed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-xl font-bold mb-4 text-loofinity-teal">Delivery FAQ</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold mb-1">What access do you need for delivery?</h5>
                          <p className="text-gray-600">
                            Our delivery trucks require a clearance of 10 feet wide and 12 feet high, 
                            with sufficient space to maneuver. We can accommodate most locations, but please 
                            inform us of any access restrictions.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-1">How far in advance should I schedule delivery?</h5>
                          <p className="text-gray-600">
                            We recommend scheduling delivery at least 1-2 days before your event or when 
                            you need the units. For large events or peak seasons, 1-2 weeks notice is preferred.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-1">Is there an additional charge for delivery?</h5>
                          <p className="text-gray-600">
                            Standard delivery within 30 miles of our facility is included in the rental price. 
                            Additional fees may apply for longer distances or challenging access situations.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-1">What if I need to change the delivery time?</h5>
                          <p className="text-gray-600">
                            We understand plans change. Please notify us at least 24 hours in advance to 
                            reschedule delivery at no additional charge. Last-minute changes may incur a fee.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Service Schedule Options" 
            subtitle="We offer flexible maintenance schedules to meet your specific needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-loofinity-teal mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Weekly Service</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ideal for construction sites, long-term projects, and high-traffic areas. We'll visit once a week to clean, restock, and maintain your portable toilets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Regular scheduled maintenance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Consistent cleanliness</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Never run out of supplies</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Discounted rates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-loofinity-teal mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Bi-Weekly Service</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Perfect for moderate-use locations or smaller project sites. We'll service your units every two weeks to maintain sanitary conditions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Cost-effective maintenance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Suitable for lower traffic</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Reduced service frequency</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Regular inspections</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-loofinity-teal mr-3" />
                <h3 className="text-xl font-bold text-gray-800">On-Demand Service</h3>
              </div>
              <p className="text-gray-600 mb-4">
                For special events, one-time needs, or as-needed maintenance. Contact us whenever you require service, and we'll respond promptly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Maximum flexibility</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Pay only when needed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>24/7 emergency service</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-loofinity-teal mr-2 flex-shrink-0" />
                  <span>Rapid response times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Schedule a Service?"
        subtitle="Contact our team to discuss your maintenance and service needs."
        buttonText="Request Service"
        buttonLink="/contact"
        imageBackground={true}
      />
    </PageWrapper>
  );
};

export default Services;
