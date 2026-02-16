import BioData from "@/components/BioData";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biodata | Biyer Thikana",
  description: "Login to your Biyer Thikana account",
};

export default async function Page({ params }: { params: { biodata: string } }) {
  const { biodata } = await params;
  // const {data: bioDataInfo} = await getBioData(biodata);
    const data = await fetch(`${getBaseUrl()}/biodata/${biodata}`,{
      cache:"force-cache",
      next: {revalidate:1800}
    });
    console.log("x-vercel-cache", data.headers.get("x-vercel-cache"));

    const {data:bioDataInfo} = await data.json();

    // console.log({bioDataInfo})

  return (
    <div className="min-h-screen">
      <BioData bioDataInfo={bioDataInfo} bioDataNo={biodata} className="max-w-7xl mx-auto" />
    </div>
  );
}
