var async = require('async');
var mysql = require('mysql');
var _ = require('underscore');


module.exports = function (req, res, nextMiddleware) {

    function buscaUsuarios(finish) {

        var mysql = req['_db']['mysql']; // recupera as conexões com o mysql (ver arquivo /middlewares/db-connect.js)

        var params = [
            req['params']['nome_usuario'] // recupera o nome do usuário passado na url (ver arquivo /router.js)
        ];


        mysql.query(
            "call sp_busca_usuarios_nome(?)"
            , params // parâmetros que serão passados para a procedure (uma ? para cada elemento do array)
            , function (err, rows) {

                if (err) throw err;

                var linhas = rows[0];

                finish(null, linhas);
            }
        );
    }


    function geraJSON(usuarios, finish) {

        var json = [];


        _.each(usuarios, function (linha) {

            var obj = {
                "id": linha["colab_id"]
                , "nome": linha["colab_nome"]
                , "endereco": {
                    "estado": linha["colab_estado"]
                    , "cidade": linha["colab_cidade"]
                }
                , "empresa": {
                    "nome": linha["empresa_nome"]
                    , "endereco": {
                        "estado": linha["empresa_estado"]
                    }
                }
            };

            json.push(obj);
        });


        finish(null, json);
    }


    async.waterfall(
        [
            buscaUsuarios
            , geraJSON
        ]

        , function (erro, resultJSON) {

            // se erro != null lança uma exceção
            if (erro) throw erro;

            // gera a resposta no formato de JSON
            res.json(resultJSON);

            // vai para o próximo middleware configurado no Express
            nextMiddleware();
        }
    );
};