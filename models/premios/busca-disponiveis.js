module.exports = function (req, res, next) {

    var json = [
        {
            "id": 1,
            "nome": "Chaveiro Personalizado",
            "desc": "Chaveiro feito de metal com detalhes nas laterais ...",
            "tickets": 85
        },
        {
            "id": 2,
            "nome": "Mochila da Empresa",
            "desc": "Revestida em tecido de fácil limpeza ...",
            "tickets": 725
        },
        {
            "id": 3,
            "nome": "BMW X6",
            "desc": "Veículo de luxo top ...",
            "tickets": 1000000000
        }
    ];

    res.json(json);
    next();
};