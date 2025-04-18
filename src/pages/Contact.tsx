
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string({
    required_error: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "Inquiry Received",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    form.reset();
  }

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-32 pb-16 bg-loofinity-light">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Contact Us" 
            subtitle="Reach out with any questions about our products and services."
            centered
          />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-loofinity-teal">Send Us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sales">Product Sales</SelectItem>
                              <SelectItem value="rental">Rental Inquiry</SelectItem>
                              <SelectItem value="service">Maintenance Service</SelectItem>
                              <SelectItem value="chemicals">Cleaning Products</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your inquiry..." 
                            className="h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="bg-loofinity-teal hover:bg-loofinity-dark w-full md:w-auto">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-loofinity-teal">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-loofinity-teal mt-1 mr-3" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-loofinity-teal mt-1 mr-3" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>info@loofinity.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-loofinity-teal mt-1 mr-3" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>123 Sanitation Drive<br />Clean City, CL 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-loofinity-teal mt-1 mr-3" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p>Monday - Friday: 8am - 6pm<br />Saturday: 9am - 4pm<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-loofinity-teal">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/products/toilets" className="text-loofinity-teal hover:underline">
                      Mobile Toilets
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/chemicals" className="text-loofinity-teal hover:underline">
                      Cleaning Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/rental" className="text-loofinity-teal hover:underline">
                      Rental Information
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-loofinity-teal hover:underline">
                      Maintenance Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-loofinity-teal hover:underline">
                      About Our Company
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Find Us" 
            subtitle="Visit our location or service area"
            centered
          />
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830872278!2d-73.7499307!3d42.6526067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a34cc4ffb4b%3A0xe1a16e6a9c3b4d04!2sAlbany%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Service Areas" 
            subtitle="Loofinity proudly serves the following regions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-loofinity-light text-center">
              <h4 className="text-xl font-bold mb-3 text-loofinity-teal">North Region</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Albany</li>
                <li>Saratoga Springs</li>
                <li>Lake George</li>
                <li>Glens Falls</li>
                <li>Queensbury</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg bg-loofinity-light text-center">
              <h4 className="text-xl font-bold mb-3 text-loofinity-teal">South Region</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Kingston</li>
                <li>New Paltz</li>
                <li>Poughkeepsie</li>
                <li>Beacon</li>
                <li>Newburgh</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg bg-loofinity-light text-center">
              <h4 className="text-xl font-bold mb-3 text-loofinity-teal">East Region</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Bennington</li>
                <li>Brattleboro</li>
                <li>Pittsfield</li>
                <li>Great Barrington</li>
                <li>Lee</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg bg-loofinity-light text-center">
              <h4 className="text-xl font-bold mb-3 text-loofinity-teal">West Region</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Utica</li>
                <li>Rome</li>
                <li>Oneonta</li>
                <li>Cooperstown</li>
                <li>Herkimer</li>
              </ul>
            </div>
          </div>
          
          <p className="text-center mt-6 text-gray-600">
            Don't see your location listed? Contact us to check if we service your area.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
