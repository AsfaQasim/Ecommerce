"use client"; // To ensure the component is rendered client-side
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming you have a utility for conditional classes
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";

// List of available components
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "/tops",
    description: "A collection of beautiful tops for your wardrobe to sleek your look",
  },
  {
    title: "Pants",
    href: "/pants",
    description: "A collection of beautiful pants for your wardrobe to sleek your look",
  },
  {
    title: "Accessories/Jewellery",
    href: "/accessories",
    description: "A collection of beautiful jewellery for your wardrobe to sleek your look",
  },
  {
    title: "Shoes",
    href: "/shoes",
    description: "A collection of beautiful shoes for your wardrobe to sleek your look",
  },
];

export function NavigationMenuDemo() {
  // Condition to check if "About Us" route exists
  const aboutRouteIsDefined = true; // Change this based on your setup

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hover:text-myOrange duration-300">
          Home
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-myOrange duration-300">Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-300">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Conditionally render the "About Us" link */}
        {aboutRouteIsDefined && (
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// List Item Component
const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>( 
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:text-myOrange transition-colors hover:bg-accent duration-300 focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
