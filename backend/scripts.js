const createFightersTable = `CREATE TABLE fighters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name text,
  image_url text
)`;

const createInputsTable = `CREATE TABLE inputs (
  name text,
  value int
)`;

const selectFighters = `SELECT * FROM fighters`;

const insertFighter = fighter =>
  `INSERT INTO fighters (name, image_url) VALUES ('${fighter.name}', '${fighter.imageUrl}');`;
const insertInput = input =>
  `INSERT INTO inputs (name, value) VALUES ('${input.name}', '${input.value}')`;

module.exports = {
  createFightersTable,
  createInputsTable,
  insertFighter,
  insertInput,
  selectFighters,
};
