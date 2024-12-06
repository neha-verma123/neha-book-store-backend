
const bookService= require("../services/book.service")

module.exports = {
    addBook:async (req,res)=>{
        try{
           await bookService.addBook(req,res)
        }
        catch(error){
            console.log("error", error)
        }
    }
}