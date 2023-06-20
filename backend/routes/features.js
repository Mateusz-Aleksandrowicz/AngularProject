let express = require('express');
let router = express.Router();
let featuresController = require("../controllers/features");
let tasksController = require("../controllers/tasks");

router.post('/', featuresController.create)
router.get('/:id', featuresController.read)
router.patch('/:id', featuresController.update)
router.delete('/:id', featuresController.delete)
router.get('/', featuresController.list)

router.post('/:id/task', tasksController.create)
router.get('/:id/task', tasksController.listByFeature)

module.exports = router;