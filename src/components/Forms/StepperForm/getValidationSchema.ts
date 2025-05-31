import { userBiodataSchema } from "@/schemas/userSchema";
import * as yup from "yup";

export const getValidationSchema = (step: number) => {
  const schemas = {
    1: yup.object().shape({
      general_information: userBiodataSchema.general_information,
    }),
    2: yup.object().shape({
      address: userBiodataSchema.address,
    }),
    3: yup.object().shape({
      family_information: userBiodataSchema.family_information,
    }),
    4: yup.object().shape({
      education: userBiodataSchema.education,
    }),
    5: yup.object().shape({
      personal_information: userBiodataSchema.personal_information,
    }),
    6: yup.object().shape({
      expected_partner: userBiodataSchema.expected_partner,
    }),
    7: yup.object().shape({
      marriage_related_information: userBiodataSchema.marriage_related_information,
    }),
    8: yup.object().shape({
      occupation: userBiodataSchema.occupation,
    }),
    9: yup.object().shape({
      agreement: userBiodataSchema.agreement,
    }),
    10: yup.object().shape({
      contact: userBiodataSchema.contact,
    }),
  };
  return schemas[step as keyof typeof schemas];
};
