const express = require("express");
const router = require("./routers");

let app = express();

const configApp = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/v1", router);

  return app;
};

const startApp = () => {
  const server = app.listen(3000, () => {
    console.log("The app is running. Port", server.address().port);
  });
};

module.exports = {
  configApp,
  startApp,
};
