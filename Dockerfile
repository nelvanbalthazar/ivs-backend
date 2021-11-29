FROM node:10.21

WORKDIR /app

COPY config.js .
COPY package*.json .

COPY config.json .

RUN npm install

COPY . .
CMD npm run start