"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";

import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon, Logo } from "@/components/icons";

import { useState } from "react";
import MegaMenu from "./mega-menu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  let closeTimeout: NodeJS.Timeout;

  const openMenu = (item: string) => {
    clearTimeout(closeTimeout);
    setIsMenuOpen(true);
    setActiveItem(item);
  };

  const scheduleCloseMenu = () => {
    closeTimeout = setTimeout(() => {
      setIsMenuOpen(false);
      setActiveItem(null);
    }, 150);
  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-3xl">petspot</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <div
        onMouseLeave={() => {
          setIsMenuOpen(false);
          setActiveItem(null);
        }}
        className="h-full "
      >
        <NavbarContent justify="center" className="hidden lg:flex ">
          <ul className="hidden lg:flex gap-12 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem
                key={item.href}
                onMouseEnter={() => openMenu(item.label)}
                className="cursor-pointer"
              >
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "font-semibold"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        {isMenuOpen && activeItem && (
          <MegaMenu
            active={activeItem}
            onMouseEnter={() => clearTimeout(closeTimeout)}
            onMouseLeave={scheduleCloseMenu}
          />
        )}
      </div>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <button className="px-5 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-700  transition">
            Contact Us
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
