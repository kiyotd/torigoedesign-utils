/**
 * One letter of a-z following a hyphen
 */
const regex: RegExp = /-([a-z])/g;

/**
 * Convert to uppercase.
 * Used as a callback function for replace ().
 */
const strToUpperCase = (match: string, offset: string): string => {
  return offset.toUpperCase();
};

/**
 * Convert from kebab case to camel case.
 * @example
 * const result = kebabCaseToCamelCase("set-user-name");
 * console.log(result); // "setUserName"
 */
const kebabCaseToCamelCase = (str: string): string => {
  return str.replace(regex, strToUpperCase);
};

export { kebabCaseToCamelCase };
