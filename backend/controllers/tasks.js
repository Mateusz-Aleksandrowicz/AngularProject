const Task = require("../models/Task");

exports.create = (req, res) => {
  let task = new Task({
    name: req.body.name,
    description: req.body.description,
    feature: req.params.id
  })
  task.save().then((result) => {
    res.json(result)
  }).catch(err => {
    res.json(err, 400);
  })
}

exports.read = (req, res) => {
  Task.findOne({_id: req.params.id}).then((task) => {
    if (task) {
      res.json(task);
    } else {
      res.json(false, 404);
    }
  })
}

exports.update = (req, res) => {
  Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: 'after' }
  ).then((result) => {
    res.json(result, 200);
  })
}

exports.delete = (req, res) => {
  Task.findByIdAndDelete(req.params.id).then((result) => {
    if (result) {
      return res.json(true, 200);
    } else {
      return res.json(false, 404);
    }
  })
}

exports.list = (req, res) => {
  Task.find({}).then((tasks) => {
    res.json(tasks);
  })
}

exports.listByFeature = (req, res) => {
  Task.find({feature: req.params.id}).then((tasks) => {
    return res.json(tasks);
  })
}