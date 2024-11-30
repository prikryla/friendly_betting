'use client';
import React from 'react';
// UTILS
import classNames from 'classnames';
import { type ModalType, useMyContext } from '@/app/context/ModalContext/ModalContext';
// CSS
import './ProfileDataContainer.scss';

interface IProps {
    label: string;
    data: string;
    renderText: string;
    buttonText: string;
    smallerMargin?: boolean;
    isPassword?: boolean;
}

const ProfileDataContainer: React.FC<IProps> = ({
    label,
    data,
    renderText,
    buttonText,
    smallerMargin = false,
    isPassword = false,
}) => {
    const { openModal } = useMyContext();
    return (
        <div className={classNames('inputContainer', { smallerMargin })}>
            <label htmlFor={label}>
                {renderText}
                <input
                    className='dataContainer'
                    type={isPassword ? 'password' : 'text'}
                    value={data}
                    disabled
                />
                <button
                    className='button'
                    onClick={() => {
                        openModal(label as ModalType);
                    }}
                >
                    {buttonText}
                </button>
            </label>
        </div>
    );
};

export default ProfileDataContainer;
