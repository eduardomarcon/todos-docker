const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const port = 3000;
const app = express();
const configDb = require("./config/db");

mongoose.connect(configDb.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(morgan("tiny"));

// Routes
var todosRoutes = require("./routes/todos");

app.use("/api/todos-docker", todosRoutes);

app.listen(port, () => {
  console.log(`Server running in docker on port ${port}`);
});
