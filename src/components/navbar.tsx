'use client';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center bg-black/30 backdrop-blur-sm py-4 sticky top-0 z-50">
      <NavigationMenu className="flex items-center sm:gap-x-4 gap-x-2">
        <NavigationMenuList className="flex items-center gap-16">
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-white hover:text-blue-300 transition-colors"
              href="#home"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-white hover:text-blue-300 transition-colors"
              href="#about"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-white hover:text-blue-300 transition-colors"
              href="#contact"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
