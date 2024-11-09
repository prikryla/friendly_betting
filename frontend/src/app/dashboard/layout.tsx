'use client';

import React from 'react';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import MobileNavigation from '../components/MobileNavigationMenu/MobileNavigation';
import Footer from '../components/Footer/Footer';
import { useMyContext } from '../context/ModalContext/ModalContext';
import EmailModal from '../components/Profile/EmailModal/EmailModal';

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
        </main>
    );
};

export default Layout;
