import React, { useState } from 'react';
import { type ModalType } from '@/app/context/ModalContext/ModalContext';
// COMPONENTS
import Image from 'next/image';
// UTILS
import { useOutsideClick } from '@/app/lib/hooks/useOutsideClick';
import classNames from 'classnames';
// CSS
import './PasswordModal.scss';

interface IProps {
    modalType: ModalType;
    closeModal: (type: ModalType) => void;
}

const PasswordModal: React.FC<IProps> = ({ modalType, closeModal }) => {
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [repeatedPassword, setRepeatedPassword] = useState<string>('');
    const [showWarning, setShowWarning] = useState<boolean>(false);

    const handleSubmit = (): void => {
        event?.preventDefault();
        if (newPassword !== repeatedPassword) {
            setShowWarning(true);
        } else {
            // TODO
            // eslint-disable-next-line no-console
            console.log('submit kamo');
            closeModal(modalType);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setShowWarning(false);
        const { name, value } = event.target;
        if (name === 'oldPassword') {
            setOldPassword(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        } else {
            setRepeatedPassword(value);
        }
    };

    const modalRef = useOutsideClick(() => {
        closeModal(modalType);
    });

    return (
        <div className='modal' ref={modalRef}>
            <div className='titleContainer'>
                <h1 className='title'>Změna hesla</h1>
                <button
                    style={{ marginTop: '-20px' }}
                    onClick={() => {
                        closeModal(modalType);
                    }}
                >
                    <Image src='/Close.png' alt='Zavírací tlačítko' width={20} height={20} />
                </button>
            </div>
            <form onSubmit={handleSubmit} className='formContainer'>
                <label htmlFor={oldPassword}>
                    Staré heslo
                    <input
                        name='oldPassword'
                        value={oldPassword}
                        placeholder='Staré heslo'
                        type='password'
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor={newPassword}>
                    Nové heslo
                    <input
                        name='newPassword'
                        value={newPassword}
                        className={showWarning ? 'errorInput' : ''}
                        placeholder='Nové heslo'
                        type='password'
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor={repeatedPassword}>
                    Nové heslo znovu
                    <input
                        name='repeatedPassword'
                        value={repeatedPassword}
                        className={classNames('lastInput', showWarning ? 'errorInput' : '')}
                        placeholder='Nové heslo znovu'
                        type='password'
                        onChange={handleChange}
                        required
                    />
                    <p
                        className='errorMessage'
                        style={{
                            visibility: showWarning ? 'visible' : 'hidden',
                        }}
                    >
                        Nové hesla se neshodují
                    </p>
                </label>
                <button type='submit' className='submitButton'>
                    Uložit
                </button>
            </form>
        </div>
    );
};

export default PasswordModal;
