import React from 'react';
import { type Metadata } from 'next';

import Logo from './components/HomeComponents/Logo/IntroLogo';
import IntroSignPost from './components/HomeComponents/IntroSignPost';
import LandingImage from './components/LandingImage/LandingImage';

import 'tailwindcss/tailwind.css';

export const metadata: Metadata = {
    title: 'Home | Friendly Betting',
};

const Home: React.FC = () => {
    return (
        <main className='flex justify-center'>
            <div className='w-1/2 hidden sm:hidden md:block h-screen'>
                <LandingImage />
            </div>

            <div className='w-full sm:w-1/2 flex flex-col justify-center items-center gap-20 max-h-100'>
                <Logo />
                <IntroSignPost />
            </div>
        </main>
    );
};

export default Home;
