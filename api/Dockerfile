FROM node:alpine

# RUN mkdir -p /usr/scr/node-app/

# WORKDIR /usr/src/node-app

COPY . .

# RUN yarn install --pure-lockfile
RUN yarn

EXPOSE 8000

CMD [ "yarn", "start" ]