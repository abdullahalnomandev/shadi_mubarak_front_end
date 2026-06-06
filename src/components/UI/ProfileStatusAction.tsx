import { BioDataStatus } from "@/constants/bioData";
import { useUpdateProfileMutation } from "@/redux/api/biodata";
import { message } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { MdCreate } from "react-icons/md";

const ProfileStatusAction = ({ profileStatus }: { profileStatus: string }) => {
  const router = useRouter();
  const t = useTranslations();  

  const [updateProfile] = useUpdateProfileMutation();

  const handleUpdateStatus = () => {
    try {
      router.push("/user/edit-biodata");
      // Fire-and-forget update
      if (profileStatus === BioDataStatus.NOT_STARTED) {
        updateProfile({ profileStatus: BioDataStatus.INCOMPLETE }).catch(
          console.error
        );
      } else if (profileStatus === BioDataStatus.NOT_SUBMITTED) {
        updateProfile({ profileStatus: BioDataStatus.PENDING }).catch(
          console.error
        );
        message.success("Biodata submitted successfully");
      }
    } catch (err) {
      console.error("Failed to update profile status", err);
    }
  };
  // "create_biodata":"Create Your Biodata",
  // "complete_biodata":"Complete BioData",
  // "update_biodata":"Update BioData",
  // "submit_biodata":"Submit BioData",
  // "edits_biodata":"Edit BioData",
  return (
    <button
      className='w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow cursor-pointer '
      onClick={handleUpdateStatus}>
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
