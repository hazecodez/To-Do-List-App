const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.use(express.static(path.join(__dirname,'css')))
app.get('/',(req,res)=>{
    res.render('index')
})
app.set('view engine','ejs')

app.listen(PORT,()=>{
    console.log(`LOCAL SERVER IS RUNNING ON ${PORT}`);
})