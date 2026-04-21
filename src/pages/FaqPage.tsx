import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { FaqBlock } from "../components/blocks/FaqBlock";
import { FinalCtaBlock } from "../components/blocks/FinalCtaBlock";

const generalFaqs = [
  {
    question: "Do you offer custom integrations?",
    answer: "Yes. Our Enterprise tier is designed specifically for businesses that need custom API integrations, third-party software connections, or unique database architectures."
  },
  {
    question: "Is hosting included in the monthly fee?",
    answer: "Yes. All of our plans include high-performance cloud hosting with 99.9% uptime guarantees, SSL certificates, and daily backups."
  },
  {
    question: "Can I use my own domain name?",
    answer: "Absolutely. We can help you connect an existing domain you own, or we can assist you in purchasing and setting up a brand new one."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Every single website we build is 'Mobile-First.' It will look and function perfectly on smartphones, tablets, and desktop monitors of all sizes."
  }
];

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-white pt-24 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={1}>Help Center</Heading>
          <Text variant="lead" className="mt-6">
            Find answers to the most common questions about our platform, 
            process, and how we help your business grow.
          </Text>
        </div>
      </div>

      <FaqBlock 
        title="General Knowledge" 
        subtitle="The basics of working with SmallBiz." 
        items={generalFaqs} 
      />
      
      <FinalCtaBlock />
    </div>
  );
}