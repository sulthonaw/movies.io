"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";

export default function SliderHome({ items }) {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container">
      <Slider {...settings}>
        {items.map(
          ({ id, backdrop_path, title, release_date, vote_average }) => {
            return (
              <div
                key={id}
                className="relative h-[30vh] w-full overflow-hidden rounded-2xl border-2 border-sky-300 bg-slate-50 text-slate-900 md:h-[50vh]"
              >
                <div className="relative h-full">
                  <Image
                    src={"https://image.tmdb.org/t/p/original" + backdrop_path}
                    alt={title}
                    fill
                    objectFit="cover"
                    objectPosition="top"
                    loading={"eager"}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex w-full items-center justify-between gap-x-5 whitespace-nowrap rounded-t-[17%] bg-gradient-to-t from-sky-950/90 to-sky-950/20 px-5 py-5 text-white backdrop-blur-sm">
                  <div>
                    <h1 className="mb-2 whitespace-normal rounded font-semibold md:text-4xl">
                      {title}
                    </h1>
                    <p className="text-sm">{release_date}</p>
                  </div>
                  <div className="flex flex-col-reverse gap-y-2">
                    <Link
                      href={"/"}
                      className={
                        "rounded-lg bg-rose-700/95 px-7 py-3 text-sm text-slate-50 shadow-lg hover:shadow-md hover:shadow-sky-300/50 active:bg-rose-500"
                      }
                    >
                      Watch now
                    </Link>
                    <div className="flex items-center justify-center gap-x-3">
                      <StarIcon className="h-4 w-4" />
                      <p>{vote_average}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </Slider>
    </section>
  );
}
