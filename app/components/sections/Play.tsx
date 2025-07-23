import designs, { type DesignProps } from "@/app/_configs/designs";
import useObserver from "@/hooks/useObserver";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";
import Lightbox from "../Lightbox";
import { navLinks } from "../nav/NavLinks";
import SectionHeader from "./SectionHeader";

const Play = forwardRef<HTMLHeadingElement>((_, headingRef) => {
  const ref = useRef<HTMLElement>(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    document.body.style.overflow = showLightbox ? "hidden" : "auto";
    document.body.style.overscrollBehavior = showLightbox ? "none" : "auto";
    document.body.style.touchAction = showLightbox ? "none" : "auto";
  }, [showLightbox]);

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (showLightbox) {
        e.preventDefault();
      }
    };
    document.addEventListener("touchmove", handleTouchMove);
    return () => document.removeEventListener("touchmove", handleTouchMove);
  });

  const handleClick = (index: number) => {
    setShowLightbox(true);
    setSelectedIndex(index);
  };

  const Design = ({
    design,
    index,
  }: {
    design: DesignProps;
    index: number;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const visible = useObserver(ref, "0px");

    return (
      <div
        ref={ref}
        key={design.src}
        title={design.title}
        className={`flex w-full animate-fadeIn cursor-pointer transition-all duration-200 ${
          design.src.includes("web")
            ? "my-1 aspect-video h-auto items-start overflow-hidden rounded-sm shadow-sm hover:scale-110"
            : "h-full items-center px-[10%] hover:scale-[115%]"
        }`}
        style={{
          animationDuration: "500ms",
          animationDelay: `${(index + 1) * 100}ms`,
          animationPlayState: visible ? "running" : "paused",
        }}
        onClick={() => handleClick(index)}
      >
        <Image
          alt={design.title}
          src={design.src}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-w-64"
        />
      </div>
    );
  };

  return (
    <>
      <section
        id={navLinks[3].name.toLowerCase()}
        className="container flex flex-col justify-end pt-28 xl:h-screen xl:pb-60 xl:pt-0"
        ref={ref}
      >
        <SectionHeader
          ref={headingRef}
          className="mb-12 text-center"
          heading={navLinks[3].name}
          caption="Other things I've made for fun."
        />
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {designs.map((design, index) => (
            <Design key={design.src} design={design} index={index} />
          ))}
        </div>
      </section>
      {showLightbox && (
        <Lightbox
          content={Object.values(designs)}
          selectedIndex={selectedIndex}
          setSlide={setSelectedIndex}
          close={() => setShowLightbox(false)}
        />
      )}
    </>
  );
});

Play.displayName = "Play";

export default Play;
