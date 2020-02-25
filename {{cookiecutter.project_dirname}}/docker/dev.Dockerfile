FROM node:12

WORKDIR /

COPY ./package.json .

COPY ./yarn.lock .

RUN yarn install

WORKDIR /app

CMD ["yarn", "run", "dev"]
