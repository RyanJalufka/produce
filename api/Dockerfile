FROM node:alpine

WORKDIR /usr/src/api

COPY package.json package-lock.json ./

RUN yarn install --pure-lockfile

RUN yarn global add nodemon

COPY . .

EXPOSE 8000

CMD [ "nodemon", "start" ]