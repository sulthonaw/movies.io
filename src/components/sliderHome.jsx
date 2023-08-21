'use client'

import Slider from "react-slick"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import Link from "next/link";



export default function SliderHome({ items }) {
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <Slider {...settings}>
                {items.map(({ id, backdrop_path, title, release_date, vote_average }) => {
                    return (
                        <div key={id} className="bg-slate-50 w-full h-[25vh] md:h-[50vh] text-slate-900 relative overflow-hidden">
                            <Image src={"https://image.tmdb.org/t/p/original" + backdrop_path} alt={title} width="0"
                                height="0"
                                sizes="100%"
                                className="w-full h-full object-cover object-top hover:scale-105 transition" loading={'eager'} />
                            <div className="absolute left-0 right-0 bottom-0 px-5 py-5 text-white flex justify-between items-center w-full gap-x-5 whitespace-nowrap bg-sky-950/60 backdrop-blur-sm">
                                <div>
                                    <h1 className="rounded md:text-4xl mb-2 font-semibold whitespace-normal">{title}</h1>
                                    <p className="text-sm">{release_date}</p>
                                </div>
                                <div>
                                    <Link href={"/"} className={"bg-rose-700/95 px-7 py-3 rounded-lg text-slate-50 shadow-lg active:bg-rose-500 hover:shadow-md hover:shadow-sky-300/50"}>Watch now</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </section >
    )
};
