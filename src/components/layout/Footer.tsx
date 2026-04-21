import { type ComponentProps } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Text } from "../ui/Text";
import { List, ListItem } from "../ui/List";
import type { NavLinkItem } from "./Layout";
import LogoGlobe from "../../assets/logo_globe.svg";
import { Image } from "../ui/Image";


export interface FooterProps extends ComponentProps<"footer"> {
  links: NavLinkItem[];
}

export function Footer({ links, className, ref, ...props }: FooterProps) {
  return (
    <footer
      ref={ref}
      className={cn("bg-white border-t border-gray-200", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">

          <div className="md:col-span-2">
            <div className="flex gap-2 items-center">
              <Image src={LogoGlobe} aspectRatio="square" alt="Logo" className="h-18 w-18 object-contain" containerClassName="bg-transparent" />
              <div className="flex flex-col items-center text-primary uppercase font-semibold">
                <span>Global Visionary</span>
                <span className="text-[0.375rem] tracking-widest">Associates</span>
              </div>
            </div>
            <Text variant="muted" className="mt-4">
              We specialize in the supply and repair of industrial equipment for refineries, gas processing plants, and various other large-scale industrial facilities.
            </Text>
          </div>

          <div className="md:col-start-4 md:text-right uppercase">
            <Text className="mb-4 font-semibold text-primary">Quick Links</Text>

            <List className="grid grid-cols-1 gap-x-8 gap-y-3 space-y-0">
              {links.map((link) => (
                <ListItem key={link.href} icon={null} className="p-0 md:justify-end">
                  <Link to={link.href} className="text-md hover:text-primary transition-colors inline-block w-full">
                    {link.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>

          <div className="md:text-right uppercase">
            <Text className="mb-4 font-semibold text-primary">Legal</Text>
            <List className="space-y-3">
              <ListItem icon={null} className="p-0 md:justify-end">
                <Link to="/privacy" className="text-md hover:text-primary transition-colors">Privacy Policy</Link>
              </ListItem>
              <ListItem icon={null} className="p-0 md:justify-end">
                <Link to="/terms" className="text-md hover:text-primary transition-colors">Terms of Service</Link>
              </ListItem>
              <ListItem icon={null} className="p-0 md:justify-end">
                <Link to="/cookies" className="text-md hover:text-primary transition-colors">Cookie Policy</Link>
              </ListItem>
            </List>
          </div>

        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <Text variant="muted" className="text-sm uppercase">
            © {new Date().getFullYear()} Global Visionary Associates. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
}