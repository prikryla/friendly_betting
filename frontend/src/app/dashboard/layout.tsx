import React from 'react';
import NavigationMenu from '../components/NavigationMenu/navigationmenu';
import MobileNavigation from '../components/MobileNavigationMenu/mobilenavigation';

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <div>
                <NavigationMenu />
            </div>
            <div>
                <MobileNavigation />
            </div>
            <div>{children}</div>
        </main>
    );
};

export default Layout;
