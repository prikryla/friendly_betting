import React, { useState } from 'react';
import { type ModalType } from '@/app/context/ModalContext/ModalContext';
// COMPONENTS
import Image from 'next/image';
// UTILS
import { useOutsideClick } from '@/app/lib/hooks/useOutsideClick';
// DEBUG DATA ONLY!
import data from '../../../dashboard/profile/profile.json';
// CSS
import './UsernameModal.scss';

interface IProps {
    closeModal: (type: ModalType) => void;
}

const UsernameModal: React.FC<IProps> = ({ closeModal }) => {
    const [newUsername, setNewUsername] = useState<string>(data.username);

    const handleSubmit = (): void => {
        event?.preventDefault();
        // TODO
        // eslint-disable-next-line no-console
        console.log('submit kamo');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setNewUsername(value);
    };

    const modalRef = useOutsideClick(() => {
        closeModal('username');
    });

    return (
        <div className='modal' ref={modalRef}>
            <div className='titleContainer'>
                <h1 className='title'>Změna jména</h1>
                <button
                    style={{ marginTop: '-20px' }}
                    onClick={() => {
                        closeModal('email');
                    }}
                >
                    <Image src='/Close.png' alt='Zavírací tlačítko' width={20} height={20} />
                </button>
            </div>
            <form onSubmit={handleSubmit} className='formContainer'>
                <label htmlFor={newUsername}>
                    Tvoje jméno
                    <input
                        name='email'
                        value={newUsername}
                        placeholder={data.username}
                        type='text'
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type='submit' className='submitButton'>
                    Uložit
                </button>
            </form>
        </div>
    );
};

export default UsernameModal;
