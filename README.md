# entregasCompass
Compasss works folder


## Installation

You need [node.js](https://nodejs.org/) installed.

Use the package manager [npm](https://www.npmjs.com/) to install all dependence of  **gym-api**.

```bash
npm i
```
 
Also is needed to install the module "mysql" by
```bash
npm install mysql
```


This API uses MySql as the database.
The **tartas_db** most be created by using the /db/db.sql file. 
It's accessed by "root" user, password: "torito".
It can be mannaged by editing /db/database.js file.

## Usage

```bash
//To ejecute server locally use
node app.js
```
## Endpoints
| Method | Endpoint             |  Description                                                  |
| ------ | ---------------      | ------------------------------------------------------------- |
| GET    |/api/v1/productos     | Get all products                                              |
| GET    |/api/v1/productos/:id | Find a product by id                                          |
| POST   |/api/v1/productos/:id | Registre a new product                                        |