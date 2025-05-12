'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useBanners } from '../../hooks/useBanner'


export default function Header() {

    const { banners, loading } = useBanners();

    console.log(banners)

    return (
        <header className="bg-gray-800 h-[500px] text-white p-4">
            <nav className='flex justify-between items-center'>
                <h2 className=' text-4xl'>Fantasy Store</h2>
                <div className='hidden lg:flex'>
                    <Link href="/">Home</Link>
                    <Link className='ml-7' href="/shop">Shop</Link>
                    <Link className='ml-7' href="/about">About</Link>
                    <Link className='ml-7' href="/contact">Contact</Link>
                    <div className='flex gap-4  mr-10 ml-10'>
                        <Image
                            src="/icon/facebook.svg"
                            alt={''}
                            width={20}
                            height={20} />
                        <Image
                            src="/icon/instagram.svg"
                            alt={''}
                            width={20}
                            height={20} />
                    </div>
                </div>
            </nav>
            { loading ? (<p>loadding</p>) : banners.map((item, index) => (
                <div className='relative w-full h-full' key={index}>
                    <Image src={item.image?.image!} alt={`Banner ${index}`}  width={100} height={100}/>
                </div>
            )) }
        </header>
    );
}