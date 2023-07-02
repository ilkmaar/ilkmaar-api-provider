# sql-api-provider

This is a server I built as part of prototyping the Ilkmaar data system.

This server connects to and returns results of queries to a Google Cloud MySQL server.

It provides the backend for the ilkmaar-data-system project.

# setup

1. clone repo
2. create db-config.json using db-config.json.example

To authenticate to Google Cloud MySQL you need to download and run 'cloud-sql-proxy' and have the correct environmental variables added.

Instructions [here](https://cloud.google.com/sql/docs/mysql/connect-instance-local-computer).

3. run "npm install" to install required node_modules

# run

npm start

# test

check e.g. localhost:8000/creatures/list