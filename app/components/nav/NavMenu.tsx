"use client";
import { formatClassNames } from "@/utils/utils";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import Utilities from "./Utilities";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="lg:hidden">
      <div
        className="relative z-10 -mr-2 text-purple transition-transform duration-150 hover:scale-110"
        title={`${menuOpen ? "Close" : "Open"} menu`}
      >
        <Hamburger
          rounded
          toggled={menuOpen}
          toggle={() => setMenuOpen(!menuOpen)}
          size={30}
        />
      </div>
      <div
        className={formatClassNames([
          "fixed bottom-0 right-0 top-0 -z-10 flex h-dvh w-screen flex-col bg-blue pt-24 transition-[left] duration-300",
          menuOpen ? "left-0" : "left-full",
        ])}
      >
        <NavLinks
          className="flex flex-col text-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <Utilities className="flex flex-1 flex-col items-center justify-end gap-6 p-6 [&>a]:w-full" />
      </div>
    </div>
  );
};

export default NavMenu;
