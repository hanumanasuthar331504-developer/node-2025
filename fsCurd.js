const fs = require('fs');

console.log(process.argv)
const operation = process.argv[2];
if (operation == 'write') {
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName="files/"+name+".txt"
    fs.writeFileSync(fullName,content)
}else if (operation == 'update') {
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName="files/"+name+".text"
    let data=fs.appendFileSync(fullName,content);
    console.log(data)
}else if (operation == 'delete') {
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName="files/"+name+".text"
    let data=fs.unlinkSync(fullName);
    console.log(data)
}else{
    console.log("Operation not found")
}


// fs.writeFileSync('files/banana.text','This is a Fruite');

// fs.unlinkSync('files/banana.text')

// const data=fs.readFileSync('files/apple.text','utf-8');
// console.log(data)

// fs.appendFileSync('files/apple.text','and this is a good for health');