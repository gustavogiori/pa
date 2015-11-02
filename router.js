var express = require('express');
var router = express.Router();


// MIDDLEWARES
// =====================================================================================================================

router.use(require('./middlewares/db-connect'));


// USUÁRIO
// =====================================================================================================================

router.get('/usuario/feed/:ini/:end', require('./models/usuario/busca-feed'));
router.get('/usuario/perfil', require('./models/usuario/busca-perfil'));
router.get('/usuario/perfil/financas', require('./models/usuario/busca-financas'));
router.get('/usuario/notificacoes/:ini/:end', require('./models/usuario/busca-notificacoes'));
router.get('/usuarios/:nome_usuario', require('./models/usuario/busca-ativos'));

router.put('/usuario/perfil/foto/:id_foto', require('./models/usuario/atualiza-foto'));

router.delete('/usuario/perfil/foto/:id_foto', require('./models/usuario/deleta-foto'));

router.post('/usuario/post', require('./models/usuario/novo-post'));


// CAMPANHA
// =====================================================================================================================

router.get('/campanhas', require('./models/campanha/busca-ativas'));
router.get('/campanhas/rankings', require('./models/campanha/busca-rankings'));

router.post('/campanha/:id_campanha/participante', require('./models/campanha/novo-participante'));


// PRÊMIOS
// =====================================================================================================================

router.get('/premios/:ini/:end', require('./models/premios/busca-disponiveis'));

router.post('/premio/:id_premio/checkout', require('./models/premios/novo-checkout'));


module.exports = router;