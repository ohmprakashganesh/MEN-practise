
const express= require('express')
const app= express()

app.set("view engine", 'ejs')


//setting custom middle ware
app.use((req,res,next)=>{
    console.log('done')
    return next()
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/demo',(req,res)=>{
    res.send('demo route')
})
app.get('/profile',(req,res)=>{
    res.send('profile route')
})

app.listen(3000)