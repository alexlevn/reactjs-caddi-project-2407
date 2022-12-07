# DO NOT EDIT
FROM node:16.14.0-alpine3.15

RUN apk --update --no-cache add ca-certificates

ENV HOME=/home/project

RUN mkdir -p $HOME/repository

COPY . $HOME/repository

WORKDIR $HOME/repository

RUN npm i && npm run build

RUN npm i -g serve

CMD ["serve", "-s", "-l", "8000", "build"]
