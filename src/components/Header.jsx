import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-4 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* logo */}
        <Link href="/">
          <Image src={logo} alt="logo" className="w-19" />
        </Link>
        {/* logo */}

        {/* Desktop Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button className="cursor-pointer">Hire me</Button>
          </Link>
        </div>
        {/* Desktop Navbar */}

        {/* Mobile Navbar */}
        <div className="xl:hidden"></div>
        {/* Mobile Navbar */}
      </div>
    </header>
  );
};

export default Header;
