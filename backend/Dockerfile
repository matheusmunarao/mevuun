FROM node:14

WORKDIR /mevuun/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["node", "dist/main" ]