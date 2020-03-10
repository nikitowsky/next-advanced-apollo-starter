import express from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import morgan from 'morgan';

import nextI18next from '../src/lib/i18n';

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE_ENV === 'production';

const app = next({ dev: !IS_PRODUCTION });
const handle = app.getRequestHandler();

const main = async () => {
  await app.prepare();
  const server = express();

  if (IS_PRODUCTION) {
    server.use(morgan('common'));
  }

  await nextI18next.initPromise;

  server.use(nextI18NextMiddleware(nextI18next));
  server.get('*', (req, res) => handle(req, res));
  const expressServer = server.listen(PORT);

  (['SIGINT', 'SIGTERM'] as NodeJS.Signals[]).forEach((signal) => {
    process.on(signal, async () => {
      console.info(
        `\rGot ${signal}. Graceful shutdown at ${new Date().toISOString()}`,
      );

      try {
        expressServer.close();
        process.exit();
      } catch (e) {
        console.error(e);
        process.exitCode = 1;
      }
    });
  });

  return `http://localhost:${PORT}`;
};

main()
  .then((address) =>
    console.log(`🤘 Server ready at ${address} in ${NODE_ENV}`),
  )
  .catch((error) => console.log(`💀 Cannot start server: ${error}`));
