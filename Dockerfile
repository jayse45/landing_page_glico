FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .htaccess ./build
COPY nginx.conf /app/build

FROM nginx:stable-alpine

WORKDIR /var/www/html

COPY --from=builder /app/build/ /var/www/html/app/build

COPY --from=builder /app/build/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/react-app.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]