type UserName = {
  userName: string;
  minLength?: number;
  maxLength?: number;
};

/**
 * Correct user name format?
 *
 * @example isUserName("name", 3, 5); // true
 * @example isUserName("name", 5, 8); // false
 * @example isUserName("_name"); // true
 * @example isUserName("na"); // false
 */
function isUserName<UserName>(userName: string, min = 3, max = 15): boolean {
  if (userName.length < min) return false;
  if (max < userName.length) return false;

  const regex: RegExp = new RegExp(
    "^[a-z_][a-z0-9_]{" + min + "," + max + "}$"
  );
  const match = userName.match(regex);
  return match !== null;
}

export { isUserName };
