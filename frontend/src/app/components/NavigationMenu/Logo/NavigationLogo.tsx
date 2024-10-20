import React from 'react';
import Image from 'next/image';

import './NavigationLogo.scss';

const NavigationLogo: React.FC = () => {
    return (
        <div className='logoContainer'>
            <Image
                src='/Logo.png'
                alt='Logo of the Friendly betting app'
                width={70}
                height={58}
                className='hidden md:hidden xl:block'
            />
            <Image
                src='/Logo.png'
                alt='Logo of the Friendly betting app'
                width={50}
                height={38}
                className='hidden sm:block md:block xl:hidden sm:m-5 md:mr-3'
            />
            <h1 className='logoText'>
                Friendly&nbsp;
                <br className='lg:block xl:hidden 2xl:hidden 4xl:hidden' />
                Betting
            </h1>
        </div>
    );
};

export default NavigationLogo;
