import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqBlockProps = {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
};

export function FaqBlock({ 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know.",
  items 
}: FaqBlockProps) {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Heading level={2}>{title}</Heading>
          <Text variant="lead" className="mt-4">{subtitle}</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {items.map((faq, index) => (
            <div key={index}>
              <Heading level={4} className="mb-2 text-lg">
                {faq.question}
              </Heading>
              <Text className="text-gray-600">
                {faq.answer}
              </Text>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}