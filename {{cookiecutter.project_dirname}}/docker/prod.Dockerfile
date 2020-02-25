# Build image
FROM node:12 as builder

WORKDIR /

COPY package.json .

COPY yarn.lock .

RUN yarn install

WORKDIR /app

COPY src ./src

COPY webpack ./webpack

COPY .babelrc .

RUN /node_modules/.bin/webpack --config webpack/webpack.prod.js

RUN npm prune --production

# Production image
FROM node:12

WORKDIR /app

COPY --from=builder /app/src/server /app

COPY --from=builder /package.json /app/package.json

COPY --from=builder /yarn.lock /app/yarn.lock

RUN yarn install --production

CMD [ "node", "/app/index.js"]
