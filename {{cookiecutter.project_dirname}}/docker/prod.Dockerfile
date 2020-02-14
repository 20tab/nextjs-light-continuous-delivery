# Build image
FROM node:12.13.1 as builder

WORKDIR /app

COPY ./package.json .

COPY ./yarn.lock .

RUN yarn install

COPY . .

RUN yarn run build

# Production image
FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

COPY ./bin/generate_runtime_env.sh .

RUN chmod +x ./generate_runtime_env.sh

CMD ["/bin/bash", "-c", "/usr/share/nginx/html/generate_runtime_env.sh && nginx -g \"daemon off;\""]
