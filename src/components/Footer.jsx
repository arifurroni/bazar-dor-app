import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10 py-5 bg-[#FAFCFA]'>
            <div className='flex flex-col md:flex-row gap-5 justify-between mx-[5%] md:mx-[10%]'>
                <h3 className='text-sm'>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</h3>
                <p className='text-sm'>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </div>
    );
};

export default Footer;