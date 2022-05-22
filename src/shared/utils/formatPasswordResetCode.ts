export const formatPasswordResetCode = (value: string): string => {
  const code = value.split("&").find((item) => item.includes("Code"));

  return code?.slice(code.indexOf("=") + 1) || "";
};
