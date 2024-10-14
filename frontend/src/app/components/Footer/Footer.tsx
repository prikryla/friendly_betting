import React from 'react';
import FooterLogo from './FooterLogo/FooterLogo';

import './Footer.scss';

const Footer: React.FC = () => {
    const date = new Date();
    const renderDate = 2024 === date.getFullYear() ? 2024 : `2024-${date.getFullYear()}`;
    
    return (
        <main className='footerContainer'>
            <FooterLogo />
            <p className='randomText'>{date.getDate()}.{date.getMonth()+1}.{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</p>
            <p className='authors'>
                <span>&#169;  {renderDate} </span> 
                <a href='https://www.linkedin.com/in/adam-prikryl/' className='link' >Adam Přikryl</a>
                <span>  &  </span>
                <a href='https://www.linkedin.com/in/janmrakava/' className='link' >Jan Mrákava</a>
            </p>
        </main>
    )
}

export default Footer;