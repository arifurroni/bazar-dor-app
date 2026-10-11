import React from 'react';
import MarqueeText from 'react-marquee-text';

const Marquee = ({products}) => {

    // console.log(products);
    return (
        <div className='bg-white py-2 px-5'>
            <MarqueeText direction='right' duration={20}>
                {
                    products.map(product => (<div key={product?.id}><p className='mx-5'><span>{product.image}</span>{product.nameBn}<span className='mx-2'>{product.today}tk.</span></p></div>))
                }
            </MarqueeText>
        </div>
    );
};

export default Marquee;