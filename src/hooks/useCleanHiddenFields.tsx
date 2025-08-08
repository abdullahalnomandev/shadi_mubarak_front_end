// hooks/useCleanHiddenFields.ts
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export const useCleanHiddenFields = ({
  conditionMap,
}: {
  conditionMap: Record<string, boolean>;
}) => {
  const { resetField } = useFormContext();

  useEffect(() => {
    Object.entries(conditionMap).forEach(([fieldName, shouldKeep]) => {
      if (!shouldKeep) {
        resetField(fieldName as any);
      }
    });
  }, [JSON.stringify(conditionMap)]); // triggers if any condition changes
};
