module.exports = function (req, res, next) {

    var json = {
        "status": "ok"
    };

    res.json(json);
    next();
};