import userFormFields from "@/data/userFromField.json";
const useGetUserFromField = () => {
  const data = {
    statusCode: 200,
    status: "success",
    message: "BioData retrieved successfully",
    data: {
      _id: "67fc068da8a5af9875132620",
      bioDataNo: "SM-003",
      isLived: false,
      view: 73,
      completedSteps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      isBlocked: false,
      profileStatus: "verified",
      createdAt: "2025-04-13T18:46:37.065Z",
      updatedAt: "2025-04-27T06:04:08.957Z",
      __v: 0,
      generalInformation: {
        gender: "male",
        dateOfBirth: "2000-10-01T00:00:00.000Z",
        height: "5.1",
        weight: 75,
        skin: "fair",
        nationality: "bangladesh",
        maritalStatus: "never_married",
        _id: "680169094494384faf5b83e0",
      },
      address: {
        present_address: {
          full: "Lakshmipur Sadar, Lakshmipur, Chattogram, Bangladesh",
          area: "হামছাদী, কাজির দিঘির পাড়,  দালাল বাজার,লক্ষ্মীপুর",
          _id: "67fe35d2291beb5fc8fa7a70",
        },
        permanent_address: {
          full: "Dhaka North City Corporation, Dhaka, Dhaka, Bangladesh",
          area: "Mirpur 1",
          _id: "67fe35d2291beb5fc8fa7a71",
        },
        grow_up: "নিজ বাড়িতেই",
        _id: "67fe35d2291beb5fc8fa7a6f",
      },
      education: {
        ssc_passing_year: 2018,
        ssc_group: "Science",
        ssc_result: "A+",
        hsc_passing_year: 2020,
        hsc_group: "Science",
        hsc_result: "A",
        diploma_subject: "Computer Engineering",
        diploma_institution: "Dhaka Polytechnic Institute",
        diploma_passing_year: 2022,
        graduation_subject: "B.Sc. in Computer Science",
        graduation_institution: "University of Dhaka",
        graduation_year: "2025",
        _id: "67fe39d8510b4c7a5fe4a950",
      },
      familyInformation: {
        isParentAlive: "Both alive",
        fatherProfession: "Businessman",
        isMotherAlive: "Yes",
        motherProfession: "Homemaker",
        howManyBrothers: 2,
        brothersInformation: "One is an engineer, another is a student.",
        howManySisters: 1,
        sistersInformation: "She is married and lives abroad.",
        professionOfUncles: "Teachers and small business owners",
        familyFinancialStatus: "middle_class",
        descriptionOfFinancialCondition:
          "We have a stable financial condition with moderate income sources.",
        familyReligiousCondition:
          "Practicing Muslims, regular in prayers and religious values.",
        _id: "67fe5d839b77eb4e7517d9c7",
      },
      personal_information: {
        clothingOutside:
          "শার্ট, প্যান্ট, পাঞ্জাবি এবং টুপি প্রায় সবসময় পড়া হয়। শার্ট, প্যান্ট, পাঞ্জাবি এবং টুপি প্রায় সবসময় পড়া হয়।শার্ট, প্যান্ট, পাঞ্জাবি এবং টুপি প্রায় সবসময় পড়া হয়",
        wearingNiqabSince: "2019",
        praysFiveTimes: true,
        missedPrayersPerWeek: 0,
        compliesWithMahram: true,
        canReciteQuranCorrectly: true,
        fiqhFollowed: "Hanafi",
        watchesOrListensToMedia: "Only Islamic content occasionally",
        mentalOrPhysicalDiseases: "None",
        involvedInSpecialWork: "Teaching at an Islamic school",
        beliefsAboutShrine: "Do not believe in seeking help from shrines",
        islamicBooksRead: [
          "Riyad-us-Saliheen",
          "Tafsir Ibn Kathir",
          "Fortress of the Muslim",
        ],
        islamicScholarsPreferred: [
          "Mufti Menk",
          "Nouman Ali Khan",
          "Dr. Zakir Naik",
        ],
        hobbiesAndInterests:
          "Memorizing Quran ,Reading Islamic literature ,Calligraphy and Drawing",
      },
      occupation: {
        occupation: "Software Engineer",
        monthlyIncome: 3500,
        descriptionOfProfession:
          "Responsible for developing and maintaining web applications.",
        _id: "67fe7e41f229fbcf35d301c7",
      },
      marriage_related_information: {
        doYouAgreeWithParents: "Yes",
        willingToWorkAfterMarriage: "Yes, if circumstances allow",
        wantToContinueStudyAfterMarriage:
          "Yes, I plan to pursue higher education",
        whyAreYouGettingMarried: "To build a supportive and loving partnership",
        _id: "67fe85d8cad8379f1ccec848",
      },
      expected_partner: {
        age: "22-28",
        complexion: ["fair", "bright_brown"],
        height: "5'4\" - 5'8\"",
        education: "Bachelor's degree or higher",
        district: "Dhaka",
        maritalStatus: ["never_married"],
        profession: "Software Engineer",
        financialCondition: "Middle class or above",
        specialExpectationsOrRequests: "Should be respectful and open-minded",
        _id: "67fe89887c23adeab2e59036",
      },
      agreement: {
        parentsAwareOfRegistration: true,
        confirmTruthOfProvidedInformation: true,
        agreeToLegalResponsibilityForFalseInfo: true,
        _id: "67fe8a3f3ef99a0e5ada17ee",
      },
      contact: {
        brideName: "Fatima Rahman",
        guardianPhoneNumber: "+8801712345678",
        relationWithGuardian: "Father",
        emailUsedForRegistration: "fatima.rahman@example.com",
        _id: "67fe8b0f3ef99a0e5ada17f2",
      },
    },
  };

  const {
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
  } = userFormFields;

  console.log("General Information:", general_information);
  return {
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
};

export default useGetUserFromField;
