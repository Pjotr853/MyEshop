FROM node:18

WORKDIR /app

ENV MONGO_URL="mongodb://host.docker.internal:27017/myeshop"

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]