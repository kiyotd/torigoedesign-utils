/**
 * Match at "aA"
 */
const regex: RegExp = /([a-z0-9]|(?=[A-Z]))([A-Z])/g;

/**
 * Convert from camel case to kebab case.
 *
 * @example camelCaseToKebabCase("setUserName"); // "set-user-name"
 */
function camelCaseToKebabCase(str: string): string {
  return str.replace(regex, "$1-$2").toLowerCase();
}

export { camelCaseToKebabCase };
