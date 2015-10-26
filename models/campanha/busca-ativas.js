module.exports = function (req, res, next) {

    var json = [
        {
            "id": 1,
            "nome": "Agasalhos para Todos",
            "desc": "A campanha Agasalhos para Todos tem como principal objetivo ...",
            "hashtag": "#agasalhosparatodos",
            "periodo": {
                "inicio": "10/06/2015",
                "fim": "10/08/2015"
            }
        },
        {
            "id": 2,
            "nome": "Inglês Total",
            "desc": "Com a campanha Inglês Total esperamos ...",
            "hashtag": "#inglestotal",
            "periodo": {
                "inicio": "05/01/2015",
                "fim": "05/01/2016"
            }
        }
    ];

    res.json(json);
    next();
};