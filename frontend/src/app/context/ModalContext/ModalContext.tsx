'use client';

import React, { createContext, useContext, useState } from 'react';

export type ModalType = 'email' | 'password' | 'username' | null;

interface ModalContextType {
    isModalOpen: boolean;
    activeModal: ModalType;
    openModal: (type: ModalType) => void;
    closeModal: (type: ModalType) => void;
}

const ModalContext = createContext<ModalContextType>({
    isModalOpen: true,
    activeModal: null,
    openModal: () => {},
    closeModal: () => {},
});

export const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const openModal = (type: ModalType): void => {
        setIsModalOpen(true);
        setActiveModal(type);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        setActiveModal(null);
    };
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <ModalContext.Provider value={{ isModalOpen, activeModal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useMyContext = (): ModalContextType => useContext(ModalContext);
