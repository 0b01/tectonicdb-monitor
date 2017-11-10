// express
const express = require('express');
const app = express()

// renderer
var mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views'); // you can change '/views' to '/public',

// DB
const {TectonicDB} = require('tectonic');
const db = new TectonicDB();

app.get('/stats', async (req, res) => {

  let performance = await db.perf();
  if (performance.success) {
      res.setHeader('Content-Type', 'application/json');
      res.send(performance.data);

  } else {
      res.send("ERROR!");
  }
})

app.get('/', (req, res) => {
    res.render('index', {
        locals: {
          title: 'Welcome'
        }
    });
});

app.listen(3000, function () {
    console.log("PORT 3000.")
})
