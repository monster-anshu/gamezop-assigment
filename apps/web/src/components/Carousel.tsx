"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import React, {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { FreeMode, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { twMerge } from "tailwind-merge";

type ICarouselProps = {
  children: ReactNode[];
} & ComponentPropsWithoutRef<typeof Swiper>;

const NextButton = () => {
  const swiper = useSwiper();
  const [last, setLast] = useState(swiper.isEnd);
  const [first, setFirst] = useState(swiper.isBeginning);

  useEffect(() => {
    const litener = () => {};

    swiper.on("sliderMove", () => {
      setLast(swiper.isEnd);
      setFirst(swiper.isBeginning);
    });
    return () => {
      swiper.off("sliderMove", litener);
    };
  }, [swiper]);

  return (
    <>
      {!first && (
        <button
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 md:block"
          onClick={() => swiper.slideTo(swiper.activeIndex - 1)}
        >
          <MdOutlineNavigateBefore
            size={22}
            className="font-medium text-black"
          />
        </button>
      )}
      {!last && (
        <button
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 md:block"
          onClick={() => swiper.slideTo(swiper.activeIndex + 1)}
        >
          <MdOutlineNavigateNext size={22} className="font-medium text-black" />
        </button>
      )}
    </>
  );
};

const Carousel: FC<ICarouselProps> = ({ children, className, ...props }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      slidesPerGroupAuto
      modules={[FreeMode, Pagination]}
      freeMode
      {...props}
      className={twMerge("!px-2", className)}
    >
      {children.map((child, index) => {
        return <SwiperSlide key={index}>{child}</SwiperSlide>;
      })}
      <NextButton />
    </Swiper>
  );
};

export default Carousel;
