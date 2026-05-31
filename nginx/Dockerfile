# ---- build stage: generate the static site with a Nuxt-2-compatible node ----
FROM node:18 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
# Nuxt 2 / webpack 4 need the legacy OpenSSL provider on node >=17
RUN NODE_OPTIONS=--openssl-legacy-provider yarn generate   # -> /app/portfolio

# ---- serve stage: static behind nginx ----
FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/portfolio /usr/share/nginx/html/
EXPOSE 80
