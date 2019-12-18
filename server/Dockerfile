FROM node:10-alpine

WORKDIR /usr/src/app
COPY package.json .

RUN yarn install 
COPY . .

WORKDIR /usr/src/app
RUN yarn prisma deploy --force
CMD ["yarn", "start"]
