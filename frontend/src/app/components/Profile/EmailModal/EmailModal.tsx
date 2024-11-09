import React from 'react';

import './EmailModal.scss';

interface IProps {
    email: string;
    closeModal: () => void;
}

const EmailModal: React.FC<IProps> = ({ email }) => {
    return (
        <div className='modal'>
            <h1>Email Modal</h1>
            <p>{email}</p>
        </div>
    );
};

export default EmailModal;
