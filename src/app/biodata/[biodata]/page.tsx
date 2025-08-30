import BioData from "@/components/BioData";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biodata | Biyer Thikana",
  description: "Login to your Biyer Thikana account",
};

export default async function Page({ params }: { params: { biodata: string } }) {
  const { biodata } = params;
  // const {data: bioDataInfo} = await getBioData(biodata);
    const data = await fetch(`${getBaseUrl()}/biodata/${biodata}`,{
      next: {revalidate:1800}
    });
    const {data:bioDataInfo} = await data.json();

    // console.log({bioDataInfo})

  return (
    <div className="min-h-screen">
      <BioData bioDataInfo={bioDataInfo} bioDataNo={biodata} className="sm:px-14" />
    </div>
  );
}
