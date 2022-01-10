FROM node:alpine

RUN mkdir -p /usr/scr/api/

WORKDIR /usr/src/api

COPY . .

# RUN yarn install --pure-lockfile
RUN yarn

RUN yarn global add nodemon

EXPOSE 8000

CMD [ "nodemon", "start" ]