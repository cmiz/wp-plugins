FROM php:7.4-apache

ARG HOST_UID
ARG HOST_GID

RUN usermod --uid ${HOST_UID} www-data && groupmod --gid ${HOST_GID} www-data

RUN apt-get update && apt-get install -y \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    msmtp

RUN docker-php-ext-install \
    gd \
    zip \
    mysqli \
    pdo_mysql \
    mbstring \
    opcache

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/apache2/local.test.site.key \
    -out /etc/apache2/local.test.site.crt \
    -subj "/C=JP/ST=YourState/L=YourCity/O=YourOrganization/CN=local.test.site"

RUN a2enmod ssl && a2enmod rewrite

WORKDIR /var/www/html
