import { Col, Row } from "antd";

const BioDataCardSkeleton = () => {
  return (
    <Row gutter={[24, 24]}>
      {[...Array(9)].map((_, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={8}>
          <div className='group'>
            <div className='bg-white rounded-lg shadow-sm transition-all duration-300 overflow-hidden border border-gray-200 animate-pulse'>
              {/* Profile Section */}
              <div className='relative'>
                <div className='bg-gradient-to-r from-rose-50 to-pink-50 p-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className='relative'>
                        <div className='w-14 h-14 rounded-full overflow-hidden border-2 border-rose-200 shadow-sm bg-gray-200'></div>
                      </div>
                      <div>
                        <div className='h-4 bg-gray-300 rounded w-16 mb-1'></div>
                        <div className='h-3 bg-gray-200 rounded w-20'></div>
                      </div>
                    </div>

                    <div className='p-2 rounded-full bg-white border border-rose-200 w-8 h-8 flex items-center justify-center'>
                      <div className='w-3 h-3 bg-gray-300 rounded'></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className='p-4'>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='h-3 bg-gray-300 rounded w-8'></div>
                    </div>
                    <div className='h-4 bg-gray-300 rounded w-16'></div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='h-3 bg-gray-300 rounded w-12'></div>
                    </div>
                    <div className='h-4 bg-gray-300 rounded w-12'></div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='h-3 bg-gray-300 rounded w-16'></div>
                    </div>
                    <div className='h-4 bg-gray-300 rounded w-24'></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='mt-4 pt-3 border-t border-gray-100'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                      <div className='w-3 h-3 bg-gray-300 rounded'></div>
                      <div className='h-3 bg-gray-300 rounded w-12'></div>
                    </div>

                    <div className='h-7 bg-gray-300 rounded-full w-20'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default BioDataCardSkeleton;
