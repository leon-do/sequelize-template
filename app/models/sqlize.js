// Dependencies CREATES TABLE
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "makeTable" table that matches up with DB
var makeTable = sequelize.define("tableName", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  item1: {
    type: Sequelize.STRING
  }
});

// Syncs with DB. Automatically creates table
makeTable.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = makeTable;
