import React from 'react';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Celkové výsledky | Friendly Betting',
};
const OverallResults: React.FC = () => {
    return (
        <main className='flex justify-center'>
            <h1>Celkové výsledky</h1>
        </main>
    );
};

export default OverallResults;
