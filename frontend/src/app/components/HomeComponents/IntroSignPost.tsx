import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

import './IntroSignPost.scss';

const IntroSignPost: React.FC = () => {
    return (
        <div className='introContainer'>
            <div className='imageContainer'>
                <Image src='/Logo.png' alt='Logo of app' width={48} height={48} />
                <h1>Tipuj s námi</h1>
                <h3>Připoj se ještě dnes</h3>
            </div>
            <div className='buttonsContainer'>
                <Button text='Přihlásit se' href='login' />
                <div className='buttonsContainerText'>
                    <div className='textSeparator'></div>
                    <div className='textContainer'>NEBO</div>
                    <div className='textSeparator'></div>
                </div>
                <Button text='Registrovat' href='register' />
            </div>
        </div>
    );
};

export default IntroSignPost;
