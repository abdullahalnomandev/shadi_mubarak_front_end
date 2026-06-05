type BioStatus =
  | "not_started"
  | "incomplete"
  | "not_submitted"
  | "pending"
  | "rejected"
  | "verified";

export function getBioDataStatusLabel(status: BioStatus): string {
  const statusMap: Record<BioStatus, string> = {
    not_started: "NOT STARTED", // Changed from "Not Created" for consistency with "Incomplete"
    incomplete: "INCOMPLETE",
    not_submitted: "NOT SUBMITTED",
    pending: "PENDING APPROVAL",
    rejected: "REJECTED",
    verified: "VERIFIED",
  };

  return statusMap[status] ?? "Unknown Status";
}
