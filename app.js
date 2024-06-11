const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/products", (req, res) => {
  controller.getProducts((req, res, next) => {
    res.send();
  });
});

app.post("/createproduct", (req, res) => {
  controller.addProduct(req.body, (callack) => {
    res.send();
  });
});

app.post("/updateproduct", (req, res) => {
  controller.updateProduct(req.body, (callack) => {
    res.send(callack);
  });
});

app.post("/deleteproduct", (req, res) => {
  controller.deleteProduct(req.body, (callack) => {
    res.send(callack);
  });
});

module.exports = app;
