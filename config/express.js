var convict = require('convict');

var env = require('./env').get('env');

var porta = (env === 'development') ? 3000 : 80;


// Define a schema
var conf = convict({
    port: {
        doc: "Porta usada pela aplicação",
        format: "port",
        default: porta,
        env: "PORT"
    }
});


// Perform validation
conf.validate({strict: true});


module.exports = conf;