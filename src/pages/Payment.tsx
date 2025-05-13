
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, ShoppingCart, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  cardName: z.string().min(3, { message: "Name must be at least 3 characters" }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Card number must be 16 digits" }),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Expiry must be in MM/YY format" }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV must be 3 or 4 digits" }),
});

const Payment = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  // Mock product data - in a real app this would come from an API or context
  const mockProducts: Record<string, any> = {
    "luxury-portable": {
      name: "VIP Luxury Portable Toilet",
      price: 39999.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1nXxUPNmQonzVdsduqSRw-7PtGQzFQvNWw&s"
    },
    "standard-portable": {
      name: "Standard Portable Toilet",
      price: 24999.99,
      image: "https://images.unsplash.com/photo-1585332889055-87c9798e7082?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    "eco-clean": {
      name: "Eco-Clean Solution",
      price: 849.99,
      image: "https://images.unsplash.com/photo-1584385529355-4e1b8d7bd507?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    "fresh-scent": {
      name: "Fresh Scent Deodorizer",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  };

  const product = productId ? mockProducts[productId] : null;
  const formattedPrice = product ? new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(product.price) : "Price not available";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
      toast({
        title: "Payment Successful",
        description: "Your order has been processed successfully!",
      });
    }, 2000);
  };

  // Format card number with spaces as user types
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\s+/g, "").slice(0, 16);
    form.setValue("cardNumber", val);
  };

  // Format expiry date as user types
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 2) {
      val = `${val.slice(0, 2)}/${val.slice(2, 4)}`;
    }
    form.setValue("expiry", val);
  };

  if (!product) {
    return (
      <PageWrapper>
        <div className="py-32">
          <SectionHeading
            title="Product Not Found"
            subtitle="We couldn't find the product you're looking for."
            centered
          />
          <div className="text-center mt-8">
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
      </PageWrapper>
    );
  }

  if (paymentComplete) {
    return (
      <PageWrapper>
        <div className="py-32">
          <div className="max-w-md mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="text-green-500 h-24 w-24" />
            </div>
            <SectionHeading
              title="Payment Successful!"
              subtitle="Thank you for your purchase. Your order has been processed successfully."
              centered
            />
            <div className="mt-8">
              <p className="mb-4">Order details have been sent to your email.</p>
              <Button onClick={() => window.location.href = "/"} className="bg-loofinity-teal hover:bg-loofinity-dark">
                Return to Home
              </Button>
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
          title="Complete Your Purchase"
          subtitle="Enter your payment details to proceed"
          centered
        />
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Product details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded overflow-hidden">
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-500">Quantity: 1</p>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formattedPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between font-bold mt-2">
                        <span>Total</span>
                        <span>{formattedPrice}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                  <CardDescription>Enter your card information securely</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cardholder Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="1234 5678 9012 3456" 
                                onChange={handleCardNumberChange}
                                value={field.value}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="expiry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expiry Date</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="MM/YY" 
                                  onChange={handleExpiryChange}
                                  value={field.value}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cvv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVV</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="123" 
                                  maxLength={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <CardFooter className="px-0 pt-6">
                        <Button 
                          type="submit" 
                          className="w-full bg-loofinity-teal hover:bg-loofinity-dark"
                          disabled={isProcessing}
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          {isProcessing ? "Processing..." : `Pay ${formattedPrice}`}
                        </Button>
                      </CardFooter>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Payment;
