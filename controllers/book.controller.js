
const bookService= require("../services/book.service")

module.exports = {   
    addBook:async (req,res)=>{
        try{
           await bookService.addBook(req,res)
        }
        catch(error){
            console.log("error", error)
        }
    },  
    listBook:async (req,res)=>{
        try{
           await bookService.listBook(req,res)
        }
        catch(error){
            console.log("error", error)
        }
    },   

    viewBook:async (req,res)=>{
        try{
           await bookService.viewBook(req,res)
        }
        catch(error){
            console.log("error", error)
        }
    },   
    editBook:async (req,res)=>{
        try{
           await bookService.editBook(req,res)
        }
        catch(error){
            console.log("error", error)
        }
    },
    deleteBook:async (req,res)=>{
        try{
           await bookService.deleteBook(req,res)
        }
        catch(error){
            console.log("error", error)
        }
    }
}