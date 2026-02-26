const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // HOME PAGE
    if (url === '/' && method === 'GET') {

        fs.readFile('message.txt', (err, data) => {

            const fileContent = err ? '' : data.toString();

            res.setHeader('Content-Type', 'text/html');
            res.end(`
            
            <p>${fileContent}</p>
                <form action="/message" method="POST">
                <label>Message:</label>
                <input type="text" name="message">
                <button type='submit'>Send</button>
                </form>

               
            `);
        });
    }

    // HANDLE FORM SUBMIT
    else if (url === '/message' && method === 'POST') {

        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const buffer = Buffer.concat(body);
            const formData = buffer.toString();
            const formValue = formData.split('=')[1];

            fs.writeFile('message.txt', formValue, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        });
    }

});

server.listen(3000, () => {
    console.log("server is running");
});