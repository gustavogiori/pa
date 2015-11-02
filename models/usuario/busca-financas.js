module.exports = function (req, res, next) {

    var json = {
        "tickets": 750
    };

    res.json(json);
    next();
};