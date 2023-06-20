let express = require('express');
let router = express.Router();
let featuresController = require("../controllers/features");

router.post('/', featuresController.create)

module.exports = router;