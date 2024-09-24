import React, {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type MouseEvent,
} from 'react';
import Image from 'next/image';
import Icon from '@/app/components/Icon';
import type { DesignProps } from '@/app/_data/designs';
import useIsMobile from '@/hooks/useIsMobile';

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
      className={`absolute top-0 right-0 p-6 hover:scale-110 z-10 transition-all duration-200 ${
        showText ? 'opacity-100' : 'opacity-0 md:opacity-100'
      }`}
      title='Close'
      onClick={close}
    >
      <Icon name='close' />
    </button>
  );

  const ArrowButton = ({
    direction,
    ...rest
  }: {
    direction: 'prev' | 'next' | string;
  } & ComponentProps<'button'>) => {
    const visible =
      (direction === 'prev' && selectedIndex > 0) ||
      (direction === 'next' && selectedIndex < content.length - 1);

    return (
      <button
        className={`transition-all duration-150 hover:scale-125 h-fit absolute top-[40%] md:top-1/2 md:-translate-y-1/2 invisible z-10 ${
          visible ? 'md:visible' : 'invisible'
        } ${rest.className}`}
        onClick={() =>
          setSlide(direction === 'prev' ? selectedIndex - 1 : selectedIndex + 1)
        }
      >
        <Icon name={direction} size={40} />
      </button>
    );
  };

  const handleClick = (e: MouseEvent) => {
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
        img.style.left = '0px';
        img.style.top = '0px';
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
        lightboxRef.current.scrollLeft / lightboxRef.current.clientWidth
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
    <div className='bg-gradient-to-b fixed w-screen h-dvh left-0 z-10'>
      <CloseButton />
      <ArrowButton direction='prev' className='right-3/4' />
      <ArrowButton direction='next' className='left-3/4' />
      <div className='container p-0 md:p-6 flex gap-16 h-full items-center'>
        <div
          className='container size-full flex items-center overflow-y-hidden overflow-x-scroll md:overflow-hidden snap-x snap-mandatory p-0'
          ref={lightboxRef}
          onScroll={handleScroll}
        >
          {content.map(({ title, src }) => (
            <div
              key={title}
              className={`flex-shrink-0 size-full flex items-center justify-center snap-center select-none ${
                zoomedIn ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={handleClick}
            >
              <div
                className='size-full max-w-[90%] max-h-[90%] md:max-h-none  md:max-w-none overflow-hidden relative'
                onMouseMove={handleMouseMove}
              >
                <Image
                  alt={title}
                  src={src}
                  fill
                  className={`object-contain ${
                    zoomedIn ? 'md:scale-[250%] ' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className={`max-w-sm absolute md:relative bottom-0 bg-gradient-to-b md:bg-none from-[transparent] to-20% to-white w-screen left-0 right-0 pt-12 pb-5 md:pb-6 md:pt-14 px-6 transition-opacity duration-200 ${
            showText ? 'opacity-100' : 'opacity-0 md:opacity-100'
          }`}
        >
          <div
            className={`max-w-prose mx-auto overflow-hidden text-sm md:text-base md:leading-[1.75] relative after:secondary-text ${
              readMore
                ? 'h-auto max-md:read-less'
                : 'max-md:h-20 max-md:read-more'
            }`}
            onClick={() => setReadMore(!readMore)}
          >
            <h3 className='heading-sm text-lg md:mb-2 md:text-xl'>
              {content[selectedIndex].title}
            </h3>
            <p ref={descriptionRef}>{content[selectedIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
