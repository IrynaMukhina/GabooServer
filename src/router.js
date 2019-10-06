'use strict';

let express = require('express');
let controller = require('./controller');
let router = express.Router();

router.get('/api/data', controller.getData);
router.get('*', controller.notFound);

module.exports = router;