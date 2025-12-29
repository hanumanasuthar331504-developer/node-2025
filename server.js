const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Hello this is hanuman suthar ki jai ho</h1>")
    resp.end("hello");
}).listen(4800);


const age=29;
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.write(`
        <html>
        <head>
        <title>Hanu nodejs</title>
        </head>
        <body>
        <h2>Hello mummy tum kaisi ho</h2>
        <h3>`+age+`</h3>
        <h3>`+new Date()+`</h3>
        </body>
        </html>
        `)
    resp.end();
    process.exit()
}).listen(5800);