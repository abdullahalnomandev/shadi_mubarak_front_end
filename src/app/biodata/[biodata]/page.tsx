import BioData from "@/components/BioData";
import { getBioData } from "@/lib/fetchers/biodata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biodata | Biyer Thikana",
  description: "Login to your Biyer Thikana account",
};

export default async function Page({ params }: { params: { biodata: string } }) {
  const { biodata } = params;
  const {data: bioDataInfo} = await getBioData(biodata);

  return (
    <div className="min-h-screen">
      <BioData bioDataInfo={bioDataInfo} bioDataNo={biodata} className="sm:px-14" />
    </div>
  );
}
