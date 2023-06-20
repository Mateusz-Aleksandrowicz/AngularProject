'use strict';

const mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  feature: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Feature",
  },
  status: {
    type: String,
    required: true,
    default: "TODO",
  },
  addedDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  owner: {
    type: String,
    required: false,
    default: "John Doe",
  }
})

module.exports = mongoose.model("Task", TaskSchema);