export default async function Page({params,}: {params: Promise<{ biodata: string }>}) {

    const { biodata } = await params

    return <div>My Post: {biodata}</div>
  }