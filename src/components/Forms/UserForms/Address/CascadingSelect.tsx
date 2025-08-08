"use client";

import { dbZone as bangladeshLocations } from "@/data/districts";
import { Select } from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

const CascadingSelect = ({ areaValue = "", onChange, lang = "en" }) => {
  type Level = "division" | "district" | "area";
  const [selectedDivision, setSelectedDivision] = useState<string>();
  const [selectedDistrict, setSelectedDistrict] = useState<string>();
  const [selectedArea, setSelectedArea] = useState<string>();

  const [districts, setDistricts] = useState<any[]>([]);
  const [areas, setAreas] = useState<any[]>([]);

  const [level, setLevel] = useState<Level>(() => {
    if (areaValue) {
      const parts = areaValue.split(",").map((s: string) => s.trim());
      if (parts.length === 3) {
        return "area";
      }
    }
    return "division";
  });

  const [selectOpen, setSelectOpen] = useState(false);

  // Load default values
  useEffect(() => {
    if (!areaValue) return;

    const [area, district, division] = areaValue
      .split(",")
      .map((s) => s.trim());

    const divisionData = bangladeshLocations.find((d) =>
      lang === "bn" ? d.division_bn === division : d.division_en === division
    );

    if (!divisionData) return;

    setSelectedDivision(divisionData.division_en);
    setDistricts(divisionData.districts);

    const districtData = divisionData.districts.find((d) =>
      lang === "bn" ? d.district_bn === district : d.district_en === district
    );

    if (!districtData) return;

    setSelectedDistrict(districtData.district_en);
    setAreas(districtData.upazilas);

    const areaData = districtData.upazilas.find((a) =>
      lang === "bn" ? a.upazila_bn === area : a.upazila_en === area
    );

    if (!areaData) return;

    setSelectedArea(areaData.upazila_en);
  }, [areaValue, lang]);

  const onBack = () => {
    if (level === "area") {
      setLevel("district");
      setSelectedArea(undefined);
    } else if (level === "district") {
      setLevel("division");
      setSelectedDistrict(undefined);
      setSelectedArea(undefined);
      setDistricts([]);
      setAreas([]);
    }
    setTimeout(() => setSelectOpen(true), 0);
  };

  const handleDivisionChange = (value: string) => {
    const division = bangladeshLocations.find((d) => d.division_en === value);
    if (!division) return;

    // 🛠 Always reset and refresh even if same division
    setSelectedDivision(""); // TEMP unselect to force update
    setTimeout(() => {
      setSelectedDivision(value);
      setDistricts(division.districts);
      setSelectedDistrict(undefined);
      setSelectedArea(undefined);
      setAreas([]);
      setLevel("district");
      setSelectOpen(true);
    }, 0);
  };

  const handleDistrictChange = (value: string) => {
    const district = districts.find((d) => d.district_en === value);
    if (!district) return;

    setSelectedDistrict(value);
    setAreas(district.upazilas);
    setSelectedArea(undefined);
    setLevel("area");

    setTimeout(() => setSelectOpen(true), 0);
  };

  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
    const division = selectedDivision;
    const district = selectedDistrict;
    const area = value;

    if (division && district && area) {
      const formatted = `${area},${district},${division}`;
      onChange?.(formatted);
    }
  };

  // Always update district/area list on level change
  useEffect(() => {
    if (level === "district" && selectedDivision) {
      const division = bangladeshLocations.find(
        (d) => d.division_en === selectedDivision
      );
      if (division) {
        setDistricts(division.districts);
      }
    }
    if (level === "area" && selectedDivision && selectedDistrict) {
      const division = bangladeshLocations.find(
        (d) => d.division_en === selectedDivision
      );
      const district = division?.districts.find(
        (dist) => dist.district_en === selectedDistrict
      );
      if (district) {
        setAreas(district.upazilas);
      }
    }
  }, [level, selectedDivision, selectedDistrict]);

  const commonSelectProps = {
    style: { width: "100%" },
    size: "large" as const,
    showSearch: true,
    open: selectOpen,
    onDropdownVisibleChange: setSelectOpen,
    labelInValue: false,
    filterOption: (input: string, option: any) =>
      option?.label?.en?.toLowerCase().includes(input.toLowerCase()) ||
      option?.label?.bn?.toLowerCase().includes(input.toLowerCase()),
  };

  const renderBackHeader = (label: string) => (
    <div
      className='flex items-center justify-between px-2 py-1 border-b border-gray-200 cursor-pointer'
      onClick={onBack}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-4 h-4'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 19.5L8.25 12l7.5-7.5'
        />
      </svg>
      <span>{label}</span>
    </div>
  );

  const levelConfigs = [
    {
      level: "division",
      placeholder: "Select Division",
      value: selectedDivision,
      options: bangladeshLocations.map((division) => ({
        key: division.division_en,
        value: division.division_en,
        label: { en: division.division_en, bn: division.division_bn },
      })),
      onChange: handleDivisionChange,
    },
    {
      level: "district",
      placeholder: "Select District",
      value: selectedDistrict,
      options: districts.map((district) => ({
        key: district.district_en,
        value: district.district_en,
        label: { en: district.district_en, bn: district.district_bn },
      })),
      onChange: handleDistrictChange,
      backLabel: `Select a Division`,
    },
    {
      level: "area",
      placeholder: "Select Area",
      value: selectedArea,
      options: areas.map((upazila) => ({
        key: upazila.upazila_en,
        value: upazila.upazila_en,
        label: { en: upazila.upazila_en, bn: upazila.upazila_bn },
      })),
      onChange: handleAreaChange,
      backLabel: `Select a District`,
    },
  ];

  const currentConfig = levelConfigs.find((cfg) => cfg.level === level);

  if (!currentConfig) return null;

  return (
    <Select
      {...commonSelectProps}
      placeholder={currentConfig.placeholder}
      value={currentConfig.value}
      onChange={currentConfig.onChange}
      onSelect={(value) => {
        // 👇 Force trigger even when selecting same division
        if (level === "division") {
          handleDivisionChange(value);
        } else if (level === "district") {
          handleDistrictChange(value);
        } else if (level === "area") {
          handleAreaChange(value);
        }
      }}
      disabled={!currentConfig.options.length}
      dropdownRender={(menu) =>
        currentConfig.backLabel ? (
          <>
            {renderBackHeader(currentConfig.backLabel)}
            {menu}
          </>
        ) : (
          menu
        )
      }>
      {currentConfig.options.map((opt) => (
        <Option key={opt.key} value={opt.value} label={opt.label}>
          {lang === "bn" ? opt.label.bn : opt.label.en}
        </Option>
      ))}
    </Select>
  );
};

export default CascadingSelect;
