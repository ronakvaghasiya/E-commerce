const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("Home page!");
});
app.get("/login", (req, res) => {
  console.log(req);
  res.send("Login page!");
});

app.get("/signup", (req, res) => {
  console.log(req);
  res.send("signup page!");
});

app.get("/logout", (req, res) => {
  console.log(req);
  res.send("Signout page!");
});
const admin = (req, res) => {
  console.log(req);
  res.send("admin page!");
};

const isAdmin = (req, res, next) => {
  console.log(req);
  res.send("Admin dashboard page!");
  next();
};
app.get("/admin",isAdmin, admin);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
