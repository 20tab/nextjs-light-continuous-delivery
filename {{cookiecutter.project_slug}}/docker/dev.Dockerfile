FROM node:12.13.1

WORKDIR /app

COPY ./package.json .

COPY ./yarn.lock .

RUN npm install

CMD ["npm", "run", "start"]
