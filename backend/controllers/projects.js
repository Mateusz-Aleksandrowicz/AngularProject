const Project = require("../models/Project");

exports.getDefault = (req, res) =>{
  Project.findOne({}).then((project) => {
    res.json({project})
  });
}