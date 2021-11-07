const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

const PORT = 3000

app.use(bodyParser.json())
app.use(express.json())
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders:'Content-Type,Authorization,Origin, X-Requested-With, Accept'
}))


// Import Routes
const productsRoute = require('./routes/products')
const userRoute = require('./routes/users')

// Use Routes
app.use('/api/products', productsRoute);
app.use('/api/users', userRoute);

app.get('/', function (req, res) {
    res.send('Hello from server')
})

app.listen(PORT, function () {
    console.log('Server running on localhost: '+PORT)
})

module.exports = app;