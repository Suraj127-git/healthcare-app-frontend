# Use Node.js as the base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage - works for both Vite (dist) and CRA (build)
COPY --from=builder /app/dist /usr/share/nginx/html
# If the above fails, comment it and uncomment the following line for Create React App
# COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration if you have custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]