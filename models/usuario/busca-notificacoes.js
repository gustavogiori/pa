module.exports = function (req, res, next) {

    var json = [
        {
            "tipo":"novo-seguidor",
            "mensagem":"Gustavo Giori começou a te seguir."
        },
        {
            "tipo":"nova-campanha",
            "mensagem":"Sua empresa iniciou a campanha: Aprenda Inglês. Fique atento e poste fotos para pontuar!"
        }
    ];

    res.json(json);
    next();
};