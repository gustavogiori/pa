var convict = require('convict');


// Define a schema
var conf = convict({
    mysql: {
        pool: {
            connectionLimit: {
                doc: "Host do banco",
                format: "int",
                default: 10
            },
            host: {
                doc: "Host do banco",
                format: "ipaddress",
                default: "127.0.0.1"
            },
            user: {
                doc: "Usuário do banco",
                format: String,
                default: "root"
            },
            password: {
                doc: "Senha do banco",
                format: String,
                default: ""
            },
            database: {
                doc: "Nome do banco",
                format: String,
                default: 'pa'
            }
        }
    }
});


// Perform validation
conf.validate({strict: true});


module.exports = conf;