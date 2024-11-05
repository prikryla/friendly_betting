'use client';
import React, { useState } from 'react';

import './ForgotPassword.scss';

//* * TODO functionality */

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };

    const handleSubmit = (): void => {
        event?.preventDefault();
    };

    return (
        <div className='forgotPasswordContainer'>
            <h1>Zapomenuté heslo</h1>
            <form className='forgotFormContainer' onSubmit={handleSubmit}>
                <label htmlFor={email}>
                    E-mail
                    <input
                        name='email'
                        value={email}
                        type='email'
                        onChange={handleChangeEmail}
                        required
                    />
                </label>
                <button type='submit'>Obnovit heslo</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
