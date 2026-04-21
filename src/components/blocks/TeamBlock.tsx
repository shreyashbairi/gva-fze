import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";

const team = [
  {
    name: "Michael Chen",
    role: "Founder & CEO",
    bio: "Former tech lead who wanted to bring enterprise-grade web solutions to local businesses.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design",
    bio: "Obsessed with clean typography, user experience, and making brands look incredibly premium.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "David Rodriguez",
    role: "Lead Developer",
    bio: "Ensures every line of code is optimized for lightning-fast speeds and perfect SEO.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
  }
];

export function TeamBlock() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Heading level={2}>Meet the team</Heading>
          <Text variant="lead" className="mt-4">
            We are a small, dedicated group of designers and developers passionate about helping local businesses grow.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-6 w-48 h-48 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 border-4 border-white">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  aspectRatio="square"
                />
              </div>
              <Heading level={4} className="mb-1 text-xl">{member.name}</Heading>
              <Text className="text-primary font-medium mb-3">{member.role}</Text>
              <Text className="text-gray-600 max-w-sm">{member.bio}</Text>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}