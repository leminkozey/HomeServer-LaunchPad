FROM nginx:alpine

# Copy static site into nginx html directory
COPY . /usr/share/nginx/html

EXPOSE 80
