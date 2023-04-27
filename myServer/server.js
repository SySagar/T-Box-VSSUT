const express = require("express");
const cluster = require("cluster");
const os = require("os");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogroutes");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();

const numCPUs = os.cpus().length;

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//connect to mongodb
const dbURI = process.env.dbUri;
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");

    app.use(blogRoutes);
  })
  .catch((err) => console.log(err));

//a low level load-balancer
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });

} else {
  app.listen(3000 || process.env.PORT, () => {
    console.log("🚀 Server started");
  });
}
