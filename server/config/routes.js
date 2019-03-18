const taskController = require('../controller/taskController');

module.exports = app => {
  app
    .get('/tasks', taskController.getAll)
    .get('/tasks/:id', taskController.getOne)
    .post('/tasks', taskController.createTask)
    .put('/tasks/:id', taskController.updateTask)
    .delete('/tasks/:id', taskController.delete);
}