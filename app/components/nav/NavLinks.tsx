"use client";
import { colors, defaultAnimationInterval } from "@/config";
import { formatClassNames } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const navLinks = [
  {
    name: "Home",
    url: "/",
    underline:
      "M6.74023 5.47959C11.8102 5.17959 16.8302 6.01959 21.9002 6.36959C27.7502 6.76959 34.3102 7.02959 39.4602 7.36959C50.7202 8.10959 61.9902 8.89959 73.2602 8.46959",
  },
  {
    name: "About",
    url: "/#about",
    underline:
      "M6.2998 12.1508C7.0498 10.9108 15.7698 9.65084 17.3998 9.37084C25.2798 8.00084 32.9498 6.89084 40.7598 5.13084C51.3298 2.75084 62.8298 1.20084 73.6998 2.10084",
  },
  {
    name: "Work",
    url: "/#work",
    underline:
      "M1.5 6.46911C11.71 4.98911 26.84 -0.220894 35.68 5.64911C48.82 14.3691 64.98 10.4991 79.57 8.37911",
  },
  {
    name: "Play",
    url: "/#play",
    underline:
      "M7.3501 9.33977C10.8901 5.20977 19.1201 4.29977 22.2701 4.42977C28.4701 4.66977 36.5701 10.9998 42.3201 12.2098C44.3401 12.5698 49.0601 13.8898 56.3201 13.8598C63.4901 13.1398 69.5601 8.82977 72.6401 1.50977",
  },
];

interface NavLinksProps {
  className: string;
  onClick?: () => void;
}

const NavLinks = ({ className, onClick }: NavLinksProps) => {
  const pathname = usePathname();
  const [active, setActive] = useState(
    navLinks.find(({ name }) => pathname.includes(name.toLowerCase()))?.name ??
      "Home",
  );
  const [scrollByClick, setScrollByClick] = useState(false);

  useEffect(() => {
    if (pathname === "/" && !scrollByClick) {
      const handleScroll = () => {
        const sections = navLinks.map(({ name }) =>
          document.getElementById(name.toLowerCase()),
        );
        sections.forEach((section, index) => {
          if (
            section &&
            section.getBoundingClientRect().top < window.innerHeight / 2 - 75
          ) {
            setActive(navLinks[index].name);
          }
        });
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  useEffect(() => {
    if (scrollByClick) {
      setTimeout(() => setScrollByClick(false), 1000);
    }
  }, [scrollByClick]);

  return (
    <nav className={className}>
      {navLinks.map((navLink, index) => (
        <Link
          key={navLink.name}
          href={navLink.url}
          className={formatClassNames(
            "duration-50 z-[1] flex animate-pop justify-center font-medium transition-colors hover:text-purple",
            active === navLink.name && "text-purple",
          )}
          style={{
            animationDelay: `${defaultAnimationInterval * index + 1}ms`,
          }}
          onClick={() => {
            setActive(navLink.name);
            setScrollByClick(true);
            onClick?.();
          }}
        >
          <div className="relative p-6">
            {navLink.name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="82"
              height="14"
              viewBox="0 0 82 16"
              fill="none"
              className="absolute bottom-2.5 left-1/2 -translate-x-1/2"
            >
              <path
                d={navLink.underline}
                stroke={colors.purple}
                strokeWidth={3}
                strokeLinecap="round"
                strokeDasharray={80}
                strokeDashoffset={active === navLink.name ? 0 : 80}
                className="transition-[stroke-dashoffset] duration-200"
              />
            </svg>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
