const express = require('express');
const app = express();
const sequelize = require('./database/db.js')
const Port = 5000;


app.listen(Port, ()=>{
    console.log('listening in port', Port);
    //conexion
    sequelize.authenticate().then( () => {
        console.log('estamos conectados')
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/', (req, res)=>{
    res.send('bienvenido a la api')
})

/*const Telefonos = sequelize.define('Telefonos', {
  // Model attributes are defined here
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Telefonos === sequelize.models.Telefonos); // true
Telefonos.create({telefono: 1173669667})
*/