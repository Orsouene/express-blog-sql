function notFound(req, res) {
  res.status(404);
  res.json({
    error: "NOT-FOUND",
    message: "Item inesistente",
  });
}

// ESPORTAZIONE
module.exports = notFound;
