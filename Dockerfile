
FROM httpd

WORKDIR /usr/local/apache2/htdocs

COPY ./tu_pagina_web/ .

FROM httpd
WORKDIR /public-html/ /usr/local/apache2/htdocs/
COPY . .