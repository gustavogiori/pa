var convict = require('convict');


// Define a schema
var conf = convict({
    env: {
        doc: "Ambiente no qual a aplicação está rodando.",
        format: ["production", "development", "test"],
        default: "development",
        env: "NODE_ENV"
    }
});


// Perform validation
conf.validate({strict: true});


module.exports = conf;