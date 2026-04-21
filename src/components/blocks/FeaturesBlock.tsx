import { Clock10, Trophy, Users, DollarSign } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/Card";

const coreFeatures = [
  {
    title: "Delivery on time",
    description: "We're committed to delivering exceptional service and reliability. Trust us to meet your needs and exceed your expectations.",
    icon: Clock10,
  },
  {
    title: "Best quality",
    description: "We exceed expectations through rigorous quality control and secure packing, ensuring safe, on-time delivery.",
    icon: Trophy,
  },
  {
    title: "Dedicated team",
    description: "Our experienced, customer-centric team delivers exceptional results and fast support to ensure user success.",
    icon: Users,
  },
  {
    title: "Affordable prices",
    description: "We provide exceptional value through high-quality, affordably priced products—guaranteed.",
    icon: DollarSign,
  },
];

export function FeaturesBlock() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading level={2} className="uppercase font-semibold text-primary">Your well-being is our priority</Heading>
          <Text variant="lead" className="mt-4">
            We handle the technical heavy lifting <br />so you can focus entirely on running your business.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="border-transparent shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
              >
                <CardHeader>
                  <div className="h-12 w-12  bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <CardTitle className="text-xl text-primary uppercase">{feature.title}</CardTitle>

                  <CardDescription className="text-base mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}

        </div>
      </div>
    </div>
  );
}