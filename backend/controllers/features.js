const Feature = require("../models/Feature");

exports.create = (req, res) => {
  let feature = new Feature({
    name: req.body.name,
    description: req.body.description,
  })
  feature.save().then((result) => {
    res.json(result)
  }).catch(err => {
    res.json(err, 400);
  })
}

exports.read = (req, res) => {
  Feature.findOne({_id: req.params.id}).then((feature) => {
    if (feature) {
      res.json(feature);
    } else {
      res.json(false, 404);
    }
  })
}

exports.update = (req, res) => {
  Feature.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: 'after' }
  ).then((result) => {
    res.json(result, 200);
  })
}

exports.delete = (req, res) => {
  Feature.findByIdAndDelete(req.params.id).then((result) => {
    if (result) {
      return res.json(true, 200);
    } else {
      return res.json(false, 404);
    }
  })
}

exports.list = (req, res) => {
  Feature.find({}).then((features) => {
    res.json(features);
  })
}