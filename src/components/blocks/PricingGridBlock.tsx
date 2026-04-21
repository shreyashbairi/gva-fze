import { CheckCircle2, X } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { List, ListItem } from "../ui/List";

const tiers = [
  {
    name: "Starter",
    description: "Perfect for new local businesses just getting off the ground.",
    price: "$99",
    featured: false,
    features: [
      { name: "5-Page Custom Website", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Monthly Maintenance", included: false },
      { name: "24/7 Priority Support", included: false },
    ],
    cta: "Start Basic",
  },
  {
    name: "Professional",
    description: "Our most popular package for growing businesses needing local dominance.",
    price: "$199",
    featured: true,
    badge: "Most Popular",
    features: [
      { name: "10-Page Custom Website", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Advanced Local SEO", included: true },
      { name: "Monthly Maintenance", included: true },
      { name: "Standard Support", included: true },
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    description: "Dedicated digital infrastructure for established multi-location businesses.",
    price: "$499",
    featured: false,
    features: [
      { name: "Unlimited Pages", included: true },
      { name: "Custom Web Applications", included: true },
      { name: "National SEO Strategy", included: true },
      { name: "Daily Maintenance & Backups", included: true },
      { name: "24/7 Priority Support", included: true },
    ],
    cta: "Contact Sales",
  },
];

export function PricingGridBlock() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading level={2}>Simple, transparent pricing</Heading>
          <Text variant="lead" className="mt-4">
            No hidden fees. No surprise charges. Choose the plan that best fits your business growth.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col h-full transition-all duration-300 ${
                tier.featured 
                  ? "border-2 border-primary shadow-xl md:scale-105 z-10" 
                  : "border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {tier.featured && tier.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                  <Badge variant="default" className="px-4 py-1 text-sm shadow-sm">
                    {tier.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <Text className="text-gray-500 h-12">{tier.description}</Text>
                <div className="mt-6">
                  <span className="text-5xl font-extrabold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500 font-medium">/mo</span>
                </div>
              </CardHeader>

              <CardContent className="grow flex flex-col pt-0">
                <List className="mb-8 grow">
                  {tier.features.map((feature, i) => (
                    <ListItem 
                      key={i} 
                      icon={
                        feature.included 
                          ? <CheckCircle2 className="h-5 w-5 text-primary" /> 
                          : <X className="h-5 w-5 text-gray-300" />
                      }
                    >
                      <span className={feature.included ? "text-gray-700" : "text-gray-400 line-through"}>
                        {feature.name}
                      </span>
                    </ListItem>
                  ))}
                </List>
                
                <Button 
                  size="lg" 
                  variant={tier.featured ? "default" : "outline"} 
                  className="w-full mt-auto"
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </div>
  );
}