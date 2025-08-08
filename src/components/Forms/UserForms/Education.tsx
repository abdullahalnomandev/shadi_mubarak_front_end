"use client";

import { useCleanHiddenFields } from "@/hooks/useCleanHiddenFields";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
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
  { value: "C", label: "Below SSC" },
  { value: "B", label: "SSC" },
  { value: "A", label: "HSC" },
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

const Education = () => {
  const t = useTranslations();
  const { watch } = useFormContext();
  const system = watch("education.education_system");
  const level = watch("education.highest_qualification");
  const postSSCMedium = watch("education.post_ssc_medium");

  const isGraduateOrAbove = ["F", "G", "H", "I"].includes(level);
  const isPostGrad = ["H", "I"].includes(level);
  const isDoctorate = level === "I";

  const sharedFields = [
    { name: "education.passing_year_ssc" },
    { name: "education.group_ssc" },
    { name: "education.result_ssc" },
  ];

  const hscFields = [
    { name: "education.passing_year_hsc" },
    { name: "education.group_hsc" },
    { name: "education.result_hsc" },
  ];

  const diplomaFields =
    level === "E"
      ? [
          { name: "education.diploma_subject" },
          { name: "education.diploma_institution" },
          { name: "education.diploma_current_study_year" },
        ]
      : [
          { name: "education.diploma_subject" },
          { name: "education.diploma_institution" },
          { name: "education.diploma_passing_year" },
        ];

  const graduationFields =
    level === "F"
      ? [
          { name: "education.graduation_subject" },
          { name: "education.graduation_institution" },
          { name: "education.graduation_current_study_year" },
        ]
      : [
          { name: "education.graduation_subject" },
          { name: "education.graduation_institution" },
          { name: "education.graduation_year" },
        ];

  const postFields = [
    { name: "education.postgraduation_subject" },
    { name: "education.postgraduation_institution" },
    { name: "education.postgraduation_year" },
  ];

  const doctorateFields = [
    { name: "education.doctorate_subject" },
    { name: "education.doctorate_institution" },
    { name: "education.doctorate_year" },
  ];

  const allPossibleFields = [
    ...sharedFields,
    ...hscFields,
    ...diplomaFields,
    ...graduationFields,
    ...postFields,
    ...doctorateFields,
    { name: "education.below_ssc" },
    { name: "education.post_ssc_medium" },
    // Quami specific
    { name: "education.madrasha_name" },
    { name: "education.result" },
    { name: "education.passing_year" },
    { name: "education.takmil_madrasha_name" },
    { name: "education.takmil_result" },
    { name: "education.takmil_passing_year" },
    { name: "education.takhassus_madrasha_name" },
    { name: "education.takhassus_result" },
    { name: "education.takhassus_passing_year" },
  ].map((f) => f.name);

  const renderGeneralAliaFields = () => {
    const fields = [];

    if (level === "C") {
      fields.push({
        name: "education.below_ssc",
        label: "Class",
        type: "select",
        options: belowSSCClassOptions,
        placeholder: "Select Class",
        required: true,
      });
      return fields;
    }

    fields.push(
      ...[
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
      ]
    );

    if (level === "A")
      fields.push(
        ...hscFields.map((f) => ({
          ...f,
          label: "",
          type: "number",
          required: true,
        }))
      );
    if (["D", "E"].includes(level))
      fields.push(
        ...diplomaFields.map((f) => ({
          ...f,
          label: "",
          type: "text",
          required: true,
        }))
      );

    if (isGraduateOrAbove) {
      fields.push({
        name: "education.post_ssc_medium",
        label: "What medium did you study after SSC?",
        type: "select",
        options: postSSCOptions,
        placeholder: "Select Medium",
        required: true,
      });

      if (postSSCMedium === "hsc")
        fields.push(
          ...hscFields.map((f) => ({
            ...f,
            label: "",
            type: "number",
            required: true,
          }))
        );
      if (postSSCMedium === "diploma")
        fields.push(
          ...diplomaFields.map((f) => ({
            ...f,
            label: "",
            type: "text",
            required: true,
          }))
        );
      fields.push(
        ...graduationFields.map((f) => ({
          ...f,
          label: "",
          type: "text",
          required: true,
        }))
      );
      if (isPostGrad)
        fields.push(
          ...postFields.map((f) => ({
            ...f,
            label: "",
            type: "text",
            required: true,
          }))
        );
      if (isDoctorate)
        fields.push(
          ...doctorateFields.map((f) => ({
            ...f,
            label: "",
            type: "text",
            required: true,
          }))
        );
    }

    return fields;
  };

  const renderQuamiFields = () => {
    const resultOptions = [
      { value: "Mumtaz", label: "Mumtaz" },
      { value: "Jayyid Jiddan", label: "Jayyid Jiddan" },
      { value: "Jayyid", label: "Jayyid" },
      { value: "Makbul", label: "Makbul" },
    ];

    if (level === "G") {
      return [
        {
          name: "education.takmil_madrasha_name",
          type: "text",
          required: true,
        },
        {
          name: "education.takmil_result",
          type: "select",
          options: resultOptions,
          required: true,
        },
        {
          name: "education.takmil_passing_year",
          type: "number",
          required: true,
        },
        {
          name: "education.takhassus_madrasha_name",
          type: "text",
          required: true,
        },
        {
          name: "education.takhassus_result",
          type: "select",
          options: resultOptions,
          required: true,
        },
        {
          name: "education.takhassus_passing_year",
          type: "number",
          required: true,
        },
      ];
    }

    return [
      { name: "education.madrasha_name", type: "text", required: true },
      {
        name: "education.result",
        type: "select",
        options: resultOptions,
        required: true,
      },
      { name: "education.passing_year", type: "number", required: true },
    ];
  };

  const dynamicFields =
    system === "quami" ? renderQuamiFields() : renderGeneralAliaFields();
  const activeFieldNames = dynamicFields.map((f) => f.name);
  const conditionMap = allPossibleFields.reduce((map, name) => {
    map[name] = activeFieldNames.includes(name);
    return map;
  }, {} as Record<string, boolean>);

  // 🔁 Clean up unused fields
  useCleanHiddenFields({ conditionMap });

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>
        {t("edit_biodata.education_qualifications")}
      </h1>
      <Row gutter={[16, 16]}>
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
