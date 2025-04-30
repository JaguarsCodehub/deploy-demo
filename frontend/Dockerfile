# Step 1: Build Vite app
FROM node:18 as builder

WORKDIR /app
COPY . .

# Clean up to avoid rollup-native bug
RUN rm -rf node_modules package-lock.json

# Use install with legacy peer deps to avoid rollup issues
RUN npm install --legacy-peer-deps

RUN npm run build

# Step 2: Serve via Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
