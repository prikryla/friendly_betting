import React from 'react';
import { type Metadata } from 'next';

import Logo from '../components/HomeComponents/Logo/IntroLogo';
import LandingImage from '../components/LandingImage/LandingImage';
import RegisterForm from '../components/RegisterComponents/RegisterForm';

export const metadata: Metadata = {
    title: 'Register | Friendly Betting',
};
const RegisterPage: React.FC = () => {
    return (
        <main className='flex justify-center'>
            <div className='w-1/2 hidden sm:hidden md:block h-screen'>
                <LandingImage />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col justify-center items-center gap-10 max-h-100'>
                <Logo />
                <RegisterForm />
            </div>
        </main>
    );
};

export default RegisterPage;
