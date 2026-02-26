const fs = require('fs');
const routes = require('./routes');

const requestHandler = (req, res) => {
    console.log("server is created");
    const url = req.url;
    const method = req.method;
    //req.url,req.headers


    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');

        res.end(
            `
           <form action="/message" method="POST">
                <label>Name:</label>
                <input type='text' name='username'>
                <button type='submit'>Add</button>
            </form>
            `
        );

    } else {
        if (req.url == '/message') {
            res.setHeader('Content-Type', 'text/html');

            let body = [];
            req.on('data', (chunks) => {
                console.log(chunks);
                body.push(chunks);
            })
            req.on('end', () => {
                let buffer = Buffer.concat(body);
                console.log(buffer);

                let formData = buffer.toString();
                console.log(formData);

                let formvalues = formData.split("=")[1];
                fs.writeFile('formValues.txt', formvalues, (err) => {
                    res.statusCode = 302; //redirect
                    res.setHeader('Location', '/');
                    res.end();
                })


            })
        } else {
            if (req.url = '/read') {
                fs.readFile('formValues.txt', (err, data) => {
                    console.log(data.toString());

                    res.end(`<h1>${data.toString()}</h1>`)
                })
            }
        }
    }
}

const anotherFunction = () => {
    console.log("Another function");
}
//first way
// module.exports = { requestHandler,//anotherFunction, 
//     testFunction:anotherFunction };

//2nd
// module.exports.handler=requestHandler;
// module.exports.testFunction=anotherFunction;

//3rd
exports.handler=requestHandler;
exports.testFunction=anotherFunction;