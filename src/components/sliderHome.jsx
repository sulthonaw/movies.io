"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function SliderHome({ items }) {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Slider {...settings}>
        {items.map(({ id, backdrop_path, title, release_date }) => {
          return (
            <div
              key={id}
              className="relative h-[30vh] w-full overflow-hidden bg-slate-50 text-slate-900 md:h-[50vh]"
            >
              <div className="relative">
                <Image
                  src={"https://image.tmdb.org/t/p/original" + backdrop_path}
                  alt={title}
                  width="0"
                  height="0"
                  sizes="100%"
                  className="h-full w-full object-cover object-top transition hover:scale-105"
                  loading={"eager"}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex w-full items-center justify-between gap-x-5 whitespace-nowrap rounded-t-[17%] bg-sky-950/60 px-5 py-5 text-white backdrop-blur-sm">
                <div>
                  <h1 className="mb-2 whitespace-normal rounded font-semibold md:text-4xl">
                    {title}
                  </h1>
                  <p className="text-sm">{release_date}</p>
                </div>
                <div>
                  <Link
                    href={"/"}
                    className={
                      "rounded-lg bg-rose-700/95 px-7 py-3 text-slate-50 shadow-lg hover:shadow-md hover:shadow-sky-300/50 active:bg-rose-500"
                    }
                  >
                    Watch now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
