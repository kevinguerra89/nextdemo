FROM node:16.10.0

RUN mkdir /app

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . /app

RUN npm run build

CMD ["npm", "start"]