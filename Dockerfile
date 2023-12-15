FROM node:18.19.0-alpine3.19

RUN mkdir -p /home/exchangenest/

COPY ./build /home/exchangenest/
COPY ./build /home/exchangenest/

COPY package.json package-lock.json ./
RUN npm install