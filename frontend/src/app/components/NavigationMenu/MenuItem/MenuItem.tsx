import React from 'react';
import Link from 'next/link';

import './MenuItem.scss';

interface IMenuItemProps {
    href: string;
    textToRender: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ href, textToRender }) => {
    return (
        <button className='menuItem'>
            <Link href={href}>{textToRender}</Link>
        </button>
    );
};

export default MenuItem;
