'use server'

export async function handleBiodataSubmit(data: any): Promise<void> {
  try {
    console.log("Server action processing data:", data);
    // Add your server-side logic here
    // Don't return anything to match the Promise<void> type
  } catch (error) {
    console.error("Error processing biodata:", error);
    throw error;
  }
}