import { FeaturesBlock } from "../components/blocks/FeaturesBlock";
import { FinalCtaBlock } from "../components/blocks/FinalCtaBlock";
import { HeroBlock } from "../components/blocks/HeroBlock";
import { LogoCloudBlock } from "../components/blocks/LogoCloudBlock";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroBlock />
      <LogoCloudBlock />
      <FeaturesBlock />
      <FinalCtaBlock /> 
    </div>
  );
}