# Padlock-VersionControl

This app is built in two steps:

 - [Back-End](#1-Back-End)
 - [Front-End](#2-Front-End)
---

## 1. Back-End

Server built with Node.js and the database with MongoDB.

We can initialize it in two ways:
    
    1.1 With npm commands
    1.2 With docker

### 1.1 Initialize with npm commands

First of all we need to clone our repo into our machine and put the following command:

```
npm install 
```
This command will download and install all the dependencies that our project needs.

**IMPORTANT:** make sure that our project has a '.env' file to connect to our MongoDB cluster (or, if you want, modify the MONGOURI variable to connect to a local database).

If we open our package.json, we can see the script commands to run our back end.
```
{
  "name": "<name>",
  "version": "1.0.0",
  "description": "",
  "main": "handler.js",
  "scripts": {
    "start": "node src/server.js",
    "server": "nodemon src/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "child_process": "^1.0.2",
    "crypto-js": "^4.1.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-validator": "^6.12.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.13.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}

```
We'll use the following command to start our backend with npm:
```
npm run server
```

### 1.2 Initialize with Docker Compose

With this option, we only need to make sure that we've Docker and Docker Compose installed at our system. If it's not, we can solve it following the official site's instructions:
    
- [Docker Desktop Installation for Windows](https://docs.docker.com/docker-for-windows/install/)
- [Docker Installation for Linux(Ubuntu)](https://docs.docker.com/engine/install/ubuntu/) 
- [Docker Compose for both Ubuntu and Windows](https://docs.docker.com/compose/install/)

Once you've installed Docker & Docker Compose, you only have to go to the server's folder and run compose:

```
cd server/
sudo docker-compose up 
```
or you can ru ndocker-compose in the background with: 
```
sudo docker-compose up -d
```

You must see a terminal prompt indicating that our backend is running:
```
Starting database_mongo ... done
Starting server_docker  ... done
Attaching to database_mongo, server_docker
database_mongo | WARNING: no logs are available with the 'none' log driver
server_docker | 
server_docker | > <name>@1.0.0 server /usr/src/app
server_docker | > nodemon src/server.js
server_docker | 
server_docker | [nodemon] 2.0.12
server_docker | [nodemon] to restart at any time, enter `rs`
server_docker | [nodemon] watching path(s): *.*
server_docker | [nodemon] watching extensions: js,mjs,json
server_docker | [nodemon] starting `node src/server.js`
server_docker | API running at port 5000
server_docker | connected to MongoDB!
```
---

## 2. Front-End
