const express = require('express');
const router = express.Router();

// Todo Model
const Todo = require('../../models/Todo');

// @route  GET api/todos
// @desc   Get All Todos
// @access Public
router.get('/', (req, res) => {
  Todo.find()
  .sort({date: -1})
  .then(todos => res.json(todos));
});

// @route  POST api/todos
// @desc   Create A Todo
// @access Public
router.post('/', (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  });
  newTodo.save().then(todo => res.json(todo));
});

// @route  DELETE api/todos:id
// @desc   Delete A Todo
// @access Public
router.delete('/:id', (req, res) => {
  Todo.findById(req.params.id)
  .then(todo => todo.remove()
  .then(() => res.json({ success: true })))
  .catch(err => res.status(404).json({ success: false }));
});

// @route  Update api/edit/todos:id
// @desc   Update A Todo
// @access Public
router.post('/:id', (req, res) => {
  Todo.findById(req.params.id)
  .then(todo => {
    if (todo) {
      todo.title = req.body.title;
      return todo.save();
    } else {
      console.log(err);
    }
  })
  .then(() => res.json({ success: true }))
  .catch(err => res.status(404).json({ success: false }));

});

module.exports = router;
