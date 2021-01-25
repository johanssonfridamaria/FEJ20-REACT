const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.port || 9999;
require('dotenv').config();

const serverURI = 'http://localhost:' + port;

app.listen(port, () => console.log('Webserver running at: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB'))