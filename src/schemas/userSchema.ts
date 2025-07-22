import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
export const regiserSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .min(10, "Phone number is invalid")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});
export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const changePasswordSchema = yup.object({
  currentPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Old password is required"),
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

export const userBiodataSchema = {
  general_information: yup.object().shape({
    gender: yup
      .string()
      .oneOf(["male", "female", "other"])
      .required("Gender is required"),
    dateOfBirth: yup.date().required("Date of birth is required"),
    height: yup.string().required("Height is required"),
    weight: yup.number().required("Weight is required"),
    skin: yup.string().required("Skin tone is required"),
    maritalStatus: yup
      .string()
      .oneOf(["single", "married", "divorced", "widowed"])
      .required("Marital status is required"),
  }),

  address: yup.object().shape({
    present_address: yup.object().shape({
      full: yup.string().required("Present address is required"),
      area: yup.string(),
    }),
    permanent_address: yup.object().shape({
      full: yup.string().required("Permanent address is required"),
      area: yup.string(),
    }),
  }),

  occupation: yup.object().shape({
    occupation: yup.string().required("Occupation is required"),
    monthlyIncome: yup.number().required("Monthly income is required"),
    descriptionOfProfession: yup.string().required("Description is required"),
  }),

  agreement: yup.object().shape({
    parentsAwareOfRegistration: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Please confirm if parents are aware"),
    confirmTruthOfProvidedInformation: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Please confirm information truthfulness"),
    agreeToLegalResponsibilityForFalseInfo: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Please confirm legal responsibility agreement"),
  }),

  family_information: yup.object().shape({
    isParentAlive: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Please specify if your father is alive"),
    fatherProfession: yup
      .string()
      .required("Please provide your father's profession"),
    isMotherAlive: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Please specify if your mother is alive"),
    motherProfession: yup
      .string()
      .required("Please provide your mother's profession"),
    howManyBrothers: yup
      .string()
      .oneOf(
        ["0", "1", "2", "3", "4", "5", "More than 5"],
        "Please select a valid number of brothers"
      )
      .required("Please specify how many brothers you have"),

    brothersInformation: yup
      .string()
      .required("Please provide information about your brothers"),

    howManySisters: yup
      .string()
      .oneOf(
        ["0", "1", "2", "3", "4", "5", "More than 5"],
        "Please select a valid number of sisters"
      )
      .required("Please specify how many sisters you have"),

    sistersInformation: yup
      .string()
      .required("Sisters' information is required"),
    familyFinancialStatus: yup
      .string()
      .oneOf([
        "upper_class",
        "middle_class",
        "lower_class",
        "upper_middle_class",
        "lower_middle_class",
      ])
      .required("Please specify your family's financial status"),
    descriptionOfFinancialCondition: yup
      .string()
      .required(
        "Please provide a description of your family's financial condition"
      ),
    professionOfUncles: yup
      .string()
      .required("Please specify the professions of your uncles"),
    familyReligiousCondition: yup
      .string()
      .required("Please describe your family's religious practices and values"),
  }),

  personal_information: yup.object().shape({
    clothingOutside: yup
      .string()
      .required("Please specify your clothing style outside"),
    wearingNiqabSince: yup
      .string()
      .required("Please specify how long you have been wearing niqab"),
    praysFiveTimes: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Please indicate if you pray five times a day"),
    missedPrayersPerWeek: yup
      .string()
      .required("Please specify how many prayers you miss per week"),
    compliesWithMahram: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Please indicate if you comply with mahram requirements"),
    canReciteQuranCorrectly: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Please indicate if you can recite Quran correctly"),
    fiqhFollowed: yup
      .string()
      .oneOf(["hanafi", "shafi", "maliki", "hanbali"])
      .required(
        "Please select which school of Islamic jurisprudence you follow"
      ),
    watchesOrListensToMedia: yup
      .string()
      .required("Please specify your media consumption habits"),
    mentalOrPhysicalDiseases: yup
      .string()
      .required("Please specify any mental or physical health conditions"),
    involvedInSpecialWork: yup
      .string()
      .required("Please specify if you are involved in any special work"),
    beliefsAboutShrine: yup
      .string()
      .required("Please specify your beliefs about shrines"),
    islamicBooksRead: yup
      .array()
      .of(yup.string())
      .required("Please list Islamic books you have read"),
    islamicScholarsPreferred: yup
      .array()
      .of(yup.string())
      .required("Please list your preferred Islamic scholars"),
    hobbiesAndInterests: yup
      .string()
      .required("Please specify your hobbies and interests"),
  }),

  expected_partner: yup.object().shape({
    age: yup
      .array()
      .of(yup.number())
      .min(2)
      .max(2)
      .required("Age range is required"),
    complexion: yup
      .array()
      .of(yup.string().oneOf(["fair", "bright_brown", "brown", "dark"]))
      .required("Please select preferred complexion"),
    height: yup.string().required("Please specify preferred height"),
    education: yup.string().required("Educational qualification is required"),
    district: yup.string().required("District is required"),
    maritalStatus: yup
      .array()
      .of(yup.string())
      .required("Marital status is required"),
  }),
  education: yup.object().shape({
    ssc_passing_year: yup.number().required("SSC passing year is required"),
    ssc_group: yup
      .string()
      .oneOf(["science", "commerce", "arts"])
      .required("SSC group is required"),
    ssc_result: yup.string().required("SSC result is required"),
    hsc_passing_year: yup.number().required("HSC passing year is required"),
    hsc_group: yup
      .string()
      .oneOf(["science", "commerce", "arts"])
      .required("HSC group is required"),
    hsc_result: yup.string().required("HSC result is required"),
    diploma_subject: yup.string(),
    diploma_institution: yup.string(),
    diploma_passing_year: yup.number(),
    graduation_subject: yup.string(),
    graduation_institution: yup.string(),
    graduation_year: yup.string(),
  }),
  marriage_related_information: yup.object().shape({
    doYouAgreeWithParents: yup
      .string()
      .oneOf(["yes", "no"])
      .required(
        "Please specify if you agree with your parents regarding marriage"
      ),
    willingToWorkAfterMarriage: yup
      .string()
      .oneOf(["yes", "yes_if_circumstances_allow", "no"])
      .required("Please specify your willingness to work after marriage"),
    wantToContinueStudyAfterMarriage: yup
      .string()
      .oneOf(["yes_higher_education", "no", "maybe"])
      .required("Please specify your study plans after marriage"),
  }),
  contact: yup.object().shape({
    brideName: yup.string().required("Bride name is required"),
    guardianPhoneNumber: yup
      .string()
      .required("Guardian phone number is required"),
    relationWithGuardian: yup
      .string()
      .required("Relation with guardian is required"),
    emailUsedForRegistration: yup
      .string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      ),
  }),
};
