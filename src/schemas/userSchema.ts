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
    isParentAlive: yup.string().oneOf(["yes", "no"]).required("Required"),
    fatherProfession: yup.string().required("Father's profession is required"),
    isMotherAlive: yup.string().oneOf(["yes", "no"]).required("Required"),
    motherProfession: yup.string().required("Mother's profession is required"),
    howManyBrothers: yup
      .string()
      .oneOf(["0", "1", "2", "3", "4", "5", "More than 5"])
      .required("Required"),
    brothersInformation: yup
      .string()
      .required("Brothers' information is required"),
    howManySisters: yup
      .string()
      .oneOf(["0", "1", "2", "3", "4", "5", "More than 5"])
      .required("Required"),
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
      .required("Required"),
    descriptionOfFinancialCondition: yup.string().required("Required"),
    professionOfUncles: yup.string().required("Required"),
    familyReligiousCondition: yup.string().required("Required"),
  }),

  personal_information: yup.object().shape({
    clothingOutside: yup.string().required("Required"),
    wearingNiqabSince: yup.string().required("Required"),
    praysFiveTimes: yup.string().oneOf(["yes", "no"]).required("Required"),
    missedPrayersPerWeek: yup.string().required("Required"),
    compliesWithMahram: yup.string().oneOf(["yes", "no"]).required("Required"),
    canReciteQuranCorrectly: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Required"),
    fiqhFollowed: yup
      .string()
      .oneOf(["hanafi", "shafi", "maliki", "hanbali"])
      .required("Required"),
    watchesOrListensToMedia: yup.string().required("Required"),
    mentalOrPhysicalDiseases: yup.string().required("Required"),
    involvedInSpecialWork: yup.string().required("Required"),
    beliefsAboutShrine: yup.string().required("Required"),
    islamicBooksRead: yup.array().of(yup.string()).required("Required"),
    islamicScholarsPreferred: yup.array().of(yup.string()).required("Required"),
    hobbiesAndInterests: yup.string().required("Required"),
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
      .required("Required"),
    height: yup.string().required("Height is required"),
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
