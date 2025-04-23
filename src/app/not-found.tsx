import React from 'react';
import { Button, Result } from 'antd';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link href="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </div>
    );
};

export default NotFound;