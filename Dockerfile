FROM node
WORKDIR /app
RUN npm install
CMD node index.js > output.log
EXPOSE 80
