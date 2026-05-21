"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Decoder",
    href: "/tool",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="absolute inset-0 border-b bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60" />

      <div className="container relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 shadow-lg shadow-primary/10">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="Julius Encryptus Logo"
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="hidden md:flex md:flex-col">
              <span className="text-sm font-black tracking-wide">
                Julius Encryptus
              </span>

              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Shield className="h-3 w-3" />
                Cryptanalysis Platform
              </span>
            </div>
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex"
        >
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="group relative rounded-xl px-5 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-foreground"
                    >
                      {item.title}

                      <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-8" />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>

        {/* ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          {/* DESKTOP CTA */}
          <a
            href="mailto:nkca122@gmail.com"
            className="hidden md:flex"
          >
            <Button className="group rounded-2xl px-6 shadow-lg shadow-primary/20">
              <Sparkles className="mr-2 h-4 w-4" />
              Contact Us

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </a>

          {/* MOBILE MENU */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl border-primary/20 bg-background/70 backdrop-blur lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-64 rounded-2xl border-border/50 bg-background/95 p-3 backdrop-blur-xl"
            >
              <div className="mb-3 border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Julius Encryptus
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Cipher Analysis Toolkit
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => (
                  <DropdownMenuItem
                    key={item.title}
                    asChild
                    className="cursor-pointer rounded-xl px-3 py-3"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-sm font-medium"
                    >
                      {item.title}

                      <ArrowRight className="h-4 w-4 opacity-60" />
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>

              <div className="mt-3 border-t pt-3 md:hidden">
                <a href="mailto:nkca122@gmail.com" className="w-full">
                  <Button className="w-full rounded-xl">
                    Contact Us
                  </Button>
                </a>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </div>
    </header>
  );
}