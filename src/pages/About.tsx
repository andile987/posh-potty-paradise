
import React from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { Smile, Users, Target, Heart } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Michael Johnson",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "With over 15 years in the sanitation industry, Michael founded Loofinity with a vision to elevate the portable toilet experience through quality and innovation."
    },
    {
      name: "Sarah Chen",
      position: "Operations Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Sarah ensures the smooth operation of our delivery, maintenance, and customer service teams, maintaining our high standards of excellence."
    },
    {
      name: "David Rodriguez",
      position: "Product Development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "David leads our product development initiatives, designing innovative portable toilet solutions with a focus on comfort, sustainability, and functionality."
    },
    {
      name: "Emily Williams",
      position: "Customer Relations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Emily heads our customer service team, ensuring client satisfaction and building lasting relationships with our valued customers."
    }
  ];
  
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-32 pb-16 bg-loofinity-light">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="About Loofinity" 
            subtitle="Revolutionizing portable sanitation with quality, cleanliness, and sustainability."
            centered
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-loofinity-teal">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Loofinity was born from a simple observation: the portable toilet industry 
                was stuck in the past, with little innovation or focus on user experience. Our founder, 
                Michael Johnson, saw an opportunity to transform the industry by introducing premium, 
                comfortable, and environmentally responsible portable toilet solutions.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small rental operation with just five units has grown into a comprehensive 
                sanitation solution provider, offering sales, rentals, maintenance, and specialized cleaning 
                products. Throughout our growth, we've maintained our commitment to quality, cleanliness, 
                and exceptional customer service.
              </p>
              <p className="text-gray-600">
                Today, Loofinity serves clients ranging from construction companies to luxury event planners, 
                all with the same dedication to providing the best portable sanitation experience possible. 
                Our team continues to innovate, developing new products and services that elevate industry standards.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Loofinity team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Mission & Values" 
            subtitle="What drives us every day"
            centered
          />
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-center text-loofinity-teal">Our Mission</h3>
            <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
              "To transform the portable sanitation experience through quality products, exceptional 
              service, and sustainable practices, ensuring dignity and comfort for all users while 
              protecting our environment."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-loofinity-light rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our business, from product quality to customer service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-loofinity-light rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smile className="w-8 h-8 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Dignity</h3>
              <p className="text-gray-600">
                We believe everyone deserves access to clean, comfortable sanitation facilities that respect their dignity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-loofinity-light rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices in our products, chemicals, and operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-loofinity-light rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-loofinity-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Community</h3>
              <p className="text-gray-600">
                We value our relationships with customers, employees, and the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the people behind Loofinity's success"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-loofinity-teal font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Achievements" 
            subtitle="Milestones we're proud of"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-1 bg-loofinity-teal h-full rounded-full"></div>
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute left-0 w-6 h-6 bg-loofinity-teal rounded-full -ml-15 border-4 border-white -translate-x-3"></div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">2015</h4>
                  <p className="text-gray-600">Founded Loofinity with a small fleet of 5 portable toilets</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 w-6 h-6 bg-loofinity-teal rounded-full -ml-15 border-4 border-white -translate-x-3"></div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">2017</h4>
                  <p className="text-gray-600">Expanded to 50 units and launched our first luxury portable toilet model</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 w-6 h-6 bg-loofinity-teal rounded-full -ml-15 border-4 border-white -translate-x-3"></div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">2019</h4>
                  <p className="text-gray-600">Developed our proprietary line of eco-friendly cleaning chemicals</p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-1 bg-loofinity-teal h-full rounded-full"></div>
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute left-0 w-6 h-6 bg-loofinity-teal rounded-full -ml-15 border-4 border-white -translate-x-3"></div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">2020</h4>
                  <p className="text-gray-600">Received "Green Business" certification for our sustainable practices</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 w-6 h-6 bg-loofinity-teal rounded-full -ml-15 border-4 border-white -translate-x-3"></div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">2022</h4>
                  <p className="text-gray-600">Expanded operations to three states and served our 1000th client</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 w-6 h-6 bg-loofinity-teal rounded-full -ml-15 border-4 border-white -translate-x-3"></div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">2024</h4>
                  <p className="text-gray-600">Launched our solar-powered portable toilet line and expanded e-commerce presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Join the Loofinity Community"
        subtitle="Partner with us for all your portable sanitation needs."
        buttonText="Contact Us Today"
        buttonLink="/contact"
        imageBackground={true}
      />
    </PageWrapper>
  );
};

export default About;
