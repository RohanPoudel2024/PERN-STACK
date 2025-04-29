//book name table
//book price
//book author

//book genre
const bookTable = (sequelize,DataTypes)=>{
    //Creating table and its table columns
    const books = sequelize.define("books",{
        bookName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        bookPrice:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        bookAuthor:{
            type: DataTypes.STRING  // Fix typo: SRING → STRING
        },
        bookGenre:{
            type: DataTypes.STRING  // Fix typo: SRING → STRING
        }
    })
    return books;
}

module.exports = bookTable  // Fix typo: module.export → module.exports