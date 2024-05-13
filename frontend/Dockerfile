FROM node:18.13.0 as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:latest
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
