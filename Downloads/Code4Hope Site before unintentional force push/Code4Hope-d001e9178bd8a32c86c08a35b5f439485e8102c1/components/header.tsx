"use client"

import Link from "next/link"
import { Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import {Switch} from "@/components/ui/switch";
import {useState} from "react";
import white_logo from "@/components/assets/images/white_logo_no_text.png";

export function Header() {
  const router = useRouter()


  const [darkMode, setDarkMode] = useState(false);

  // if (localStorage.getItem('theme') === 'dark') {
  //   setDarkMode(true)
  //   document.documentElement.classList.add('dark');
  // }
  const toggleSwitch = () => {
    const root = document.documentElement;

    if (!darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save the user's preference
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Save the user's preference
    }
    setDarkMode(previousState => !previousState);}

  const scrollToSection = (sectionId: string) => {
    router.push('/')
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
      <header className="sticky top-0 z-50 w-full border-b bg-[#826CB8] text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
                src={white_logo}
                alt="Code4Hope Logo"
                width={50}
                height={50}
                className="h-10"
            />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/team">Team</Link>
                <Link href="/sponsors">Sponsors</Link>
                <Link href="/events">Events</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/info">Info</Link>

              </nav>
            </SheetContent>
          </Sheet>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/20 focus:bg-white/20">
                  Quick Links
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    <button onClick={() => scrollToSection('about')}
                            className="block w-full text-left p-2 hover:bg-accent rounded-md">
                      About
                    </button>
                    <button onClick={() => scrollToSection('events')}
                            className="block w-full text-left p-2 hover:bg-accent rounded-md">
                      Upcoming Events
                    </button>
                    <button onClick={() => scrollToSection('workshops')}
                            className="block w-full text-left p-2 hover:bg-accent rounded-md">
                      Recent Workshops
                    </button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/team" legacyBehavior passHref>
                  <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20">
                    Team
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/sponsors" legacyBehavior passHref>
                  <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20">
                    Sponsors
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20">
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20">
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/info" legacyBehavior passHref>
                  <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20">
                    Info
                  </NavigationMenuLink>
                </Link>

              </NavigationMenuItem>
              {/*Switch button for dark mode*/}
              {/*<NavigationMenuItem>*/}
              {/*  <Switch*/}
              {/*      checked={darkMode}*/}
              {/*      onCheckedChange={toggleSwitch}*/}

              {/*  />*/}
              {/*</NavigationMenuItem>*/}

            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
  )
}

