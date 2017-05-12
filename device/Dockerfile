FROM node:alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install Nodemon
RUN npm install -g nodemon

# Install app dependencies
COPY package.json /app
RUN npm install

# Bundle app source
COPY . /app

# Setup Production Environment
ENV USER node
ENV NODE_ENV production
USER node
EXPOSE 3000

# Launch app
CMD [ "node", "index.js" ]
