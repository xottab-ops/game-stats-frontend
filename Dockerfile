FROM node:current-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start", "--port=${REACT_APP_PORT:-3000}"]