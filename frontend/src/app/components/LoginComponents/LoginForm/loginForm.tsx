'use client';
import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/action';

import './LoginForm.scss';

interface ILoginData {
    username: string;
    password: string;
    csrfToken: string;
}

const LoginForm: React.FC = () => {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    const [badCredentials, setBadCredentials] = useState<boolean>(false);
    const [loginData, setLoginData] = useState<ILoginData>({
        username: '',
        password: '',
        csrfToken: '',
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBadCredentials(false);
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    };

    useEffect(() => {
        if (errorMessage) {
            setBadCredentials(true);
        }
    }, [errorMessage]);

    return (
        <div className='loginContainer'>
            <h1 className='loginHeading'>Přihlásit se</h1>
            <form className='loginForm' action={dispatch}>
                <label htmlFor={loginData.username}>
                    Uživatelské jméno
                    <input
                        name='username'
                        className={badCredentials ? 'errorInput' : ''}
                        value={loginData.username}
                        type='text'
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor={loginData.password}>
                    Heslo
                    <input
                        name='password'
                        className={badCredentials ? 'errorInput' : ''}
                        value={loginData.password}
                        type='password'
                        onChange={handleChange}
                    />
                    <p
                        className='errorMessage'
                        style={{
                            visibility: badCredentials ? 'visible' : 'hidden',
                        }}
                    >
                        Špatné přihlašovací údaje
                    </p>
                </label>

                <button type='submit'>Přihlásit se</button>
            </form>
        </div>
    );
};

export default LoginForm;
