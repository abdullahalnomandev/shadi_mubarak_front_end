import dayjs from "dayjs";
const renderValue = (value: any): string | React.ReactNode => {
  if (value === null || value === undefined) return "";

  // Format string values (e.g. "ami_tomi" → "Ami Tomi")
  const formatString = (str: string) =>
    str.includes("_")
      ? str
          .split("_")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")
      : str;

  // Handle array values
  if (Array.isArray(value)) {
    if (
      value.length === 2 &&
      typeof value[0] === "number" &&
      typeof value[1] === "number"
    ) {
      return `${value[0]} - ${value[1]}`;
    }

    return value
      .map((item) => {
        if (typeof item === "string") return formatString(item);
        if (typeof item === "number") return item.toString();
        return item?.toString?.() ?? "";
      })
      .join(", ");
  }

  // Number
  if (typeof value === "number") {
    return value.toString();
  }

  // ISO date string
  if (
    typeof value === "string" &&
    dayjs(value, dayjs.ISO_8601, true).isValid() &&
    !isNaN(Date.parse(value)) &&
    !/^[a-zA-Z\s]+$/.test(value) &&
    !/^\d+$/.test(value) &&
    !value.includes("'") &&
    !value.includes('"')
  ) {
    return dayjs(value).format("MMMM D, YYYY");
  }
  // String with underscore
  if (typeof value === "string") {
    return formatString(value);
  }

  // Fallback
  return value?.toString?.() ?? "";
};

export default renderValue;
