// const morgan= require('morgan')
const express= require('express')
const app= express()
const dbconnection=require('./config/db')
const userModel=require('./models/user')




// app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//inbuilt middleware for post 



app.set("view engine", 'ejs')


//setting custom middle ware
app.use((req,res,next)=>{
    console.log('done')
    return next()
})

app.get('/register',(req,res)=>{
    res.render('register')
})
app.post('/register',async (req,res)=>{
    const {username,email,password}=req.body
    await userModel.create({
        username:username,
        email:email,
        password:password
    })

    console.log(req.body)
    res.send(req.body)
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/form',(req,res)=>{
    // console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.address)
    res.send("data posted")

})
app.get('/users',(req,res)=>{
    userModel.find({  username:'admin'}).then((users)=>{
     res.send(users)
    })
    
})
//to fetch only 1 function 

app.get('/user',(req,res)=>{
    userModel.findOne({
        username:'admin'
    })
    .then((users)=>{
        res.send(users)
    })
})

//update the user 
app.get('/update',async (req,res)=>{
   await userModel.findOneAndUpdate({
        username:'admin'
    },
{
    email:"updatedemail@gmail.com"
})
res.send("updated")
})

app.get('/delete',async (req,res)=>{
  await  userModel.findOneAndDelete({username:'admin'

    })
    res.send("user deleted successfully ")
    
})


app.listen(3000)