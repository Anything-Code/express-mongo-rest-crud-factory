FROM node:12-alpine AS build
RUN apk add --no-cache python2 g++ make
WORKDIR /root/mess-api
COPY . .
RUN yarn prod

FROM node:12-alpine
WORKDIR /root/mess-api
COPY --from=build /root/mess-api/dist/build.js ./
CMD node build.js
