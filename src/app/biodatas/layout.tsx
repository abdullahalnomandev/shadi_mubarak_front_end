"use client";
import React from 'react';
import { Layout } from 'antd';
import Sidebar from '@/components/Biodatas/Sidebar';
import BioDataContents from '@/components/Biodatas/BioDataContents';

const BioDataLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <Layout hasSider>
       <Sidebar/>
      <Layout>
        <BioDataContents> {children}</BioDataContents>
      </Layout>
    </Layout>
  );
};

export default BioDataLayout;