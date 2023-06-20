'use strict';

const mongoose = require("mongoose");

let FeatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "TODO",
  },
  owner: {
    type: String,
    required: false,
    default: "John Doe",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
});

module.exports = mongoose.model("Feature", FeatureSchema);