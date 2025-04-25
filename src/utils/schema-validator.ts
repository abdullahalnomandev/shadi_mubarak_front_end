/* eslint-disable @typescript-eslint/no-explicit-any */
export const getErrorMessageBuPropertyName = (
    errorObject: Record<string, unknown>,
    propertyPath: string
  ) => {
    const properties = propertyPath.split('.');
    let value: any = errorObject;
  
    for (const prop of properties) {
      if (value[prop]) {
        value = value[prop] as Record<string, unknown>;
      } else {
        return undefined;
      }
    }
  
    return (value as { message?: string })?.message;
  };
  