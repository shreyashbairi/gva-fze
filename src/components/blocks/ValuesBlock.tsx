import { CircleCheckBig, MoveUpRight, Handshake } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

const values = [
  {
    title: "Customer Success",
    description: "We act with urgency to deliver innovative, high-quality solutions and meet every commitment.",
    icon: CircleCheckBig
  },
  {
    title: "Profitable Growth",
    description: "We ensure success by investing in future technologies while maintaining competitive, high-return structures.",
    icon: MoveUpRight
  },
  {
    title: "Do the Right Thing",
    description: "We act with integrity to provide sustainable value to our global employees and customers.",
    icon: Handshake
  }
];

export function ValuesBlock() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading level={2} className="uppercase text-primary font-semibold">What drives us</Heading>
          <Text variant="lead" className="mt-4">
            Our core values aren't just words on a wall — they dictate every operational decision, guide our interactions with customers and partners.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center bg-primary/10 mb-6 shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <Heading level={4} className="mb-3 text-xl uppercase text-primary font-semibold">
                  {value.title}
                </Heading>
                <Text className="text-gray-600 leading-relaxed text-justify">{value.description}</Text>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}