import cookie from 'cookie';
import { addMonths } from 'date-fns';

export interface LogInVariables {
  email: string;
  password: string;
}

/**
 * Ideally server should send a cookie header
 */
const saveTokenInCookies = (token: string): void => {
  document.cookie = cookie.serialize('token', token, {
    expires: addMonths(new Date(), 1), // Save for 1 month
    httpOnly: true,
    secure: true,
  });
};

const removeTokenFromCookies = (): void => {
  document.cookie = cookie.serialize('token', null, {
    expires: new Date(-1),
  });
};

/**
 * Log out user by removing token from cookies
 */
const logout = (): void => {
  removeTokenFromCookies();

  // Here you can do some logout-related stuff like page reloading
};

export { logout, saveTokenInCookies };
