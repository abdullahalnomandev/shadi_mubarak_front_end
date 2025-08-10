"use client";
import { useGetALlBiodatasQuery } from "@/redux/api/biodata";
import { Row, Col, Tag, Space } from "antd";
import { useSearchParams } from "next/navigation";
import BioDataCardSkeleton from "../skeletons/BioDataCardSkeleton";
import BioDataCard from "./BiodataCard";
import Sidebar from "./Sidebar";

const BioDatas = () => {
  const searchParams = useSearchParams();

  // Extract all filter values
  const bioDataNo = searchParams.get("bioDataNo") || "";
  const biodataType = searchParams.get("biodataType") || "";
  const maritalStatus = searchParams.get("maritalStatus") || "";
  const presentAddress = searchParams.get("presentAddress") || "";
  const permanentAddress = searchParams.get("permanentAddress") || "";
  const minAge = parseInt(searchParams.get("minAge") || "18");
  const maxAge = parseInt(searchParams.get("maxAge") || "60");

  // Build query object
  const query: any = {
    page: 1,
    limit: 10,
    minAge,
    maxAge,
  };

  // Add biodata number filter if provided
  if (bioDataNo) {
    query["bioDataNo"] = bioDataNo;
  }

  // Add biodata type filter
  if (biodataType === "male's_biodata" || biodataType === "female's_biodata") {
    query["general_information.biodataType"] = biodataType;
  }

  // Add marital status filter
  if (maritalStatus && maritalStatus !== "all") {
    query["general_information.maritalStatus"] = maritalStatus;
  }

  // Add location filter
  if (presentAddress) {
    query["presentAddress"] = presentAddress;
  }
  if (permanentAddress) {
    query["permanentAddress"] = permanentAddress;
  }

  const { data, isLoading, error } = useGetALlBiodatasQuery(query);

  // Helper function to get filter summary
  const getFilterSummary = () => {
    const activeFilters = [];
    if (bioDataNo) activeFilters.push({ key: 'biodata', label: `Biodata No: ${bioDataNo}` });
    if (biodataType && biodataType !== "all") {
      activeFilters.push({
        key: 'type',
        label: `Type: ${biodataType.replace("'s_biodata", "").replace("_", " ")}`
      });
    }
    if (maritalStatus && maritalStatus !== "all") {
      activeFilters.push({ key: 'status', label: `Status: ${maritalStatus}` });
    }
    if (minAge !== 18 || maxAge !== 60) {
      activeFilters.push({ key: 'age', label: `Age: ${minAge}-${maxAge}` });
    }
    if (presentAddress) activeFilters.push({ key: 'present', label: `Present: ${presentAddress}` });
    if (permanentAddress) activeFilters.push({ key: 'permanent', label: `Permanent: ${permanentAddress}` });

    return activeFilters;
  };

  const activeFilters = getFilterSummary();

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <Sidebar />
      
      {/* Main content */}
      <div className='flex-1 p-2 md:p-4'>
        {/* Header section */}
        <div className='mb-4 md:mb-6'>
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4'>
            <div>
              <h1 className='text-xl md:text-2xl font-bold text-gray-600'>Biodatas</h1>
            </div>
            <div className='text-left sm:text-right'>
              <p className='text-gray-600 font-medium'>
                {isLoading
                  ? "Loading..."
                  : `${data?.biodatas?.length || 0} biodatas found`}
              </p>
              {data?.total && (
                <p className='text-xs md:text-sm text-gray-500'>
                  Total: {data.total} biodatas
                </p>
              )}
            </div>
          </div>
   
        </div>

        {/* Handle loading state */}
        {isLoading && <BioDataCardSkeleton />}

        {/* Handle error state */}
        {error && (
          <div className='flex justify-center py-8 px-4'>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4 md:p-6 max-w-md w-full'>
              <p className='text-red-600 font-medium text-center'>Error loading biodatas</p>
              <p className='text-red-500 text-sm mt-1 text-center'>
                Please try again or adjust your filters.
              </p>
            </div>
          </div>
        )}

        {/* Handle empty state */}
        {!isLoading &&
          !error &&
          (!data?.biodatas || data.biodatas.length === 0) && (
            <div className='flex justify-center py-12 px-4'>
              <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 max-w-md w-full text-center'>
                <div className='mb-4'>
                  <svg
                    className='mx-auto h-12 w-12 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                </div>
                <p className='text-gray-600 font-medium text-lg mb-2'>
                  No biodatas found
                </p>
                <p className='text-gray-500 text-sm'>
                  {activeFilters.length > 0
                    ? "Try adjusting your filters to see more results."
                    : "No biodatas are available at the moment."}
                </p>
              </div>
            </div>
          )}

        {/* Render biodatas */}
        {!isLoading && !error && data?.biodatas && data.biodatas.length > 0 && (
          <Row gutter={[16, 16]} className='pb-20 md:pb-4'>
            {data.biodatas.map((biodata, index) => (
              <BioDataCard biodata={biodata} key={index} />
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default BioDatas;