const { Router } = require('express');
const router = Router();
const perrosPerdidos = require('../Controllers/perroPerdido')

router.post('/perdido', perrosPerdidos);

module.exports = router;