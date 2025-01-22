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
function show(req, res) {
  // ID INSERITO NEL URL
  const id = parseInt(req.params.id);
  // Dichiarazione dell mia query
  const sql = ` SELECT posts.*,  GROUP_CONCAT(tags.label) AS tag_label
FROM posts
JOIN post_tag ON posts.id = post_tag.post_id
JOIN tags ON tags.id = post_tag.tag_id
WHERE posts.id =? `;
  // Eseguo la query  SQL
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "DB QUERY FAILED" });
    // SE LA QUERY è ANDATA A BUON FINE
    console.log(results);
    res.json(results);
  });
}
// CREATE
function store(req, res) {}
// UPDATE
function update(req, res) {}
// DELETE
function destroy(req, res) {
  // ID inserito nel URL
  const id = parseInt(req.params.id);
  // DICHIARO LA MIA QUERY
  const sql = "DELETE FROM `db_blog`.`posts` WHERE (`id` = '?')";
  // ESERGUO LA QUERY
  connection.query(sql, [id], (err, results) => {
    // se c'è un errore nell esecuzione ella query
    if (err) return res.status(500).json({ error: "DB QUERY FAILED" });
    console.log(results);
    res.sendStatus(204);
  });
}
// ESPORTAZIONE di tutti le funzione
module.exports = { index, show, store, update, destroy };
