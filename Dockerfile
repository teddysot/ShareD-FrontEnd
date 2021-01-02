FROM node:alpine

WORKDIR /app/src

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]