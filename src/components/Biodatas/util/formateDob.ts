/**
 * Calculate age in years, months, and days from a date of birth.
 * @param dobString - ISO date string like "1999-12-31T00:00:00.000Z"
 * @returns Formatted age like "25 years, 7 months, 5 days"
 */
export const formatPreciseAgeFromDOB = (dobString?: string): string => {
  if (!dobString) return "Not available";

  const birthDate = new Date(dobString);
  const today = new Date();

  if (isNaN(birthDate.getTime())) return "Invalid date";

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate(); // add days in previous month
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }
  // Build array of meaningful age parts with abbreviated month format
  const parts = [
    years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : null,
    months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : null,
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : "Less than a month";
};
