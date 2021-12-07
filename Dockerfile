FROM node:16-alpine as builder

RUN apk add curl --no-cache

USER node
WORKDIR /home/node

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./
RUN yarn

COPY --chown=node:node . .

ARG NODE_ENV=production
ARG APP_ENV=production

ENV NODE_ENV ${NODE_ENV}

RUN ["yarn", "build"]

CMD ["yarn", "start"]