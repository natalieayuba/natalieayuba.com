import { getAnimationDelay } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef, type RefObject } from "react";
import { navLinks } from "../nav/NavLinks";
import TransitionCurve from "../TransitionCurve";

const Banner = ({
  aboutHeadingRef,
}: {
  aboutHeadingRef: RefObject<HTMLHeadingElement>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const sneakPeakRef = useRef<HTMLImageElement>(null);
  const animationInterval = 350;

  return (
    <section
      id={navLinks[0].name.toLowerCase()}
      ref={ref}
      className="container relative mb-16 pt-28 md:pt-52"
    >
      <div className="mb-32 md:mb-44">
        <h1
          className="heading-xl animate-glideUp text-center [&&]:mb-[2%]"
          style={getAnimationDelay(1, animationInterval)}
        >
          Hi, I&#8217;m Natalie 👋🏾
        </h1>
        <p
          className="mx-auto max-w-3xl animate-glideUp text-center text-xl leading-[1.5]"
          style={getAnimationDelay(2, animationInterval)}
        >
          A frontend developer & designer bringing digital products to life with
          character, charm, and a touch of whimsy.
        </p>
      </div>
      <div className="relative select-none">
        <Image
          src="/projects/headfirst/headfirst-preview-image.png"
          alt="Headirst Bristol sneak peak mockup"
          width={0}
          height={0}
          className="relative left-[7.5%] mt-[10%] w-full animate-glideUp"
          style={getAnimationDelay(3, animationInterval)}
          ref={sneakPeakRef}
          priority
        />
        <div className="absolute inset-0 left-[12%] right-[12%]">
          <Image
            src="/decals/sneak-peak.svg"
            title="A sneak peak of what I'm currently working on"
            alt="A sneak peak of what I'm currently working on"
            width={0}
            height={0}
            className="absolute -left-14 -top-24 w-48 animate-pop"
            style={getAnimationDelay(4.5, animationInterval)}
            priority
          />
          <Image
            src="/decals/arrow2.svg"
            alt="Arrow"
            width={0}
            height={0}
            className="absolute -left-10 -top-4 w-8 animate-pop"
            style={getAnimationDelay(4.5, animationInterval)}
            priority
          />
          <Image
            src="/decals/big-sparkle.svg"
            alt="Big sparkle"
            width={0}
            height={0}
            className="absolute -right-12 -top-12 w-auto animate-pop"
            style={getAnimationDelay(5.5, animationInterval)}
          />
          <Image
            src="/decals/little-sparkle.svg"
            alt="Little sparkle"
            width={0}
            height={0}
            unoptimized
            className="absolute -top-14 right-1 w-auto animate-pop"
            style={getAnimationDelay(6, animationInterval)}
          />
          <Image
            src="/decals/other-projects.svg"
            alt="Check out my other projects below"
            title="Check out my other projects below"
            width={0}
            height={0}
            className="absolute -bottom-24 -right-10 h-20 w-auto animate-pop lg:-right-36 lg:bottom-24"
            style={getAnimationDelay(7, animationInterval)}
          />
          <Link
            href="#work"
            style={getAnimationDelay(7, animationInterval)}
            className="absolute -bottom-36 -right-7 animate-pop lg:-right-24 lg:bottom-10"
          >
            <Image
              src="/decals/arrow.svg"
              alt="Arrow"
              width={0}
              height={0}
              className="w-5"
              priority
            />
          </Link>
        </div>
      </div>
      <TransitionCurve
        from={sneakPeakRef}
        to={aboutHeadingRef}
        curve="banner-line.svg"
        position={{ left: "10%", right: "50%" }}
        delta={0.2}
      />
    </section>
  );
};

export default Banner;
