FROM node:alpine as build 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx 
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# built react app will be saved in nginx html directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html