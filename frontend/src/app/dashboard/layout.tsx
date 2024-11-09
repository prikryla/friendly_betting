import React from 'react';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import MobileNavigation from '../components/MobileNavigationMenu/MobileNavigation';
import Footer from '../components/Footer/Footer';

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
            <Footer />
        </main>
    );
};

export default Layout;
