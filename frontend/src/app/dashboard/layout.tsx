'use client';

import React from 'react';
// COMPONENTS
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import MobileNavigation from '../components/MobileNavigationMenu/MobileNavigation';
import Footer from '../components/Footer/Footer';
import EmailModal from '../components/Profile/EmailModal/EmailModal';
// UTILS
import { useMyContext } from '../context/ModalContext/ModalContext';
import UsernameModal from '../components/Profile/UsernameModal/UsernameModal';

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: { children: React.ReactNode }) => {
    const { activeModal, closeModal, isModalOpen } = useMyContext();
    return (
        <main>
            <div className={isModalOpen ? 'opacity-50' : ''}>
                <div>
                    <NavigationMenu />
                </div>
                <div>
                    <MobileNavigation />
                </div>
                <div>{children}</div>
                <Footer />
            </div>
            {activeModal === 'email' && <EmailModal closeModal={closeModal} />}
            {activeModal === 'username' && <UsernameModal closeModal={closeModal} />}
        </main>
    );
};

export default Layout;
