import BioData from "@/components/BioData";

export default async function Page({
  params,
}: {
  params: Promise<{ biodata: string }>;
}) {
  const { biodata } = await params;

  return <div className="min-h-screen">
    <BioData bioDataNo={Number(biodata)} />
  </div>;
}
