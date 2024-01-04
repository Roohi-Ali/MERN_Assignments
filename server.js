const express = require('express')
const app =  express()
const PORT = 3000;

app.get('/',(req,res)=>{

    res.send('Hey')
})


const userRouter = require('./routes/users')
app.use('/users',userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on Port: http://localhost:${PORT}`)
});
