import type { DesignProps } from "@/app/_configs/config";
import Icon from "@/app/components/Icon";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type MouseEvent,
} from "react";

interface LightboxProps {
  content: DesignProps[];
  selectedIndex: number;
  setSlide: (index: number) => void;
  close: () => void;
}

const Lightbox = ({
  content,
  selectedIndex,
  setSlide,
  close,
}: LightboxProps) => {
  const lightboxRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [showText, setShowText] = useState(true);
  const [readMore, setReadMore] = useState(false);
  const [zoomedIn, setZoomedIn] = useState(false);
  const isMobile = useIsMobile();

  const CloseButton = () => (
    <button
      className={`absolute right-0 top-0 z-10 p-6 transition-all duration-200 hover:scale-110 ${
        showText ? "opacity-100" : "opacity-0 md:opacity-100"
      }`}
      title="Close"
      onClick={close}
    >
      <Icon name="close" />
    </button>
  );

  const ArrowButton = ({
    direction,
    ...rest
  }: {
    direction: "prev" | "next" | string;
  } & ComponentProps<"button">) => {
    const visible =
      (direction === "prev" && selectedIndex > 0) ||
      (direction === "next" && selectedIndex < content.length - 1);

    return (
      <button
        className={`z-10 hidden h-fit transition-all duration-150 hover:scale-125 md:block ${
          visible ? "md:visible" : "md:invisible"
        } ${rest.className}`}
        onClick={() =>
          setSlide(direction === "prev" ? selectedIndex - 1 : selectedIndex + 1)
        }
      >
        <Icon name={direction} size={40} />
      </button>
    );
  };

  const handleClick = () => {
    setShowText(!showText);
    setZoomedIn(!zoomedIn);
  };

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!isMobile) {
      const el = e.currentTarget;
      const img = e.currentTarget.firstChild as HTMLElement;
      if (zoomedIn) {
        const { left, top } = el.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        img.style.left = `${el.offsetWidth - x * 2}px`;
        img.style.top = `${el.offsetHeight - y * 2}px`;
      } else {
        img.style.left = "0px";
        img.style.top = "0px";
      }
    }
  };

  const handleScroll = () => {
    if (
      lightboxRef.current &&
      (lightboxRef.current.scrollLeft === 0 ||
        lightboxRef.current.scrollLeft % lightboxRef.current.clientWidth === 0)
    ) {
      setSlide(
        lightboxRef.current.scrollLeft / lightboxRef.current.clientWidth,
      );
    }
  };

  useEffect(() => {
    setReadMore(false);
    setZoomedIn(false);

    if (
      lightboxRef.current &&
      selectedIndex * lightboxRef.current.clientWidth !==
        lightboxRef.current.scrollLeft
    ) {
      lightboxRef.current.scrollLeft =
        selectedIndex * lightboxRef.current.clientWidth;
    }
  }, [selectedIndex]);

  return (
    <div className="fixed left-0 z-10 h-dvh w-screen bg-gradient-to-b">
      <CloseButton />
      <div className="container flex h-full items-center p-0 md:p-6">
        <ArrowButton direction="prev" className="mr-6" />
        <div
          className="container flex size-full snap-x snap-mandatory items-center overflow-y-hidden overflow-x-scroll p-0 md:overflow-hidden"
          ref={lightboxRef}
          onScroll={handleScroll}
        >
          {content.map(({ title, src }) => (
            <div
              key={title}
              className={`flex size-full flex-shrink-0 select-none snap-center items-center justify-center ${
                zoomedIn ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={handleClick}
            >
              <div
                className="relative size-full max-h-[90%] max-w-[90%] overflow-hidden md:max-h-none md:max-w-none"
                onMouseMove={handleMouseMove}
              >
                <Image
                  alt={title}
                  src={src}
                  fill
                  className={`object-contain ${
                    zoomedIn ? "md:scale-[250%]" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 w-screen max-w-sm bg-gradient-to-b from-[transparent] to-white to-20% px-6 pb-5 pt-12 transition-opacity duration-200 md:relative md:ml-16 md:bg-none md:pb-6 md:pt-14 ${
            showText ? "opacity-100" : "opacity-0 md:opacity-100"
          }`}
        >
          <div
            className={`after:secondary-text relative mx-auto max-w-prose overflow-hidden text-sm md:text-base ${
              readMore
                ? "max-md:read-less h-auto"
                : "max-md:read-more max-md:h-20"
            }`}
            onClick={() => setReadMore(!readMore)}
          >
            <h3 className="heading-sm mb-3">{content[selectedIndex].title}</h3>
            <p ref={descriptionRef} className="leading-relaxed">
              {content[selectedIndex].description}
            </p>
          </div>
        </div>
        <ArrowButton direction="next" className="ml-6" />
      </div>
    </div>
  );
};

export default Lightbox;
