export const getGenderOption = (t: (key: string) => string) => [
  { value: "all", label: t("search_form.bioDataType.all") },
  {
    value: "male's_biodata",
    label: t("search_form.bioDataType.male's_biodata"),
  },
  {
    value: "female's_biodata",
    label: t("search_form.bioDataType.female's_biodata"),
  },
];
export const genderOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "male's_biodata",
    label: "Male's Biodata",
  },
  {
    value: "female's_biodata",
    label: "Female's Biodata",
  },
];
export const getMaritalStatusOptions = (t: (key: string) => string) => [
  {
    value: "single",
    label: t("search_form.marital_status_options.single"),
  },
  {
    value: "married",
    label: t("search_form.marital_status_options.married"),
  },
  {
    value: "divorced",
    label: t("search_form.marital_status_options.divorced"),
  },
  {
    value: "widow",
    label: t("search_form.marital_status_options.widow"),
  },
  {
    value: "widower",
    label: t("search_form.marital_status_options.widower"),
  },
];

export const maritalStatusOptions = [
  {
    value: "single",
    label: "Single",
  },
  {
    value: "married",
    label: "Married",
  },
  {
    value: "divorced",
    label: "Divorced",
  },
  {
    value: "widow",
    label: "Widow",
  },
  {
    value: "widower",
    label: "Widower",
  },
];
export const getReligiousOptions = (t: (key: string) => string) => [
  { label: t("search_form.religions.strict"), value: "strict" },
  { label: t("search_form.religions.flexible"), value: "flexible" },
];

export const biodataSteps = [
  "",
  "general_information",
  "address",
  "family_information",
  "education",
  "personal_information",
  "expected_partner",
  "marriage_related_information",
  "occupation",
  "agreement",
  "contact",
];
