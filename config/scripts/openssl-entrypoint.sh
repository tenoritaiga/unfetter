#!/bin/sh
openssl req -subj /CN=localhost/DC=localhost/DC=localdomain -new -newkey rsa:2048 -days "365" -nodes -x509 -keyout /tmp/certs/server.key -out /tmp/certs/server.crt
