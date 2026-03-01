# Build stage — install deps and generate static files
FROM node:22-slim AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build static export (outputs to /app/out)
COPY . .
RUN npm run build

# Production stage — serve static files with nginx
FROM nginx:alpine

# Copy the static export into nginx's default serve directory
COPY --from=build /app/out /usr/share/nginx/html

# Custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
