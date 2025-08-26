"use client";

import { getLocationData } from "@/data/locationData";
import { DownOutlined, FilterOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Input, Select, Slider, Drawer, Cascader } from "antd";
import Sider from "antd/es/layout/Sider";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CustomButton from "../UI/Button";
import { getGenderOption, getMaritalStatusOptions } from "@/constants/global";
import { CiSettings } from "react-icons/ci";

interface FilterState {
  bioDataNo: string;
  biodataType: string;
  maritalStatus: string;
  minAge: number;
  maxAge: number;
  presentAddress: (string | number)[];
  permanentAddress: (string | number)[];
}

const DEFAULT_FILTERS: FilterState = {
  bioDataNo: "",
  biodataType: "",
  maritalStatus: "",
  minAge: 18,
  maxAge: 60,
  presentAddress: [],
  permanentAddress: [],
};

const Sidebar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState({
    general: false,
    address: !searchParams.get("presentAddress"),
  });

  // Use ref to store filters locally without rerendering
  const filtersRef = useRef<FilterState>({ ...DEFAULT_FILTERS });

  // Screen size detection
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Sync from URL once on mount
  useEffect(() => {
    filtersRef.current = {
      bioDataNo: searchParams.get("bioDataNo") || "",
      biodataType: searchParams.get("biodataType") || "",
      maritalStatus: searchParams.get("maritalStatus") || "",
      minAge: parseInt(searchParams.get("minAge") || "18"),
      maxAge: parseInt(searchParams.get("maxAge") || "60"),
      presentAddress: searchParams.get("presentAddress")?.split(",") || [],
      permanentAddress: searchParams.get("permanentAddress")?.split(",") || [],
    };
  }, [searchParams]);

  const buildQueryParams = (newFilters: FilterState) => {
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, val]) => {
      if (!val || val === "all") return;
      if ((key === "minAge" && val === 18) || (key === "maxAge" && val === 60))
        return;
      if (Array.isArray(val)) {
        if (val?.length === 0) return;
        params.set(key, val.join(","));
      } else {
        params.set(key, String(val));
      }
    });
    return params.toString();
  };

  const applyFilters = () => {
    const queryString = buildQueryParams(filtersRef.current);
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
    if (isMobile) setDrawerOpen(false);
  };

  const clearAllFilters = () => {
    filtersRef.current = { ...DEFAULT_FILTERS };
    router.push(pathname);
    if (isMobile) setDrawerOpen(false);
  };

  const toggleSection = (section: keyof typeof collapsedSections) => {
    setCollapsedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const FilterContent = () => {
    const f = filtersRef.current; // current filter snapshot

    return (
      <div className="p-2 pb-1 bg-white w-full h-full overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-pink-500 font-medium text-lg flex items-center gap-1">
            <CiSettings />
            {t("search_form.filters")}
          </h2>
          <div className="flex items-center space-x-2">
            <Button
              type="link"
              size="small"
              onClick={clearAllFilters}
              className="!text-red-500 p-0"
            >
              {t("search_form.clear_all")}
            </Button>
            {isMobile && (
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={() => setDrawerOpen(false)}
                className="text-gray-400"
              />
            )}
          </div>
        </div>

        {/* Biodata Number */}
        <div className="mb-6">
          <p className="text-gray-600 mb-2 font-medium">
            {t("search_form.biodata_no")}
          </p>
          <Input
            defaultValue={f.bioDataNo}
            placeholder="0000"
            allowClear
            size={isMobile ? "large" : "middle"}
            onChange={(e) => (filtersRef.current.bioDataNo = e.target.value)}
          />
        </div>

        {/* Sections */}
        <AccordionSection
          title={t("search_form.general")}
          collapsed={collapsedSections.general}
          toggle={() => toggleSection("general")}
        >
          <div className="space-y-4 pl-2">
            <SelectField
              label={t("search_form.looking_for")}
              defaultValue={f.biodataType}
              onChange={(val: string) => (filtersRef.current.biodataType = val)}
              options={getGenderOption(t)}
              isMobile={isMobile}
            />
            <SelectField
              label={t("search_form.marital_status")}
              defaultValue={f.maritalStatus}
              onChange={(val: string) =>
                (filtersRef.current.maritalStatus = val)
              }
              options={getMaritalStatusOptions(t)}
              isMobile={isMobile}
            />
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600">{t("search_form.age_range")}</p>
                <span className="text-sm text-gray-500">
                  {f.minAge} - {f.maxAge}
                </span>
              </div>
              <Slider
                range
                defaultValue={[f.minAge, f.maxAge]}
                min={18}
                max={60}
                onChange={(val) => {
                  const [min, max] = val as [number, number];
                  filtersRef.current.minAge = min;
                  filtersRef.current.maxAge = max;
                }}
                tooltip={{ formatter: (val) => `${val} years` }}
              />
            </div>
          </div>
        </AccordionSection>

        <AccordionSection
          title={t("search_form.address")}
          collapsed={collapsedSections.address}
          toggle={() => toggleSection("address")}
        >
          {!collapsedSections.address && (
            <div className="space-y-4 pl-2">
              <CascaderField
                label={t("search_form.present_address")}
                defaultValue={f.presentAddress}
                placeholder={t("search_form.select_location")}
                onChange={(val: (string | number)[]) =>
                  (filtersRef.current.presentAddress = val)
                }
                isMobile={isMobile}
                t={t}
              />
              <CascaderField
                // label="Permanent Address"
                label={t("search_form.permanent_address")}
                defaultValue={f.permanentAddress}
                placeholder={t("search_form.select_location")}
                onChange={(val: (string | number)[]) =>
                  (filtersRef.current.permanentAddress = val)
                }
                isMobile={isMobile}
                t={t}
              />
            </div>
          )}
        </AccordionSection>

        {/* Apply Button */}
        <div className="sticky bottom-0 bg-white pt-4">
          <CustomButton variant="cta" onClick={applyFilters} className="w-full">
            {t("search_form.apply_filter")}
          </CustomButton>
        </div>
      </div>
    );
  };

  return isMobile ? (
    <>
      <div className="md:hidden">
        <Button
          type="link"
          icon={<FilterOutlined />}
          onClick={() => setDrawerOpen(true)}
          className="!fixed !top-16 !right-4 !text-white !z-50 shadow-lg !bg-pink-600 !hover:bg-pink-700 !border-pink-600"
          size="large"
          shape="round"
        >
          {t("search_form.filter")}
        </Button>
      </div>
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width="85%"
        style={{ padding: 0 }}
      >
        <FilterContent />
      </Drawer>
    </>
  ) : (
    <Sider
      width={280}
      theme="light"
      className="hidden md:block"
      style={{
        overflow: "auto",
        height: "calc(100vh - 64px)",
        position: "sticky",
        top: "64px",
      }}
    >
      <FilterContent />
    </Sider>
  );
};

