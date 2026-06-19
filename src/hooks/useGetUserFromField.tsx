import userFormFields from "@/data/userFromFieldInfo";
const useGetUserFromField = () => {

  const {
    // general_information,
    address,
    occupation,
    agreement,
    // family_information,
    personal_information,
    expected_partner,
    contact,
    marriage_related_information,
    education,
  } = userFormFields;

  return {
    // general_information,
    address,
    occupation,
    agreement,
    // family_information,
    personal_information,
    expected_partner,
    contact,
    marriage_related_information,
    education,
  };
};

export default useGetUserFromField;
