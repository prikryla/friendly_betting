import React from 'react';
// COMPONENTS
import MenuItem from './MenuItem/MenuItem';
import NavigationLogo from './Logo/NavigationLogo';
// UTILS
import { handleLogout } from '@/app/lib/utils';
// CSS
import './NavigationMenu.scss';

interface IMenuItems {
    href: string;
    textToRender: string;
}

const menuItemsArr: IMenuItems[] = [
    { href: '/dashboard', textToRender: 'Přehled' },
    { href: '/dashboard/mytips', textToRender: 'Moje tipy' },
    { href: '/dashboard/currentresults', textToRender: 'Průběžné výsledky' },
    { href: '/dashboard/overallresults', textToRender: 'Celkové výsledky' },
    { href: '/dashboard/profile', textToRender: 'Profil' },
];

const NavigationMenu: React.FC = () => {
    return (
        <main className='mainContainer'>
            <div className='logoContainer'>
                <NavigationLogo />
            </div>
            <div className='menuContainer'>
                {menuItemsArr.map((item, index) => {
                    return (
                        <MenuItem key={index} href={item.href} textToRender={item.textToRender} />
                    );
                })}
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <form action={handleLogout}>
                    <button>
                        <p className='logoutButton'>Odhlásit se</p>
                    </button>
                </form>
            </div>
        </main>
    );
};

export default NavigationMenu;
