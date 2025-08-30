"use client";
import { Row } from "antd";
import BioDataCard from "./BiodataCard";
import Sidebar from "./Sidebar";
import { useTranslations } from "next-intl";

type BioDatasProps = {
  data: any[];
  query: Record<string, any>;
};

const BioDatas = ({ data, query }: BioDatasProps) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar query={query} />

      <div className="flex-1 p-2 md:p-4">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-600">
              {t("search_form.biodatas")}
            </h1>
            <p className="hidden md:block text-gray-600 font-medium">
              {data?.length || 0} {t("search_form.found_biodata")}
            </p>
          </div>
        </div>

        {/* Empty state */}
        {!data || data.length === 0 ? (
          <div className="flex justify-center py-12 px-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 max-w-md w-full text-center">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-600 font-medium text-lg mb-2">No biodatas found</p>
              <p className="text-gray-500 text-sm">
                No biodatas are available at the moment.
              </p>
            </div>
          </div>
        ) : (
          <Row gutter={[16, 16]} className="pb-20 md:pb-4">
            {data.map((biodata: any, index: number) => (
              <BioDataCard biodata={biodata} key={index} />
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default BioDatas;
