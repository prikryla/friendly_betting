'use client';
import React, { useState } from 'react';
import classNames from 'classnames';

import './ProfileDataContainer.scss';
import EmailModal from '../EmailModal/EmailModal';

interface IProps {
    label: string;
    data: string;
    renderText: string;
    buttonText: string;
    smallerMargin?: boolean;
}

type ModalType = 'email' | 'password' | 'username' | null;

const ProfileDataContainer: React.FC<IProps> = ({
    label,
    data,
    renderText,
    buttonText,
    smallerMargin = false,
}) => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const openModal = (type: ModalType): void => {
        setActiveModal(type);
    };

    const closeModal = (): void => {
        setActiveModal(null);
    };

    return (
        <div className={classNames('inputContainer', { smallerMargin })}>
            <label htmlFor={label}>
                {renderText}
                <div className='dataContainer'>{data}</div>
                <button
                    className='button'
                    onClick={() => {
                        openModal(label as ModalType);
                    }}
                >
                    {buttonText}
                </button>
            </label>
            {activeModal === 'email' && <EmailModal email={data} closeModal={closeModal} />}{' '}
        </div>
    );
};

export default ProfileDataContainer;
