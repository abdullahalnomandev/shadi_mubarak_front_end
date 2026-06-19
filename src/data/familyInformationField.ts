export const family_information = [
  {
    name: "family_information.isParentAlive",
    label: "isParentAlive.label",
    type: "select",
    options: [
      { value: "yes", label: "isParentAlive.options.yes" },
      { value: "no", label: "isParentAlive.options.no" },
    ],
    placeholder: "isParentAlive.placeholder",
    required: true,
  },

  {
    name: "family_information.fatherProfession",
    label: "fatherProfession.label",
    type: "textArea",
    placeholder: "fatherProfession.placeholder",
    required: true,
  },

  {
    name: "family_information.isMotherAlive",
    label: "isMotherAlive.label",
    type: "select",
    options: [
      { value: "yes", label: "isMotherAlive.options.yes" },
      { value: "no", label: "isMotherAlive.options.no" },
    ],
    placeholder: "isMotherAlive.placeholder",
    required: true,
  },

  {
    name: "family_information.motherProfession",
    label: "motherProfession.label",
    type: "text",
    placeholder: "motherProfession.placeholder",
    required: true,
  },

  {
    name: "family_information.howManyBrothers",
    label: "howManyBrothers.label",
    type: "select",
    options: [
      { value: "no_brothers", label: "howManyBrothers.options.no_brothers" },
      { value: "1", label: "howManyBrothers.options.1" },
      { value: "2", label: "howManyBrothers.options.2" },
      { value: "3", label: "howManyBrothers.options.3" },
      { value: "4", label: "howManyBrothers.options.4" },
      { value: "5", label: "howManyBrothers.options.5" },
      { value: "more_than_5", label: "howManyBrothers.options.more_than_5" },
    ],
    placeholder: "howManyBrothers.placeholder",
    required: true,
  },

  {
    name: "family_information.brothersInformation",
    label: "brothersInformation.label",
    type: "textArea",
    placeholder: "brothersInformation.placeholder",
    required: true,
  },

  {
    name: "family_information.howManySisters",
    label: "howManySisters.label",
    type: "select",
    options: [
      { value: "no_sisters", label: "howManySisters.options.no_sisters" },
      { value: "1", label: "howManySisters.options.1" },
      { value: "2", label: "howManySisters.options.2" },
      { value: "3", label: "howManySisters.options.3" },
      { value: "4", label: "howManySisters.options.4" },
      { value: "5", label: "howManySisters.options.5" },
      { value: "more_than_6", label: "howManySisters.options.more_than_6" },
    ],
    placeholder: "howManySisters.placeholder",
    required: true,
  },

  {
    name: "family_information.sistersInformation",
    label: "sistersInformation.label",
    type: "textArea",
    placeholder: "sistersInformation.placeholder",
    required: true,
  },
  {
    name: "family_information.familyFinancialStatus",
    label: "familyFinancialStatus.label",
    type: "select",
    placeholder: "familyFinancialStatus.placeholder",
    options: [
      {
        value: "upper_class",
        label: "familyFinancialStatus.options.upper_class",
      },
      {
        value: "middle_class",
        label: "familyFinancialStatus.options.middle_class",
      },
      {
        value: "lower_class",
        label: "familyFinancialStatus.options.lower_class",
      },
      {
        value: "upper_middle_class",
        label: "familyFinancialStatus.options.upper_middle_class",
      },
      {
        value: "lower_middle_class",
        label: "familyFinancialStatus.options.lower_middle_class",
      },
    ],
    required: true,
  },

  {
    name: "family_information.descriptionOfFinancialCondition",
    label: "descriptionOfFinancialCondition.label",
    type: "textArea",
    placeholder: "descriptionOfFinancialCondition.placeholder",
    required: true,
  },

  {
    name: "family_information.professionOfUncles",
    label: "professionOfUncles.label",
    type: "textArea",
    placeholder: "professionOfUncles.placeholder",
    required: true,
  },

  {
    name: "family_information.familyReligiousCondition",
    label: "familyReligiousCondition.label",
    type: "textArea",
    placeholder: "familyReligiousCondition.placeholder",
    required: true,
  },
];