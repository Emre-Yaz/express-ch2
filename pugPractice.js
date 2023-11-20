const express = require("express");
const app = express();

const helmet = require("helmet");
app.use(helmet());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.set("views", "views");
app.set("view engine", "pug");

function validateUser(req, res, next) {
  res.locals.validated = true;
  next();
}

app.use(validateUser);

app.get("/", (req, res) => {
  res.render("index", {
    countries: [
      {
        name: "Russia",
        capital: "Moscow",
        western: false,
      },
      {
        name: "USA",
        capital: "Washington",
        western: true,
      },
    ],
    msg: "Success!",
    msg2: "Success2!",
    html: "<a href='www.google.com'>hey </a>",
  });
});

app.listen(5008);
