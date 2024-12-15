"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
<<<<<<< HEAD
    href: "#",
=======
<<<<<<< HEAD
    href: "#",
=======
    href: "/tops",
>>>>>>> f40bfca (Initial commit)
>>>>>>> 860891e (Initial commit)
    description: "A collection of beautifull tops for your wardrobe to sleek your look"
  },
  {
    title: "Pants",
<<<<<<< HEAD
    href: "#",
=======
<<<<<<< HEAD
    href: "#",
=======
    href: "/pants",
>>>>>>> f40bfca (Initial commit)
>>>>>>> 860891e (Initial commit)
    description: "A collection of beautifull Pants for your wardrobe to sleek your look"
  },
  {
    title: "Accessories/Jewellery",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 860891e (Initial commit)
    href: "#",
    description: "A collection of beautifull Jewellery for your wardrobe to sleek your look"
  },
  {
    title: "Tops",
    href: "#",
<<<<<<< HEAD
=======
=======
    href: "/accesssories",
    description: "A collection of beautifull Jewellery for your wardrobe to sleek your look"
  },
  {
    title: "Shoes",
    href: "/shoes",
>>>>>>> f40bfca (Initial commit)
>>>>>>> 860891e (Initial commit)
    description: "A collection of beautifull shoes for your wardrobe to sleek your look"
  },

]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hover:text-myOrange duration-300">
          Home
          <NavigationMenuContent>
          
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-myOrange duration-300">Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-300 ">
              {components.map((component) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
         
>>>>>>> f40bfca (Initial commit)
>>>>>>> 860891e (Initial commit)
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
<<<<<<< HEAD
          <Link href="#" legacyBehavior passHref>
=======
<<<<<<< HEAD
          <Link href="#" legacyBehavior passHref>
=======
          <Link href="/about" legacyBehavior passHref>
>>>>>>> f40bfca (Initial commit)
>>>>>>> 860891e (Initial commit)
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
         About
            </NavigationMenuLink>
          </Link>
<<<<<<< HEAD
          <Link href="#" legacyBehavior passHref>
=======
<<<<<<< HEAD
          <Link href="#" legacyBehavior passHref>
=======
          <Link href="/contact" legacyBehavior passHref>
>>>>>>> f40bfca (Initial commit)
>>>>>>> 860891e (Initial commit)
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
       Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
