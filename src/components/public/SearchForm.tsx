"use client";

import {
  getGenderOption,
  getMaritalStatusOptions,
  getReligiousOptions,
} from "@/constants/global";
import { getLocationData } from "@/data/locationData";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { CiUser } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiMosqueThin } from "react-icons/pi";
import Form from "../Forms/Form";
import FormCascader from "../Forms/FormCascader";
import FormSelectField from "../Forms/FormSelectField";

const SearchForm = () => {
  const t = useTranslations();

  const router = useRouter();

  // Dynamic select fields
  const searchFields = [
    {
      name: "biodataType",
      label: t("search_form.looking_for"),
      icon: <CiUser className='text-lg' />,
      placeholder: t("search_form.select_gender"),
      options: getGenderOption(t),
      type: "select",
    },
    {
      name: "religious",
      label: t("search_form.religion"),
      icon: <PiMosqueThin className='text-lg' />,
      placeholder: t("search_form.select_religion"),
      options: getReligiousOptions(t),
      type: "select",
    },
    {
      name: "maritalStatus",
      label: t("search_form.marital_status"),
      icon: <HiOutlineUsers className='text-lg' />,
      placeholder: t("search_form.select_status"),
      options: getMaritalStatusOptions(t),
      type: "select",
    },
    {
      name: "presentAddress",
      label: t("search_form.present_address"),
      icon: <HomeOutlined className='text-lg' />,
      placeholder: t("search_form.select_location"),
      options: getLocationData(t).searchLocationData,
      type: "cascader",
    },
  ];
  const onSubmit = (values: any) => {
    const query = new URLSearchParams();
    for (const [key, val] of Object.entries(values)) {
      if (val) {
        // If value is a string and contains 'all,', remove 'all,' from it
        const processedVal =
          typeof val === "string" && val.startsWith("all,")
            ? val.replace("all,", "").trim()
            : val;

        query.append(key, processedVal);
      }
    }

    router.push(`/biodatas?${query.toString()}`);
  };

  return (
    <div className='w-full relative z-30'>
      <div className='bg-white/98 backdrop-blur-lg rounded-lg shadow-2xl border border-white/30 overflow-hidden max-w-6xl mx-auto'>
        <div className='h-1.5 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400' />

        <div className='bg-gradient-to-br from-gray-50/95 to-white/95 backdrop-blur-sm p-4 md:p-8 border-b border-gray-100/50'>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl mb-4 shadow-xl transform hover:scale-105 transition-transform duration-300'>
              <span className='text-white text-2xl'>💕</span>
            </div>
            <h3 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent'>
              {t("search_form.find_match_heading")}
            </h3>
          </div>
        </div>

        <div className='p-6 md:p-10'>
          <Form submitHandler={onSubmit}>
            <Row gutter={[20, 28]} justify='center' align='middle'>
              {searchFields.map((field) => (
                <Col xs={24} sm={12} md={6} lg={6} key={field.name}>
                  <div className='group'>
                    <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3'>
                      {field.icon}
                      {field.label}
                    </label>
                    <div className='relative'>
                      {field.type === "select" ? (
                        <FormSelectField
                          options={field.options}
                          name={field.name}
                          placeholder={field.placeholder}
                          size='large'
                          className='form-field'
                        />
                      ) : (
                        <FormCascader
                          name={field.name}
                          options={field.options}
                          placeholder={field.placeholder}
                          showSearch
                          size='large'
                          required
                        />
                      )}
                      <div className='field-hover-effect' />
                    </div>
                  </div>
                </Col>
              ))}

              <Col xs={24}>
                <div className='flex justify-center mt-8 md:mt-10'>
                  <button
                    className='px-8 py-3 text-lg font-semibold bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-white rounded-lg w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2'
                    type='submit'>
                    <SearchOutlined className='text-lg' />
                    <span>{t("search_form.search_partners_button")}</span>
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
