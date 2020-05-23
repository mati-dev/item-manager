FROM nginx:alpine

COPY public /usr/share/nginx/html
COPY dist /usr/share/nginx/html

