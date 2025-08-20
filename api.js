const express = require("express");
const app = express();
const PORT = 8090;

app.get("/url1", (req, res) => {
  res.json(["https://api1.example.com/one","hstatus","30 mins"]);
});
app.get("/url2", (req, res) => {
  res.json(["https://api2.example.com/one","hstatus","15 mins"]);
});
app.get("/url3", (req, res) => {
  res.json(["https://api3.example.com/one","hstatus","10 mins"]);
});
app.get("/url4", (req, res) => {
  res.json(["https://api4.example.com/one","hstatus","20 mins"]);
});
app.get("/url5", (req, res) => {
  res.json(["https://api5.example.com/one","hstatus","30 mins"]);
});

app.listen(PORT, () => {
  console.log(`service running at http://localhost:${PORT}`);
});
