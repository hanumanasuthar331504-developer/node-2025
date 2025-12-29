const http = require('http');
const fs = require('fs');
const queryString=require('querystring');

http.createServer((req, res) => {
    fs.readFile('html/form.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('internal server error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        console.log(req.url)
        if (req.url == '/') {
            res.write(data);
        }
        else if (req.url == '/submit') {
            let dataBody = []
            req.on('data', (chunks) => {
                dataBody.push(chunks);
            });

            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData=queryString.parse(rawData)
                console.log(readableData);
                let dataString="My name is "+readableData.name+" and my email id is "+readableData.email;
                console.log(dataString);
                // fs.writeFileSync('text/'+readableData.name+'.txt',dataString);
                // console.log('file created')
                fs.writeFile('text/'+readableData.name+'.txt',dataString,'utf-8',(err)=>{
                    if (err){
                        console.log('internal server error');
                        return false;
                    }else{
                        console.log('file created')
                    }
                })
            })
            res.write('<h1>Data submitted</h1>')

        }
        res.end()

    })

}).listen(3200)


// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     console.log(req.url)
// if(req.url=='/'){
//         res.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name='name'/>
//         <input type="text" placeholder="enter email" name='email'/>
//         <button>Submit</button>
//         </form>
//         `);
// }
// else if(req.url=='/submit'){
//     res.write('<h1>Data submitted</h1>')
// }
//     res.end()
// }).listen(3200)