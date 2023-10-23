const express = require("express");
const app = express();

const helmet = require("helmet");
app.use(helmet());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5008);
