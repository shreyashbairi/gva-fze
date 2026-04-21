import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";
import HeroImg from "../../assets/hero_img.png";

export function HeroBlock() {
  return (
    <div className="relative overflow-hidden bg-white pb-16">
      <div className="px-4 sm:px-6 lg:px-0 lg:pl-6">
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center lg:items-stretch lg:min-h-162">

          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left flex flex-col justify-center">

            <Heading level={1} className="text-primary uppercase font-semibold">
              Where performance meets precision.
            </Heading>

            <Text variant="lead" className="mt-6">
              We specialize in the supply and repair of industrial equipment for refineries, gas processing plants, and various other large-scale industrial facilities.
            </Text>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Reach Us Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none w-full">
            
            <div className="relative mx-auto w-full h-auto lg:h-full flex flex-col transition-all duration-300 hover:shadow-2xl shadow-xl border border-gray-100 bg-white overflow-hidden">
              <Image
                src={HeroImg}
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
  );
}