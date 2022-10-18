FROM node:latest as client
WORKDIR '/client'
COPY /client/package.json .
RUN npm install
COPY . .
# start app
CMD ["npm", "start"]




CMD ["npm", "start"]
 
