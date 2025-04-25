import React from 'react';
import { Modal as AntModal } from 'antd';

interface IModalProps {
    title: string;
}

const Modal = ({title}: IModalProps) => {
    return (
        <div>
            <AntModal title={title} />
        </div>
    );
};

export default Modal;