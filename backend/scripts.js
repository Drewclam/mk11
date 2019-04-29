const createFightersTable = `CREATE TABLE fighters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name text
)`;

const createFighterMovesTable = `CREATE TABLE fighter_moves (
  fighter_id INT FOREIGN KEY
)`;

const selectFighters = `SELECT * FROM fighters`;

const insertFighter = name => `INSERT INTO fighters (name) VALUES ('${name}');`;

module.exports = {
  createFightersTable,
  createFighterMovesTable,
  insertFighter,
  selectFighters,
};
