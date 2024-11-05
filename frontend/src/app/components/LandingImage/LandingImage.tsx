import React from 'react';
import Image from 'next/image';

import './LandingImage.scss';

const LandingImage: React.FC = () => {
    /**
     * TODO Get Image name from BE
     * TODO Change format to webp?
     * TODO soccerLanding.png/hockeyLanding.jpg
     */
    return (
        <Image
            src='/soccerLanding.png'
            alt='Image of Soccer Stadion with Ball'
            width={1000}
            height={600}
            className='styledImage'
        />
    );
};

export default LandingImage;
