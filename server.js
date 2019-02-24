// Create a basic server using Express.JS
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// CAN WE DISSECT THIS FOR BETTER UNDERSTANDING?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
// ERRORS - CAN'T FIGURE OUT WHY
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});