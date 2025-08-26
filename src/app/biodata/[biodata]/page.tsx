import BioData from "@/components/BioData";

export default async function Page({ params }: {
  params: { biodata: string };
}) {
  const { biodata } = params;

  return (
    <div className='min-h-screen'>
      <BioData bioDataNo={biodata} className='sm:px-14' />
    </div>
  );
}
