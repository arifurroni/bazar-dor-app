import Image from 'next/image';
import React from 'react';
import bannerImage from '../assets/bazar-hero.png';
import BanglaDate from './BanglaDate';
// import Link from 'next/link';
// import { Link } from 'lucide-react';

const BannerPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl bg-[#FAFCFA] p-4 md:p-10 mx-[5%] md:mx-[10%] my-5">
            <div className="grid gap-4 md:w-1/2">
                <span className='bg-[#E1F1E7] text-[#05893E] text-[10px] rounded-xl text-center py-2'><BanglaDate /></span>
            <h1 className='text-2xl font-bold'>আজকের বাজারের দাম এক নজরে</h1>
            <p className="">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>

            
                <a href="#Library" className="inline-block w-50 rounded-lg bg-[#05893E] px-4 py-2 text-center text-white hover:bg-[#009a43]">সব পণ্য দেখুন</a>
            
            </div>

            <div>
                <Image src={bannerImage} alt="Banner Image" />
            </div>
        </div>
    );
};

export default BannerPage;