const express = require("express");
const routers = express.Router();

// IMPORTATO TUTTI LE FUNZIONE
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/controller");
// INDEX
routers.get("/", index);
// SHOW
routers.get("/:id", show);
// CREATE
routers.post("/", store);
// UPDATE
routers.put("/:id", update);
// DELETE
routers.delete("/:id", destroy);

// ESPORTAZIONE
module.exports = routers;
