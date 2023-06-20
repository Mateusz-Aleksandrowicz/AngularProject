let express = require('express');
let router = express.Router();
let tasksController = require("../controllers/tasks");

router.get('/:id', tasksController.read)
router.patch('/:id', tasksController.update)
router.delete('/:id', tasksController.delete)
router.get('/', tasksController.list)

module.exports = router;