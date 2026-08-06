import Image from "next/image";
import { useEffect, useState, type RefObject } from "react";

interface TransitionCurveProps {
  from: RefObject<HTMLElement>;
  to: RefObject<HTMLElement> | string;
  curve: string;
  position: { left: string; right: string; top?: string };
  delta: number;
}

const TransitionCurve = ({
  from,
  to,
  curve,
  position,
  delta,
}: TransitionCurveProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [curveHeight, setCurveHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (from.current) {
        const { top } = (
          typeof to === "string" ? document.querySelector(to) : to.current
        )!.getBoundingClientRect();
        const { bottom } = from.current.getBoundingClientRect();
        setCurveHeight(top - bottom);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (from.current) {
        const { bottom } = from.current.getBoundingClientRect();
        if (scrollY < curveHeight) {
          setScrollY(window.scrollY - (bottom + window.scrollY) * delta);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className="absolute top-full hidden overflow-hidden min-doodles:block"
      style={{
        height: scrollY,
        maxHeight: curveHeight,
        WebkitMaskImage:
          "linear-gradient(to bottom,black 95%,transparent 100%)",
        maskImage: "linear-gradient(to bottom,black 95%,transparent 100%)",
        left: position.left,
        right: position.right,
        top: position.top,
      }}
    >
      <Image
        src={`/decals/${curve}`}
        alt="Transition curve"
        width={0}
        height={0}
        style={{ width: "100%", height: curveHeight }}
        unoptimized
      />
    </div>
  );
};

export default TransitionCurve;
