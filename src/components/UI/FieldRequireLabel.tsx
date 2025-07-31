import React from "react";

interface FieldRequireLabelProps {
  label?: string;
  required?: boolean;
}

const FieldRequireLabel: React.FC<FieldRequireLabelProps> = ({
  label,
  required = false,
}) => {
  return (
    <>
      {label && (
        <label className='block text-sm  text-gray-500 mb-1'>
          {label}
          {required && <span className='text-red-500'> *</span>}
        </label>
      )}
    </>
  );
};

export default FieldRequireLabel;
