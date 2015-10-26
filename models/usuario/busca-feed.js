module.exports = function (req, res, next) {

    var json = [
        {
            "tipo": "post",
            "foto": {
                "url": "/img/perfil/1/post12365.jpg",
                "titulo": "No teatro de boas.."
            },
            "campanha": {
                "hashtag": "#campanhapopularizacao"
            }
        },
        {
            "tipo": "post",
            "foto": {
                "url": "/img/perfil/2/post85476.jpg",
                "titulo": "Doando agasalhos =)"
            },
            "campanha": {
                "hashtag": "#campanhadofrio"
            }
        }
    ];

    res.json(json);
    next();
};