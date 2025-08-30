import BioDatas from "@/components/Biodatas/Biodatas";
import { getAllBioData } from "@/lib/fetchers/biodata";

type SearchParams = {
  searchParams?: {
    bioDataNo?: string;
    biodataType?: string;
    maritalStatus?: string;
    presentAddress?: string;
    permanentAddress?: string;
    minAge?: string;
    maxAge?: string;
  };
};

const BioDataPage = async ({ searchParams }: SearchParams) => {
  // ✅ Extract params with defaults
  const bioDataNo = searchParams?.bioDataNo || "";
  const biodataType = searchParams?.biodataType || "";
  const maritalStatus = searchParams?.maritalStatus || "";
  const presentAddress = searchParams?.presentAddress || "";
  const permanentAddress = searchParams?.permanentAddress || "";
  const minAge = parseInt(searchParams?.minAge || "18");
  const maxAge = parseInt(searchParams?.maxAge || "40");

  // ✅ Build query for backend
  const query: Record<string, any> = {
    page: 1,
    limit: 10,
    minAge,
    maxAge,
  };

  if (bioDataNo) query["bioDataNo"] = bioDataNo;
  if (["male's_biodata", "female's_biodata"].includes(biodataType)) {
    query["general_information.biodataType"] = biodataType;
  }
  if (maritalStatus && maritalStatus !== "all") {
    query["general_information.maritalStatus"] = maritalStatus;
  }
  if (presentAddress && presentAddress !== "all") query["presentAddress"] = presentAddress;
  if (permanentAddress && permanentAddress !== "all") query["permanentAddress"] = permanentAddress;

  // ✅ Fetch data from backend
  const { data } = await getAllBioData({
    ...query,
    presentAddress: query.presentAddress || "",
    permanentAddress: query.permanentAddress || "",
  });

  // ✅ Normalize query for client
  const normalizedQuery = {
    bioDataNo: bioDataNo || undefined,
    biodataType: ["male's_biodata", "female's_biodata"].includes(biodataType)
      ? biodataType
      : undefined,
    maritalStatus: maritalStatus !== "all" ? maritalStatus : undefined,
    presentAddress: presentAddress !== "all" ? presentAddress : undefined,
    permanentAddress: permanentAddress !== "all" ? permanentAddress : undefined,
    minAge,
    maxAge,
  };

  // ✅ Pass data + normalized query to client component
  return <BioDatas data={data} query={normalizedQuery} />;
};

export default BioDataPage;
