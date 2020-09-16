/**
 * Is the email format correct?
 * @param email
 * @returns {boolean}
 */
const isEmail = (email: string): boolean => {
  const regEx: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regEx.test(email);
};

export { isEmail };
