import React from "react";
import Image from "next/image";

import './FooterLogo.scss';

const FooterLogo: React.FC = () => {
    return (
        <main className="footerLogo">
            <Image src='/Logo.png' alt='Logo aplikace' width={70} height={58} />
            <h1 className="footerLogoText">Friendly Betting</h1>
        </main>
    )
}

export default FooterLogo;