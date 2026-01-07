FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json  ./
RUN npm install

# Copy app source
COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
