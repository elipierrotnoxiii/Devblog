"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <a href="/" className="font-bold text-inherit text-2xl">Journey Through Time</a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/#about" aria-current="page">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#Info">
            More Information
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
