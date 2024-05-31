FROM node:lts-buster
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y ffmpeg
RUN apt-get install -y webp
COPY . .
RUN npm install
CMD ["npm", "start"]