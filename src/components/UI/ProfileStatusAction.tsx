import { BioDataStatus } from "@/constants/bioData";
import { useUpdateProfileMutation } from "@/redux/api/biodata";
import { revalidateTags } from "@/utils/revalidateTags";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { MdCreate } from "react-icons/md";
import { notification } from "antd";

const ProfileStatusAction = ({
  profileStatus,
  bioDataNo,
}: {
  profileStatus: string;
  bioDataNo: string;
}) => {
  const router = useRouter();
  const t = useTranslations();

  const [updateProfile] = useUpdateProfileMutation();
  const [notificationApi, notificationContextHolder] = notification.useNotification();

  const handleUpdateStatus = async () => {
    try {
      // Fire-and-forget update
      router.push("/user/edit-biodata");
      if (profileStatus === BioDataStatus.NOT_STARTED) {
        await updateProfile({ profileStatus: BioDataStatus.INCOMPLETE });
      } else if (profileStatus === BioDataStatus.NOT_SUBMITTED) {
        await updateProfile({ profileStatus: BioDataStatus.PENDING });
        await revalidateTags([`biodata-${bioDataNo}`]);
        console.log({ bioDataNo });
        router.push("/user/my-biodata");
        notificationApi.success({
          message: "Biodata submitted successfully",
          duration: 2,
        });
      }
    } catch (err) {
      console.error("Failed to update profile status", err);
      notificationApi.error({
        message: "Failed to update profile status",
        duration: 2,
      });
    }
  };
  // "create_biodata":"Create Your Biodata",
  // "complete_biodata":"Complete BioData",
  // "update_biodata":"Update BioData",
  // "submit_biodata":"Submit BioData",
  // "edits_biodata":"Edit BioData",

  return (
    <button
      className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow cursor-pointer "
      onClick={handleUpdateStatus}
    >
      {notificationContextHolder}
      {profileStatus === BioDataStatus.NOT_STARTED ? (
        <>
          <MdCreate size={16} />
          {t("create_biodata")}
        </>
      ) : profileStatus === BioDataStatus.INCOMPLETE ? (
        <>
          <FaRegEdit size={16} />
          {t("complete_biodata")}
        </>
      ) : profileStatus === BioDataStatus.PENDING ? (
        <>
          <MdCreate size={16} />
          {t("update_biodata")}
        </>
      ) : profileStatus === BioDataStatus.NOT_SUBMITTED ? (
        <>
          <LuSend size={16} />
          {t("submit_biodata")}
        </>
      ) : (
        <>
          <FaRegEdit size={16} />
          {t("edits_biodata")}
        </>
      )}
    </button>
  );
};

export default ProfileStatusAction;
