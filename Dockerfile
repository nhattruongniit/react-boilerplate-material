# stage0
FROM node:14.15.1-alpine AS build-stage
USER root
RUN npm -g install serve
RUN rm -rf /home/node/app
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app

RUN cd /home/node/app
RUN npm install
RUN npm run build
RUN chown -R root:root /home/node/app/build
RUN ls -la /home/node/app/build

# stage1
FROM nginx:alpine AS RUN-stage
USER root

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html

# Copy from the stage 1
COPY --from=build-stage /home/node/app/build /usr/share/nginx/html
COPY --from=build-stage` /home/node/app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# start app 
# CMD ["npm", "start"]