import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingPage = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <Spin indicator={antIcon} />
            <div className="mt-4 text-lg text-gray-600 font-semibold">
                Loading Shadi Mubarak...
            </div>
        </div>
    );
};

export default LoadingPage;