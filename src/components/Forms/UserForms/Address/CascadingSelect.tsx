"use client";

import { dbZone as bangladeshLocations } from "@/data/districts"; // update this path if needed
import { Select } from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

const CascadingSelect = ({ areaValue = "", onChange, lang = "en" }) => {
  const [selectedDivision, setSelectedDivision] = useState<string>();
  const [selectedDistrict, setSelectedDistrict] = useState<string>();
  const [selectedArea, setSelectedArea] = useState<string>();

  const [districts, setDistricts] = useState<any[]>([]);
  const [areas, setAreas] = useState<any[]>([]);

  // Load default values on first render
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

  const handleDivisionChange = (value: string) => {
    const division = bangladeshLocations.find((d) => d.division_en === value);
    if (!division) return;

    setSelectedDivision(value);
    setDistricts(division.districts);
    setSelectedDistrict(undefined);
    setSelectedArea(undefined);
    setAreas([]);
  };

  const handleDistrictChange = (value: string) => {
    const district = districts.find((d) => d.district_en === value);
    if (!district) return;

    setSelectedDistrict(value);
    setAreas(district.upazilas);
    setSelectedArea(undefined);
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

  return (
    <div className='flex flex-col gap-4'>
      {/* Division */}
      <Select
        showSearch
        size='large'
        placeholder='Select Division'
        value={selectedDivision}
        onChange={handleDivisionChange}>
        {bangladeshLocations.map((division) => (
          <Option key={division.division_en} value={division.division_en}>
            {lang === "bn" ? division.division_bn : division.division_en}
          </Option>
        ))}
      </Select>

      {/* District */}
      <Select
        showSearch
        size='large'
        placeholder='Select District'
        value={selectedDistrict}
        onChange={handleDistrictChange}
        disabled={!districts.length}>
        {districts.map((district) => (
          <Option key={district.district_en} value={district.district_en}>
            {lang === "bn" ? district.district_bn : district.district_en}
          </Option>
        ))}
      </Select>

      {/* Area */}
      <Select
        showSearch
        placeholder='Select Area'
        size='large'
        value={selectedArea}
        onChange={handleAreaChange}
        disabled={!areas.length}>
        {areas.map((area) => (
          <Option key={area.upazila_en} value={area.upazila_en}>
            {lang === "bn" ? area.upazila_bn : area.upazila_en}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CascadingSelect;
