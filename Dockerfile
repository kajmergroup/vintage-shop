FROM node:latest as client
WORKDIR '/client'
COPY /client/package.json .
RUN npm install
COPY . .



EXPOSE 3000
 
# start app
CMD ["npm", "start"]