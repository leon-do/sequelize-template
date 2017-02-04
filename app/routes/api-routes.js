// Routes
// =============================================================

var sqlize = require('../models/sqlize.js')

module.exports = function(app) {

  // Index route loads index.html
  app.get("/apiData", function(req, res) {
    console.log(req.query)
    var input1 = req.query.input1;
  });

};