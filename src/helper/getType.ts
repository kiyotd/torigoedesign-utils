/**
 * Get the type
 * @param value The value you want to find out the type of
 * @returns {string}
 *
 * @example getType(123); // "Number"
 * @example getType(true); // "Boolean"
 */
function getType(value: any): string {
  let str: string = Object.prototype.toString.call(value);
  // str = str.replace("[", "");
  str = str.replace("]", "");
  return str.split(" ")[1];
}

export { getType };
