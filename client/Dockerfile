FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]