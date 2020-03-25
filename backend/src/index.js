const express = require('express');
const cors = require('cors'); 

const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/lstar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parametros nomeados enviados na torta apos "?" (filtros paginação)
   * Route Params: Parametros utilzados para identificar recursos
   * Request Body: Corpo da requissição, utilizado para ciriar ou alterar recursos
   */

   /**
    * Banco de dados:
    * SQL: MySQL,SQLite, PStgreSQL, ORacle, Microsft SQL Server
    * NoSQL: MongoDB, CouchDB,etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     * executar no terminal: npx knex init
     */
