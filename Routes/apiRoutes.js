const router = require('express').Router();
const fs = require('fs');
const path = require('path');
// const obj = require('../Develop/db/db.json')

router.get("/notes", (Request, Response) => {
  // console.log(obj);
  const data = getDataBase();
  Response.json(data);
});

//post
router.post("/notes", (Request, Response) => {
  const leData = Request.body
  const data = getDataBase();
  leData.id = Math.random();
  data.push(leData)
  saveDataBase(data)
  Response.json(leData)
  console.log(leData)
});

//delete
router.delete("/notes/:id", (Request, Response) => {
  const leData = Request.body
  const notes = getDataBase();
  const result = notes.filter(note => note.id != Request.params.id);
  saveDataBase(result);
  Response.send();
});

module.exports = router;

function getDataBase() {
  const json = fs.readFileSync(path.join(__dirname, "../db/db.json")) 
  return JSON.parse(json);
}

function saveDataBase(newData) {
  return fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(newData))
}

