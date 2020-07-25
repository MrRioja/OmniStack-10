const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack10:omnistack10@cluster0.zj4el.mongodb.net/omnistack10?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(express.json());
app.use(routes);
app.listen(3333);