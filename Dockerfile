# This dockerfile uses the ubuntu image
# VERSION 2 - EDITION 1
# Author: docker_user
# Command format: Instruction [arguments / command ] ..

# Base image to use, this nust be set as the first line
##FROM node:10-jessie
FROM lopydev/node10

# Maintainer: docker_user <docker_user at email.com> (@docker_user)
MAINTAINER zengyu 284141050@qq.com

#
VOLUME /app

WORKDIR /app

ENV BIND_PORT=50005
ENV NODE_ENV=develop

# Commands to update the image
##RUN yarn global add nodemon

# Commands when creating a new container
CMD ["yarn","run","dev"]