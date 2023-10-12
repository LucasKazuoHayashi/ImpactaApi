const express = require("express");
const router = express.Router();
const produtoRouter = require("./produtoRouter");
const componenteRouter = require("./componenteRouter");

router.use("/produto", produtoRouter);
router.use("/produto", componenteRouter);

module.exports = router;
