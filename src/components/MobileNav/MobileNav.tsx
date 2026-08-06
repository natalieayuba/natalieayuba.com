import { navlinks } from "@/components/Header/Header";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import HamMenuSvg from "./ham-menu.svg";
import styles from "./MobileNav.module.css";

export const MobileNav = ({ className }: { className: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx(styles.container, className)}>
      <button
        onClick={() => setOpen(!open)}
        className={styles.button}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Mobile navigation menu"
        title={open ? "Close menu" : "Open menu"}
      >
        <HamMenuSvg />
      </button>

      {open && (
        <nav id="mobile-nav" className={styles.menu} data-open={open}>
          {navlinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={styles.item}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};
