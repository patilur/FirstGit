const http = require('http');

const server = http.createServer((req, res) => {
    console.log("server is created");

    if (req.url === '/') {

        res.end(`<h1>Welcome home</h1>
        <h1>Welcome home</h1>
        <h1>Welcome home</h1>
        `);
    }
})

let port = 3000;
server.listen(port, () => {
    console.log("server is runnning");
})