"use client";
import { useGetALlBiodatasQuery } from "@/redux/api/biodata";
import { Row } from "antd";
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
    if (bioDataNo) activeFilters.push(`Biodata No: ${bioDataNo}`);
    if (biodataType && biodataType !== "all") {
      activeFilters.push(
        `Type: ${biodataType.replace("'s_biodata", "").replace("_", " ")}`
      );
    }
    if (maritalStatus && maritalStatus !== "all") {
      activeFilters.push(`Status: ${maritalStatus}`);
    }
    if (minAge !== 18 || maxAge !== 60) {
      activeFilters.push(`Age: ${minAge}-${maxAge}`);
    }
    if (location) activeFilters.push(`Location: ${location}`);

    return activeFilters;
  };

  const activeFilters = getFilterSummary();

  console.log("Query:", query);
  console.log("Active Filters:", activeFilters);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-2 flex-1'>
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h1 className='text-2xl font-bold text-gray-600'>Biodatas</h1>
          </div>
          <div className='text-right'>
            <p className='text-gray-600 font-medium'>
              {isLoading
                ? "Loading..."
                : `${data?.biodatas?.length || 0} biodatas found`}
            </p>
            {data?.total && (
              <p className='text-sm text-gray-500'>
                Total: {data.total} biodatas
              </p>
            )}
          </div>
        </div>

        {/* Handle loading state */}
        {isLoading && <BioDataCardSkeleton />}

        {/* Handle error state */}
        {error && (
          <div className='text-center py-8'>
            <div className='bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto'>
              <p className='text-red-600 font-medium'>Error loading biodatas</p>
              <p className='text-red-500 text-sm mt-1'>
                Please try again or adjust your filters.
              </p>
            </div>
          </div>
        )}

        {/* Handle empty state */}
        {!isLoading &&
          !error &&
          (!data?.biodatas || data.biodatas.length === 0) && (
            <div className='text-center py-12'>
              <div className='bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto'>
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
          <Row gutter={[24, 24]}>
            {data.biodatas.map((biodata, index) => (
              <BioDataCard
                biodata={biodata}
                key={biodata?.id || `biodata-${index}`}
              />
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default BioDatas;
