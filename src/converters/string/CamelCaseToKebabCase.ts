/**
 * Match at "aA"
 */
const regex: RegExp = /([a-z0-9]|(?=[A-Z]))([A-Z])/g;

/**
 * Convert from camel case to kebab case.
 * @example
 * const result = camelCaseToKebabCase("setUserName");
 * console.log(result); // "set-user-name"
 */

const camelCaseToKebabCase = (str: string): string => {
  return str.replace(regex, "$1-$2").toLowerCase();
};

export { camelCaseToKebabCase };
