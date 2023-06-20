'use strict';

const mongoose = require("mongoose");

let ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Project", ProjectSchema);