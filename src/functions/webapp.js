/* eslint-disable max-nested-callbacks */
import * as functions from 'firebase-functions';
import next from 'next';
import cookiesMiddleware from 'universal-cookie-express';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: "next" } });
const handle = app.getRequestHandler();

const nextApp = functions.https.onRequest((request, response) => {
  return app.prepare().then(() => {
    return cookiesMiddleware()(request, response, () => {
      return handle(request, response);
    });
  });
});

export default nextApp;
