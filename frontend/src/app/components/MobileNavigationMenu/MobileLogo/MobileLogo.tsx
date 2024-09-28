import React from "react";
import Image from "next/image";

import './MobileLogo.scss';

const MobileLogo: React.FC = () => {
    return (
        <div className="mobileLogoContainer">
            <Image src="/Logo.png" alt="Logo of app" width={175} height={146}/>
            <p className="nameHeading">Friendly <br /> Betting</p>
        </div>
    )
}

export default MobileLogo;
