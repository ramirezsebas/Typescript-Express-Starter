FROM node:16-alpine

WORKDIR /app/use/src

COPY package.json .

RUN yarn install

COPY . .