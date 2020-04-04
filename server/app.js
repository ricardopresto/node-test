const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});
