import { useQuery } from 'react-apollo';
import cookie from 'cookie';
import { addMonths } from 'date-fns';

import { GET_CURRENT_USER } from './queries';

export interface LogInVariables {
  email: string;
  password: string;
}

const useCurrentUserQuery = () => {
  return useQuery(GET_CURRENT_USER);
};

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

/** Log out user */
const logout = (): void => {
  removeTokenFromCookies();
};

export { logout, useCurrentUserQuery, saveTokenInCookies };
