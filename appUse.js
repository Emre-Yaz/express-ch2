const express = require("express");
const app = express();

function validateUser(req, res, next) {
  res.locals.validated = true;
  console.log("validated ran!");
  next();
}

app.use("/admin", validateUser);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/admin", (req, res) => {
  res.send("Hello Admin!");
});

app.listen(5000, () => console.log("Server ready"));
