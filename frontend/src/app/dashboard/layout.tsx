import React from "react"; 
import NavigationMenu from "../components/NavigationMenu/navigationmenu";
import MobileNavigation from "../components/MobileNavigationMenu/mobilenavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
        <main>
            <div>
                <NavigationMenu />
            </div>
            <div>
                <MobileNavigation />
            </div>
            <div>
                {children}
            </div>
        </main>
  );
}