const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("success");
});

const myPort = process.env.port || 3000;
app.listen(myPort, () => {
  console.log(`server started at ${myPort}`);
});
