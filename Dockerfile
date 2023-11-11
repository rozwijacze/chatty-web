# Build Stage
FROM node:20.9.0-alpine AS build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Production Stage
FROM node:20.9.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the built files from the previous stage to the container
COPY --from=build /app/dist /app/public

# Install the serve package to run the application
RUN npm install -g serve

# Expose the port on which the application will run
EXPOSE 3000

# Start the application with serve
CMD [ "serve", "-s", "public", "-l", "3000" ]