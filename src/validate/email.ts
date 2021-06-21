/**
 * Is the correct email address format?
 *
 * @example isEmail("example@example.com"); // true
 * @example isEmail("example@exam@ple.com"); // false
 */
function isEmail(email: string): boolean {
  const regex: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

export { isEmail };
