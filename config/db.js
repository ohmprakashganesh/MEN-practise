const mongoose=require('mongoose')

const connection= mongoose.connect('mongodb://0.0.0.0/expanse').then(()=>{
    console.log('connected to database ')
})

module.exports=connection