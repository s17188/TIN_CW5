const todoController = require('../controllers/todoController');
const router = require('express').Router();

router.get('/',todoController.index)

router.post('/',todoController.new)

router.post('/:id/completed',todoController.update)

router.post('/:id/delete',todoController.delete)

module.exports = router;