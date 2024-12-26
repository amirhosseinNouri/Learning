FROM node:22

WORKDIR /app

COPY server.js index.html package.json .
COPY images ./images

RUN corepack enable pnpm

RUN pnpm install

EXPOSE 3000

CMD ["pnpm" , "start"]
