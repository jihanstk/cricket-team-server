const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 5020 | process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("cricket-team is running");
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
