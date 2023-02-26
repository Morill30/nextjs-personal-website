FROM nginx:1.23.1

WORKDIR /var/www/html

COPY docker/nginx/next.conf /etc/nginx/conf.d/next.conf
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

COPY ./public/ /var/www/html/