FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install .
COPY . .
#ENV NODE_OPTIONS=--max-old-space-size=32000
CMD ["npm","start"]
