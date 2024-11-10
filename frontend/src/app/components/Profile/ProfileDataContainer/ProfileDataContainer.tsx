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
}

const ProfileDataContainer: React.FC<IProps> = ({
    label,
    data,
    renderText,
    buttonText,
    smallerMargin = false,
}) => {
    const { openModal } = useMyContext();
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
        </div>
    );
};

export default ProfileDataContainer;
