const express = require("express");
const parse = require("body-parser");
const app = express();
const port = 3000;
app.use(parse.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile('./public/index.html');
});
app.post("/", (req, res) => {
  res.send("Your BMI is : " + req.body.weight / Math.pow(req.body.height, 2));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
