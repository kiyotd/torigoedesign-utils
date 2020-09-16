/**
 * Is the IPV4 address format correct?
 *
 * @example isIPv4("255.255.255.255"); // true
 * @example isIPv4("255.255.255.256"); // false
 */
function isIPv4(ip: string): boolean {
  const regEx: RegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regEx.test(ip);
}

export { isIPv4 };
