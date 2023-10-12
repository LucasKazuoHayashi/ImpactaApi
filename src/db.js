const pgp = require("pg-promise")();
const db = pgp({
  connectionString: "postgres://impacta:impacta123@localhost:5432/api",
});

module.exports = db;
