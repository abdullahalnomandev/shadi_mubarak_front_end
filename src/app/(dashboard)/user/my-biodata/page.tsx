import BioData from "@/components/BioData";
import { getBioData } from "@/lib/fetchers/biodata";
import { getToken, getUserInfoFromCookie } from "@/services/auth.cookieService";
import { IUser } from "@/types";

const MyBioDatapage = async () => {
  const token = await getToken();
  const { bioDataNo } = (await getUserInfoFromCookie()) as IUser;
  const { data: bioDataInfo } = await getBioData(bioDataNo, token);
  return (
    <BioData
      bioDataInfo={bioDataInfo}
      bioDataNo={bioDataNo}
      className="sm:px-4 pr-0 mr-0"
    />
  );
};

export default MyBioDatapage;
