# establish base image & update node
# ------------------
FROM node:alpine AS dependencies
RUN npm install -g npm@latest
WORKDIR /usr/src/app/
COPY ./* .
RUN rm -rf node_modules
RUN npm ci

# ------------------

EXPOSE 3000
CMD npm run dev