FROM node:16
RUN apt-get update && \
    apt-get install -y \
    bash \
    git \
    openssh-client \
    curl 

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENTRYPOINT ["sh", "./run.sh"]