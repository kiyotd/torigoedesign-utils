/**
 * One letter of a-z following a hyphen
 */
const regex: RegExp = /-([a-z])/g;

/**
 * Convert to uppercase.
 * Used as a callback function for replace ().
 */
function strToUpperCase(match: string, offset: string): string {
  return offset.toUpperCase();
}

/**
 * Convert from kebab case to camel case.
 *
 * @example kebabCaseToCamelCase("set-user-name"); // "setUserName"
 */
function kebabCaseToCamelCase(str: string): string {
  return str.replace(regex, strToUpperCase);
}

export { kebabCaseToCamelCase };
