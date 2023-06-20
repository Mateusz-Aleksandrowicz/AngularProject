const Feature = require("../models/Feature");

exports.create = (req, res) => {
  let feature = new Feature({
    name: req.body.name,
    description: req.body.description,
  })
  feature.save().then((result) => {
    res.json(result)
  }).catch(err => {
    res.json(err, 400)
  })
}

exports.read = (req, res) => {
  Feature.findOne({_id: req.params.id}).then((feature) => {
    if (feature) {
      res.json(feature);
    } else {
      res.json(false, 404)
    }
  })
}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.listByProjectId = (req, res) => {

}