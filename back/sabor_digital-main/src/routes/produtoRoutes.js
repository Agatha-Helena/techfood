const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');
const { verificarToken, verificarAdmin } = require('../middlewares/authMiddleware')

router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);
router.post('/', verificarToken, verificarAdmin, ProdutoController.cadastrar);
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', verificarToken, verificarAdmin, ProdutoController.deletar);

module.exports = router;