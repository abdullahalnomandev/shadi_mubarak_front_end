// File: useBiodataSections.ts
import { useMemo } from "react";

interface UseBiodataSectionsProps {
  bioData: any;
  bioDataNo: string;
  t: (key: string) => string;
}

export const useBiodataSections = ({
  bioData,
  bioDataNo,
  t,
}: UseBiodataSectionsProps) => {
  return useMemo(
    () => [
      {
        title: t("biodata.sections.general_information"),
        data: bioData?.general_information || {},
      },
      {
        title: t("biodata.sections.address"),
        data: bioData.address
          ? {
              [t("biodata.address.present_address")]: bioData.address
                .present_address
                ? `${bioData.address.present_address.full}\n${bioData.address.present_address.area}`
                : "",
              [t("biodata.address.permanent_address")]: bioData.address
                .permanent_address
                ? `${bioData.address.permanent_address.full}\n${bioData.address.permanent_address.area}`
                : "",
              [t("biodata.address.grow_up")]: bioData.address.grow_up || "",
            }
          : {},
      },
      {
        title: t("biodata.sections.educational_qualifications"),
        data: bioData.education
          ? {
              [t("biodata.education.education_system")]:
                bioData.education.education_system,
              [t("biodata.education.additional_qualifications")]:
                bioData.education.additional_qualifications,
              [t("biodata.education.highest_qualification")]:
                bioData.education.highest_qualification,
              [t("biodata.education.post_ssc_medium")]:
                bioData.education.post_ssc_medium,
              [t("biodata.education.passing_year_ssc")]:
                bioData.education.passing_year_ssc,
              [t("biodata.education.group_ssc")]: bioData.education.group_ssc,
              [t("biodata.education.result_ssc")]: bioData.education.result_ssc,
              [t("biodata.education.passing_year_hsc")]:
                bioData.education.passing_year_hsc,
              [t("biodata.education.group_hsc")]: bioData.education.group_hsc,
              [t("biodata.education.result_hsc")]: bioData.education.result_hsc,
              [t("biodata.education.diploma_subject")]:
                bioData.education.diploma_subject,
              [t("biodata.education.diploma_institution")]:
                bioData.education.diploma_institution,
              [t("biodata.education.diploma_passing_year")]:
                bioData.education.diploma_passing_year,
              [t("biodata.education.diploma_current_study_year")]:
                bioData.education.diploma_current_study_year,
              [t("biodata.education.graduation_subject")]:
                bioData.education.graduation_subject,
              [t("biodata.education.graduation_institution")]:
                bioData.education.graduation_institution,
              [t("biodata.education.graduation_year")]:
                bioData.education.graduation_year,
              [t("biodata.education.graduation_current_study_year")]:
                bioData.education.graduation_current_study_year,
              [t("biodata.education.postgraduation_subject")]:
                bioData.education.postgraduation_subject,
              [t("biodata.education.postgraduation_institution")]:
                bioData.education.postgraduation_institution,
              [t("biodata.education.postgraduation_year")]:
                bioData.education.postgraduation_year,
              [t("biodata.education.doctorate_subject")]:
                bioData.education.doctorate_subject,
              [t("biodata.education.doctorate_institution")]:
                bioData.education.doctorate_institution,
              [t("biodata.education.doctorate_year")]:
                bioData.education.doctorate_year,
              [t("biodata.education.below_ssc")]: bioData.education.below_ssc,
              [t("biodata.education.madrasha_name")]:
                bioData.education.madrasha_name,
              [t("biodata.education.result")]: bioData.education.result,
              [t("biodata.education.passing_year")]:
                bioData.education.passing_year,
              [t("biodata.education.takmil_madrasha_name")]:
                bioData.education.takmil_madrasha_name,
              [t("biodata.education.takmil_result")]:
                bioData.education.takmil_result,
              [t("biodata.education.takmil_passing_year")]:
                bioData.education.takmil_passing_year,
              [t("biodata.education.takhassus_madrasha_name")]:
                bioData.education.takhassus_madrasha_name,
              [t("biodata.education.takhassus_result")]:
                bioData.education.takhassus_result,
              [t("biodata.education.takhassus_passing_year")]:
                bioData.education.takhassus_passing_year,
            }
          : {},
      },
      {
        title: t("biodata.sections.family_information"),
        data: bioData.family_information
          ? {
              [t("biodata.family_information.isParentAlive")]:
                bioData.family_information.isParentAlive,
              [t("biodata.family_information.fatherProfession")]:
                bioData.family_information.fatherProfession,
              [t("biodata.family_information.isMotherAlive")]:
                bioData.family_information.isMotherAlive,
              [t("biodata.family_information.motherProfession")]:
                bioData.family_information.motherProfession,
              [t("biodata.family_information.howManyBrothers")]:
                bioData.family_information.howManyBrothers,
              [t("biodata.family_information.brothersInformation")]:
                bioData.family_information.brothersInformation,
              [t("biodata.family_information.howManySisters")]:
                bioData.family_information.howManySisters,
              [t("biodata.family_information.sistersInformation")]:
                bioData.family_information.sistersInformation,
              [t("biodata.family_information.professionOfUncles")]:
                bioData.family_information.professionOfUncles,
              [t("biodata.family_information.familyFinancialStatus")]:
                bioData.family_information.familyFinancialStatus,
              [t("biodata.family_information.descriptionOfFinancialCondition")]:
                bioData.family_information.descriptionOfFinancialCondition,
              [t("biodata.family_information.familyReligiousCondition")]:
                bioData.family_information.familyReligiousCondition,
            }
          : {},
      },
      {
        title: t("biodata.sections.personal_information"),
        data: bioData.personal_information
          ? {
              [t("biodata.personal_information.usualOutdoorClothing")]:
                bioData.personal_information.usualOutdoorClothing,
              [t("biodata.personal_information.dailyPrayerRoutine")]:
                bioData.personal_information.dailyPrayerRoutine,
              [t("biodata.personal_information.beardAccordingToSunnah")]:
                bioData.personal_information.beardAccordingToSunnah,
              [t("biodata.personal_information.clothingAboveAnkles")]:
                bioData.personal_information.clothingAboveAnkles,
              [t("biodata.personal_information.wearsNiqab")]:
                bioData.personal_information.wearsNiqab,
              [t("biodata.personal_information.wearingNiqabSince")]:
                bioData.personal_information.wearingNiqabSince,
              [t("biodata.personal_information.skippedPrayersPerWeek")]:
                bioData.personal_information.skippedPrayersPerWeek,
              [t("biodata.personal_information.followsMahramGuidelines")]:
                bioData.personal_information.followsMahramGuidelines,
              [t("biodata.personal_information.quranRecitationAbility")]:
                bioData.personal_information.quranRecitationAbility,
              [t("biodata.personal_information.fiqhFollowed")]:
                bioData.personal_information.fiqhFollowed,
              [t("biodata.personal_information.mediaConsumptionHabits")]:
                bioData.personal_information.mediaConsumptionHabits,
              [t("biodata.personal_information.mentalOrPhysicalDiseases")]:
                bioData.personal_information.mentalOrPhysicalDiseases,
              [t("biodata.personal_information.involvedInSpecialWork")]:
                bioData.personal_information.involvedInSpecialWork,
              [t("biodata.personal_information.beliefsAboutShrine")]:
                bioData.personal_information.beliefsAboutShrine,
              [t("biodata.personal_information.islamicBooksRead")]:
                bioData.personal_information.islamicBooksRead,
              [t("biodata.personal_information.islamicScholarsPreferred")]:
                bioData.personal_information.islamicScholarsPreferred,
              [t("biodata.personal_information.hobbiesAndInterests")]:
                bioData.personal_information.hobbiesAndInterests,
              [t("biodata.personal_information.groomMobileNumber")]:
                bioData.personal_information.groomMobileNumber,
              [t("biodata.personal_information.previousRelationship")]:
                bioData.personal_information.previousRelationship,
            }
          : {},
      },
      {
        title: t("biodata.sections.occupation_info"),
        data: bioData.occupation
          ? {
              [t("biodata.occupation.occupation")]:
                bioData.occupation.occupation,
              [t("biodata.occupation.monthlyIncome")]:
                bioData.occupation.monthlyIncome,
              [t("biodata.occupation.descriptionOfProfession")]:
                bioData.occupation.descriptionOfProfession,
            }
          : {},
      },
      {
        title: t("biodata.sections.marriage_related_information"),
        data: bioData.marriage_related_information
          ? {
              [t("biodata.marriage_related_information.widower")]:
                bioData.marriage_related_information.widower,
              [t("biodata.marriage_related_information.widow")]:
                bioData.marriage_related_information.widow,
              [t(
                "biodata.marriage_related_information.reasonForSecondMarriage"
              )]: bioData.marriage_related_information.reasonForSecondMarriage,
              [t("biodata.marriage_related_information.currentFamilyStatus")]:
                bioData.marriage_related_information.currentFamilyStatus,
              [t("biodata.marriage_related_information.reasonForDivorce")]:
                bioData.marriage_related_information.reasonForDivorce,
              [t("biodata.marriage_related_information.doParentsAgree")]:
                bioData.marriage_related_information.doParentsAgree,
              [t("biodata.marriage_related_information.canKeepWifeInVeil")]:
                bioData.marriage_related_information.canKeepWifeInVeil,
              [t("biodata.marriage_related_information.allowWifeToStudy")]:
                bioData.marriage_related_information.allowWifeToStudy,
              [t("biodata.marriage_related_information.allowWifeToWork")]:
                bioData.marriage_related_information.allowWifeToWork,
              [t(
                "biodata.marriage_related_information.residenceAfterMarriage"
              )]: bioData.marriage_related_information.residenceAfterMarriage,
              [t(
                "biodata.marriage_related_information.expectGiftsFromBrideFamily"
              )]:
                bioData.marriage_related_information.expectGiftsFromBrideFamily,
              [t(
                "biodata.marriage_related_information.willingToWorkAfterMarriage"
              )]:
                bioData.marriage_related_information.willingToWorkAfterMarriage,
              [t(
                "biodata.marriage_related_information.continueStudiesAfterMarriage"
              )]:
                bioData.marriage_related_information
                  .continueStudiesAfterMarriage,
              [t("biodata.marriage_related_information.reasonForMarriage")]:
                bioData.marriage_related_information.reasonForMarriage,
            }
          : {},
      },
      {
        title: t("biodata.sections.expected_partner"),
        data: bioData.expected_partner
          ? {
              [t("biodata.expected_partner.age")]: bioData.expected_partner.age,
              [t("biodata.expected_partner.complexion")]:
                bioData.expected_partner.complexion,
              [t("biodata.expected_partner.height")]:
                bioData.expected_partner.height,
              [t("biodata.expected_partner.educationalQualification")]:
                bioData.expected_partner.educationalQualification,
              [t("biodata.expected_partner.district")]:
                bioData.expected_partner.district,
              [t("biodata.expected_partner.maritalStatus")]:
                bioData.expected_partner.maritalStatus,
              [t("biodata.expected_partner.profession")]:
                bioData.expected_partner.profession,
              [t("biodata.expected_partner.financialCondition")]:
                bioData.expected_partner.financialCondition,
              [t("biodata.expected_partner.specialExpectationsOrRequests")]:
                bioData.expected_partner.specialExpectationsOrRequests,
            }
          : {},
      },
      {
        title: t("biodata.sections.agreement"),
        data: bioData.agreement
          ? {
              [t("biodata.agreement.parentsAwareOfRegistration")]:
                bioData.agreement.parentsAwareOfRegistration,
              [t("biodata.agreement.confirmTruthOfProvidedInformation")]:
                bioData.agreement.confirmTruthOfProvidedInformation,
              [t("biodata.agreement.agreeToLegalResponsibilityForFalseInfo")]:
                bioData.agreement.agreeToLegalResponsibilityForFalseInfo,
            }
          : {},
      },
      {
        title:
          bioDataNo === bioData?.bioDataNo
            ? t("biodata.sections.your_contact")
            : t("biodata.sections.contact"),
        data: bioData.contact
          ? {
              [t("biodata.contact.brideName")]: bioData.contact.brideName,
              [t("biodata.contact.groomName")]: bioData.contact.groomName,
              [t("biodata.contact.guardianPhoneNumber")]:
                bioData.contact.guardianPhoneNumber,
              [t("biodata.contact.relationWithGuardian")]:
                bioData.contact.relationWithGuardian,
              [t("biodata.contact.emailUsedForRegistration")]:
                bioData.contact.emailUsedForRegistration,
            }
          : {},
      },
    ],
    [bioData, bioDataNo, t]
  );
};
