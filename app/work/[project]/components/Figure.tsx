"use client";
import { appendClassName } from "@/utils/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export interface FigureProps {
  caption: string;
  children: React.ReactNode;
}

interface FigureImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface FigureVideoProps {
  src: string;
  poster?: string;
}

export const FigureImage = ({ src, alt, className }: FigureImageProps) => (
  <Image
    key={src}
    src={src}
    alt={alt}
    width={0}
    height={0}
    sizes="100vw"
    className={`flex-1 rounded-3xl h-auto${appendClassName(className)}`}
  />
);

export const MockupVideo = ({ src, poster }: FigureVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (video) {
      const observer = new IntersectionObserver(([entry]) =>
        setVisible(entry.isIntersecting),
      );
      observer.observe(video);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (video) {
      visible ? video.play() : video.pause();
    }
  }, [visible, ref]);

  return (
    <>
      <div className="absolute z-0 aspect-[4/3] w-[80%] overflow-hidden">
        <video
          loop
          playsInline
          muted
          ref={ref}
          poster={poster}
          className="absolute top-[11%] scale-125"
        >
          <source src={src} />
        </video>
      </div>
      <FigureImage
        src="/projects/desktop-mockup.png"
        alt="Desktop mockup"
        className="z-0"
      />
    </>
  );
};

MockupVideo.displayName = "MockupVideo";

const Figure = ({ caption, children }: FigureProps) => {
  const [figureIndex, setFigureIndex] = useState(0);

  useEffect(() => {
    const captions = document.getElementsByTagName("figcaption");
    setFigureIndex(
      Array.from(captions).findIndex(({ innerText }) =>
        innerText.includes(caption),
      ) + 1,
    );
  }, [caption]);

  return (
    <figure className="relative mb-4 mt-12 w-full [&&]:max-w-none">
      <div className="flex w-full flex-wrap justify-center gap-[2.5vw]">
        {children}
      </div>
      <figcaption className="secondary-text mx-auto my-8 max-w-xl text-center">
        {figureIndex && `1.${figureIndex}. `}
        {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
