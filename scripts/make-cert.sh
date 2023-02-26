#!/usr/bin/env bash

openssl genrsa -out ./ssl/localhost.key 4096
openssl req -new -sha256 -out ./ssl/localhost.csr -key ./ssl/localhost.key -config ./ssl/local.cnf -batch
openssl x509 -sha256 -req -days 8030 -in ./ssl/localhost.csr -signkey ./ssl/localhost.key -out ./ssl/localhost.crt -extensions v3_req -extfile ./ssl/local.cnf
security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ./ssl/localhost.crt