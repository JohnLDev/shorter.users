FROM node:18.14.0

WORKDIR /app

RUN yarn install --frozen-lockfile

CMD ["yarn", "dev"]