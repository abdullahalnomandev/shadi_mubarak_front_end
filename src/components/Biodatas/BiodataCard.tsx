import male from "@/assets/boy-create-1.jpg";
import female from "@/assets/girl.jpg";
import { Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import Button from "../UI/Button";
import { formatPreciseAgeFromDOB } from "./util/formateDob";
import { useTranslations } from "next-intl";

interface BiodataProps {
  biodata: {
    bioDataNo: string;
    biodataType: "male's_biodata" | "female's_biodata";
    age: number;
    height: string;
    occupation: string;
    views?: number;
  };
}

const BioDataCard = ({ biodata }: BiodataProps) => {
  const t = useTranslations();

  const [isShortlisted, setIsShortlisted] = useState(false);

  const handleShortlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsShortlisted(!isShortlisted);
  };

  // Static values for demonstration
  const staticBiodata = {
    bioDataNo: biodata?.bioDataNo,
    biodataType: biodata?.general_information?.biodataType,
    age: formatPreciseAgeFromDOB(biodata?.general_information?.dateOfBirth),
    skin: biodata?.general_information?.skin,
    height: biodata?.general_information?.height,
    occupation: biodata.occupation?.occupation || "-",
    views: biodata?.view,
  };

  console.log({ biodata });
  return (
    <Col xs={24} sm={12} md={8} lg={8}>
      <div className="group">
        <div className="bg-white shadow-md rounded-lg  hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 hover:border-rose-200 hover:scale-105">
          {/* Profile Section */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-rose-200 shadow-sm">
                      <Image
                        src={
                          staticBiodata.biodataType === "male's_biodata"
                            ? male
                            : female
                        }
                        alt="Profile"
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {t("profile.profile")}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      # {staticBiodata.bioDataNo}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleShortlist}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isShortlisted
                      ? "bg-pink-500 text-white shadow-md"
                      : "bg-white text-pink-400 hover:bg-rose-50 border border-rose-200"
                  }`}
                  title={
                    isShortlisted ? "Remove from shortlist" : "Add to shortlist"
                  }
                >
                  <FaHeart className="text-xs" />
                </button>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {t("profile.age")}
                  </span>
                </div>
                <span className="font-medium text-sm text-gray-800">
                  {staticBiodata.age}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {" "}
                    {t("profile.height")}
                  </span>
                </div>
                <span className="font-medium text-sm text-gray-800">
                  {staticBiodata.height}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {biodata?.general_information?.biodataType ===
                    "male's_biodata"
                      ? t("profile.profession")
                      : t("profile.skin")}
                  </span>
                </div>
                <span
                  className="font-medium text-sm text-gray-800 text-right max-w-[120px] truncate"
                  title={
                    biodata?.general_information?.biodataType ===
                    "male's_biodata"
                      ? t("profile.profession")
                      : t("profile.skin")
                  }
                >
                  {staticBiodata?.biodataType === "male's_biodata"
                    ? staticBiodata?.occupation
                    : staticBiodata?.skin}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <FaEye className="text-xs" />
                  <span>{staticBiodata.views} views</span>
                </div>

                <Link
                  href={`/biodata/${staticBiodata.bioDataNo}`}
                  // target="_blank"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    className='!rounded-full border-2 !border-pink-500 !text-pink-500 relative overflow-hidden transition-all duration-300 
                    before:absolute before:content-[""] before:bg-gradient-to-r before:from-pink-500 before:to-rose-500 
                    before:w-full before:h-full before:-translate-x-full hover:before:translate-x-0 
                    before:transition-transform before:duration-300 before:-z-10 hover:border-transparent
                    after:absolute after:content-[""] after:bg-gradient-to-r after:from-pink-500 after:to-rose-500 
                    after:w-full after:h-full after:translate-x-full hover:after:-translate-x-0
                    after:transition-transform after:duration-300 after:-z-10
                    hover:!text-white'
                  >
                    {t("profile.view_profile")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BioDataCard;
