FROM node:12

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY tsconfig.json tsconfig.json

RUN yarn install

COPY src src
COPY test test

CMD ["yarn", "start"]