import { Heading } from "../components/ui/Heading";
import { DetailedServicesBlock } from "../components/blocks/DetailedServicesBlock";
import { FinalCtaBlock } from "../components/blocks/FinalCtaBlock";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      
      <div className="bg-white pt-24 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={1} className="uppercase font-semibold text-primary">Expertise you can rely on.</Heading>
        </div>
      </div>

      <DetailedServicesBlock />
      <FinalCtaBlock />
    </div>
  );
}