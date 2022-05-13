export const formatErrorMessage = (message: string): string => {
  const formated = (message[0].toUpperCase() + message.substring(1)).split("");

  formated[formated.length] = ".";

  return formated.join("");
};
