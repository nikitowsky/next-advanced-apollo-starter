import cookie from 'cookie';
import { addMonths } from 'date-fns';

/**
 * Ideally server should send a cookie header
 */
const saveTokenInCookies = (token: string) => {
  document.cookie = cookie.serialize('token', token, {
    expires: addMonths(new Date(), 1), // Save for 1 month
    path: '/',
    httpOnly: true,
    secure: true,
  });
};

const removeTokenFromCookies = () => {
  document.cookie = cookie.serialize('token', null, {
    expires: new Date(-1),
  });
};

/**
 * Log out user by removing token from cookies
 */
const logout = () => {
  removeTokenFromCookies();

  // Here you can do some logout-related stuff like page reloading
};

export { logout, saveTokenInCookies };
