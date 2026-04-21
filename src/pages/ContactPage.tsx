import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { ContactBlock } from "../components/blocks/ContactBlock";

export default function ContactPage() {
  return (
    <div className="flex flex-col">

      <div className="bg-white pt-24 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={1} className="uppercase text-primary font-semibold">Contact Us.</Heading>
          <Text variant="lead" className="mt-6">
            We are always ready to hear from you and
            discuss how we can support your business
            goals. Whether it's an urgent need or a longterm project, your success is our priority. Let’s
            build something powerful together!
          </Text>
        </div>
      </div>

      <ContactBlock />
    </div>
  );
}