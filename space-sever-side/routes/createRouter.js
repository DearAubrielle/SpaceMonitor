const express = require("express");

function createRouter(controller) {
  const router = express.Router();
  router.get("/", controller);
  return router;
}

module.exports = createRouter;