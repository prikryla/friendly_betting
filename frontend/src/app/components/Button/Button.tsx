import React from 'react';
import Link from 'next/link';

import './Button.scss';

interface IButtonProps {
    text: string;
    href?: string;
}

const Button: React.FC<IButtonProps> = ({ text, href }) => {
    return (
        <button className='styledButton'>
            <Link href={`/${href}`}>{text}</Link>
        </button>
    );
};

export default Button;
