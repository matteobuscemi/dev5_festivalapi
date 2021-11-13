FROM node:latest

WORKDIR /usr/app/api

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm",  "start"]