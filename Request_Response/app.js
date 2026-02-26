const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("server is created");

    //req.url,req.headers
    res.setHeader('Content-Type','text/html');

    if(req.url=='/'){
        res.statusCode=200; //Ok
        res.end("<h1>Hello World</h1>")
    }else if(req.url=='/pizza'){
        res.statusCode=200; //Ok
        res.end("<h1>This is your pizza</h1>")
    }else{
        res.statusCode=404; //not found
        res.end("<h1>Page not found</h1>");
    }
})

let port=3000;
server.listen(port,()=>{
    console.log("server is runnning");
})