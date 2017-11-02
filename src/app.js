const express = require('express');
const app = express()
const {TectonicDB} = require('./tectonicdb');

const db = new TectonicDB();

app.get('/stats', async (req, res) => {
  let performance = await db.perf();
  if (performance.success) {
      res.send(performance.data);
  } else {
      res.send("ERR");
  }
})

app.listen(3000, function () {
    console.log("PORT 3000.")
})