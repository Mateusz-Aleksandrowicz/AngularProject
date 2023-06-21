require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const cors = require("cors");
const mongoose = require('mongoose');
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello world');
})

app.use(express.json());
const featuresRouter = require('./routes/features');
const tasksRouter = require('./routes/tasks');
router.use('/feature', featuresRouter);
router.use('/task', tasksRouter);
app.use('/', router);

let db = mongoose.connection;
mongoose.connect(process.env.DB_CONNECTION + '/' + process.env.DB_NAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD
});

db.on('error', err => {
  console.log('DB Connection Error: ', err)
});
db.on('open', () => {
  console.log('DB Connected')
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})