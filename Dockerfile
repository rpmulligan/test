FROM resin/rpi-node
RUN apt-get update
RUN apt-get install -y alsa-utils libasound2-dev
RUN npm install speaker request lame
COPY . /app
CMD ["node", "/app/server.js"]