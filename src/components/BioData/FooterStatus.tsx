import { BioDataStatus } from "@/constants/bioData";
import { getBioDataStatusLabel } from "@/utils/biodata-status";
import Link from "next/link";
import { useTranslations } from "next-intl";

const getStatusBadgeClass = (status: BioDataStatus) => {
  switch (status) {
    case BioDataStatus.NOT_STARTED:
      return "text-gray-800 bg-gray-100 border-gray-300";

    case BioDataStatus.INCOMPLETE:
      return "text-orange-800 bg-orange-100 border-orange-300";

    case BioDataStatus.NOT_SUBMITTED:
      return "text-blue-800 bg-blue-100 border-blue-300";

    case BioDataStatus.PENDING:
      return "text-yellow-800 bg-yellow-100 border-yellow-300";

    case BioDataStatus.REJECTED:
      return "text-red-800 bg-red-100 border-red-300";

    default:
      return "text-green-800 bg-green-100 border-green-300";
  }
};

const FooterStatus = ({
  bioDataInfo,
  owner,
}: {
  bioDataInfo: any;
  owner: boolean;
}) => {
  const profileStatus = bioDataInfo?.profileStatus;
  const t = useTranslations("footerStatus");

  const statusBadgeClass = `text-xs font-medium px-3 py-1 rounded-full border ${getStatusBadgeClass(
    profileStatus,
  )}`;

  return owner ? (
    <>
      <p className="text-sm text-red-600">
        {t("yourBiodataIs")}{" "}
        <span className={statusBadgeClass}>
          {getBioDataStatusLabel(profileStatus)}
        </span>
      </p>
      {profileStatus !== BioDataStatus.PENDING && (
        <p className="text-red-600 pt-2">
          {t("pleaseComplete")}{" "}
          <Link href="/user/edit-biodata" className="text-blue-600 underline">
            {t("completeYourBiodata")}
          </Link>{" "}
          {t("toProceed")}
        </p>
      )}
    </>
  ) : (
    <>
      <p className="text-md text-red-600 mt-2">
        {t("thisBiodataIs")} {""}
        <span className={statusBadgeClass}>
          {getBioDataStatusLabel(profileStatus)}
        </span>
      </p>
      <p className="text-red-600 my-2"> {t("cannotViewContact")}</p>
      <p className="text-red-600">{t("onlyCanViewContactByVerify")}</p>
    </>
  );
};

export default FooterStatus;
