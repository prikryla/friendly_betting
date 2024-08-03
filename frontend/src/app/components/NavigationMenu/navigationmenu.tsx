import React from "react";
import { signOut } from "../../../../auth";
import MenuItem from "./MenuItem/menuitem";
import NavigationLogo from "./Logo/navigationlogo";

import './navigationmenu.css';

interface IMenuItems {
    href: string;
    textToRender: string;
}

const menuItemsArr: IMenuItems[] = [
    { href: '/dashboard', textToRender: 'Přehled'},
    { href: '/dashboard/mytips', textToRender: 'Moje tipy'},
    { href: '/dashboard/currentresults', textToRender: 'Průběžné výsledky'},
    { href: '/dashboard/overallresults', textToRender: 'Celkové výsledky'},
    { href: '/dashboard/profile', textToRender: 'Profil'},
]


const NavigationMenu: React.FC = () => {
    return (
        <main className="flex flex-row items-center w-screen content-center justify-between h-20">
            <div className="logo-container">
                <NavigationLogo />
            </div>
            <div className="menu-container">
                {menuItemsArr.map((item, index) => {
                    return (
                        <MenuItem key={index} href={item.href} textToRender={item.textToRender} />
                    )
                })}
                <form
                    action={async () => {
                        'use server';
                        await signOut();
                }}
                >
                    <button>         
                        <p className="logout-button">Odhlásit se</p>
                    </button>

                </form>
            </div>
        </main>
    )
}

export default NavigationMenu;