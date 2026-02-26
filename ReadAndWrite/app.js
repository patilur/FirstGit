const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
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
        }else{
            if(req.url='/read'){
                fs.readFile('formValues.txt',(err,data)=>{
                    console.log(data.toString());

                    res.end(`<h1>${data.toString()}</h1>`)
                })
            }
        }
    }
})


server.listen(3000, () => {
    console.log("server is runnning");
})
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("server is created");
//     const url = req.url;
//     const method = req.method;
//     //req.url,req.headers


//     if (url === '/') {
//         res.setHeader('Content-Type', 'text/html');

//         res.end(
//             `
//            <form action="/message" method="POST">
//                 <label>Name:</label>
//                 <input type='text' name='username'>
//                 <button type='submit'>Add</button>
//             </form>
//             `
//         );

//     } else {
//         if (req.url == '/message') {
//             res.setHeader('Content-Type', 'text/html');

//             let dataChunks = [];
//             req.on('data', (chunks) => {
//                 console.log(chunks);
//                 dataChunks.push(chunks);
//             })
//             req.on('end', () => {
//                 let combinedBuffer = Buffer.concat(dataChunks);
//                 console.log(combinedBuffer.toString());
//                 let values = combinedBuffer.toString().split("=");
//                 console.log(values);

//                 // res.statusCode = 302;
//                 // res.setHeader('Location', '/');
//                 // res.end();
//             })
//         }
//     }
// })


// server.listen(3000, () => {
//     console.log("server is runnning");
// })