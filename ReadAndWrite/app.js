const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler)

//routes.anotherFunction();
routes.testFunction();

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