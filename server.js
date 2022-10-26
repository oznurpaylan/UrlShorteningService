const express = require('express');
const http = require('http');
const randomstring = require('randomstring');


const app = express();
const server = http.createServer(app);

app.post('/', async (req, res) => {
    const url = req.body;
    const code = randomstring.generate(7);
    const obj = { url, code};
    res.send(obj);
});

app.get('/:code', async (req, res) => {
    const code = req.params.code;
    res.redirect(code);
});
 console.log("server hazır")
server.listen(8000);