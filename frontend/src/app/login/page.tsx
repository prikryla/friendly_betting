import React from 'react';
import { type Metadata } from 'next';

import Logo from '../components/HomeComponents/Logo/IntroLogo';
import LandingImage from '../components/LandingImage/LandingImage';
import LoginForm from '../components/LoginComponents/LoginForm/LoginForm';

export const metadata: Metadata = {
    title: 'Login | Friendly Betting',
};
const LoginPage: React.FC = () => {
    return (
        <main className='flex justify-center'>
            <div className='w-1/2 hidden sm:hidden md:block h-screen'>
                <LandingImage />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col justify-center items-center gap-20 max-h-100'>
                <Logo />
                <LoginForm />
            </div>
        </main>
    );
};

export default LoginPage;
