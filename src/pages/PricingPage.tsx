import { PricingGridBlock } from "../components/blocks/PricingGridBlock";
import { FaqBlock } from "../components/blocks/FaqBlock";
import { FinalCtaBlock } from "../components/blocks/FinalCtaBlock";

const pricingFaqs = [
  {
    question: "Do you require a long-term contract?",
    answer: "No. All of our plans are month-to-month. We believe in earning your business every single month, so you can cancel anytime without penalty."
  },
  {
    question: "Are there any hidden setup fees?",
    answer: "No hidden fees, ever. The monthly price you see is exactly what you pay. We cover the cost of the initial design, development, and launch."
  },
  {
    question: "Do I own the website after it is built?",
    answer: "Absolutely. Once the site is launched and your first month is paid, you own the code, the domain, and all the content. You are never locked into our hosting."
  },
  {
    question: "Can I upgrade my plan later if my business grows?",
    answer: "Yes! You can upgrade from Starter to Professional (or Enterprise) at any time. We simply prorate the difference for that billing cycle."
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PricingGridBlock />
      <FaqBlock title="Billing & Plans" subtitle="Everything you need to know about pricing." items={pricingFaqs} />
      <FinalCtaBlock />
    </div>
  );
}