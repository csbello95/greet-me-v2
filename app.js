const express = require("express");
const app = express();

app.get('/makers/:name', (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.send(`<h1>Hola desconocido!</h1>`);
  } else {
    return res.send(
      `<h1>Hola ${name.charAt(0).toUpperCase() + name.slice(1)}!</h1>`
    );
  }
});

app.listen(3000, () => console.log("Listening on port 3000!"));
