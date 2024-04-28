FROM node:20.12.2-alpine

ENV APP_PATH /app/frontend
WORKDIR $APP_PATH

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]