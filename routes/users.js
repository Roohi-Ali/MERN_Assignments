
const express = require('express')
const router  =express.Router();

router.get('/:userid',(req,res)=>{
    const userid = req.params.userid;
    if (userid >=1 && userid <= 10){
        res.send(`User ID: ${userid} entered succesfully`)
    }
    res.send("Error");
})

router.get('/:userid/book/:bookid', (req,res)=>{
    const userid = req.params.userid;
    const bookid = req.params.bookid;
    const msg = userid >=1 && userid <=10 ? 
        bookid >=1 && bookid <= 100 ? 
            res.send(`Great BookID: ${bookid} for User: ${userid} is available`): 
            res.send(`Bookid: ${bookid} NOT available`) : 
        res.send("Error, User does not exist")
})

module.exports = router