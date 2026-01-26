import Image from "next/image";
import Link from "next/link";
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

import { Menu } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="section py-0! absolute z-10 top-8 left-0 w-full">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <Image src={"/logo.png"} width={64} height={64} alt="" />
            <p className="text-xs font-nunito text-muted-foreground hidden lg:flex">
              Julius Encryptus
            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center gap-2 w-full">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="text-xs font-nunito font-bold">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/tool"
                      className="text-xs font-nunito font-bold"
                    >
                      Online Decoder
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex justify-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"secondary"}
                  className="flex lg:hidden rounded-none"
                >
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-none w-50">
                <DropdownMenuItem>
                  <Link
                    href="/"
                    className="text-xs font-nunito font-bold w-full"
                  >
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/tool"
                    className="text-xs font-nunito font-bold w-full"
                  >
                    Online Decoder
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="mailto:nkca122@gmail.com">
              <Button className="text-xs font-bold font-nunito rounded-full hover:cursor-pointer">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
