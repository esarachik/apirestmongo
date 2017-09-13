'use strict';

<<<<<<< HEAD
=======

>>>>>>> 13042107258e9cc9ba051645dba1023c5e5e686e
var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

<<<<<<< HEAD
=======



>>>>>>> 13042107258e9cc9ba051645dba1023c5e5e686e
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

<<<<<<< HEAD
=======

>>>>>>> 13042107258e9cc9ba051645dba1023c5e5e686e
exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

<<<<<<< HEAD
=======

>>>>>>> 13042107258e9cc9ba051645dba1023c5e5e686e
exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

<<<<<<< HEAD
exports.delete_a_task = function(req, res) {
=======

exports.delete_a_task = function(req, res) {


>>>>>>> 13042107258e9cc9ba051645dba1023c5e5e686e
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
<<<<<<< HEAD

=======
>>>>>>> 13042107258e9cc9ba051645dba1023c5e5e686e
