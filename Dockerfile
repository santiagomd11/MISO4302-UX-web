FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli@16.2.12

RUN npm install

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
