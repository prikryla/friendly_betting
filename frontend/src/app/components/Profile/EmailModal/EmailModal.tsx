import React, { useState } from 'react';

import './EmailModal.scss';

interface IProps {
    email: string;
    closeModal: () => void;
}

const EmailModal: React.FC<IProps> = ({ email }) => {
    const [newEmail, setNewEmail] = useState<string>('');

    const handleSubmit = (): void => {
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
            <h1 className='title'>Změna e-mailu</h1>
            <form onSubmit={handleSubmit} className='formContainer'>
                <label htmlFor={email}>
                    E-mail
                    <input
                        name='email'
                        value={newEmail}
                        placeholder={email}
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
