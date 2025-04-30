const express = require('express')
const { books } = require('./database/connection')
const app = express()
require("./database/connection")
app.use(express.json())

app.get("/books",async(req,res)=>{
    //books is a object that hold data
    const datas = await books.findAll()
    res.json({
        message:"books fetched successfully",
        datas //or datas:datas this contains data of books.findAll()

    })
})

app.post("/books",async (req,res)=>{
    console.log(req.body)
    // const bookName = req.body.bookName
    // const bookPrice = req.body.bookPrice
  const{bookName,bookPrice,author,bookGenre}=req.body
  await books.create({
    //column name : value mentioned above
    bookName,
    bookPrice,
    bookAuthor:author,
    bookGenre
  })

    res.json({
        message:"Books updated successfully"
    })
})

app.listen(3000,()=>{
    console.log("server is running")
})
