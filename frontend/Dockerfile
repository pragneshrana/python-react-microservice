# Use the official Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . /app

# Build the React app for production
RUN npm run build

# Install a simple web server to serve the build files
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Command to run the web server
CMD ["serve", "-s", "build", "-l", "3000"]
