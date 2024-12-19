const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/about'){
        res.end("this si about")
    }
    if(req.url=='/profile'){
        res.end("this si profile")
    }
    if(req.url=='/'){
        res.end("this si home")
    }
    if(req.url=='/form'){
        res.render('index')
    }
    
})

server.listen(3000)

