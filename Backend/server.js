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

/*
// Serve only the static files form the dist directory
app.use(express.static('./dist/FreePuzzle'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/FreePuzzle/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
*/
module.exports = app;