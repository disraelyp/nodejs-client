FROM node:16-alpine

RUN npm install

CMD ["npm", "run", "start:subscribe"]

