import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business goals, target audience, and current digital bottlenecks."
  },
  {
    number: "02",
    title: "Strategy & Design",
    description: "We wireframe a custom solution tailored to convert your specific local traffic."
  },
  {
    number: "03",
    title: "Development",
    description: "We build your site using modern, lightning-fast code—keeping you updated every step."
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "We handle the deployment, SEO indexing, and provide ongoing support so you can grow."
  }
];

export function ProcessBlock() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Heading level={2}>How we work together</Heading>
          <Text variant="lead" className="mt-4">
            A transparent, streamlined process designed to get you online quickly without the headache.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border-transparent shadow-sm relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 opacity-50 pointer-events-none select-none">
                  {step.number}
                </div>
                <Text className="text-primary font-bold tracking-wider text-sm mb-2 relative z-10">
                  STEP {step.number}
                </Text>
                <CardTitle className="relative z-10">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <Text className="text-gray-600">{step.description}</Text>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </div>
  );
}