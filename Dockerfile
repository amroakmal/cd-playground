FROM node:14-alpine

WORKDIR /simle-node-dir

COPY . .

RUN apk --no-cache add curl
RUN yarn

# CMD ["node", "src/index.js"]