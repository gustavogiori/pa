module.exports = function (req, res, next) {

    var json = {
        "geral": {
            "nome": "Ranking Geral",
            "colaboradores": [
                {
                    "id": 1,
                    "nome": "Maria",
                    "pts": 15000
                },
                {
                    "id": 2,
                    "nome": "Ronaldo",
                    "pts": 10000
                },
                {
                    "id": 3,
                    "nome": "Luana",
                    "pts": 9500
                }
            ]
        },
        "campanhas": [
            {
                "id": 10,
                "nome": "Inglês Total",
                "colaboradores": [
                    {
                        "id": 4,
                        "nome": "Pedro",
                        "pts": 1200
                    },
                    {
                        "id": 2,
                        "nome": "Ronaldo",
                        "pts": 700
                    },
                    {
                        "id": 1,
                        "nome": "Maria",
                        "pts": 625
                    }
                ]
            },
            {
                "id": 20,
                "nome": "Agasalho para Todos",
                "colaboradores": [
                    {
                        "id": 3,
                        "nome": "Luana",
                        "pts": 1400
                    },
                    {
                        "id": 1,
                        "nome": "Maria",
                        "pts": 1100
                    },
                    {
                        "id": 2,
                        "nome": "Ronaldo",
                        "pts": 800
                    }
                ]
            }
        ]
    };

    res.json(json);
    next();
};