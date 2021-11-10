const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(express.static(__dirname));
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

/*
app.get('/', function (req, res) {
    res.send('Hello from server')
})

app.listen(PORT, function () {
    console.log('Server running on localhost: '+PORT)
})
*/

// Serve only the static files form the dist directory
app.use(express.static('./dist/TreePuzzle'));

app.get('/*', (req, res) =>
    //res.sendFile('index.html', {root: 'dist/TreePuzzle/'}),
    res.sendFile(path.join(__dirname, './dist/TreePuzzle', 'index.html')),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);

module.exports = app;