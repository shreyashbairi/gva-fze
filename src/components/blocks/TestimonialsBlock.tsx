import { Star } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Card, CardContent } from "../ui/Card";
import { Image } from "../ui/Image";

const testimonials = [
  {
    content: "They completely rebuilt our outdated website in less than a week. Our online bookings have gone up 40% since the launch.",
    author: "Sarah Jenkins",
    role: "Owner, Bloom Floral",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", 
  },
  {
    content: "The level of customer service is unmatched. Whenever I need a change to my menu or hours, they handle it instantly. Worth every penny.",
    author: "Marcus Chen",
    role: "Founder, Urban Roasters",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    content: "I didn't know the first thing about SEO or web design. They explained everything simply and delivered a site that looks incredibly high-end.",
    author: "Elena Rodriguez",
    role: "Director, Elevate Fitness",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  }
];

export function TestimonialsBlock() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Heading level={2}>Don't just take our word for it</Heading>
          <Text variant="lead" className="mt-4">
            Hear from the local business owners who have transformed their digital presence with us.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-none shadow-sm h-full flex flex-col justify-between">
              <CardContent className="pt-6">
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                
                <Text className="text-gray-700 italic mb-8 relative z-10">
                  "{testimonial.content}"
                </Text>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-12 w-12 shrink-0">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      aspectRatio="square"
                      className="rounded-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </div>
  );
}