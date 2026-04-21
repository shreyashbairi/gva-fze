import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";
import CtaImg from "../../assets/cta_img.png";

export function FinalCtaBlock() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative isolate overflow-hidden px-6 py-16 sm:px-16 sm:py-24 text-center shadow-2xl">

          <Image
            src={CtaImg}
            alt="Business transformation"
            containerClassName="absolute inset-0 -z-20 w-full h-full"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gray-900/40"></div>

          <Heading level={2} className="text-white sm:text-5xl font-semibold uppercase">
            Ready to transform your business?
          </Heading>

          <div className="mt-10 flex justify-center">
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}