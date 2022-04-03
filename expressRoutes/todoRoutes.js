const express = require('express');
var todoRoutes = express.Router();
var Todo = require('../models/Todo');

todoRoutes.route('/add').post((req, res) => {
  var todo = new Todo(req.body);
  todo.save().then(todo => {
    res.status(200).send('添加成功');
  }).catch(err => {
    res.status(400).send('添加失败');
  });
});

todoRoutes.route('/update/:id').post((req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
    if (err) {
      res.status(400).send('编辑失败');
    } else {
      res.status(200).send('编辑成功');
    }
  });
});

todoRoutes.route('/delete/:id').get((req, res) => {
  Todo.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) {
      res.status(400).send('删除失败');
    } else {
      res.status(200).send('删除成功');
    }
  });
});

todoRoutes.route('/find').post((req, res) => {
  Todo.find(req.body, (err, todos) => {
    if (err) {
      res.status(400).send('查询失败');
    } else {
      res.status(200).send(todos);
    }
  });
});

module.exports = todoRoutes;
