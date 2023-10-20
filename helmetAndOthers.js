const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.json("Test");
});

//
const crypto = require("crypto");
const nonce = crypto.randomBytes(16).toString("base64");
console.log(nonce);
//

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' '++Tu6aQjv0ICnaN/W2CHHQ=='"
  );
  next();
});
//

app.listen(5000);
