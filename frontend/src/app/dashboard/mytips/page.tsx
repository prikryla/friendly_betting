import React from 'react';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Moje tipy | Friendly Betting',
};
const MyTips: React.FC = () => {
    return (
        <main className='flex justify-center'>
            <h1>Moje Tipy</h1>
        </main>
    );
};

export default MyTips;
