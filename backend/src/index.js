const express = require("express");
const routes = require("./routes")
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Tipos de parâmetros
 * 
 * Query params: Parâmetros enviados na rota após "?" (filtros, paginação, etc) 
 * Route params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

 /**
  * SQL: MySQL, PostgreSQL, etc.
  * NoSQL: MongoDB, etc.
  * 
  * Driver: funções normais de SQL
  * Query Builder: utilizando "orientação de objetos" para construir a query ao banco (adaptável a todos os tipos de banco de dados)
  */




app.listen(3333); 