FROM node:18-slim
RUN apt-get update && \
    apt-get install -y \
    bash \
    git \
    openssh-client \
    curl 

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

ENTRYPOINT ["sh", "./run.sh"]