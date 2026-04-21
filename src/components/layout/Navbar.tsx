import { type ComponentProps, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import type { NavLinkItem } from "./Layout";
import { Image } from "../ui/Image";
import LogoGlobe from "../../assets/logo_globe.svg";

export interface NavbarProps extends ComponentProps<"header"> {
  links: NavLinkItem[];
}

export function Navbar({ links, className, ref, ...props }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItemClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "px-3 py-2  text-lg font-medium transition-all duration-200 uppercase",
      isActive
        ? "bg-primary/10 text-primary font-semibold shadow-sm"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    );

  const mobileNavItemClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "block px-3 py-2  text-base font-medium transition-colors uppercase",
      isActive
        ? "bg-primary/10 text-primary font-semibold"
        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    );

  return (
    <header
      ref={ref}
      className={cn("sticky top-0 z-50 w-full bg-white", className)}
      {...props}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link to="/" className="flex items-center gap-2 cursor-pointer outline-none">
          <Image src={LogoGlobe} aspectRatio="square" alt="Logo" className="h-18 w-18 md:h-36 md:w-36 object-contain" containerClassName="bg-transparent" />
          <div className="flex flex-col items-center text-primary uppercase font-semibold">
            <span>Global Visionary</span>
            <span className="text-[0.375rem] tracking-widest">Associates</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-1">
          {links.map((link) => (
            <NavLink key={link.href} to={link.href} className={navItemClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden px-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

      </div>

      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-200 shadow-sm overflow-y-auto",
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 border-transparent py-0"
        )}
      >
        <nav className="flex flex-col space-y-1 px-4 sm:px-6">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={mobileNavItemClasses}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}