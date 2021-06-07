const express = require("express");
const hbs = require("hbs");
const app = express();

//configuramos la variable entorno
const port = process.env.PORT || 3000;

//TODO: requerimos de (hbs)
app.set("view engine", "hbs");

//TODO: Parciales
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido estatico
app.use(express.static("public"));
 

app.get('/', function (req, res) {
    res.render("inicio", {
      nombre : "Enzo Roh",
      titulo : "Pagina creada por ",
      })
    });

app.get("/productos", function (req, res) {
    res.render("productos")
  });
app.get("/conocenos", function (req, res) {
  res.render("conocenos")
  });

app.listen(port, () => {
    console.log(`escuchando el servidor en el puerto http://localhost:${port}`);
  });
  



