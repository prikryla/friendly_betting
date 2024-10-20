import React from 'react';
import Image from 'next/image';

import './IntroLogo.scss';

const Logo: React.FC = () => {
    return (
        <div className='logoContainer'>
            <Image src='/Logo.png' alt='Logo aplikace' width={100} height={100} />
            <h1 className='styledTitle'>
                Friendly <br />
                Betting
            </h1>
        </div>
    );
};

export default Logo;
