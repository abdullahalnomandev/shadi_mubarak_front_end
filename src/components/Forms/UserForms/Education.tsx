"use client";

import { Col, Row } from "antd";
import { useFormContext } from "react-hook-form";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";

// Options
const resultOptions = [
  { value: "A+", label: "A+" },
  { value: "A", label: "A" },
  { value: "A-", label: "A-" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
];

const groupOptions = [
  { value: "science", label: "Science" },
  { value: "commerce", label: "Commerce" },
  { value: "arts", label: "Arts" },
  { value: "vocational", label: "Vocational" },
];

const educationSystemOptions = [
  { value: "general", label: "General" },
  { value: "alia", label: "Alia" },
  { value: "quami", label: "Quami" },
];

const qualificationOptionsGeneral = [
  { value: "A", label: "HSC" },
  { value: "B", label: "SSC" },
  { value: "C", label: "Below SSC" },
  { value: "D", label: "Diploma" },
  { value: "E", label: "Diploma (Ongoing)" },
  { value: "F", label: "Undergraduate" },
  { value: "G", label: "Graduate" },
  { value: "H", label: "Postgraduate" },
  { value: "I", label: "Doctorate" },
];

const qualificationOptionsQuami = [
  { value: "A", label: "Primary Islamic Education" },
  { value: "B", label: "Ibtidaiyah" },
  { value: "C", label: "Mutawassitah" },
  { value: "D", label: "Sanabia Uliya" },
  { value: "E", label: "Fazilat" },
  { value: "F", label: "Takmil" },
  { value: "G", label: "Takhassus" },
];

const postSSCOptions = [
  { value: "hsc", label: "HSC / Alim" },
  { value: "diploma", label: "Diploma" },
];

const belowSSCClassOptions = [
  { value: "class_10", label: "Class 10" },
  { value: "class_9", label: "Class 9" },
  { value: "class_8", label: "Class 8" },
  { value: "class_7", label: "Class 7" },
  { value: "class_6", label: "Class 6" },
  { value: "class_5", label: "Class 5" },
  { value: "class_4", label: "Class 4" },
  { value: "class_3", label: "Class 3" },
];

// Main Component
const Education = () => {
  const { watch } = useFormContext();
  const system = watch("education.education_system");
  const level = watch("education.highest_qualification");
  const postSSCMedium = watch("education.post_ssc_medium");

  const isGraduateOrAbove = ["F", "G", "H", "I"].includes(level);
  const isDiploma = ["D", "E", "F", "G", "H", "I"].includes(level);
  const isPostGrad = ["H", "I"].includes(level);
  const isDoctorate = level === "I";

  // Shared SSC Fields
  const sharedFields = [
    {
      name: "education.passing_year_ssc",
      label: "SSC / Dakhil / Equivalent Passing Year",
      type: "number",
      placeholder: "e.g. 2018",
      required: true,
    },
    {
      name: "education.group_ssc",
      label: "SSC / Dakhil / Equivalent Group",
      type: "select",
      options: groupOptions,
      placeholder: "Select Group",
      required: true,
    },
    {
      name: "education.result_ssc",
      label: "SSC / Dakhil / Equivalent Result",
      type: "select",
      options: resultOptions,
      placeholder: "Select Result",
      required: true,
    },
  ];

  // HSC Fields
  const hscFields = [
    {
      name: "education.passing_year_hsc",
      label: "HSC / Alim / Equivalent Passing Year",
      type: "number",
      required: true,

      placeholder: "e.g. 2020",
    },
    {
      name: "education.group_hsc",
      label: "HSC / Alim / Equivalent Group",
      type: "select",
      required: true,

      options: groupOptions,
      placeholder: "Select Group",
    },
    {
      name: "education.result_hsc",
      label: "HSC / Alim / Equivalent Result",
      type: "select",
      required: true,

      options: resultOptions,
      placeholder: "Select Result",
    },
  ];

  // Diploma Fields
  const diplomaFields =
    level === "E"
      ? [
          {
            name: "education.diploma_subject",
            label: "Diploma Subject",
            type: "text",
            placeholder: "Enter Subject",
            required: true,
          },
          {
            name: "education.diploma_institution",
            label: "Diploma Institution",
            type: "text",
            placeholder: "Institution Name",
            required: true,
          },
          {
            name: "education.diploma_current_study_year",
            label: "In which year are you studying now?",
            type: "text",
            placeholder: "e.g., 2nd Year",
            required: true,
          },
        ]
      : [
          {
            name: "education.diploma_subject",
            label: "Diploma Subject",
            type: "text",
            placeholder: "Enter Subject",
            required: true,
          },
          {
            name: "education.diploma_institution",
            label: "Diploma Institution",
            type: "text",
            placeholder: "Institution Name",
            required: true,
          },
          {
            name: "education.diploma_passing_year",
            label: "Diploma Passing Year",
            type: "number",
            placeholder: "e.g. 2021",
            required: true,
          },
        ];

  // Additional Levels
  const graduationFields = [
    {
      name: "education.graduation_subject",
      label: "Graduation Subject",
      required: true,

      type: "text",
      placeholder: "Enter Subject",
    },
    {
      name: "education.graduation_institution",
      label: "Graduation Institution",
      required: true,

      type: "text",
      placeholder: "Institution Name",
    },
    {
      name: "education.graduation_year",
      label: "Graduation Year",
      required: true,

      type: "number",
      placeholder: "e.g. 2022",
    },
  ];

  const postFields = [
    {
      name: "education.postgraduation_subject",
      label: "Post Graduation Subject",
      type: "text",
      placeholder: "Enter Subject",
      required: true,
    },
    {
      name: "education.postgraduation_institution",
      label: "Post Graduation Institution",
      type: "text",
      placeholder: "Institution Name",
      required: true,
    },
    {
      name: "education.postgraduation_year",
      label: "Post Graduation Year",
      type: "number",
      placeholder: "e.g. 2023",
      required: true,
    },
  ];

  const doctorateFields = [
    {
      name: "education.doctorate_subject",
      label: "Doctorate Subject",
      type: "text",
      placeholder: "Enter Subject",
      required: true,
    },
    {
      name: "education.doctorate_institution",
      label: "Doctorate Institution",
      type: "text",
      required: true,
      placeholder: "Institution Name",
    },
    {
      name: "education.doctorate_year",
      label: "Doctorate Passing Year",
      type: "number",
      required: true,
      placeholder: "e.g. 2024",
    },
  ];

  const renderGeneralAliaFields = () => {
    if (level === "C") {
      return [
        {
          name: "education.below_ssc",
          label: "Class",
          type: "select",
          options: belowSSCClassOptions,
          placeholder: "Select Class",
          required: true,
        },
      ];
    }

    const fields = [...sharedFields];

    if (isGraduateOrAbove) {
      fields.push({
        name: "education.post_ssc_medium",
        label: "What medium did you study after SSC?",
        type: "select",
        options: postSSCOptions,
        placeholder: "Select Medium",
        required: true,
      });
    }

    if (
      postSSCMedium === "hsc" &&
      ["A", ...["F", "G", "H", "I"]].includes(level)
    )
      fields.push(...hscFields);

    if (postSSCMedium === "diploma" && isDiploma) fields.push(...diplomaFields);

    if (isGraduateOrAbove) fields.push(...graduationFields);
    if (isPostGrad) fields.push(...postFields);
    if (isDoctorate) fields.push(...doctorateFields);

    return fields;
  };

  const renderQuamiFields = () => {
    if (level === "A") return [];

    const baseOptions = [
      { value: "Mumtaz", label: "Mumtaz" },
      { value: "Jayyid Jiddan", label: "Jayyid Jiddan" },
      { value: "Jayyid", label: "Jayyid" },
      { value: "Makbul", label: "Makbul" },
    ];

    if (level === "G") {
      return [
        {
          name: "education.takmil_madrasha_name",
          label: "Madrasha Name (Completed Takmil)",
          type: "text",
          placeholder: "Institution Name",
          required: true,
        },
        {
          name: "education.takmil_result",
          label: "Result (Takmil)",
          type: "select",
          options: baseOptions,
          placeholder: "Select Result",
          required: true,
        },
        {
          name: "education.takmil_passing_year",
          label: "Passing Year (Takmil)",
          type: "number",
          placeholder: "e.g. 2019",
          required: true,
        },
        {
          name: "education.takhassus_madrasha_name",
          label: "Madrasha Name (Takhassus)",
          type: "text",
          placeholder: "Institution Name",
          required: true,
        },
        {
          name: "education.takhassus_result",
          label: "Result (Takhassus)",
          type: "select",
          options: baseOptions,
          placeholder: "Select Result",
          required: true,
        },
        {
          name: "education.takhassus_passing_year",
          label: "Passing Year (Takhassus)",
          type: "number",
          placeholder: "e.g. 2021",
          required: true,
        },
      ];
    }

    return [
      {
        name: "education.madrasha_name",
        label: "Madrasha Name",
        type: "text",
        placeholder: "Institution Name",
        required: true,
      },
      {
        name: "education.result",
        label: "Result",
        type: "select",
        options: baseOptions,
        placeholder: "Select Result",
        required: true,
      },
      {
        name: "education.passing_year",
        label: "Passing Year",
        type: "number",
        placeholder: "e.g. 2020",
        required: true,
      },
    ];
  };

  const dynamicFields =
    system === "quami" ? renderQuamiFields() : renderGeneralAliaFields();

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>
        Educational Qualifications
      </h1>
      <Row gutter={[16, 16]}>
        {/* Static Fields */}
        <Col xs={24} sm={12}>
          <FormSelectField
            name='education.education_system'
            label='Education System'
            options={educationSystemOptions}
            placeholder='Select Education System'
            required
          />
        </Col>

        {system && (
          <Col xs={24} sm={12}>
            <FormSelectField
              name='education.highest_qualification'
              label='Highest Qualification'
              options={
                system === "quami"
                  ? qualificationOptionsQuami
                  : qualificationOptionsGeneral
              }
              placeholder='Select Qualification'
              required
            />
          </Col>
        )}

        {system &&
          level &&
          dynamicFields.map(
            ({ name, label, type, options, required, placeholder }) => (
              <Col key={name} xs={24} sm={12}>
                {type === "text" || type === "number" ? (
                  <FormInput
                    name={name}
                    label={label}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                  />
                ) : (
                  <FormSelectField
                    name={name}
                    label={label}
                    options={options || []}
                    placeholder={placeholder}
                    required={required}
                  />
                )}
              </Col>
            )
          )}
        <Col xs={24} sm={12}>
          <FormTextArea
            name='education.additional_qualifications'
            label='Additional Educational Qualifications'
            placeholder='Enter institution name, subject and passing year if any'
            required={false}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Education;
