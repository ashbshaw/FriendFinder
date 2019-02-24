// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information 
// ===============================================================================

var friendData = require("../data/friends");

// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // NEED TO TALK THROUGH POST ON A CONCEPTUAL LEVEL AND PRACTICE THE POST REQUEST
  // ---------------------------------------------------------------------------


};

  