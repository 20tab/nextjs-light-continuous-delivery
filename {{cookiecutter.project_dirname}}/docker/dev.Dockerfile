FROM node:12.13.1

WORKDIR /app

COPY ./package.json .

COPY ./yarn.lock .

RUN yarn install

CMD ["yarn", "run", "start"]
