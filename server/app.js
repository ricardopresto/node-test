const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/", (req, res) => {
  fs.writeFile("newfile.txt", JSON.stringify(req.body), () => {});

  res.send(req.body);
});
