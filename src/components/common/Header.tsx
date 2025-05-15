'use client';

import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { useBanners } from '../../hooks/useBanner';
import { useMemo, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Header() {
    const { banners, loading } = useBanners();
    const [menuOpen, setMenuOpen] = useState(false);

    const sliderSettings = useMemo(() => ({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        fade: true,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        pauseOnFocus: true,
    }), []);

    return (
        <header className="relative h-[250px] lg:h-[500px] w-full overflow-hidden text-white">
            {/* Nav */}
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-20">
                <h2 className="text-4xl">Fantasy Store</h2>
                <div className="hidden lg:flex">
                    <Link href="/">Home</Link>
                    <Link className="ml-7" href="/shop">Shop</Link>
                    <Link className="ml-7" href="/about">About</Link>
                    <Link className="ml-7" href="/contact">Contact</Link>
                    <div className="flex gap-4 ml-10 mr-10">
                        <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
                        <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-0 left-0 bottom-0 w-full bg-black text-white flex flex-col items-center p-4 z-20">
                    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className="mt-4" href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
                    <Link className="mt-4" href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link className="mt-4" href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    <div className="flex gap-4 mt-4">
                        <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
                        <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                    </div>
                </div>
            )}

            {/* Slider */}
            {loading ? (
                <p className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading...</p>
            ) : ( banners != null && banners.length > 0 &&
                <Slider {...sliderSettings}>
                    {banners.map((banner, index) => {
                        const words:string[]  = banner.title.split(' ').slice(0, 5);

                        return (
                            <div key={index}>
                                <div className="relative w-full h-[250px] lg:h-[500px]">
                                    <Image
                                        src={banner.image?.image!}
                                        alt={banner.title}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                    <p className=' text-3xl absolute text-white top-1/3 right-10 lg:text-6xl'>{words.map((word, i) => (
                                        <p key={i}>{word}</p>
                                    ))}</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            )}
        </header>
    );
}
