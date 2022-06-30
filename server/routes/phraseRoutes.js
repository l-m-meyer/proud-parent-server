const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db
      .query(`SELECT * FROM phrases ORDER BY RANDOM() LIMIT 1`)
      .then((data) => {
        res.json(data.rows[0]);
      });
  });

  return router;
}