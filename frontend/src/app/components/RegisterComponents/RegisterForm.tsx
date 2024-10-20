'use client';
import React, { useState } from 'react';

import './RegisterForm.scss';

interface IRegisterData {
    email: string;
    username: string;
    password: string;
    passwordAgain: string;
}

// ** TODO //
const RegisterForm: React.FC = () => {
    const [badPassword, setBadPassword] = useState<boolean>(false);

    const [registerData, setRegisterData] = useState<IRegisterData>({
        email: '',
        username: '',
        password: '',
        passwordAgain: '',
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent): void => {
        event?.preventDefault();
        if (registerData.password.length < 8) {
            setBadPassword(true);
        } else if (registerData.password !== registerData.passwordAgain) {
            setBadPassword(true);
        }
    };

    return (
        <div className='registerContainer'>
            <h1>Registrace</h1>
            <form className='formContainer' onSubmit={handleSubmit}>
                <label htmlFor={registerData.email}>
                    E-mail
                    <input
                        name='email'
                        value={registerData.email}
                        type='email'
                        onChange={handleChange}
                        className='styledInput'
                        required
                    />
                </label>
                <label htmlFor={registerData.password}>
                    Jak ti máme říkat?
                    <input
                        name='username'
                        value={registerData.username}
                        type='text'
                        className='styledInput'
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor={registerData.password}>
                    Heslo
                    <input
                        name='password'
                        value={registerData.password}
                        type='password'
                        onChange={handleChange}
                        className='styledInput'
                        required
                    />
                    {registerData.password !== '' && registerData.password.length < 8 && (
                        <p style={{ color: 'red' }}>Heslo je příliš krátké</p>
                    )}
                </label>
                <label htmlFor={registerData.password}>
                    Heslo znovu
                    <input
                        name='passwordAgain'
                        value={registerData.passwordAgain}
                        type='password'
                        onChange={handleChange}
                        className='styledInput'
                        required
                    />
                    {registerData.passwordAgain !== '' &&
                        registerData.password !== registerData.passwordAgain && (
                            <p className='wrongDataEntered'>Hesla se neshodují</p>
                        )}
                </label>
                <button type='submit' disabled={badPassword} className='styledButton'>
                    Registrovat
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
