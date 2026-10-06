FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY app.js .
COPY index.html .
COPY style.css .
COPY script.js .

EXPOSE 3000

CMD ["npm", "start"]
