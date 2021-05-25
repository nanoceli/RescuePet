const Perros = require('./perros');
const router = require('express').Router();

router.use("/perros", Perros);

module.exports = router;