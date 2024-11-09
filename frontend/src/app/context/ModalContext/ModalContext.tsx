import React, { createContext, useState } from 'react';

interface ModalContextType {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
    isModalOpen: false,
    setIsModalOpen: () => {},
});

const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalProvider, ModalContext };
