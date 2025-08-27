import BioData from "@/components/BioData";
import { getBioData } from "@/lib/fetchers/biodata";
import { getUserInfoFromCookie } from "@/services/auth.cookieService";
import { IUser } from "@/types";

const MyBioDatapage = async () => {
  const { bioDataNo } = (await getUserInfoFromCookie()) as IUser;
  const { data: bioDataInfo } = await getBioData(bioDataNo);
  return (
    <BioData
      bioDataInfo={bioDataInfo}
      bioDataNo={bioDataNo}
      className="sm:px-4 pr-0 mr-0"
    />
  );
};

export default MyBioDatapage;
