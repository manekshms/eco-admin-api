# base image
FROM node:alpine

# work dir
WORKDIR /app 

# copy package.json
COPY ./package.json ./

# install dependency
RUN yarn install

# copy project files
COPY ./ ./

# Build project
RUN yarn build

# start server
CMD [ "yarn", "run", "start" ]