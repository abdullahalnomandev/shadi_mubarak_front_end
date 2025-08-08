export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";
};

export const getGoogleClientId = (): string => {
  return process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
};

export const getFingerprintJsApiKey = (): string => {
  return process.env.NEXT_PUBLIC_FINGERPRINTJS_API_KEY || "";
}