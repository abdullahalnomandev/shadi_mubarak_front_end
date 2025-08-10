import {
  useGetConnectionQuery,
  usePurchaseBiodataMutation,
} from "@/redux/api/purchaseBiodata";
import { message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import AntModal from "../UI/AntModal";
import VideoPlayerButton from "../UI/VideoPlayerButton";
import Button from "../UI/Button";
import { getUserInfo } from "@/services/auth.service";
import { useTranslations } from "next-intl";

const ViewContact = ({ bioDataNo }: { bioDataNo: string }) => {
  const t  = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseBiodata, { isLoading }] = usePurchaseBiodataMutation();
  const { data } = useGetConnectionQuery({});
  const isUserLoggedIn = getUserInfo();

  const handlePurchase = async () => {
    try {
      await purchaseBiodata({
        biodata_no: bioDataNo,
      });
      setIsModalOpen(false);
      message.success(t("view_contact.contact_successfully_unlocked"));
    } catch (err: any) {
      message.error(
        err?.message || t("view_contact.failed_to_unlock_contact")
      );
    }
  };

  const totalConnections = data?.connections?.total_connections ?? 0;

  const modalContent = (
    <div className="text-center space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
        {t("view_contact.description")}
      </h2>

      <div className="flex gap-4 justify-center mt-4">
        <Button
          variant="secondary"
          className="flex items-center gap-2"
          onClick={() => setIsModalOpen(false)}
        >
          {t("view_contact.cancel")}
        </Button>
        <Button
          variant="cta"
          className="flex items-center gap-2"
          onClick={handlePurchase}
        >
          {t("view_contact.yes_confirm")}
        </Button>
      </div>
    </div>
  );

  const noConnectionContent = (
    <div className="text-center max-w-md mx-auto p-6 rounded-2xl bg-white dark:bg-gray-900 space-y-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
        {t("view_contact.not_enough_connections")}
      </h2>

      <Link href="/user/connection/details" passHref>
        <Button variant="cta" size="lg" className="mx-auto">
          <span className="flex items-center gap-2 justify-center w-full">
            <FiShoppingCart className="w-5 h-5" />
            {t("view_contact.purchase_connections")}
          </span>
        </Button>
      </Link>
    </div>
  );

  return (
    <table className="w-full border-t-3 border-gray-300 border-separate border-spacing-x-0 border-spacing-0.5 border rounded-sm border-t-gray-800 border-b-0 relative z-10">
      <thead>
        <tr>
          <th
            className="w-full border-gray-300 dark:border-gray-600 py-2 text-center text-2xl font-medium"
            colSpan={2}
          >
            {t("view_contact.title")}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="not-odd:bg-gray-100">
          <td className="w-1/2 text-center m-auto border-x-0 border border-gray-300 p-6 align-top">
            <div className="space-y-4 mb-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                {t("view_contact.contact_info_message")}
              </h3>

              {!isUserLoggedIn ? (
                <Link
                  href={`/login?callbackUrl=${`/biodata/${bioDataNo}`}`}
                  passHref
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="!w-full sm:!w-1/2 mx-auto"
                  >
                    {t("view_contact.please_login_to_view_contact")}
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="primary"
                  size="lg"
                  className="!w-full sm:!w-1/2 mx-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  {t("view_contact.view_contact_information")}
                </Button>
              )}

              <AntModal
                title={
                  totalConnections > 0
                    ? t("view_contact.unlock_contact_modal_title")
                    : t("view_contact.need_connection_modal_title")
                }
                okText={t("view_contact.yes_unlock")}
                cancelText={t("view_contact.cancel")}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                confirmLoading={isLoading}
                onConfirm={handlePurchase}
                footer={null}
              >
                {totalConnections > 0 ? modalContent : noConnectionContent}
              </AntModal>
            </div>

            <VideoPlayerButton
              title={t("view_contact.how_to_view_contact_info")}
              videoId="RHuVlgjwOHA"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ViewContact;
