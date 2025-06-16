"use client";

import Link from "next/link";
import React from "react";
import logo from "../../public/licc.png";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { name: "Accueil", href: "/" },
  { name: "La Vision", href: "/lavision" },
  { name: "Vie à ICC", href: "/mhi" },
  { name: "Aide", href: "/help" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className=" sticky top-0 z-50  shadow-md bg-[#344d77] text-white flex justify-between px-4 py-4">
      <div>
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={20}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
      <div className="max-md:hidden">
        <Link className="mr-4 hover:text-blue-400" href="/">
          Accueil
        </Link>
        <Link className="mr-4 hover:text-blue-400" href="/lavision">
          La Vision
        </Link>
        <Link className="mr-4 hover:text-blue-400" href="/mhi">
          Vie à ICC
        </Link>
        <Link className="mr-4 hover:text-blue-400" href="/help">
          Aide
        </Link>
        <Link className="mr-4 hover:text-blue-400" href="/contac">
          Contact
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">Menu Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
