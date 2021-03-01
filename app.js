require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoDBErrors = require('mongoose-mongodb-errors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const api = require('./api/routes');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});



app.get('/', (req, res) => { res.send('Test-Taslk-API') });
app.use('/api', api);
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: error.status,
        message: error.message
        // stack: error.stack
    });
});


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Mongo Connected'));
mongoose.plugin(mongoDBErrors);
app.listen(process.env.PORT, () => console.log('Server started on: ' + process.env.PORT));


mongoose.Promise = global.Promise;
module.exports = app;




