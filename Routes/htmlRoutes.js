var path = require("path");

module.exports = function(app) {
    
app.get("/tables", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../Public/tables.html"));
  });

app.post("/api/customers", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newtable = req.body;
  
    console.log(newtable);
  
    // We then add the json the user sent to the customers array
    customers.push(newtable);
  
    // We then display the JSON to the users
    res.json(newtable);
  });

};