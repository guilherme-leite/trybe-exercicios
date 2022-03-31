# FROM node:14-alpine AS build
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build ./build /usr/share/nginx/html
# EXPOSE 80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM node:14-alpine
COPY . .
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]