"use client";
import { getLocationData } from "@/data/locationData";
import { 
  DownOutlined, 
  UpOutlined, 
  FilterOutlined, 
  CloseOutlined 
} from "@ant-design/icons";
import { 
  Button, 
  Input, 
  Select, 
  Slider, 
  Drawer, 
  Badge, 
  Space 
} from "antd";
import Sider from "antd/es/layout/Sider";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import FormCascader from "../Forms/FormCascader";
import CustomButton from "../UI/Button";

interface FilterState {
  bioDataNo: string;
  biodataType: string;
  maritalStatus: string;
  minAge: number;
  maxAge: number;
  presentAddress: string;
  permanentAddress: string;
}

const Sidebar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Collapsible sections state
  const [collapsedSections, setCollapsedSections] = useState({
    general: false,
    address: true,
    education: true,
  });

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    bioDataNo: searchParams.get("bioDataNo") || "",
    biodataType: searchParams.get("biodataType") || "all",
    maritalStatus: searchParams.get("maritalStatus") || "all",
    minAge: parseInt(searchParams.get("minAge") || "18"),
    maxAge: parseInt(searchParams.get("maxAge") || "60"),
    presentAddress: searchParams.get("presentAddress") || "",
    permanentAddress: searchParams.get("permanentAddress") || "",
  });

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Update filters when URL changes
  useEffect(() => {
    setFilters({
      bioDataNo: searchParams.get("bioDataNo") || "",
      biodataType: searchParams.get("biodataType") || "all",
      maritalStatus: searchParams.get("maritalStatus") || "all",
      minAge: parseInt(searchParams.get("minAge") || "18"),
      maxAge: parseInt(searchParams.get("maxAge") || "60"),
      presentAddress: searchParams.get("presentAddress") || "",
      permanentAddress: searchParams.get("permanentAddress") || "",
    });
  }, [searchParams]);

  // Build query parameters
  const buildQueryParams = useCallback((newFilters: FilterState) => {
    const params = new URLSearchParams();

    if (newFilters.bioDataNo) params.set("bioDataNo", newFilters.bioDataNo);
    if (newFilters.biodataType && newFilters.biodataType !== "all") {
      params.set("biodataType", newFilters.biodataType);
    }
    if (newFilters.maritalStatus && newFilters.maritalStatus !== "all") {
      params.set("maritalStatus", newFilters.maritalStatus);
    }
    if (newFilters.minAge !== 18)
      params.set("minAge", newFilters.minAge.toString());
    if (newFilters.maxAge !== 60)
      params.set("maxAge", newFilters.maxAge.toString());
    if (newFilters.presentAddress)
      params.set("presentAddress", newFilters.presentAddress);
    if (newFilters.permanentAddress)
      params.set("permanentAddress", newFilters.permanentAddress);

    return params.toString();
  }, []);

  // Apply filters
  const applyFilters = useCallback(
    (newFilters: FilterState) => {
      const queryString = buildQueryParams(newFilters);
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
      router.push(newUrl);
      
      // Close drawer on mobile after applying filters
      if (isMobile) {
        setDrawerOpen(false);
      }
    },
    [pathname, router, buildQueryParams, isMobile]
  );

  // Handle filter changes
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    // Apply filters immediately for better UX
    applyFilters(newFilters);
  };

  // Handle age range change
  const handleAgeChange = (value: [number, number]) => {
    const newFilters = {
      ...filters,
      minAge: value[0],
      maxAge: value[1],
    };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  // Clear all filters
  const clearAllFilters = () => {
    const defaultFilters: FilterState = {
      bioDataNo: "",
      biodataType: "all",
      maritalStatus: "all",
      minAge: 18,
      maxAge: 60,
      presentAddress: "",
      permanentAddress: "",
    };
    setFilters(defaultFilters);
    router.push(pathname);
  };

  // Toggle section collapse
  const toggleSection = (section: keyof typeof collapsedSections) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Check if any filters are active
  const hasActiveFilters =
    filters.bioDataNo ||
    filters.biodataType !== "all" ||
    filters.maritalStatus !== "all" ||
    filters.minAge !== 18 ||
    filters.maxAge !== 60 ||
    filters.presentAddress ||
    filters.permanentAddress;

  // Count active filters for badge
  const activeFilterCount = [
    filters.bioDataNo,
    filters.biodataType !== "all" ? filters.biodataType : null,
    filters.maritalStatus !== "all" ? filters.maritalStatus : null,
    filters.minAge !== 18 || filters.maxAge !== 60 ? "age" : null,
    filters.presentAddress,
    filters.permanentAddress,
  ].filter(Boolean).length;

  // Filter content component
  const FilterContent = () => (
    <div className='p-2 pb-1 bg-white w-full h-full overflow-y-auto'>
      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-pink-800 font-medium text-lg'>Filters</h2>
        <Space>
          {hasActiveFilters && (
            <Button
              type='link'
              size='small'
              onClick={clearAllFilters}
              className='text-red-500 p-0'>
              Clear All
            </Button>
          )}
          {isMobile && (
            <Button
              type='text'
              icon={<CloseOutlined />}
              onClick={() => setDrawerOpen(false)}
              className='text-gray-400'
            />
          )}
        </Space>
      </div>

      {/* Biodata Number Search */}
      <div className='mb-6'>
        <p className='text-gray-600 mb-2 font-medium'>Biodata No</p>
        <Input
          placeholder='Search by biodata No.'
          value={filters.bioDataNo}
          onChange={(e) => handleFilterChange("bioDataNo", e.target.value)}
          allowClear
          className='w-full'
          size={isMobile ? 'large' : 'middle'}
        />
      </div>

      {/* General Section */}
      <div className='mb-6'>
        <div
          className='flex items-center justify-between mb-4 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors'
          onClick={() => toggleSection("general")}>
          <h3 className='text-pink-600 font-medium'>General</h3>
          {collapsedSections.general ? (
            <DownOutlined className='text-gray-400' />
          ) : (
            <UpOutlined className='text-gray-400' />
          )}
        </div>

        {!collapsedSections.general && (
          <div className='space-y-4 pl-2'>
            <div>
              <p className='text-gray-600 mb-2'>Looking for</p>
              <Select
                value={filters.biodataType}
                style={{ width: "100%" }}
                size={isMobile ? 'large' : 'middle'}
                onChange={(value) => handleFilterChange("biodataType", value)}
                options={[
                  { value: "all", label: "All" },
                  { value: "male's_biodata", label: "Male's Biodata" },
                  { value: "female's_biodata", label: "Female's Biodata" },
                ]}
              />
            </div>

            <div>
              <p className='text-gray-600 mb-2'>Marital Status</p>
              <Select
                value={filters.maritalStatus}
                style={{ width: "100%" }}
                size={isMobile ? 'large' : 'middle'}
                onChange={(value) =>
                  handleFilterChange("maritalStatus", value)
                }
                options={[
                  { value: "all", label: "All" },
                  { value: "single", label: "Single" },
                  { value: "married", label: "Married" },
                  { value: "unmarried", label: "Unmarried" },
                  { value: "divorced", label: "Divorced" },
                  { value: "widowed", label: "Widowed" },
                  { value: "widower", label: "Widower" },
                ]}
              />
            </div>

            <div>
              <div className='flex justify-between items-center mb-2'>
                <p className='text-gray-600'>Age Range</p>
                <span className='text-sm text-gray-500'>
                  {filters.minAge} - {filters.maxAge}
                </span>
              </div>
              <Slider
                range
                value={[filters.minAge, filters.maxAge]}
                min={18}
                max={60}
                onChange={handleAgeChange}
                tooltip={{
                  formatter: (value) => `${value} years`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Address Section */}
      <div className='mb-6'>
        <div
          className='flex items-center justify-between mb-4 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors'
          onClick={() => toggleSection("address")}>
          <h3 className='text-pink-600 font-medium'>Address</h3>
          {collapsedSections.address ? (
            <DownOutlined className='text-gray-400' />
          ) : (
            <UpOutlined className='text-gray-400' />
          )}
        </div>

        {!collapsedSections.address && (
          <div className='space-y-4 pl-2'>
            {/* Present Address */}
            <div>
              <FormCascader
                name='presentAddress'
                label='Present Address'
                options={getLocationData(t).searchLocationData}
                value={filters.presentAddress}
                placeholder='Select present address'
                onChange={(value) =>
                  handleFilterChange("presentAddress", value)
                }
                showSearch
                size={isMobile ? 'large' : 'middle'}
                standalone={true}
                allowClear
              />
            </div>

            {/* Permanent Address */}
            <div>
              <FormCascader
                name='permanentAddress'
                label='Permanent Address'
                options={getLocationData(t).searchLocationData}
                value={filters.permanentAddress}
                placeholder='Select permanent address'
                onChange={(value) =>
                  handleFilterChange("permanentAddress", value)
                }
                showSearch
                size={isMobile ? 'large' : 'middle'}
                standalone={true}
                allowClear
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Apply Button */}
      {isMobile && (
        <div className='sticky bottom-0 bg-white '>
          <CustomButton
            variant='cta'
            onClick={() => setDrawerOpen(false)}
            >
            Apply Filters
            {activeFilterCount > 0 && ` (${activeFilterCount})`}
          </CustomButton>
        </div>
      )}
    </div>
  );

  // Mobile floating filter button
  const MobileFilterButton = () => (
    <div className='md:hidden'>
      <Button
        type='primary'
        icon={<FilterOutlined />}
        onClick={() => setDrawerOpen(true)}
        className='fixed bottom-4 right-4 z-50 shadow-lg bg-pink-600 hover:bg-pink-700 border-pink-600'
        size='large'
        shape='round'>
        <Badge count={activeFilterCount} offset={[10, -10]}>
          <span className='ml-1 text-pink-600'>Filters</span>
        </Badge>
      </Button>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <MobileFilterButton />
        <Drawer
          title={null}
          placement='left'
          closable={false}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          width='85%'
          styles={{
            body: { padding: 0 }
          }}>
          <FilterContent />
        </Drawer>
      </>
    );
  }

  // Desktop sidebar
  return (
    <Sider
      width={280}
      theme='light'
      className='hidden md:block'
      style={{
        overflow: "auto",
        height: "calc(100vh - 64px)",
        position: "sticky",
        left: 0,
        top: "64px",
        bottom: 0,
      }}>
      <FilterContent />
    </Sider>
  );
};

export default Sidebar;