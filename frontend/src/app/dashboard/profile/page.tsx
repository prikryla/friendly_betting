import React from 'react';
import { type Metadata } from 'next';
// COMPONENTS
import Image from 'next/image';
import SportFact from '@/app/components/Profile/SportFacts/SportFact';
import WorkInProgress from '@/app/components/WorkInProgress/WorkInProgress';
// UTILS
import { getRandomNumber } from '@/app/lib/helpers/helpers';
import { colorsArr } from './colorLib';
// DEBUG DATA ONLY!
import data from './profile.json';
// CSS
import './profile.scss';

export const metadata: Metadata = {
    title: 'Můj profil | Friendly Betting',
};

const MyProfile: React.FC = () => {
    const splitUsername = (username: string): string[] => {
        return username.trim().split(/\s+/);
    };

    const extractLettersFromUsername = (username: string): string[] => {
        const usernameArr = splitUsername(username);
        const updatedArray = usernameArr.length === 1 ? usernameArr : usernameArr.slice(0, 2);
        const secretMessage = updatedArray.map((username) => {
            return username[0];
        });
        return secretMessage;
    };

    return (
        <main>
            <WorkInProgress />
            <div className='profilePage'>
                <div>
                    <h1 className='settingsHeading'>Nastavení profilu</h1>
                    <div className='profileContainer'>
                        {data.image ? (
                            <Image
                                src={data.image}
                                alt='Profilovy obrazek'
                                width={100}
                                height={100}
                                className='profileImage'
                            />
                        ) : (
                            <div
                                className='profileLetters'
                                style={{
                                    backgroundColor: `${colorsArr[getRandomNumber(colorsArr)]}`,
                                }}
                            >
                                {extractLettersFromUsername(data.username)}
                            </div>
                        )}
                        <div className='profileSettings'>
                            <Image
                                src='/Settings.png'
                                width={30}
                                height={30}
                                alt='Ozubené kolečko, neboli nastavení'
                            />
                            <p>Změnit profilovou fotografii</p>
                        </div>
                        <div className='inputContainer'>
                            <label htmlFor='email'>
                                E-mail
                                <div className='dataContainer'>{data.email}</div>
                                <button className='button'>Změnit e-mail</button>
                            </label>
                        </div>
                        <div className='inputContainer smallerMargin'>
                            <label htmlFor='username'>
                                Tvoje jméno
                                <div className='dataContainer'>{data.username}</div>
                                <button className='button'>Změnit jméno</button>
                            </label>
                        </div>
                        <div className='inputContainer smallerMargin'>
                            <label htmlFor='password'>
                                Heslo
                                <div className='dataContainer'>{data.password}</div>
                                <button className='button'>Změnit heslo</button>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='sportFact'>
                    <SportFact />
                </div>
            </div>
        </main>
    );
};

export default MyProfile;
