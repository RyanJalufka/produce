FROM node:alpine

RUN mkdir -p /usr/scr/api/

WORKDIR /usr/src/api

COPY package.json package-lock.json /usr/scr/api/

# RUN yarn install --pure-lockfile
RUN yarn

RUN yarn global add nodemon

COPY . /usr/src/api/

EXPOSE 8000

CMD [ "nodemon", "start" ]