'use client';
import React from 'react';
import Link from 'next/link';
import MobileLogo from './MobileLogo/MobileLogo';
import { handleLogout } from '@/app/lib/utils';
import { usePathname } from 'next/navigation';
import { menuItemsArr } from '@/app/lib/helpersConstant';

import './MobileNavigation.scss';

const MobileNavigation: React.FC = () => {
    const pathname = usePathname();
    return (
        <>
            <MobileLogo />
            <div className='mobile-navigation'>
                {menuItemsArr.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`mobile-menu-item ${pathname === item.href ? 'active' : ''}`}
                        >
                            <Link href={item.href}>{item.textToRender}</Link>
                        </div>
                    );
                })}
                <form action={handleLogout}>
                    <button>
                        <p className='mobile-logout-button'>Odhlásit se</p>
                    </button>
                </form>
            </div>
        </>
    );
};

export default MobileNavigation;
