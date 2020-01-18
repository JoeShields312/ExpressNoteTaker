const router = require('express').Router();
const fs = require('fs');
const obj = require('../Develop/db/db.json')

router.get("/notes", (Request, Response) => {
  console.log(obj);
  Response.json(obj);
});

//post
router.post("/notes", (Request, Response) => {
  const leData = Request.body
  obj.push(leData)
  Response.json(leData)
  console.log(leData)
});

//delete
router.delete("/notes/:id", (Request, Response) => {
  const leData = Request.body
  Response.delete(leData)
  .then(leData) => {
    console.log(leData);
  }
});

module.exports = router;

delete myObject[':id'];
// OR delete myObject.currentIndustry;
  
console.log(myObject);