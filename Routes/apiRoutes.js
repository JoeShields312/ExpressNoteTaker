var path = require("path");

var tableData = require("../data/tableData");

module.exports = function(app){

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../Public/main.html"));
  });

  app.get("/tables", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../Public/tables.html"));
  });

  app.get("/reserve", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../Public/reserve.html"));
  });
  
  // Displays all tableData 
  app.get("/api/table", function(req, res) {
    return res.json(tableData );
  });

  app.get("/api/waitList", function(req, res) {
    return res.json(tableData );
  });
  
  // Create New tableData  - takes in JSON input
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newtableData  = req.body;
  
    console.log(newtableData );
  
    // We then add the json the user sent to the character array
    tableData .push(newtableData );
  
    // We then display the JSON to the users
    res.json(newtableData );
  });
  };