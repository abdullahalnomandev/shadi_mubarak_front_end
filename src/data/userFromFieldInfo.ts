const general_information = [
  {
    name: "general_information.biodataType",
    label: "Biodata Type",
    type: "select",
    options: [
      {
        value: "male_biodata",
        label: "Male's Biodata",
      },
      {
        value: "female_biodata",
        label: "Female's Biodata",
      },
    ],
    placeholder: "Select biodata type",
    helperText: "Please select the appropriate biodata type",
    required: true,
  },
  {
    name: "general_information.dateOfBirth",
    label: "Date of Birth",
    type: "date",
    placeholder: "Select your date of birth",
    required: true,
  },
  {
    name: "general_information.height",
    label: "Height",
    type: "select",
    options: [
      { value: "below_4_10", label: "Below 4'" },
      { value: "4_0", label: "4" },
      { value: "4_1", label: "4'1\"" },
      { value: "4_2", label: "4'2\"" },
      { value: "4_3", label: "4'3\"" },
      { value: "4_4", label: "4'4\"" },
      { value: "4_5", label: "4'5\"" },
      { value: "4_6", label: "4'6\"" },
      { value: "4_7", label: "4'7\"" },
      { value: "4_8", label: "4'8\"" },
      { value: "4_9", label: "4'9\"" },
      { value: "4_11", label: "4'11\"" },
      { value: "5_0", label: "5'0\"" },
      { value: "5_1", label: "5'1\"" },
      { value: "5_2", label: "5'2\"" },
      { value: "5_3", label: "5'3\"" },
      { value: "5_4", label: "5'4\"" },
      { value: "5_5", label: "5'5\"" },
      { value: "5_6", label: "5'6\"" },
      { value: "5_7", label: "5'7\"" },
      { value: "5_8", label: "5'8\"" },
      { value: "5_9", label: "5'9\"" },
      { value: "5_10", label: "5'10\"" },
      { value: "5_11", label: "5'11\"" },
      { value: "6_0", label: "6'" },
      { value: "above_6", label: "Above 6'" }, // catch-all for tall heights
    ],
    placeholder: "Select your height",
    helperText: "Please select your height in feet and inches",
    required: true,
  },
  {
    name: "general_information.weight",
    label: "Weight",
    type: "select",
    options: [
      { value: "below_30", label: "Below 30 kg" },
      { value: "30_kg", label: "30 kg" },
      { value: "31_kg", label: "31 kg" },
      { value: "32_kg", label: "32 kg" },
      { value: "33_kg", label: "33 kg" },
      { value: "34_kg", label: "34 kg" },
      { value: "35_kg", label: "35 kg" },
      { value: "36_kg", label: "36 kg" },
      { value: "37_kg", label: "37 kg" },
      { value: "38_kg", label: "38 kg" },
      { value: "39_kg", label: "39 kg" },
      { value: "40_kg", label: "40 kg" },
      { value: "41_kg", label: "41 kg" },
      { value: "42_kg", label: "42 kg" },
      { value: "43_kg", label: "43 kg" },
      { value: "44_kg", label: "44 kg" },
      { value: "45_kg", label: "45 kg" },
      { value: "46_kg", label: "46 kg" },
      { value: "47_kg", label: "47 kg" },
      { value: "48_kg", label: "48 kg" },
      { value: "49_kg", label: "49 kg" },
      { value: "50_kg", label: "50 kg" },
      { value: "51_kg", label: "51 kg" },
      { value: "52_kg", label: "52 kg" },
      { value: "53_kg", label: "53 kg" },
      { value: "54_kg", label: "54 kg" },
      { value: "55_kg", label: "55 kg" },
      { value: "56_kg", label: "56 kg" },
      { value: "57_kg", label: "57 kg" },
      { value: "58_kg", label: "58 kg" },
      { value: "59_kg", label: "59 kg" },
      { value: "60_kg", label: "60 kg" },
      { value: "61_kg", label: "61 kg" },
      { value: "62_kg", label: "62 kg" },
      { value: "63_kg", label: "63 kg" },
      { value: "64_kg", label: "64 kg" },
      { value: "65_kg", label: "65 kg" },
      { value: "66_kg", label: "66 kg" },
      { value: "67_kg", label: "67 kg" },
      { value: "68_kg", label: "68 kg" },
      { value: "69_kg", label: "69 kg" },
      { value: "70_kg", label: "70 kg" },
      { value: "71_kg", label: "71 kg" },
      { value: "72_kg", label: "72 kg" },
      { value: "73_kg", label: "73 kg" },
      { value: "74_kg", label: "74 kg" },
      { value: "75_kg", label: "75 kg" },
      { value: "76_kg", label: "76 kg" },
      { value: "77_kg", label: "77 kg" },
      { value: "78_kg", label: "78 kg" },
      { value: "79_kg", label: "79 kg" },
      { value: "80_kg", label: "80 kg" },
      { value: "81_kg", label: "81 kg" },
      { value: "82_kg", label: "82 kg" },
      { value: "83_kg", label: "83 kg" },
      { value: "84_kg", label: "84 kg" },
      { value: "85_kg", label: "85 kg" },
      { value: "86_kg", label: "86 kg" },
      { value: "87_kg", label: "87 kg" },
      { value: "88_kg", label: "88 kg" },
      { value: "89_kg", label: "89 kg" },
      { value: "90_kg", label: "90 kg" },
      { value: "91_kg", label: "91 kg" },
      { value: "92_kg", label: "92 kg" },
      { value: "93_kg", label: "93 kg" },
      { value: "94_kg", label: "94 kg" },
      { value: "95_kg", label: "95 kg" },
      { value: "96_kg", label: "96 kg" },
      { value: "97_kg", label: "97 kg" },
      { value: "98_kg", label: "98 kg" },
      { value: "99_kg", label: "99 kg" },
      { value: "100_kg", label: "100 kg" },
      { value: "above_100", label: "Above 100 kg" },
    ],
    placeholder: "Select your weight ",
    helperText: "Please select your weight",

    required: true,
  },
  {
    name: "general_information.skin",
    label: "Skin Tone",
    type: "select",
    options: [
      { value: "fair", label: "Fair " },
      { value: "brown", label: "Brown" },
      { value: "light_brown", label: "Light Brown" },
      { value: "black", label: "Black" },
      { value: "very_fair", label: "Vary Fair" },
    ],
    placeholder: "Enter your skin tone",
    required: true,
  },
  {
    name: "general_information.maritalStatus",
    label: "Marital Status",
    type: "select",
    options: [
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
        label: "widow",
      },
      {
        value: "widower",
        label: "widower",
      },
    ],
    placeholder: "Select your marital status",
    required: true,
  },
];
const address = [
  {
    name: "address.present_address.full",
    label: "Present Address",
    type: "select",
    placeholder: "Enter full present address",
    required: true,
  },
  {
    name: "address.present_address.area",
    label: "Area",
    type: "text",
    placeholder: "Area will be shown based on address",
    readonly: true,
  },
  {
    name: "address.permanent_address.full",
    label: "Permanent Address",
    type: "select",
    placeholder: "Enter full permanent address",
    required: true,
  },
  {
    name: "address.permanent_address.area",
    label: "Area",
    type: "text",
    placeholder: "Area will be shown based on address",
    readonly: true,
  },
];
const occupation = [
  {
    name: "occupation.occupation",
    label: "Occupation",
    type: "text",
    placeholder: "Enter your occupation (e.g., Software Engineer)",
    required: true,
  },
  {
    name: "occupation.monthlyIncome",
    label: "Monthly Income",
    type: "number",
    placeholder: "Enter your monthly income",
    required: true,
  },
  {
    name: "occupation.descriptionOfProfession",
    label: "Description of Profession",
    type: "textArea",
    placeholder: "Describe your professional responsibilities",
    required: true,
  },
];
const agreement = [
  {
    name: "agreement.parentsAwareOfRegistration",
    label: "Are your parents aware of this registration?",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Please confirm if your parents are aware",
    required: true,
  },
  {
    name: "agreement.confirmTruthOfProvidedInformation",
    label: "Do you confirm that all provided information is true?",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Please confirm the truth of information",
    required: true,
  },
  {
    name: "agreement.agreeToLegalResponsibilityForFalseInfo",
    label:
      "Do you agree to take legal responsibility for any false information?",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Please confirm your agreement to legal responsibility",
    required: true,
  },
];
const family_information = [
  {
    name: "family_information.isParentAlive",
    label: "Are Parents Alive",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Please confirm if parents are alive",
    required: true,
  },
  {
    name: "family_information.fatherProfession",
    label: "Father's Profession",
    type: "text",
    placeholder: "Enter father's profession",
    required: true,
  },
  {
    name: "family_information.isMotherAlive",
    label: "Is Mother Alive",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Enter mother's living status",
    required: true,
  },
  {
    name: "family_information.motherProfession",
    label: "Mother's Profession",
    type: "text",
    placeholder: "Enter mother's profession",
    required: true,
  },
  {
    name: "family_information.howManyBrothers",
    label: "Number of Brothers",
    type: "select",
    options: [
      {
        value: "0",
        label: "no brothers",
      },
      {
        value: "1",
        label: "1",
      },
      {
        value: "2",
        label: "2",
      },
      {
        value: "3",
        label: "3",
      },
      {
        value: "4",
        label: "4",
      },
      {
        value: "5",
        label: "5",
      },
      {
        value: "More than 5",
        label: "More than 5",
      },
    ],
    placeholder: "Select number of brothers",
    required: true,
  },
  {
    name: "family_information.brothersInformation",
    label: "Brothers' Information",
    type: "textArea",
    placeholder: "Describe your brothers' occupations and status",
    required: true,
  },
  {
    name: "family_information.howManySisters",
    label: "Number of Sisters",
    type: "select",
    options: [
      {
        value: "0",
        label: "no sisters",
      },
      {
        value: "1",
        label: "1",
      },
      {
        value: "2",
        label: "2",
      },
      {
        value: "3",
        label: "3",
      },
      {
        value: "4",
        label: "4",
      },
      {
        value: "5",
        label: "5",
      },
      {
        value: "More than 5",
        label: "More than 5",
      },
    ],
    placeholder: "Select number of sisters",
    required: true,
  },
  {
    name: "family_information.sistersInformation",
    label: "Sisters' Information",
    type: "textArea",
    placeholder: "Describe your sisters' occupations and status",
    required: true,
  },
  {
    name: "family_information.familyFinancialStatus",
    label: "Family Financial Status",
    type: "select",
    placeholder: "Select family financial status",
    options: [
      {
        value: "upper_class",
        label: "Upper Class",
      },
      {
        value: "middle_class",
        label: "Middle Class",
      },
      {
        value: "lower_class",
        label: "Lower Class",
      },
      {
        value: "upper_middle_class",
        label: "Upper Middle Class",
      },
      {
        value: "lower_middle_class",
        label: "Lower Middle Class",
      },
    ],
    required: true,
  },
  {
    name: "family_information.descriptionOfFinancialCondition",
    label: "Description of Financial Condition",
    type: "textArea",
    placeholder: "Describe your family's financial condition in detail",
    required: true,
  },
  {
    name: "family_information.professionOfUncles",
    label: "Uncles' Professions",
    type: "textArea",
    placeholder: "Describe your uncles' professions",
    required: true,
  },
  {
    name: "family_information.familyReligiousCondition",
    label: "Family Religious Condition",
    type: "textArea",
    placeholder: "Describe your family's religious practices and values",
    required: true,
  },
];
const personal_information = [
  {
    name: "personal_information.clothingOutside",
    label: "Clothing Outside",
    type: "textArea",
    placeholder: "Describe your clothing style when going outside",
    required: true,
  },
  {
    name: "personal_information.wearingNiqabSince",
    label: "Wearing Niqab Since",
    type: "text",
    placeholder: "Enter year since wearing niqab",
    required: true,
  },
  {
    name: "personal_information.praysFiveTimes",
    label: "Do you pray five times daily?",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Select your prayer status",
    required: true,
  },
  {
    name: "personal_information.missedPrayersPerWeek",
    label: "Missed Prayers Per Week",
    type: "text",
    placeholder: "Enter number of missed prayers per week",
    required: true,
  },
  {
    name: "personal_information.compliesWithMahram",
    label: "Do you comply with Mahram rules?",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Select your compliance with Mahram rules",
    required: true,
  },
  {
    name: "personal_information.canReciteQuranCorrectly",
    label: "Can you recite Quran correctly?",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Select your Quran recitation ability",
    required: true,
  },
  {
    name: "personal_information.fiqhFollowed",
    label: "Fiqh Followed",
    type: "select",
    options: [
      {
        value: "hanafi",
        label: "Hanafi",
      },
      {
        value: "shafi",
        label: "Shafi",
      },
      {
        value: "maliki",
        label: "Maliki",
      },
      {
        value: "hanbali",
        label: "Hanbali",
      },
    ],
    placeholder: "Select the Fiqh you follow",
    required: true,
  },
  {
    name: "personal_information.watchesOrListensToMedia",
    label: "Media Consumption Habits",
    type: "textArea",
    placeholder: "Describe your media consumption habits",
    required: true,
  },
  {
    name: "personal_information.mentalOrPhysicalDiseases",
    label: "Mental or Physical Diseases",
    type: "textArea",
    placeholder:
      "Describe any mental or physical conditions (if none, write 'None')",
    required: true,
  },
  {
    name: "personal_information.involvedInSpecialWork",
    label: "Special Work Involvement",
    type: "textArea",
    placeholder: "Describe any special work you are involved in",
    required: true,
  },
  {
    name: "personal_information.beliefsAboutShrine",
    label: "Beliefs About Shrine",
    type: "textArea",
    placeholder: "Describe your beliefs about shrines",
    required: true,
  },
  {
    name: "personal_information.islamicBooksRead",
    label: "Islamic Books Read",
    type: "multiSelect",
    options: [
      {
        value: "riyad_us_saliheen",
        label: "Riyad-us-Saliheen",
      },
      {
        value: "tafsir_ibn_kathir",
        label: "Tafsir Ibn Kathir",
      },
      {
        value: "fortress_of_the_muslim",
        label: "Fortress of the Muslim",
      },
      {
        value: "sahih_bukhari",
        label: "Sahih Bukhari",
      },
      {
        value: "sahih_muslim",
        label: "Sahih Muslim",
      },
    ],
    placeholder: "Select the Islamic books you have read",
    required: true,
  },
  {
    name: "personal_information.islamicScholarsPreferred",
    label: "Preferred Islamic Scholars",
    type: "multiSelect",
    options: [
      {
        value: "mizanur_rahman_azhari",
        label: "Mizanur Rahman Azhari",
      },
      {
        value: "delower_hossain_sayeedi",
        label: "Delwar Hossain Sayeedi",
      },
      {
        value: "sheikh_ahmadullah",
        label: "Sheikh Ahmadullah",
      },
      {
        value: "abu_toha_muhammad_adnan",
        label: "Abu Toha Muhammad Adnan",
      },
      {
        value: "mufti_menk",
        label: "Mufti Menk",
      },
      {
        value: "nouman_ali_khan",
        label: "Nouman Ali Khan",
      },
      {
        value: "dr_zakir_naik",
        label: "Dr. Zakir Naik",
      },
      {
        value: "yasir_qadhi",
        label: "Dr. Yasir Qadhi",
      },
      {
        value: "omar_suleiman",
        label: "Sheikh Omar Suleiman",
      },
    ],
    placeholder: "Select your preferred Islamic scholars",
    required: true,
  },
  {
    name: "personal_information.hobbiesAndInterests",
    label: "Hobbies and Interests",
    type: "textArea",
    placeholder: "Please write your hobbies and interests",
    required: true,
  },
];
const expected_partner = [
  {
    name: "expected_partner.age",
    label: "Age",
    type: "slider",
    tipFormatter: "years",
    defaultValue: [18, 45],
    min: 18,
    max: 50,
  },
  {
    name: "expected_partner.complexion",
    label: "Preferred Complexion",
    type: "multiSelect",
    mode: "multiple",
    options: [
      {
        value: "fair",
        label: "Fair",
      },
      {
        value: "bright_brown",
        label: "Bright Brown",
      },
      {
        value: "brown",
        label: "Brown",
      },
      {
        value: "dark",
        label: "Dark",
      },
    ],
    placeholder: "Select preferred complexion",
    required: true,
  },
  {
    name: "expected_partner.height",
    label: "Height",
    type: "text",
    placeholder: "5'1\" - 5'`0\"",
    required: true,
  },
  {
    name: "expected_partner.education",
    label: "Educational Qualification",
    type: "text",
    placeholder: "Enter minimum educational qualification",
    required: true,
  },
  {
    name: "expected_partner.district",
    label: "Preferred District",
    type: "text",
    placeholder: "Enter preferred district",
    required: true,
  },
  {
    name: "expected_partner.maritalStatus",
    label: "Acceptable Marital Status",
    type: "multiSelect",
    mode: "multiple",
    options: [
      {
        value: "never_married",
        label: "Never Married",
      },
      {
        value: "divorced",
        label: "Divorced",
      },
      {
        value: "widowed",
        label: "Widowed",
      },
    ],
    placeholder: "Select acceptable marital status",
    required: true,
  },
  {
    name: "expected_partner.profession",
    label: "Preferred Profession",
    type: "text",
    placeholder: "Enter preferred profession",
    required: true,
  },
  {
    name: "expected_partner.financialCondition",
    label: "Expected Financial Condition",
    type: "select",
    options: [
      {
        value: "upper_class",
        label: "Upper Class",
      },
      {
        value: "upper_middle_class",
        label: "Upper Middle Class",
      },
      {
        value: "middle_class",
        label: "Middle Class",
      },
      {
        value: "lower_middle_class",
        label: "Lower Middle Class",
      },
      {
        value: "lower_class",
        label: "Lower Class",
      },
    ],
    placeholder: "Select expected financial condition",
    required: true,
  },
  {
    name: "expected_partner.specialExpectationsOrRequests",
    label: "Special Expectations or Requests",
    type: "textArea",
    placeholder: "Describe any special expectations or requirements",
    required: true,
  },
];
const contact = [
  {
    name: "contact.brideName",
    label: "Bride Name",
    type: "text",
    placeholder: "Enter bride's full name",
    required: true,
  },
  {
    name: "contact.guardianPhoneNumber",
    label: "Guardian Phone Number",
    type: "text",
    placeholder: "+8801****",
    required: true,
  },
  {
    name: "contact.relationWithGuardian",
    label: "Relation with Guardian",
    type: "text",
    placeholder: "Tell relation with the guardian",
    required: true,
  },
  {
    name: "contact.emailUsedForRegistration",
    label: "Email Address",
    type: "text",
    placeholder: "Enter your email address",
    required: true,
    validation: {
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
  },
];
const marriage_related_information = [
  {
    name: "marriage_related_information.doYouAgreeWithParents",
    label: "Do you agree with your parents regarding marriage?",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Select your agreement with parents",
    required: true,
  },
  {
    name: "marriage_related_information.willingToWorkAfterMarriage",
    label: "Are you willing to work after marriage?",
    type: "select",
    options: [
      {
        value: "yes",
        label: "Yes",
      },
      {
        value: "yes_if_circumstances_allow",
        label: "Yes, if circumstances allow",
      },
      {
        value: "no",
        label: "No",
      },
    ],
    placeholder: "Select your willingness to work after marriage",
    required: true,
  },
  {
    name: "marriage_related_information.wantToContinueStudyAfterMarriage",
    label: "Do you want to continue studies after marriage?",
    type: "select",
    options: [
      {
        value: "yes_higher_education",
        label: "Yes, I plan to pursue higher education",
      },
      {
        value: "no",
        label: "No",
      },
      {
        value: "maybe",
        label: "Maybe, depending on circumstances",
      },
    ],
    placeholder: "Select your study plans after marriage",
    required: true,
  },
  {
    name: "marriage_related_information.whyAreYouGettingMarried",
    label: "Why are you getting married?",
    type: "textArea",
    placeholder: "Describe your reasons for getting married",
    required: true,
  },
];
const education = [
  {
    name: "education.ssc_passing_year",
    label: "SSC Passing Year",
    type: "string",
    placeholder: "Enter your SSC passing year",
    required: true,
  },
  {
    name: "education.ssc_group",
    label: "SSC Group",
    type: "select",
    options: [
      {
        value: "science",
        label: "Science",
      },
      {
        value: "commerce",
        label: "Commerce",
      },
      {
        value: "arts",
        label: "Arts",
      },
    ],
    placeholder: "Select your SSC group",
    required: true,
  },
  {
    name: "education.ssc_result",
    label: "SSC Result",
    type: "text",
    placeholder: "Enter your SSC result (e.g., A+)",
    required: true,
  },
  {
    name: "education.hsc_passing_year",
    label: "HSC Passing Year",
    type: "number",
    placeholder: "Enter your HSC passing year",
    required: true,
  },
  {
    name: "education.hsc_group",
    label: "HSC Group",
    type: "select",
    options: [
      {
        value: "science",
        label: "Science",
      },
      {
        value: "commerce",
        label: "Commerce",
      },
      {
        value: "arts",
        label: "Arts",
      },
    ],
    placeholder: "Select your HSC group",
    required: true,
  },
  {
    name: "education.hsc_result",
    label: "HSC Result",
    type: "text",
    placeholder: "Enter your HSC result (e.g., A)",
    required: true,
  },
  {
    name: "education.diploma_subject",
    label: "Diploma Subject",
    type: "text",
    placeholder: "Enter your diploma subject",
    required: false,
  },
  {
    name: "education.diploma_institution",
    label: "Diploma Institution",
    type: "text",
    placeholder: "Enter your diploma institution",
    required: false,
  },
  {
    name: "education.diploma_passing_year",
    label: "Diploma Passing Year",
    type: "number",
    placeholder: "Enter your diploma passing year",
    required: false,
  },
  {
    name: "education.graduation_subject",
    label: "Graduation Subject",
    type: "text",
    placeholder: "Enter your graduation subject",
    required: false,
  },
  {
    name: "education.graduation_institution",
    label: "Graduation Institution",
    type: "text",
    placeholder: "Enter your graduation institution",
    required: false,
  },
  {
    name: "education.graduation_year",
    label: "Graduation Year",
    type: "text",
    placeholder: "Enter your graduation year",
    required: false,
  },
];

const userFormFields = {
  general_information,
  address,
  occupation,
  agreement,
  family_information,
  personal_information,
  expected_partner,
  contact,
  marriage_related_information,
  education,
};

export default userFormFields;
