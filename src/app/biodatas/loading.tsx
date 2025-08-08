// app/biodatas/loading.tsx (or wherever your page.tsx is)
"use client";

import { Row, Skeleton } from "antd";

const BioDataSkeletonCard = () => (
  <div className='w-full border rounded-md p-4 shadow-sm'>
    <Skeleton.Image active style={{ width: "100%", height: 180 }} />
    <Skeleton active paragraph={{ rows: 2 }} />
  </div>
);

const SidebarSkeleton = () => (
  <div className='w-64 p-4'>
    <Skeleton active title={{ width: 100 }} paragraph={{ rows: 5 }} />
  </div>
);

const Loading = () => {
  return (
    <div className='flex'>
      {/* Sidebar Skeleton */}
      <SidebarSkeleton />

      {/* Biodata Cards Skeleton */}
      <div className='p-2 flex-1'>
        <div className='flex justify-between items-center mb-6'>
          <Skeleton.Input style={{ width: 200 }} active />
          <Skeleton.Input style={{ width: 100 }} active />
        </div>
        <Row gutter={[18, 18]}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div className='w-full md:w-1/2 lg:w-1/3' key={i}>
              <BioDataSkeletonCard />
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Loading;
