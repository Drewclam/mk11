const createFightersTable = `CREATE TABLE fighters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name text,
  image_url text
)`;

const createFighterMovesTable = `CREATE TABLE fighter_moves (
  fighter_id INT FOREIGN KEY
)`;

const selectFighters = `SELECT * FROM fighters`;

const insertFighter = fighter =>
  `INSERT INTO fighters (name, image_url) VALUES ('${fighter.name}', '${fighter.imageUrl}');`;

module.exports = {
  createFightersTable,
  createFighterMovesTable,
  insertFighter,
  selectFighters,
};
