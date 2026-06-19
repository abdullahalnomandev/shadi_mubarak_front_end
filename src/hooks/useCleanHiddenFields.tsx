// hooks/useCleanHiddenFields.ts
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export const useCleanHiddenFields = ({
  conditionMap,
}: {
  conditionMap: Record<string, boolean>;
}) => {
  const { setValue, getValues } = useFormContext();

  useEffect(() => {
    Object.entries(conditionMap).forEach(([fieldName, shouldKeep]) => {
      if (!shouldKeep) {
        const currentValue = getValues(fieldName as any);
        if (currentValue !== null && currentValue !== undefined) {
          setValue(fieldName as any, null, {
            shouldDirty: false,
            shouldTouch: false,
            shouldValidate: false,
          });
        }
      }
    });
  }, [conditionMap, setValue, getValues]);
};
