module.exports = function (req, res, next) {

    var json = {
        "pontos": 260,
        "tickets": 750
    };

    res.json(json);
    next();
};