import { NextPage } from "next";
import Image from "next/image";

import './navigationlogo.css';

const NavigationLogo: NextPage = () => {
    return (
        <div className="logo-container">
            <Image src='/Logo.png' alt="Logo of the Friendly betting app" width={70} height={58} className="hidden md:hidden xl:block"/>
            <Image src='/Logo.png' alt="Logo of the Friendly betting app" width={50} height={38} className="hidden sm:block md:block xl:hidden sm:m-5 md:mr-3"/>
            <h1 className="logo-text">
                Friendly&nbsp; 
                <br className="lg:block xl:hidden 2xl:hidden 4xl:hidden" />
                Betting
            </h1>
        </div>
    )
}

export default NavigationLogo;