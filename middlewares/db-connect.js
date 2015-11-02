var mysql = require('mysql');

var connectionObj = require('../config/db').get('mysql.pool');

var pool;


module.exports = function (req, res, nextMiddleware) {

    if (!pool) {
        pool = mysql.createPool(connectionObj);
    }

    // adiciona o pool de conexões na propriedade _db do objeto de requisição
    req._db = {
        mysql: pool
    };

    nextMiddleware();
};