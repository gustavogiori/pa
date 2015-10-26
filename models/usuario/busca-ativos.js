module.exports = function (req, res, next) {

    var json = [
        {
            "id": 1,
            "nome": "Maria",
            "endereco": {
                "estado": "MG",
                "cidade": "Belo Horizonte"
            },
            "empresa": {
                "nome": "ACME ltda",
                "endereco": {
                    "estado": "MG"
                }
            }
        },
        {
            "id": 2,
            "nome": "Maria",
            "endereco": {
                "estado": "GO",
                "cidade": "Goiânia"
            },
            "empresa": {
                "nome": "VASP",
                "endereco": {
                    "estado": "GO"
                }
            }
        }
    ];

    res.json(json);
    next();
};