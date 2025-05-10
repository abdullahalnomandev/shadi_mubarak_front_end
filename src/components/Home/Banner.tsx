import banner from "@/assets/main3.jpg";
import { districts } from "@/constants/districts";
import { genderOptions, maritalStatusOptions } from "@/constants/global";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Form from "../Forms/Form";
import FormSelectField from "../Forms/FormSelectField";
import Link from "next/link";

const Banner = () => {
  const onSubmit = (values: any) => {
    console.log("Search values:", values);
  };
  //   const t = useTranslations();
  return (
    <div
      className="relative md:m-8 mt-5 rounded-lg bg-no-repeat bg-cover bg-center h-screen"
      style={{
        backgroundImage: `
        linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
        url(${banner.src})`,
      }}
    >
      {/* Overlay */}
      <div className="container absolute mx-auto px-4 h-full flex flex-col items-center justify-center  z-10">
        <div className="text-center max-w-2xl mb-8">
          <h1 className="text-white text-5xl font-bold mb-4">
            Find a religious partner <br />
            of your choice
          </h1>
          <p className="text-xl text-gray-100">
            We made it easy for you to get your life partner in your location
          </p>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <Form submitHandler={onSubmit}>
            <Row gutter={[16, 16]} justify="center" align="middle">
              <Col xs={24} sm={12} md={6}>
                <FormSelectField
                  options={genderOptions}
                  name="gender"
                  label="Looking for"
                  placeholder="Select Gender"
                  size="large"
                />
              </Col>

              <Col xs={24} sm={12} md={6}>
                <FormSelectField
                  options={maritalStatusOptions}
                  name="maritalStatus"
                  label="Marital Status"
                  placeholder="Select Marital Status"
                  size="large"
                />
              </Col>

              <Col xs={24} sm={12} md={6}>
                <FormSelectField
                  options={Object.entries(districts).flatMap(
                    ([district, areas]) => [
                      {
                        value: district.toLowerCase(),
                        label: `All ${district}`,
                      },
                      ...areas.map((area) => ({
                        value: `${district.toLowerCase()}-${area.toLowerCase()}`,
                        label: `${area} (${district})`,
                      })),
                    ]
                  )}
                  name="district"
                  label="District"
                  placeholder="Select District"
                  size="large"
                  showSearch={true}
                  filterOption={(input: string, option: any) => {
                    if (!option || typeof option !== "object") return false;
                    const opt = option as { value?: string; label?: string };
                    const value = opt.value || "";
                    const label = opt.label || "";
                    const searchInput = input.toLowerCase();
                    return (
                      value.toLowerCase().includes(searchInput) ||
                      label.toLowerCase().includes(searchInput)
                    );
                  }}
                />
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Link className="!text-white" href="/biodatas">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-rose-400 py-2.5 transition duration-300 rounded-md cursor-pointer !mt-6 hover:bg-rose-500"
                  >
                    <SearchOutlined />
                    Search Partners
                  </button>
                </Link>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
