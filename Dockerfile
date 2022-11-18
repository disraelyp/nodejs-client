FROM node:16-alpine

ENV NODE_ENV=CLIENT

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

