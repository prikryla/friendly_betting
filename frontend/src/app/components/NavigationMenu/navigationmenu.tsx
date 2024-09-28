import React from "react";
import MenuItem from "./MenuItem/menuitem";
import NavigationLogo from "./Logo/navigationlogo";
import { menuItemsArr } from "@/app/lib/helpersConstant";

import './navigationmenu.scss';
import { handleLogout } from "@/app/lib/utils";

const NavigationMenu: React.FC = () => {
    return (
        <main className="main-container">
            <div className="logo-container">
                <NavigationLogo />
            </div>
            <div className="menu-container">
                {menuItemsArr.map((item, index) => {
                    return (
                        <MenuItem key={index} href={item.href} textToRender={item.textToRender} />
                    )
                })}
                    <form action={handleLogout}>
                        <button>         
                            <p className="logout-button">Odhlásit se</p>
                        </button>
                    </form>
            </div>
        </main>
    )
}

export default NavigationMenu;