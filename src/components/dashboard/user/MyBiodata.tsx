import { BioDataStatus } from "@/constants/bioData";
import { useGetUserQuery, useGetUsersQuery } from "@/redux/api/user";
import { getUserInfo } from "@/services/auth.service";
import { IUser } from "@/types";
import BioData from "../../BioData";
import CreateBiodataCTA from "./CreateBiodataCTA";
import { getBioData } from "@/lib/fetchers/biodata";

const MyBiodata = async () => {
  const usrInfo = getUserInfo() as IUser;

  const { data: bioDataInfo } = await getBioData(usrInfo?.bioDataNo);

  console.log({ bioDataInfo });

  return (
    <div className="min-h-screen">
      <BioData
        bioDataInfo={bioDataInfo}
        bioDataNo={usrInfo?.bioDataNo}
        className="sm:px-14"
      />
    </div>
  );
};

export default MyBiodata;
// "use client";
// import { BioDataStatus } from "@/constants/bioData";
// import { useGetUserQuery } from "@/redux/api/user";
// import { getUserInfo } from "@/services/auth.service";
// import { IUser } from "@/types";
// import BioData from "../../BioData";
// import CreateBiodataCTA from "./CreateBiodataCTA";

// const MyBiodata = () => {
//   const usrInfo = getUserInfo() as IUser;
//   const { data: userData } = useGetUserQuery();

//   if (userData?.user?.bioData?.profileStatus === BioDataStatus.NOT_STARTED) {
//     return (
//       <div className='flex items-center justify-center min-h-[calc(100vh-200px)]'>
//         <CreateBiodataCTA />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <BioData bioDataNo={usrInfo?.bioDataNo} />
//     </div>
//   );
// };

// export default MyBiodata;
