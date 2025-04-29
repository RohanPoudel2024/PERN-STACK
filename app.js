const express = require('express')
const app = express()
require("./database/connection")

app.listen(3000,()=>{
    console.log("server is running")
})
