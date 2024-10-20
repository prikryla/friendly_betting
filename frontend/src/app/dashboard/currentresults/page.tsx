import React from 'react';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Současné výsledky | Friendly Betting',
};
const CurrentResults: React.FC = () => {
    return (
        <main className='flex justify-center'>
            <h1>Současné výsledky</h1>
        </main>
    );
};

export default CurrentResults;
