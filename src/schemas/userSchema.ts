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
    biodataType: yup
      .string()
      .oneOf(["female_biodata", "male_biodata"])
      .required("Please select biodata type"),
    dateOfBirth: yup.date().required("Please select date of birth "),
    height: yup.string().required("Please select height"),
    weight: yup
      .string()
      .transform((value, originalValue) =>
        String(originalValue).trim() === "" ? undefined : value
      )
      .typeError("Weight must be a number")
      .required("Please select a weight"),

    skin: yup.string().required("Please select a Skin tone "),
    maritalStatus: yup.string().required("Please select Marital status"),
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
    grow_up: yup.string().required("Please specify where you grew up"),
  }),

  occupation: yup.object().shape({
    occupation: yup.string().required("Occupation is required"),
    monthlyIncome: yup.string().required("Monthly income is required"),
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
    fatherProfession: yup.string().when("isParentAlive", {
      is: "yes",
      then: (schema) =>
        schema.required("Please provide your father's profession"),
      otherwise: (schema) => schema.notRequired(),
    }),
    isMotherAlive: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Please specify if your mother is alive"),
    motherProfession: yup.string().when("isMotherAlive", {
      is: "yes",
      then: (schema) =>
        schema.required("Please provide your mother's profession"),
      otherwise: (schema) => schema.notRequired(),
    }),
    howManyBrothers: yup
      .string()
      .required("Please specify how many brothers you have"),

    brothersInformation: yup.string().when("howManyBrothers", {
      is: (val: string) => val !== "no_brothers",
      then: (schema) =>
        schema.required("Please provide information about your brothers"),
      otherwise: (schema) => schema.notRequired(),
    }),

    howManySisters: yup
      .string()
      .required("Please specify how many sisters you have"),

    sistersInformation: yup.string().when("howManySisters", {
      is: (val: string) => val !== "no_sisters",
      then: (schema) => schema.required("Sisters' information is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
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

  personal_information: yup.lazy((_, { parent }) => {
    const biodataType = parent?.general_information?.biodataType;
    const isMale = biodataType === "male_biodata";
    const isFemale = biodataType === "female_biodata";

    const wearsNiqab = parent?.personal_information?.wearsNiqab;
    const beardAccordingToSunnah =
      parent?.personal_information?.beardAccordingToSunnah;
    const clothingAboveAnkles =
      parent?.personal_information?.clothingAboveAnkles;
    const dailyPrayerRoutine = parent?.personal_information?.dailyPrayerRoutine;

    const yesCount = [
      isMale && beardAccordingToSunnah === "yes",
      isMale && clothingAboveAnkles === "yes",
      dailyPrayerRoutine === "yes",
      isFemale && wearsNiqab === "yes",
    ].filter(Boolean).length;

    const showAdvancedFields = yesCount >= 2;

    return yup.object({
      usualOutdoorClothing: yup
        .string()
        .required("Please specify your clothing style outside"),

      dailyPrayerRoutine: yup
        .string()
        .oneOf(["yes", "no"])
        .required("Please indicate your daily prayer routine"),

      beardAccordingToSunnah: isMale
        ? yup
            .string()
            .required("Please indicate if you have beard according to sunnah")
        : yup.string().notRequired(),

      clothingAboveAnkles: isMale
        ? yup
            .string()
            .required("Please indicate if your clothing is above the ankles")
        : yup.string().notRequired(),

      wearsNiqab: isFemale
        ? yup.string().required("Please specify if you wear niqab")
        : yup.string().notRequired(),

      wearingNiqabSince:
        isFemale && wearsNiqab === "yes"
          ? yup
              .string()
              .required("Please specify how long you have been wearing niqab")
          : yup.string().notRequired(),

      skippedPrayersPerWeek: showAdvancedFields
        ? yup
            .string()
            .required("Please specify how many prayers you miss per week")
        : yup.string().notRequired(),

      followsMahramGuidelines: showAdvancedFields
        ? yup
            .string()
            .oneOf(["yes", "no"])
            .required("Please indicate if you comply with mahram requirements")
        : yup.string().notRequired(),

      quranRecitationAbility: yup
        .string()
        .oneOf(["yes", "no"])
        .required("Please indicate if you can recite Quran correctly"),

      fiqhFollowed: showAdvancedFields
        ? yup
            .string()
            .oneOf(["hanafi", "shafi", "maliki", "hanbali"])
            .required(
              "Please select which school of Islamic jurisprudence you follow"
            )
        : yup.string().notRequired(),

      mediaConsumptionHabits: yup
        .string()
        .required("Please specify your media consumption habits"),

      mentalOrPhysicalDiseases: yup
        .string()
        .required("Please specify any mental or physical health conditions"),

      involvedInSpecialWork: showAdvancedFields
        ? yup
            .string()
            .required("Please specify if you are involved in any special work")
        : yup.string().notRequired(),

      beliefsAboutShrine: showAdvancedFields
        ? yup.string().required("Please specify your beliefs about shrines")
        : yup.string().notRequired(),

      islamicBooksRead: yup
        .string()
        .required("Please list at least one Islamic book"),

      islamicScholarsPreferred: showAdvancedFields
        ? yup
            .array()
            .of(yup.string())
            .min(1, "Please list your preferred Islamic scholars")
        : yup.array().of(yup.string()).notRequired(),

      hobbiesAndInterests: yup
        .string()
        .required("Please specify your hobbies and interests"),

      groomMobileNumber: yup.string().required("Mobile Number is required"),

      previousRelationship: yup.string().notRequired(),
    });
  }),

  expected_partner: yup.object().shape({
    age: yup
      .mixed()
      .test("age", "Age is required", function (value) {
        if (!value) return false;
        return true;
      })
      .required("Age is required"),
    complexion: yup
      .array()
      .min(1, "At least one complexion preference is required")
      .required("Complexion preference is required"),
    height: yup.string().required("Height is required"),
    educationalQualification: yup
      .string()
      .required("Educational qualification is required"),
    district: yup.string().required("District is required"),
    maritalStatus: yup
      .array()
      .min(1, "At least one marital status is required")
      .required("Marital status is required"),
    profession: yup.string().required("Preferred profession is required"),
    financialCondition: yup
      .string()
      .required("Expected financial condition is required"),
    specialExpectationsOrRequests: yup
      .string()
      .required("Special expectations or requests are required"),
  }),
  education: yup.object().shape({
    education_system: yup
      .string()
      .oneOf(["general", "alia", "quami"])
      .required("Education system is required"),

    additional_qualifications: yup.string().optional(),

    highest_qualification: yup.string().required("Qualification is required"),

    post_ssc_medium: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          (system === "general" || system === "alia") &&
          ["F", "G", "H", "I"].includes(qual),
        then: (schema) => schema.required("Post SSC Medium is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    // SSC
    passing_year_ssc: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          (system === "general" || system === "alia") && qual !== "C",
        then: (schema) => schema.required("SSC passing year is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    group_ssc: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          (system === "general" || system === "alia") && qual !== "C",
        then: (schema) => schema.required("SSC group is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    result_ssc: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          (system === "general" || system === "alia") && qual !== "C",
        then: (schema) => schema.required("SSC result is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    // HSC — required only when medium = hsc
    passing_year_hsc: yup
      .string()
      .when(["post_ssc_medium", "highest_qualification"], {
        is: (medium, qual) => medium === "hsc" && qual !== "C",
        then: (schema) => schema.required("HSC passing year is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    group_hsc: yup.string().when(["post_ssc_medium", "highest_qualification"], {
      is: (medium, qual) => medium === "hsc" && qual !== "C",
      then: (schema) => schema.required("HSC group is required"),
      otherwise: () => yup.string().notRequired(),
    }),

    result_hsc: yup
      .string()
      .when(["post_ssc_medium", "highest_qualification"], {
        is: (medium, qual) => medium === "hsc" && qual !== "C",
        then: (schema) => schema.required("HSC result is required"),
        otherwise: () => yup.string().notRequired(),
      }),
    // Diploma — required only when medium = diploma
    diploma_subject: yup.string().when("post_ssc_medium", {
      is: "diploma",
      then: (schema) => schema.required("Diploma subject is required"),
      otherwise: () => yup.string().notRequired(),
    }),
    diploma_institution: yup.string().when("post_ssc_medium", {
      is: "diploma",
      then: (schema) => schema.required("Diploma institution is required"),
      otherwise: () => yup.string().notRequired(),
    }),
    diploma_passing_year: yup
      .string()
      .when(["highest_qualification", "post_ssc_medium"], {
        is: (qual, medium) =>
          ["D", "F", "G", "H", "I"].includes(qual) && medium === "diploma",
        then: (schema) => schema.required("Diploma passing year is required"),
        otherwise: () => yup.string().notRequired(),
      }),
    diploma_current_study_year: yup
      .string()
      .when(
        ["highest_qualification", "post_ssc_medium", "diploma_passing_year"],
        (qual, medium, year, schema) => {
          if (qual === "E" && medium === "diploma" && !year) {
            return schema.required("Current study year is required");
          }
          return yup.string().notRequired();
        }
      ),

    // Graduation
    graduation_subject: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          (system === "general" || system === "alia") &&
          ["F", "G", "H", "I"].includes(qual),
        then: (schema) => schema.required("Graduation subject is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    graduation_institution: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          (system === "general" || system === "alia") &&
          ["F", "G", "H", "I"].includes(qual),
        then: (schema) => schema.required("Graduation institution is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    graduation_year: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          (system === "general" || system === "alia") &&
          ["F", "G", "H", "I"].includes(qual),
        then: (schema) => schema.required("Graduation year is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    // Post Graduation
    postgraduation_subject: yup.string().when("highest_qualification", {
      is: (val) => ["H", "I"].includes(val),
      then: (schema) => schema.required("Postgrad subject is required"),
      otherwise: () => yup.string().notRequired(),
    }),
    postgraduation_institution: yup.string().when("highest_qualification", {
      is: (val) => ["H", "I"].includes(val),
      then: (schema) => schema.required("Postgrad institution is required"),
      otherwise: () => yup.string().notRequired(),
    }),
    postgraduation_year: yup.string().when("highest_qualification", {
      is: (val) => ["H", "I"].includes(val),
      then: (schema) => schema.required("Postgrad year is required"),
      otherwise: () => yup.string().notRequired(),
    }),

    // Doctorate
    doctorate_subject: yup.string().when("highest_qualification", {
      is: "I",
      then: (schema) => schema.required("Doctorate subject is required"),
      otherwise: () => yup.string().notRequired(),
    }),
    doctorate_institution: yup.string().when("highest_qualification", {
      is: "I",
      then: (schema) => schema.required("Doctorate institution is required"),
      otherwise: () => yup.string().notRequired(),
    }),
    doctorate_year: yup.string().when("highest_qualification", {
      is: "I",
      then: (schema) => schema.required("Doctorate year is required"),
      otherwise: () => yup.string().notRequired(),
    }),

    // Below SSC
    below_ssc: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          (system === "general" || system === "alia") && qual === "C",
        then: (schema) => schema.required("Class is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    // Quami-specific fields
    madrasha_name: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          system === "quami" && ["B", "C", "D", "E", "F"].includes(qual),
        then: (schema) => schema.required("Madrasha name is required"),
        otherwise: () => yup.string().notRequired(),
      }),
    result: yup.string().when(["education_system", "highest_qualification"], {
      is: (system, qual) =>
        system === "quami" && ["B", "C", "D", "E", "F"].includes(qual),
      then: (schema) => schema.required("Result is required"),
      otherwise: () => yup.string().notRequired(),
    }),
    passing_year: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) =>
          system === "quami" && ["B", "C", "D", "E", "F"].includes(qual),
        then: (schema) => schema.required("Passing year is required"),
        otherwise: () => yup.string().notRequired(),
      }),

    // Takmil + Takhassus (G)
    takmil_madrasha_name: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) => system === "quami" && qual === "G",
        then: (schema) => schema.required("Takmil madrasha name is required"),
        otherwise: () => yup.string().notRequired(),
      }),
    takmil_result: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) => system === "quami" && qual === "G",
        then: (schema) => schema.required("Takmil result is required"),
        otherwise: () => yup.string().notRequired(),
      }),
    takmil_passing_year: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) => system === "quami" && qual === "G",
        then: (schema) => schema.required("Takmil passing year is required"),
        otherwise: () => yup.string().notRequired(),
      }),
    takhassus_madrasha_name: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) => system === "quami" && qual === "G",
        then: (schema) =>
          schema.required("Takhassus madrasha name is required"),
        otherwise: () => yup.string().notRequired(),
      }),
    takhassus_result: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) => system === "quami" && qual === "G",
        then: (schema) => schema.required("Takhassus result is required"),
        otherwise: () => yup.string().notRequired(),
      }),
    takhassus_passing_year: yup
      .string()
      .when(["education_system", "highest_qualification"], {
        is: (system, qual) => system === "quami" && qual === "G",
        then: (schema) => schema.required("Takhassus passing year is required"),
        otherwise: () => yup.string().notRequired(),
      }),
  }),

  marriage_related_information: yup.lazy((_, { parent }) => {
    const biodataType = parent?.general_information?.biodataType;
    const maritalStatus = parent?.general_information?.maritalStatus;

    return yup.object().shape({
      widower:
        maritalStatus === "widower"
          ? yup.string().required("Please specify if you are a widower")
          : yup.string().notRequired(),

      widow:
        maritalStatus === "widow"
          ? yup.string().required("Please specify if you are a widow")
          : yup.string().notRequired(),
      reasonForSecondMarriage:
        maritalStatus === "married"
          ? yup
              .string()
              .required("Please specify your reason for second marriage")
          : yup.string().notRequired(),
      currentFamilyStatus:
        maritalStatus === "married"
          ? yup.string().required("Please specify your current family status")
          : yup.string().notRequired(),
      reasonForDivorce:
        maritalStatus === "divorced"
          ? yup.string().required("Please provide reason for divorce")
          : yup.string().notRequired(),

      doParentsAgree: yup
        .string()
        .oneOf(["yes", "no"], "Please select yes or no")
        .required("Please specify if your guardians agree to your marriage"),

      canKeepWifeInVeil:
        biodataType === "male_biodata"
          ? yup
              .string()
              .required("Please specify if you can keep your wife in veil")
          : yup.string().notRequired(),

      allowWifeToStudy:
        biodataType === "male_biodata"
          ? yup
              .string()
              .oneOf(["yes", "no"], "Please select yes or no")
              .required("Please specify if you allow your wife to study")
          : yup.string().notRequired(),

      allowWifeToWork:
        biodataType === "male_biodata"
          ? yup
              .string()
              .oneOf(["yes", "no"], "Please select yes or no")
              .required("Please specify if you allow your wife to work")
          : yup.string().notRequired(),

      residenceAfterMarriage:
        biodataType === "male_biodata"
          ? yup
              .string()
              .required("Please specify where you will live after marriage")
          : yup.string().notRequired(),

      expectGiftsFromBrideFamily:
        biodataType === "male_biodata"
          ? yup
              .string()
              .required(
                "Please specify if you expect gifts from the bride's family"
              )
          : yup.string().notRequired(),

      willingToWorkAfterMarriage:
        biodataType === "female_biodata"
          ? yup
              .string()
              .required(
                "Please specify your willingness to work after marriage"
              )
          : yup.string().notRequired(),

      continueStudiesAfterMarriage:
        biodataType === "female_biodata"
          ? yup
              .string()
              .required(
                "Please specify if you want to continue studies after marriage"
              )
          : yup.string().notRequired(),

      reasonForMarriage: yup
        .string()
        .required("Please specify your thoughts on marriage"),
    });
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
