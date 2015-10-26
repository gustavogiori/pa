module.exports = function (req, res, next) {

    var json = {
        "contatos": {
            "seguindo": 30,
            "seguidores": 17
        },
        "financas": {
            "pontos": 260,
            "tickets": 750
        },
        "fotos": {
            "capa": "/img/perfil/15/capa.jpg",
            "posts": [
                {
                    "id": 1,
                    "url": "/img/perfil/1/post95143.jpg",
                    "titulo": "Suando na academia..",
                    "campanha": null
                },
                {
                    "id": 2,
                    "url": "/img/perfil/1/post35647.jpg",
                    "titulo": "Aprendendo inglês",
                    "campanha": {
                        "hashtag": "#inglesparatodos"
                    }
                }
            ]
        },
        "informacoes": {
            "nome": "Italo Marcos"
        }
    };

    res.json(json);
    next();
};