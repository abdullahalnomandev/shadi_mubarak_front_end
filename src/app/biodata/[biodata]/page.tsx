import BioData from "@/components/BioData";
import { getBioData } from "@/lib/fetchers/biodata";
import { getUserInfoFromCookie } from "@/services/auth.cookieService";
import { IUser } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Biodata | Biyer Thikana",
  description: "Login to your Biyer Thikana account",
};

// async function getBioData(biodata: string) {
//   const res = await fetch(`${getBaseUrl()}/biodata/${biodata}`, {
//     cache: "force-cache",
//     // next: { revalidate: 1800 },// 30 minutes
//   });

//   if (!res.ok) {
//     return null;
//   }

//   const json = await res.json();
//   return json?.data;
// }

interface PageProps {
  params: {
    biodata: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { biodata } = params;

  const [bioDataInfo, userInfo] = await Promise.all([
    getBioData(biodata),
    getUserInfoFromCookie() as Promise<Partial<IUser>>,
  ]);

  if (!bioDataInfo) {
    notFound();
  }
  console.log("biodataStepInfo",bioDataInfo)

  return (
    <div className="min-h-screen">
      <BioData
        bioDataInfo={bioDataInfo?.data}
        bioDataNo={userInfo?.bioDataNo}
        className="max-w-7xl mx-auto"
      />
    </div>
  );
}