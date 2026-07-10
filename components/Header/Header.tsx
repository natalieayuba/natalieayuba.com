import { MobileNav } from "@/components/MobileNav/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { VolumeToggle } from "@/components/VolumeToggle/VolumeToggle";
import { useHash } from "@/hooks/useHash";
import Image from "next/image";
import Link from "next/link";
import avatar from "../Avatar/avatar.svg?url";
import styles from "./Header.module.css";

export const navlinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const hash = useHash() || "#";

  const renderNavLinks = (items: typeof navlinks) =>
    items.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        data-active={hash === href}
        className={styles.navlink}
      >
        {label}
      </a>
    ));

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <MobileNav className={styles.mobileNav} />
        <VolumeToggle className={styles.volume} />
      </div>

      <div className={styles.center}>
        <nav className={styles.navlinks}>
          {renderNavLinks(navlinks.slice(0, 2))}
          <Image src={avatar} alt="Avatar" loading="eager" />
          {renderNavLinks(navlinks.slice(2, 4))}
        </nav>

        <Link href="/" className={styles.mobileLogo}>
          <Image src={avatar} alt="Avatar" loading="eager" />
        </Link>
      </div>

      <div className={styles.right}>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
