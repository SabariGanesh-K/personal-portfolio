"use client"
import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import  {navItems}  from "@/app/config/constants";
import { FaChessKnight } from "react-icons/fa6";
import { BsSuitSpadeFill } from "react-icons/bs";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = navItems;
const [menu, setMenu] = useState(false);
  return (
    <Navbar  isMenuOpen={menu}
    onMenuOpenChange={setMenu} className="bg-transparent">
       <NavbarContent className=" xs:flex md:hidden lg:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className=" pr-3" justify="center">
      <NavbarBrand>
          <BsSuitSpadeFill size={40}  />
          <p className="font-bold text-inherit">Sabari Krishna</p>
        </NavbarBrand>
      </NavbarContent>
      {/* <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
   
      </NavbarContent> */}

      <NavbarContent className="hidden md:flex lg:flex gap-4" justify="center">
    
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
            //   color={
            //     index === 2 ? "foreground" : index === menuItems.length - 1 ? "foreground" : "foreground"
            //   }
            color="primary"
              className="w-full text-white"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu  className="flex flex-col bg-black text-white justify-center text-center ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem  key={`${item}-${index}`}>
            <Link
             color="primary"
              className="w-full text-3xl  text-white "
              href={item.href}
              size="lg"
            >
              <Button onClick={()=>setMenu(false)}> {item.title}</Button>
             
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
