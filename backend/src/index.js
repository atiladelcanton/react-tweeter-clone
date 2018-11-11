const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const server = require('http').Server(app)

const io = require('socket.io')(server)

mongoose.connect('mongodb://atilarampazo:ztascani1978@ds159273.mlab.com:59273/goweek-atilarampazo', { useNewUrlParser: true });


/**
 * Middleware para fornecer o socket.io para toda a aplicação
 */
app.use((req, res, next) => {
    req.io = io

    return next();
})
app.use(cors())
app.use(express.json());
app.use(require('./routes'))

server.listen(3000, () => {
    console.log(':) Server started')
})