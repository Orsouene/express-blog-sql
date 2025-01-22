const connection = require("../connection");

// INDEX
function index(req, res) {
  // Dichiaro la mia query
  const sql = "SELECT * FROM db_blog.posts";
  // eseguo la query SQL
  connection.query(sql, (err, results) => {
    // se c'è un errore nell esecuzione ella query
    if (err) return res.status(500).json({ error: "DB QUERY FAILED" });
    // se la query è andata a buon fine
    console.log(results);
    res.json(results);
  });
}

// SHOW
function show(req, res) {}
// CREATE
function store(req, res) {}
// UPDATE
function update(req, res) {}
// DELETE
function destroy(req, res) {
  // ID inserito nel URL
  const id = parseInt(req.params.id);
  const sql = "DELETE FROM `db_blog`.`posts` WHERE (`id` = '?')";
  connection.query(sql, [id], (err, results) => {
    // se c'è un errore nell esecuzione ella query
    if (err) return res.status(500).json({ error: "DB QUERY FAILED" });
    console.log(results);
    res.sendStatus(204);
  });
}
// ESPORTAZIONE di tutti le funzione
module.exports = { index, show, store, update, destroy };
