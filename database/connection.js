const {Sequelize,DataTypes} = require('sequelize');
let uri = process.env.URI;
const sequelize = new Sequelize(uri)

sequelize.authenticate().then(() => {
  console.log("Connected to database")
}).catch((err)=>{
  console.log("failed")
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db