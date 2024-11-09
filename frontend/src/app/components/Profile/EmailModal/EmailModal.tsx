import React, { useState } from 'react';
import { type ModalType } from '@/app/context/ModalContext/ModalContext';
// DEBUG DATA ONLY!
import data from '../../../dashboard/profile/profile.json';

import './EmailModal.scss';
import Image from 'next/image';

interface IProps {
    closeModal: (type: ModalType) => void;
}

const EmailModal: React.FC<IProps> = ({ closeModal }) => {
    const [newEmail, setNewEmail] = useState<string>(data.email);

    const handleSubmit = (): void => {
        event?.preventDefault();
        // TODO
        // eslint-disable-next-line no-console
        console.log('submit kamo');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setNewEmail(value);
    };
    return (
        <div className='modal'>
            <div className='titleContainer'>
                <h1 className='title'>Změna e-mailu</h1>
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
                <label htmlFor={newEmail}>
                    E-mail
                    <input
                        name='email'
                        value={newEmail}
                        placeholder={data.email}
                        type='email'
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

export default EmailModal;
