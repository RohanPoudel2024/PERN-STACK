const {Sequelize,DataTypes} = require('sequelize');
const bookTable = require("../models/book.model.js")
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

db.books = bookTable(sequelize,DataTypes)

sequelize.sync({alter:false})
.then(()=>{
  console.log("Migrated")
})
module.exports = db