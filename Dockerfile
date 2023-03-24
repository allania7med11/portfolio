FROM node:16-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN apk update && \ 
    apk add --virtual build-dependencies build-base gcc wget

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENTRYPOINT ["sh", "./run.sh"]
CMD ["dev", "3000"]
