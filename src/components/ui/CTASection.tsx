
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageBackground?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageBackground = false,
}) => {
  return (
    <section 
      className={`py-16 ${
        imageBackground 
          ? 'bg-loofinity-teal bg-opacity-90 text-white' 
          : 'bg-loofinity-light'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
          imageBackground ? 'text-white' : 'text-loofinity-teal'
        }`}>
          {title}
        </h2>
        <p className={`text-lg max-w-2xl mx-auto mb-8 ${
          imageBackground ? 'text-loofinity-light' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
        <Link to={buttonLink}>
          <Button 
            size="lg" 
            className={`${
              imageBackground
                ? 'bg-loofinity-accent hover:bg-amber-500'
                : 'bg-loofinity-teal hover:bg-loofinity-dark'
            } text-white`}
          >
            <Phone className="mr-2" /> {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
