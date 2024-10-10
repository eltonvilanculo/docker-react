FROM node:20-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80 
#Map directly in server mapping (80:80)
COPY --from=builder /app/build /usr/share/nginx/html


#when we start the nginx container it will automatically start the nginx server, we do not need to run
