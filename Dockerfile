# Етап 1: збірка Angular
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Етап 2: запуск на Nginx
FROM nginx:alpine

# копіюємо зібраний Angular у стандартну папку Nginx
COPY --from=build /app/dist/angular-project/usr/share/nginx/html

# замінюємо стандартний конфіг (опціонально)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
