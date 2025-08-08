import dayjs from "dayjs";
const renderValue = (value: any): string | React.ReactNode => {
  if (value === null || value === undefined) return "";

  // Email check
  const isEmail = (str: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

  // Special replacements (always uppercase)
  const keywordMap: Record<string, string> = {
    hsc: "HSC",
    ssc: "SSC",
  };

  // Capitalize each word with special handling
  const formatString = (str: string) => {
    if (isEmail(str)) return str.toLowerCase();

    return str
      .replace(/[_\s]+/g, " ") // Normalize underscores and spaces
      .split(" ")
      .map((word) => {
        const lower = word.toLowerCase();
        if (keywordMap[lower]) return keywordMap[lower]; // Use special casing
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  // Handle array
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
  if (typeof value === "number") return value.toString();

  // ISO Date
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

  // String
  if (typeof value === "string") return formatString(value);

  // Fallback
  return value?.toString?.() ?? "";
};

export default renderValue;
