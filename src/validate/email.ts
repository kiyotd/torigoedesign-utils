/**
 * Is the email format correct?
 *
 * @example isEmail("example@example.com"); // true
 * @example isEmail("example@exam@ple.com"); // false
 */
const isEmail = (email: string): boolean => {
  const regEx: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regEx.test(email);
};

export { isEmail };
