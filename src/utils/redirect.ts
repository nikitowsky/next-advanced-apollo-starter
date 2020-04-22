import Router from 'next/router';
import { NextPageContext } from 'next';

/**
 * Redirect function
 *
 * @param context Next.js context, need to perform redirect on server-side
 * @param target Address
 */
export const redirect = (target: string, context?: NextPageContext) => {
  if (context?.res) {
    // Server, 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    Router.replace(target);
  }
};
