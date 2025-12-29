const queryString=require('querystring');
function userDataSubmit(req, res) {
    let dataBody = []
    req.on('data', (chunks) => {
        dataBody.push(chunks);
    });
    req.on('end', () => {
                    let rawData = Buffer.concat(dataBody).toString();
                    let readableData=queryString.parse(rawData)
                    console.log(readableData);
                    let dataString="My name is "+readableData.name+" and my email id is "+readableData.email;
                    console.log(dataString);})
    res.write(`
        <h1>You can get data from userform here</h1>
        `)
}
module.exports = userDataSubmit;