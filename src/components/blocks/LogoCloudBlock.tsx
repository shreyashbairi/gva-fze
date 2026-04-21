import { Text } from "../ui/Text";
import { Image } from "../ui/Image";
import SiemensLogo from "../../assets/brands/siemens.png";
import EverllenceLogo from "../../assets/brands/everllence.png";
import GeLogo from "../../assets/brands/ge.png";
import EthosLogo from "../../assets/brands/ethos.png";
import HydroLogo from "../../assets/brands/hydro.png";
import FoxLogo from "../../assets/brands/fox.png";
import RockwellLogo from "../../assets/brands/rockwell.png";
import SchenckLogo from "../../assets/brands/schenck.png";
import SulzerLogo from "../../assets/brands/sulzer.png";
import SolarLogo from "../../assets/brands/solar.png";
import KobelcoLogo from "../../assets/brands/kobelco.png";
import AabLogo from "../../assets/brands/aab.png";
import AtlasLogo from "../../assets/brands/atlas.png";
import BurckhardtLogo from "../../assets/brands/burckhardt.png";
import DoosanLogo from "../../assets/brands/doosan.png";
import EmersonLogo from "../../assets/brands/emerson.png";
import HoneywellLogo from "../../assets/brands/honeywell.png";
import KomatsuLogo from "../../assets/brands/komatsu.png";
import SchneiderLogo from "../../assets/brands/schneider.png";
import WegLogo from "../../assets/brands/weg.png";

const clientLogos = [
  { name: "Everllence", url: EverllenceLogo },
  { name: "GE", url: GeLogo },
  { name: "Ethos", url: EthosLogo },
  { name: "Hydro", url: HydroLogo },
  { name: "Siemens", url: SiemensLogo },
  { name: "Fox", url: FoxLogo },
  { name: "Rockwell", url: RockwellLogo },
  { name: "Schenck", url: SchenckLogo },
  { name: "Sulzer", url: SulzerLogo },
  { name: "Solar", url: SolarLogo },
  { name: "Kobelco", url: KobelcoLogo },
  { name: "AAB", url: AabLogo },
  { name: "Atlas", url: AtlasLogo },
  { name: "Burckhardt", url: BurckhardtLogo },
  { name: "Doosan", url: DoosanLogo },
  { name: "Emerson", url: EmersonLogo },
  { name: "Honeywell", url: HoneywellLogo },
  { name: "Komatsu", url: KomatsuLogo },
  { name: "Schneider", url: SchneiderLogo },
  { name: "Weg", url: WegLogo },
];

export function LogoCloudBlock() {
  const loopingLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="bg-white py-12 sm:py-16 border-b border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <Text variant="muted" className="text-center font-semibold text-lg uppercase tracking-wider">
          Our wide global network of trusted partners
        </Text>
      </div>

      <div className="group relative flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
        
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          
          {loopingLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex h-12 w-32 sm:w-40 items-center justify-center opacity-60 transition-all duration-300 hover:opacity-100 cursor-pointer shrink-0"
            >
              <Image 
                src={logo.url} 
                alt={`${logo.name} logo`}
                containerClassName="w-full h-full bg-transparent"
                className="object-contain" 
              />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}