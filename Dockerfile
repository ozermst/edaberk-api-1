ARG CODE_VERSION=16-bullseye

FROM node:${CODE_VERSION} 

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN NODE_ENV=${NODE_ENV} yarn build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 strapi

RUN chown strapi:nodejs .

USER strapi

EXPOSE 1337

CMD ["node", "server.js"]
# CMD ["yarn", "start"]