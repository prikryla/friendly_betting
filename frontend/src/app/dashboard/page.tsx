import React from 'react';
import { type Metadata } from 'next';

import NavigationMenu from '../components/NavigationMenu/NavigationMenu';

export const metadata: Metadata = {
    title: 'Současné výsledky | Friendly Betting',
};
const Dashboard: React.FC = () => {
    return (
        <main className='flex justify-center'>
            <div>
                <NavigationMenu />
            </div>
        </main>
    );
};

export default Dashboard;
