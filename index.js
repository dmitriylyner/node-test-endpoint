const API_PORT = 11100;

const express = require('express');
const http = require('http');
const cors = require('cors');


const app = express();
app.use(cors({ origin: true, credentials: true }));
app.options('*', cors());


const DELAY = 5000
app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Long API call response');
    }, DELAY);
});

const server = http.createServer(app);
server.listen(API_PORT, () => {
    const addressInfo = server.address();
    const host = addressInfo.address;
    const port = addressInfo.port;
    console.log(`API is listening at ${host}:${port}`);
});