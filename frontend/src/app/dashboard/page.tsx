import React from 'react';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Současné výsledky | Friendly Betting',
};
const Dashboard: React.FC = () => {
    return (
        <main className='flex justify-center'>
            <div>
                <h1>Přehled</h1>
            </div>
        </main>
    );
};

export default Dashboard;
