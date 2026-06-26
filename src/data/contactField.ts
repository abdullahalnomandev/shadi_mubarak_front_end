export const contact = [
  {
    name: "contact.brideName",
    label: "brideName.label",
    type: "text",
    placeholder: "brideName.placeholder",
    required: true,
    isFemale: true,
  },
  {
    name: "contact.groomName",
    label: "groomName.label",
    type: "text",
    placeholder: "groomName.placeholder",
    required: true,
    isMale: true,
  },
  {
    name: "contact.guardianPhoneNumber",
    label: "guardianPhoneNumber.label",
    type: "text",
    placeholder: "guardianPhoneNumber.placeholder",
    required: true,
  },
  {
    name: "contact.relationWithGuardian",
    label: "relationWithGuardian.label",
    type: "text",
    placeholder: "relationWithGuardian.placeholder",
    required: true,
  },
  {
    name: "contact.emailUsedForRegistration",
    label: "emailUsedForRegistration.label",
    type: "text",
    placeholder: "emailUsedForRegistration.placeholder",
    required: true,
    validation: {
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
  },
];