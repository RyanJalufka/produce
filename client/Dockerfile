FROM node:alpine

RUN mkdir -p /usr/scr/client

WORKDIR /usr/src/client

COPY . .

# RUN yarn install --pure-lockfile
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]