// ---- Accordion Section ----
const AccordionSection = ({ title, collapsed, toggle, children }: any) => (
  <div className="mb-3 p-1 rounded-md bg-gradient-to-r from-blue-50 to-purple-50">
    <div
      className="flex items-center justify-between cursor-pointer p-2 transition-colors"
      onClick={toggle}
    >
      <h3 className="text-pink-400 !font-semibold">{title}</h3>
      <div
        className={`transition-transform duration-300 ${
          collapsed ? "" : "rotate-180"
        }`}
      >
        <DownOutlined className="text-gray-400" />
      </div>
    </div>
    <div
      className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      style={{ maxHeight: collapsed ? "0" : "500px" }}
    >
      <div className="p-2">{children}</div>
    </div>
  </div>
);

const SelectField = ({
  label,
  defaultValue,
  onChange,
  options,
  isMobile,
}: any) => (
  <div>
    <p className="text-gray-600 mb-2 py-1">{label}</p>
    <Select
      defaultValue={defaultValue}
      style={{ width: "100%" }}
      size={isMobile ? "large" : "middle"}
      onChange={onChange}
      options={options}
    />
  </div>
);

const CascaderField = ({
  label,
  defaultValue,
  placeholder,
  onChange,
  isMobile,
  t,
}: any) => (
  <div>
    <p className="text-gray-600 mb-2">{label}</p>
    <Cascader
      options={getLocationData(t).searchLocationData}
      defaultValue={defaultValue?.length > 0 ? defaultValue : undefined}
      placeholder={placeholder}
      onChange={onChange}
      showSearch
      size={isMobile ? "large" : "middle"}
      allowClear
      style={{ width: "100%" }}
    />
  </div>
);

export default Sidebar;
