import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { Image } from "../components/ui/Image";
import { StatsBlock } from "../components/blocks/StatsBlock";
import { FinalCtaBlock } from "../components/blocks/FinalCtaBlock";
import { ValuesBlock } from "../components/blocks/ValuesBlock";
import AboutImg from "../assets/about_img.png";

export default function AboutPage() {
    return (
        <div className="flex flex-col">

            <div className="relative overflow-hidden bg-white pb-16">
                <div className="px-4 sm:px-6 lg:px-0 lg:pl-6">
  
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center lg:items-stretch lg:min-h-162">

                        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left flex flex-col justify-center">

                            <Heading level={1} className="text-primary font-semibold uppercase">
                                Who we are?
                            </Heading>

                            <Text variant="lead" className="mt-6 text-justify">
                                Global Visionary Associates F.Z.E. is a premier UAE-based
                                engineering and procurement hub serving the global
                                Chemical, Fertiliser, Oil and Gas, Petrochemical, and
                                Energy sectors. We provide a strategic single-source
                                bridge between complex industrial requirements and
                                high-performance solutions.
                            </Text>
                            <Text variant="lead" className="mt-6 text-justify">
                                Beyond our core in global sourcing, we have evolved into
                                a comprehensive technical partner. By integrating an
                                extensive international supply network with specialised
                                expertise in Industrial Automation, and Asset
                                Maintenance, we deliver end-to-end engineering
                                consultancy and mission-critical solutions with worldclass precision and reliability.
                            </Text>
                        </div>

                        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none w-full">

                            <div className="relative mx-auto w-full h-auto lg:h-full flex flex-col transition-all duration-300 hover:shadow-2xl shadow-xl border border-gray-100 bg-white overflow-hidden">
                                <Image
                                    src={AboutImg}
                                    aspectRatio="auto"
                                    alt="Modern office space"
                                    containerClassName="relative lg:absolute lg:inset-0 w-full h-auto block"
                                    className="w-full h-auto lg:h-full object-cover block"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <ValuesBlock />
            <StatsBlock />
            <FinalCtaBlock />

        </div>
    );
}