import React from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

const UMBreadCrumb: React.FC<{
  items: {
    label: string;
    link: string;
  }[];
}> = ({ items }) => {
  const breadCrumbItems = [
    {
      title: <Link href="/">Home</Link>,
    },
    ...items.map((item) => ({
      title: item.link ?  <Link href={item.link}>{item.label}</Link> : <span>{item.label}</span>,
    })),
  ];

  return <Breadcrumb items={breadCrumbItems} />;
};

export default UMBreadCrumb;
