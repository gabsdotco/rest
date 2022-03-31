### 🏗️ prisma + express | REST API template

that's a typescript template for a REST Api using Prisma and Express.

### **about**

this project use the following stack:

- [Typescript](https://www.typescriptlang.org/): to guarantee typesafe code
- [Express](https://expressjs.com/): to create a server for the api
- [Prisma](https://www.prisma.io/): a ORM to build data model, queries and operations faster
- [Nodemon](https://nodemon.io/): to guarantee a hot reload for the local development

### **setup**

for the correct usage of this template, follow the steps:

1. install or define the correct Node version (access NVM repository for better instructions: https://github.com/nvm-sh/nvm):
```bash
nvm install # or nvm use if you already have the version (see .nvmrc file to check)
```
2. install the project dependencies:
```bash
yarn install # or npm install
```

### **usage**

to run the application, check the available commands:

```bash
yarn dev # run the local server
yarn build # create a build for the api
yarn start # start the server based on the build
yarn generate # generate the prisma operations/queries/types within node_modules
yarn push # sync the prisma schema with the database schema
yarn migrate:dev # create a new migration for the database
yarn migrate:reset # reset the database data
```

### **structure**

the current project structure is:

```bash
/prisma/* # all files related to prisma (schema, migrations, etc...)
/src
  /app.ts # definition of the express applicaiton
  /server.ts # definition of the express server
  /routes/* # definitions of the individual routes using the express router
  /controller/* # definition of the individual controllers using the prisma
```

### **api usage**

to a better debugging and testing of the api, we recomend to use Insomnia importing the already made collection:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=REST%20API%20Template&uri=https%3A%2F%2Fwww.github.com%2Fgabsdotco%2Frest%2Fblob%2Fmain%2Finsomnia.json)