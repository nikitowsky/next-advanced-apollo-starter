import Router from 'next/router';
import { NextPageContext } from 'next';

export const redirect = (context: NextPageContext, target: string) => {
  if (context.res) {
    // Server, 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target);
  }
};
