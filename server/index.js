const express = require("express");
const { Sequelize } = require("sequelize");
const sequelize = require("./database/db.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

require("./database/db.js");

const server = express();
server.use(cors());
server.name = "API";
server.options('*', cors()) // include before other routes

server.use(bodyParser.urlencoded({
  extended: true,
  limit: "50mb"
}));
server.use(bodyParser.json({
  limit: "50mb"
}));
server.use(cookieParser());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//--------------------------
const createOne = (name) => {
  return new Promise((resolve, reject) => {
    // Validación por parte de Sequelize

    Telefono.create({telefono: name})
      .then((product) => {
        resolve(product);
      })
      .catch((err) => reject({ error: err }));
  });
};


//************************** */

server.post('/', (req, res) => {
    let { telephone }  = req.body;
    console.log(telephone)
     telephone = parseInt(telephone)
     createOne(telephone)
                .then((product) => res.status(201).json(product))
                .catch((err) => res.status(400).json(err));

})

server.get('/', (req, res) => {
    res.send('hola')
})




const Telefono = sequelize.define('phones', {
  telefono: {
    type: Sequelize.INTEGER
  }
})



sequelize.sync({ force: false }).then(() => {
  server.listen(5000, () => {
    console.log("%s listening at 5000"); // eslint-disable-line no-console
  });
});