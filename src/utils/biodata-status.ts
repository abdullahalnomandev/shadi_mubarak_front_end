type BioStatus =
  | "not_started"
  | "incomplete"
  | "not_submitted"
  | "pending"
  | "rejected"
  | "verified";

export function getBioDataStatusLabel(status: BioStatus): string {
  const statusMap: Record<BioStatus, string> = {
    not_started: "Not Started", // Changed from "Not Created" for consistency with "Incomplete"
    incomplete: "Incomplete",
    not_submitted: "Not Submitted",
    pending: "Pending Approval",
    rejected: "Rejected",
    verified: "Verified",
  };

  return statusMap[status] ?? "Unknown Status";
}
