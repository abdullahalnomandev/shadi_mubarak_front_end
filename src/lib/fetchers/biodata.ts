import { getBaseUrl } from "@/helpers/config/envConfig";

export async function getBioData(biodata: string) {
  const res = await fetch(`${getBaseUrl()}/biodata/${biodata}`, {
    cache: "force-cache",         // always cache first
    // next: { revalidate: 1800 },   // revalidate every 30 min (1800 sec)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch biodata");
  }

  return res.json();
}


export async function getAllBioData(query?: Record<string, any>) {
  const queryParams = new URLSearchParams();
  
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(key, value.toString());
      }
    });
  }

  const res = await fetch(`${getBaseUrl()}/biodata?${queryParams.toString()}`, {
    next: { revalidate: 1800 }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch biodata");
  }

  return res.json();
}
